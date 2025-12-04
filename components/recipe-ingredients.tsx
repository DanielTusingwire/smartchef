"use client"

import { useState } from "react"
import { Check, Copy, MapPin } from "lucide-react"

interface RecipeIngredientsProps {
  ingredients: string[]
}

export function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setCheckedItems(newChecked)
  }

  const toggleAll = () => {
    if (checkedItems.size === ingredients.length) {
      setCheckedItems(new Set())
    } else {
      setCheckedItems(new Set(ingredients.map((_, i) => i)))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-end justify-between px-2">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Get Ingredients</h2>
          <p className="text-neutral-500 mt-1">Select the ingredients you have missing to view nearby store options or add to your list.</p>
        </div>
        <button
          onClick={toggleAll}
          className="text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 hover:text-neutral-700"
        >
          {checkedItems.size === ingredients.length ? "Deselect all" : "Select all"}
        </button>
      </div>

      {/* Ingredients Card */}
      <div className="bg-white rounded-3xl p-2 shadow-sm border border-neutral-100">
        <div className="space-y-1">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="flex-1">
                <p
                  className={`text-lg font-medium transition-all ${
                    checkedItems.has(index) ? "text-neutral-400 line-through" : "text-neutral-900"
                  }`}
                >
                  {ingredient}
                </p>
                {/* Optional: If we had quantity separate, it would go here. For now assuming string has it. */}
                {/* <p className="text-sm text-neutral-500">Quantity here</p> */}
              </div>

              {/* Checkbox */}
              <div
                className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${
                  checkedItems.has(index)
                    ? "bg-neutral-900 border-neutral-900"
                    : "border-neutral-200 group-hover:border-neutral-300"
                }`}
              >
                {checkedItems.has(index) && <Check className="w-5 h-5 text-white" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        <button
          onClick={() => {
            const ingredientsList = ingredients.join("\n")
            navigator.clipboard.writeText(ingredientsList)
          }}
          className="bg-white hover:bg-neutral-50 text-neutral-900 font-semibold py-3 px-6 rounded-full shadow-lg border border-neutral-200 flex items-center gap-2 transition-all"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
        <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all">
          <MapPin className="w-4 h-4" />
          Stores
        </button>
      </div>
    </div>
  )
}
