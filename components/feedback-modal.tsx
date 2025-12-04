"use client"

import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { cn } from "@/lib/utils"

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const submitFeedback = useMutation(api.mutations.submitFeedback)

  if (!isOpen) return null

  const ratings = [
    { value: 1, emoji: "😖", label: "Poor" },
    { value: 2, emoji: "🙁", label: "Bad" },
    { value: 3, emoji: "😐", label: "Okay" },
    { value: 4, emoji: "🙂", label: "Good" },
    { value: 5, emoji: "🤩", label: "Amazing" },
  ]

  const handleSubmit = async () => {
    if (!rating) return
    
    setIsSubmitting(true)
    try {
      await submitFeedback({
        rating,
        comment: comment.trim() || undefined,
      })
      // Show success message
      setShowSuccess(true)
      // Auto-close after 2 seconds
      setTimeout(() => {
        setRating(null)
        setComment("")
        setShowSuccess(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Failed to submit feedback:", error)
      alert("Failed to submit feedback. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {showSuccess ? (
          // Success Message
          <div className="text-center py-8">
            <div className="mb-4 text-6xl">✅</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank you!</h3>
            <p className="text-neutral-600 text-sm">Your feedback has been submitted successfully</p>
          </div>
        ) : (
          // Feedback Form
          <>
        <div className="text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">Enjoying Chef?</h2>
          <p className="text-neutral-500 text-xs sm:text-sm px-2 sm:px-4">
            Your feedback will help us improve to give you a better experience in future
          </p>
        </div>

        {/* Emojis */}
        <div className="flex justify-center gap-1 mb-1">
           {ratings.map((r) => (
             <button 
               key={r.value}
               onClick={() => setRating(r.value)}
               className={cn(
                 "text-3xl sm:text-4xl p-1.5 sm:p-2 transition-all duration-300 transform hover:scale-110 relative group",
                 rating === r.value ? "scale-110" : "grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
               )}
             >
               <span className="relative z-10">{r.emoji}</span>
               {rating === r.value && (
                 <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full z-0" />
               )}
             </button>
           ))}
        </div>
        
        {/* Label */}
        <div className="text-center h-5 sm:h-6 mb-6 sm:mb-8 font-bold text-neutral-900 text-base sm:text-lg">
          {rating ? ratings.find(r => r.value === rating)?.label : ""}
        </div>

        {/* Textarea */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Why this experience? You can leave it empty"
          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-3 sm:p-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none h-28 sm:h-32 mb-6 sm:mb-8 text-sm sm:text-base"
        />

        {/* Button */}
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting || !rating}
          className="w-full bg-neutral-900 text-white font-bold py-3.5 sm:py-4 rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {isSubmitting ? "Sending..." : "Send Feedback"}
        </button>

        </>
        )}
      </div>
    </div>
  )
}
