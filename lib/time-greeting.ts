export function getTimeBasedGreeting(): {
  greeting: string
  placeholder: string
  mealType: "breakfast" | "lunch" | "dinner"
} {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return {
      greeting: "Good morning, Cheff!",
      placeholder: "What are you making for breakfast?",
      mealType: "breakfast",
    }
  } else if (hour >= 12 && hour < 17) {
    return {
      greeting: "Good afternoon, Chef!",
      placeholder: "What are you making for lunch?",
      mealType: "lunch",
    }
  } else {
    return {
      greeting: "Good evening, Cheff!",
      placeholder: "What are you making for dinner?",
      mealType: "dinner",
    }
  }
}
