"use client";

import { useState, useEffect } from "react";
import { X, MapPin, Navigation, Phone, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface Store {
  id: string;
  name: string;
  distance: number;
  phone?: string;
  address: string;
  lat: number;
  lng: number;
}

interface StoreFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  missingItems?: string[];
}

// Function to fetch nearby stores from Overpass API
async function fetchNearbyStores(
  lat: number,
  lng: number,
  radiusKm: number = 5
): Promise<Store[]> {
  const radiusMeters = radiusKm * 1000;

  // Overpass API query for supermarkets, grocery stores, and convenience stores
  const query = `
    [out:json][timeout:25];
    (
      node["shop"="supermarket"](around:${radiusMeters},${lat},${lng});
      node["shop"="convenience"](around:${radiusMeters},${lat},${lng});
      node["shop"="grocery"](around:${radiusMeters},${lat},${lng});
      way["shop"="supermarket"](around:${radiusMeters},${lat},${lng});
      way["shop"="convenience"](around:${radiusMeters},${lat},${lng});
      way["shop"="grocery"](around:${radiusMeters},${lat},${lng});
    );
    out center;
  `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch stores");
    }

    const data = await response.json();

    // Process and format the results
    const stores: Store[] = data.elements
      .map((element: any) => {
        const storeLat = element.lat || element.center?.lat;
        const storeLng = element.lon || element.center?.lon;

        if (!storeLat || !storeLng) return null;

        // Calculate distance
        const distance = calculateDistance(lat, lng, storeLat, storeLng);

        return {
          id: element.id.toString(),
          name: element.tags?.name || element.tags?.brand || "Unnamed Store",
          distance,
          phone: element.tags?.phone || element.tags?.["contact:phone"],
          address: formatAddress(element.tags),
          lat: storeLat,
          lng: storeLng,
        };
      })
      .filter((store: Store | null) => store !== null)
      .sort((a: Store, b: Store) => a.distance - b.distance)
      .slice(0, 20); // Limit to 20 nearest stores

    return stores;
  } catch (error) {
    console.error("Error fetching stores:", error);
    return [];
  }
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Format address from OSM tags
function formatAddress(tags: any): string {
  const parts = [];
  if (tags?.["addr:street"]) parts.push(tags["addr:street"]);
  if (tags?.["addr:city"]) parts.push(tags["addr:city"]);
  if (tags?.["addr:suburb"]) parts.push(tags["addr:suburb"]);

  return parts.length > 0 ? parts.join(", ") : "Address not available";
}

// Format distance for display
function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  return `${km.toFixed(1)}km`;
}

export function StoreFinderModal({
  isOpen,
  onClose,
  missingItems = [],
}: StoreFinderModalProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    if (typeof window !== "undefined") {
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }
  }, []);

  // Get user's location and fetch nearby stores
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);

          // Fetch nearby stores
          const nearbyStores = await fetchNearbyStores(
            location.lat,
            location.lng
          );
          setStores(nearbyStores);
          setLoading(false);
        },
        async (error) => {
          console.error("Error getting location:", error);
          // Default to Kampala center if location access denied
          const defaultLocation = { lat: 0.3476, lng: 32.5825 };
          setUserLocation(defaultLocation);

          const nearbyStores = await fetchNearbyStores(
            defaultLocation.lat,
            defaultLocation.lng
          );
          setStores(nearbyStores);
          setLoading(false);
        }
      );
    }
  }, [isOpen]);

  const itemCount = missingItems.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            animate={isDesktop ? { opacity: 1, scale: 1 } : { y: 0 }}
            exit={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed z-[101] bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden flex flex-col",
              isDesktop
                ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl rounded-3xl max-h-[85vh]"
                : "bottom-0 left-0 right-0 rounded-t-[2.5rem] max-h-[85vh]"
            )}
            drag={!isDesktop ? "y" : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (!isDesktop && info.offset.y > 100) {
                onClose();
              }
            }}
          >
            {/* Mobile Drag Handle */}
            {!isDesktop && (
              <div className="w-full flex justify-center pt-4 pb-2 bg-white dark:bg-neutral-900">
                <div className="w-12 h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
              </div>
            )}

            {/* Header */}
            <div
              className={cn(
                "bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 sticky top-0 z-10",
                isDesktop ? "p-6" : "px-6 pb-4 pt-2"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Nearby Stores
                  </h2>
                  {loading ? (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      Finding stores near you...
                    </p>
                  ) : (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {stores.length} store{stores.length !== 1 ? "s" : ""}{" "}
                      found
                      {itemCount > 0 &&
                        ` • ${itemCount} item${itemCount !== 1 ? "s" : ""} to find`}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                </button>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowMap(false)}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-colors",
                    !showMap
                      ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  )}
                >
                  List View
                </button>
                <button
                  onClick={() => setShowMap(true)}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-colors",
                    showMap
                      ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  )}
                >
                  Map View
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {loading ? (
                // Loading State
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Searching for nearby stores...
                    </p>
                  </div>
                </div>
              ) : stores.length === 0 ? (
                // No Stores Found
                <div className="h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      No stores found nearby
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Try enabling location access or check back later
                    </p>
                  </div>
                </div>
              ) : showMap ? (
                // Map View
                <div className="h-full w-full relative">
                  {isClient && userLocation && (
                    <MapContainer
                      center={[userLocation.lat, userLocation.lng]}
                      zoom={13}
                      className="h-full w-full"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />

                      {/* User Location Marker */}
                      {userLocation && (
                        <Marker position={[userLocation.lat, userLocation.lng]}>
                          <Popup>
                            <div className="text-center">
                              <p className="font-semibold">Your Location</p>
                            </div>
                          </Popup>
                        </Marker>
                      )}

                      {/* Store Markers */}
                      {stores.map((store) => (
                        <Marker
                          key={store.id}
                          position={[store.lat, store.lng]}
                        >
                          <Popup>
                            <div className="min-w-[200px]">
                              <h3 className="font-bold text-base mb-1">
                                {store.name}
                              </h3>
                              <p className="text-sm text-neutral-600 mb-1">
                                {store.address}
                              </p>
                              <p className="text-sm text-neutral-500 mb-2">
                                {formatDistance(store.distance)}
                              </p>
                              {store.phone && (
                                <a
                                  href={`tel:${store.phone}`}
                                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                  <Phone className="w-3 h-3" />
                                  {store.phone}
                                </a>
                              )}
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  )}
                </div>
              ) : (
                // List View
                <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar h-full">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      className="flex items-start justify-between p-4 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-2xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
                          {store.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm flex-wrap">
                          <span className="text-neutral-500 dark:text-neutral-400">
                            {formatDistance(store.distance)}
                          </span>
                          {store.phone && (
                            <>
                              <span className="text-neutral-300 dark:text-neutral-600">
                                •
                              </span>
                              <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-md font-medium">
                                {store.phone}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {store.address}
                        </p>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <button
                          className="p-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full transition-colors text-neutral-900 dark:text-neutral-100"
                          onClick={() =>
                            window.open(
                              `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`,
                              "_blank"
                            )
                          }
                          title="Get directions"
                        >
                          <Navigation className="w-5 h-5" />
                        </button>
                        {store.phone && (
                          <a
                            href={`tel:${store.phone}`}
                            className="p-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full transition-colors text-neutral-900 dark:text-neutral-100"
                            title="Call store"
                          >
                            <Phone className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Padding for Mobile */}
            {!isDesktop && <div className="h-8 shrink-0" />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
