"use client"

import { useState } from "react"
import { RecipeIngredients } from "@/components/recipe-ingredients"
import { RecipeInstructions } from "@/components/recipe-instructions"

interface Recipe {
  recipe_name: string
  summary: string
  prep_time: string
  servings: string
  ingredients: string[]
  instructions: string[]
}

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "instructions">("ingredients")

  if (!recipe) {
    return null
  }

  const handleShare = async () => {
    const shareText = `Check out this recipe: ${recipe.recipe_name}\n\n${recipe.summary}\n\nPrep time: ${recipe.prep_time}\nServings: ${recipe.servings}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.recipe_name,
          text: shareText,
        })
      } catch (err) {
        console.log("Share cancelled")
      }
    } else {
      navigator.clipboard.writeText(shareText)
      alert("Recipe copied to clipboard!")
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Recipe header with image placeholder */}
      <div className="rounded-lg overflow-hidden bg-muted mb-8 aspect-video flex items-center justify-center shadow-sm">
        <img src="/placeholder.svg?key=c9mxv" alt={recipe.recipe_name} className="w-full h-full object-cover" />
      </div>

      {/* Recipe title with share button */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">{recipe.recipe_name}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{recipe.summary}</p>
        </div>
        <button
          onClick={handleShare}
          className="flex-shrink-0 p-3 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground text-2xl"
          aria-label="Share recipe"
        >
          ↗
        </button>
      </div>

      {/* Metadata chips */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="bg-muted px-4 py-3 rounded-lg flex items-center gap-2">
          <span className="text-lg">⏱</span>
          <div>
            <p className="text-sm text-muted-foreground">Prep time</p>
            <p className="font-semibold text-foreground">{recipe.prep_time}</p>
          </div>
        </div>
        <div className="bg-muted px-4 py-3 rounded-lg flex items-center gap-2">
          <span className="text-lg">👥</span>
          <div>
            <p className="text-sm text-muted-foreground">Servings</p>
            <p className="font-semibold text-foreground">{recipe.servings}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mb-8">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`pb-4 font-semibold transition-colors ${
              activeTab === "ingredients"
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Ingredients
          </button>
          <button
            onClick={() => setActiveTab("instructions")}
            className={`pb-4 font-semibold transition-colors ${
              activeTab === "instructions"
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Directions
          </button>
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "ingredients" && <RecipeIngredients ingredients={recipe.ingredients} />}
      {activeTab === "instructions" && <RecipeInstructions instructions={recipe.instructions} />}

      {/* Call to action */}
      <div className="mt-12 pt-8 border-t border-border">
        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-full transition-colors">
          Start Cooking
        </button>
      </div>
    </div>
  )
}
