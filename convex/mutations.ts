import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const submitFeedback = mutation({
    args: {
        rating: v.number(),
        comment: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const feedbackId = await ctx.db.insert("feedback", {
            rating: args.rating,
            comment: args.comment,
            timestamp: Date.now(),
        })
        return feedbackId
    },
})
