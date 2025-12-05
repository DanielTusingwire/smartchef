"use client"

import { useState } from "react"
import { MoreVertical, MessageSquare, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
    onFeedbackClick: () => void
}

export function MobileMenu({ onFeedbackClick }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    const isDark = theme === "dark"

    const handleThemeToggle = () => {
        setTheme(isDark ? "light" : "dark")
        setIsOpen(false)
    }

    const handleFeedback = () => {
        onFeedbackClick()
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                aria-label="More options"
            >
                <MoreVertical className="w-5 h-5" />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50">
                        <button
                            onClick={handleFeedback}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <MessageSquare className="w-4 h-4" />
                            Feedback
                        </button>

                        <button
                            onClick={handleThemeToggle}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border-t border-neutral-200 dark:border-neutral-700"
                        >
                            {isDark ? (
                                <>
                                    <Sun className="w-4 h-4" />
                                    Light mode
                                </>
                            ) : (
                                <>
                                    <Moon className="w-4 h-4" />
                                    Dark mode
                                </>
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
