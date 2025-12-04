"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { ScrollAwareHeader } from "@/components/scroll-aware-header"
import { cn } from "@/lib/utils"

interface RecipeOverviewProps {
  recipe: {
    recipe_name: string
    summary: string
    prep_time: string
    servings: string
    image?: string
    nutritional_info?: {
      calories: string
      fat?: string
      carbs?: string
      protein?: string
    }
    tools?: string[]
    allergens?: string[]
    image_keywords?: string
    youtube_thumbnail?: string
  }
  onStartCooking: () => void
  onBack: () => void
}

export function RecipeOverview({ recipe, onStartCooking, onBack }: RecipeOverviewProps) {
  const originalServings = Number.parseInt(recipe.servings) || 4
  const [currentServings, setCurrentServings] = useState(originalServings)
  const [imageLoaded, setImageLoaded] = useState(false)

  const servingsMultiplier = currentServings / originalServings

  const decreaseServings = () => {
    setCurrentServings(Math.max(1, currentServings - 1))
  }

  const increaseServings = () => {
    setCurrentServings(currentServings + 1)
  }

  // Calculate adjusted calories based on servings
  const adjustedCalories = recipe.nutritional_info?.calories
    ? Math.round(Number.parseInt(recipe.nutritional_info.calories) * servingsMultiplier)
    : null

  // Determine which image to use: YouTube thumbnail or AI-generated
  const imageUrl = recipe.youtube_thumbnail 
    ? recipe.youtube_thumbnail
    : `https://pollinations.ai/p/${encodeURIComponent(recipe.image_keywords || recipe.recipe_name)}?width=1280&height=720&seed=42&model=flux`

  return (
    <div className="min-h-screen bg-neutral-100">
      <ScrollAwareHeader 
        maxWidth="max-w-4xl"
        rightContent={
          <button 
            onClick={onBack}
            className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        }
      />

      {/* Main Content Container */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-24">
        {/* Hero Image */}
        <div className="w-full aspect-video bg-neutral-100 rounded-3xl overflow-hidden mb-8 shadow-sm relative">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 z-10">
              <img 
                src="/loadLogo.png" 
                alt="Loading..." 
                className="w-20 h-20 animate-spin object-contain" 
              />
            </div>
          )}
          <img
            src={imageUrl}
            alt={recipe.recipe_name}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {/* Title and Link */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground">{recipe.recipe_name}</h1>
            <button className="text-2xl text-muted-foreground hover:text-foreground transition-colors">🔗</button>
          </div>
        </div>

        {/* Description */}
        {/* Summary Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 mb-8">
          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{recipe.summary}</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-neutral-100 px-4 py-4 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">Cooking time</p>
              <p className="font-semibold text-foreground text-lg">{recipe.prep_time}</p>
            </div>
            <div className="bg-neutral-100 px-4 py-4 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">Servings</p>
              <p className="font-semibold text-foreground text-lg">{currentServings}</p>
            </div>
            {adjustedCalories && (
              <div className="bg-neutral-100 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Calories</p>
                <p className="font-semibold text-foreground text-lg">{adjustedCalories} kcal</p>
              </div>
            )}
          </div>

          {/* Serving Adjuster */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={decreaseServings}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors"
            >
              −
            </button>
            <span className="text-lg font-semibold text-foreground">Cooking for {currentServings}</span>
            <button
              onClick={increaseServings}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Things to Note Section */}
        {/* Things to Note Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 pl-2">Things to note</h2>

          <div className="bg-white rounded-3xl p-5 sm:p-6">
            {/* Tools */}
            {recipe.tools && recipe.tools.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-neutral-100 rounded-xl text-sm text-foreground font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            {recipe.allergens && recipe.allergens.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-foreground">Potential Allergens</h3>
                  <span className="text-muted-foreground cursor-help" title="Allergen information">ⓘ</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recipe.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-sm font-medium border border-yellow-100"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Start Cooking Button */}
        {/* Floating Start Cooking Button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <button
            onClick={onStartCooking}
            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-full shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <span>Start Cooking</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
