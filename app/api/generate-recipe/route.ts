import { type NextRequest, NextResponse } from "next/server"

async function generateRecipeFromInput(input: string, inputType: "youtube" | "text"): Promise<any> {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Validate inputs
  if (inputType === "youtube") {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\//
    if (!youtubeRegex.test(input)) {
      return {
        error: "Invalid YouTube URL. Please provide a valid YouTube link.",
      }
    }
  }

  if (inputType === "text" && input.length < 50) {
    return {
      error: "Recipe text is too short. Please provide more details.",
    }
  }

  // Mock database of recipes with enhanced data
  const mockRecipes: Record<string, any> = {
    pizza: {
      recipe_name: "Homemade Pizza",
      summary:
        "A delicious homemade pizza made using either a gas cooker or oven method, with a variety of toppings and a homemade sauce.",
      prep_time: "60 minutes",
      servings: "6 servings",
      image: "/pizza-baking-oven.jpg",
      nutritional_info: {
        calories: "600 kcal",
        fat: "18g",
        carbs: "75g",
        protein: "22g",
      },
      tools: ["large mixing bowl", "flat surface", "frying pan", "blender", "rolling pin", "pan", "oven", "pizza tray"],
      allergens: ["gluten", "dairy", "egg"],
      ingredients: [
        "2 cups all-purpose flour",
        "1 packet instant yeast",
        "1 tablespoon granulated white sugar",
        "1 teaspoon salt",
        "1 egg",
        "1 cup warm milk",
        "2 tablespoons olive oil",
        "1 cup tomato sauce",
        "2 cups mozzarella cheese",
        "Toppings: pepperoni, mushrooms, bell peppers, olives",
      ],
      instructions: [
        "Mix all-purpose flour, instant yeast, granulated white sugar, and salt in a large mixing bowl. Make a hole in the center, add the egg, and mix again. Add warm milk and mix until combined.",
        "Knead the dough for 10 minutes until smooth and elastic. Let rise for 1 hour in a warm place covered with a damp cloth.",
        "Preheat oven to 475°F (245°C) for at least 20 minutes.",
        "Roll out dough to desired thickness on a floured surface. Transfer to a lightly oiled pizza pan or baking sheet.",
        "Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
        "Add desired toppings and sprinkle mozzarella cheese over everything.",
        "Bake for 15-20 minutes until crust is golden brown and cheese is melted and slightly bubbly.",
        "Remove from oven, let cool for 2 minutes, slice, and serve hot.",
      ],
    },
    pasta: {
      recipe_name: "Classic Carbonara",
      summary: "Traditional Italian carbonara with eggs, cheese, pancetta, and black pepper. Simple yet elegant.",
      prep_time: "20 minutes",
      servings: "2 servings",
      image: "/pasta-carbonara.png",
      nutritional_info: {
        calories: "520 kcal",
        fat: "28g",
        carbs: "42g",
        protein: "26g",
      },
      tools: ["large pot", "skillet", "colander", "whisk", "serving spoon"],
      allergens: ["eggs", "dairy", "gluten"],
      ingredients: [
        "8 oz spaghetti or egg noodles",
        "4 oz pancetta or bacon, diced",
        "3 egg yolks",
        "1 whole egg",
        "1 cup Pecorino Romano cheese, grated",
        "Black pepper to taste",
        "Salt for pasta water",
      ],
      instructions: [
        "Bring a large pot of salted water to a boil. Add pasta and cook until al dente, about 8-10 minutes.",
        "While pasta cooks, fry pancetta in a large skillet over medium-high heat until crispy, about 5 minutes. Remove from heat.",
        "In a bowl, whisk together egg yolks, whole egg, cheese, and plenty of black pepper.",
        "Reserve 1 cup of pasta cooking water, then drain the pasta.",
        "Add hot pasta to the skillet with pancetta. Remove from heat.",
        "Pour egg mixture over pasta and toss quickly, adding pasta water a bit at a time to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper.",
      ],
    },
    salad: {
      recipe_name: "Mediterranean Salad",
      summary:
        "Fresh and vibrant salad with tomatoes, cucumbers, feta cheese, olives, and a simple olive oil dressing.",
      prep_time: "15 minutes",
      servings: "4 servings",
      image: "/mediterranean-salad-fresh.jpg",
      nutritional_info: {
        calories: "280 kcal",
        fat: "22g",
        carbs: "18g",
        protein: "8g",
      },
      tools: ["large mixing bowl", "small bowl", "cutting board", "knife", "whisk"],
      allergens: ["dairy"],
      ingredients: [
        "2 large tomatoes, diced",
        "1 cucumber, diced",
        "1 red onion, thinly sliced",
        "1 cup kalamata olives",
        "8 oz feta cheese, cubed",
        "1/4 cup fresh parsley, chopped",
        "1/4 cup olive oil",
        "2 tablespoons red wine vinegar",
        "Salt and pepper to taste",
        "Oregano, dried",
      ],
      instructions: [
        "Combine tomatoes, cucumber, red onion, olives, and feta in a large bowl.",
        "In a small bowl, whisk together olive oil, red wine vinegar, salt, pepper, and oregano.",
        "Pour dressing over salad and toss gently to combine.",
        "Top with fresh parsley.",
        "Let sit for 10 minutes before serving to allow flavors to meld.",
        "Serve chilled or at room temperature.",
      ],
    },
    pancakes: {
      recipe_name: "Fluffy Pancakes",
      summary: "Classic fluffy pancakes perfect for breakfast, topped with syrup and butter.",
      prep_time: "15 minutes",
      servings: "2-3 servings",
      image: "/fluffy-pancakes-breakfast.jpg",
      nutritional_info: {
        calories: "350 kcal",
        fat: "12g",
        carbs: "52g",
        protein: "6g",
      },
      tools: ["mixing bowl", "whisk", "griddle", "spatula", "measuring cups", "measuring spoons"],
      allergens: ["eggs", "dairy", "gluten"],
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "3 1/2 teaspoons baking powder",
        "1 teaspoon salt",
        "1 tablespoon granulated sugar",
        "1 1/4 cups milk",
        "1 egg",
        "3 tablespoons butter, melted",
        "Butter for griddle",
        "Maple syrup",
      ],
      instructions: [
        "Mix flour, baking powder, salt, and sugar in a bowl.",
        "In another bowl, whisk milk, egg, and melted butter together.",
        "Combine wet and dry ingredients until just mixed; batter should be slightly lumpy.",
        "Heat a griddle or skillet over medium heat and lightly butter it.",
        "Pour 1/4 cup batter onto griddle for each pancake. Cook for 2 minutes.",
        "Cook other side until golden brown, about 1-2 minutes.",
        "Serve hot with butter and maple syrup.",
      ],
    },
  }

  // Search for matching recipe
  const searchTerm = input.toLowerCase()
  for (const [key, recipe] of Object.entries(mockRecipes)) {
    if (searchTerm.includes(key)) {
      return recipe
    }
  }

  // Default to pizza if no match found
  return mockRecipes.pizza
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { input, inputType } = body

    if (!input || !inputType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!["youtube", "text"].includes(inputType)) {
      return NextResponse.json({ error: "Invalid input type" }, { status: 400 })
    }

    const recipe = await generateRecipeFromInput(input, inputType)

    if (recipe.error) {
      return NextResponse.json({ error: recipe.error }, { status: 400 })
    }

    return NextResponse.json(recipe)
  } catch (error) {
    console.error("Error generating recipe:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
