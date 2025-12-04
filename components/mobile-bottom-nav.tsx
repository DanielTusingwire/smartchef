"use client";

import { cn } from "@/lib/utils";
import { ChefHat, List, Mic, MicOff } from "lucide-react";

interface MobileBottomNavProps {
  activeTab: "ingredients" | "directions";
  onTabChange: (tab: "ingredients" | "directions") => void;
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
  isScrollingDown: boolean;
  isVoiceListening: boolean;
  isVoiceSupported: boolean;
  onVoiceToggle: () => void;
}

export function MobileBottomNav({
  activeTab,
  onTabChange,
  currentStep,
  totalSteps,
  progressPercentage,
  isScrollingDown,
  isVoiceListening,
  isVoiceSupported,
  onVoiceToggle,
}: MobileBottomNavProps) {
  return (
    <>
      {/* Floating/Docked Voice Button */}
      {isVoiceSupported && (
        <button
          onClick={onVoiceToggle}
          className={cn(
            "md:hidden fixed z-[60] transition-all duration-500 ease-in-out flex flex-col items-center justify-center rounded-full shadow-xl active:scale-95 text-white overflow-hidden w-16 h-16",
            isScrollingDown
              ? "bottom-8 right-6 bg-neutral-900 border-0" // Floating: Lowered to bottom-8 (32px)
              : "bottom-5 left-1/2 -translate-x-1/2 border-4 border-gray-50 bg-neutral-900", // Docked
            isVoiceListening &&
              "bg-red-500 animate-pulse ring-4 ring-red-200 border-red-100"
          )}
        >
          {isVoiceListening ? (
            <MicOff className="w-7 h-7" />
          ) : (
            <Mic className="w-7 h-7" />
          )}
        </button>
      )}

      {/* Navigation Bar Container */}
      <div
        className={cn(
          "md:hidden fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex flex-col",
          isScrollingDown ? "translate-y-[150%]" : "translate-y-0",
          "bottom-0"
        )}
      >
        {/* Progress Bar - Only show on directions tab */}
        {activeTab === "directions" && (
          <div className="w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200">
            <div className="h-1 w-full bg-neutral-100">
              <div
                className="h-full bg-neutral-900 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="px-4 py-1.5 flex justify-between text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
              <span>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span>{progressPercentage}%</span>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div
          className={cn(
            "bg-white/80 backdrop-blur-xl border-t border-neutral-200 pb-[env(safe-area-inset-bottom)]",
            activeTab !== "directions" &&
              "shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
          )}
        >
          <div className="flex items-center justify-between px-8 py-3">
            {/* Ingredients Tab */}
            <button
              onClick={() => onTabChange("ingredients")}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]",
                activeTab === "ingredients"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              <List
                className={cn(
                  "w-6 h-6",
                  activeTab === "ingredients" && "stroke-[2.5px]"
                )}
              />
              <span className="text-[10px] font-bold">Ingredients</span>
            </button>

            {/* Spacer for docked mic button */}
            <div className="w-16" />

            {/* Directions Tab */}
            <button
              onClick={() => onTabChange("directions")}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]",
                activeTab === "directions"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              <ChefHat
                className={cn(
                  "w-6 h-6",
                  activeTab === "directions" && "stroke-[2.5px]"
                )}
              />
              <span className="text-[10px] font-bold">Directions</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
