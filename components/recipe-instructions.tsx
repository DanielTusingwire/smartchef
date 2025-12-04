"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface RecipeInstructionsProps {
  instructions: string[]
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"))
          setActiveStep(index)
        }
      })
    }, observerOptions)

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [instructions])

  const progress = ((activeStep + 1) / instructions.length) * 100

  return (
    <div className="relative pb-32">
      <div className="space-y-6">
        {instructions.map((instruction, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            data-index={index}
            className={cn(
              "bg-white rounded-3xl p-8 transition-all duration-500 ease-in-out border border-transparent",
              activeStep === index
                ? "opacity-100 scale-100 shadow-xl border-neutral-100"
                : "opacity-50 scale-95 grayscale"
            )}
          >
            <div className="space-y-4">
              {/* Step Header */}
              <div className="flex items-center gap-2">
                <div className="bg-neutral-100 px-3 py-1 rounded-lg flex items-center gap-2">
                  <span className="font-bold text-neutral-900">Step {index + 1}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </div>
              </div>

              {/* Instruction Text */}
              <p
                className={cn(
                  "text-2xl sm:text-3xl font-medium leading-tight transition-colors duration-500",
                  activeStep === index ? "text-neutral-900" : "text-neutral-400"
                )}
              >
                {instruction}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-2xl rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
             <span className="text-sm font-semibold text-neutral-900">
               Step {activeStep + 1} <span className="text-neutral-400">of {instructions.length}</span>
             </span>
             <span className="text-xs font-bold text-neutral-900">{Math.round(progress)}%</span>
          </div>
          
          {/* Segmented Progress Bar */}
          <div className="flex gap-1 h-2">
            {instructions.map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "h-full flex-1 rounded-full transition-all duration-300",
                  i <= activeStep ? "bg-neutral-900" : "bg-neutral-100"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
