"use client";

import { useState, useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PWAUpdateToast() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [wb, setWB] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Load workbox-window dynamically to avoid server-side issues
      import("workbox-window").then(({ Workbox }) => {
        const wb = new Workbox("/sw.js", { type: "module" });

        // Add event listeners to detect waiting state
        wb.addEventListener("waiting", () => {
          setShowUpdate(true);
          setWB(wb);
        });

        // Also check if there's already a waiting worker on load
        wb.addEventListener("installed", (event) => {
          if (event.isUpdate) {
            setShowUpdate(true);
            setWB(wb);
          }
        });

        wb.register();
      });
    }
  }, []);

  const handleUpdate = () => {
    if (wb) {
      // Send skipWaiting message to the waiting service worker
      wb.messageSkipWaiting();

      // Once the service worker takes control (activated), reload the page
      wb.addEventListener("controlling", () => {
        window.location.reload();
      });
    }
  };

  return (
    <AnimatePresence>
      {showUpdate && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[100] bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4"
        >
          <div className="flex flex-col">
            <span className="font-bold text-sm">New Version Available</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              Refresh to get the latest features.
            </span>
          </div>

          <button
            onClick={handleUpdate}
            className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <RefreshCw className="w-4 h-4" />
            Update
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
