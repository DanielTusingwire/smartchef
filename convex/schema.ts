import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    feedback: defineTable({
        rating: v.number(),
        comment: v.optional(v.string()),
        timestamp: v.number(),
    }),
})
