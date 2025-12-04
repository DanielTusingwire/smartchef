Product Requirements Document (PRD)

Project Name: ChefGemini (YesCheff Clone) Version: 1.0 (MVP) Status: Ready for Development Date: December 3, 2025
1. Executive Summary

ChefGemini is a minimalist web utility that converts YouTube cooking videos or unstructured culinary text into clean, structured recipe cards. Problem: Cooking from video is difficult (constant pausing/rewinding) and blog posts are cluttered with ads and life stories. Solution: A distraction-free interface that uses Google Gemini AI to extract ingredients and instructions into a standardized, easy-to-read format.
2. User Flow

    Landing: User arrives at a clean homepage with a prominent input field.

    Input: User pastes a YouTube URL or a block of text.

    Action: User clicks "Generate Recipe."

    Processing: A loading state appears ("Chef is watching the video...").

    Result: The UI updates to display a structured Recipe Card (Title, Time, Ingredients, Steps).

    Interaction: User can check off ingredients as they shop/prep.

3. Functional Requirements
3.1 Input Module

    YouTube Input:

        Must accept standard YouTube URLs (e.g., youtube.com/watch?v=...) and Short URLs (youtu.be/...).

        Validation: Ensure the link is a valid YouTube video.

    Text Input:

        A secondary tab or mode to paste unstructured text (e.g., a messy blog post or a transcript).

3.2 Processing Module (The "Brain")

    Transcript Extraction:

        System must fetch the transcript/subtitles from the provided YouTube video.

        Library: youtube-transcript (Node.js).

    AI Processing:

        Model: Google Gemini 1.5 Flash (chosen for speed and low cost).

        System Prompt: Must enforce a strict JSON output containing: title, description, prep_time, servings, ingredients (array), instructions (array).

3.3 Output Module (The Recipe Card)

    Display:

        Title: Bold, large at the top.

        Metadata: Prep time and Serving size displayed in distinct "chips" or tags.

        Ingredients: A vertical list with interactive checkboxes.

        Instructions: A numbered list. Steps should be separated by whitespace for readability.

    Error Handling:

        If the video has no captions: Display "Unable to extract recipe (No captions found)."

        If the video is not about food: Gemini should detect this and return an error message "This does not appear to be a cooking video."

4. Design System & UI Specifications (YesCheff Style)

This section dictates the "Exact Look" you requested.
4.1 Visual Identity (Utilitarian Minimalist)

    Typography:

        Primary Font: Inter or Geist Sans.

        Headings: font-weight: 600, Color: #171717 (Neutral-900).

        Body: font-weight: 400, Color: #525252 (Neutral-600).


4.2 Layout Architecture

    Container: max-width: 800px centered on the screen.

    Whitespace: Generous padding (p-8 or p-12) to mimic a clean document or high-end menu.

    Mobile Responsiveness:

        On Mobile: Padding reduces to p-4. Font sizes scale down slightly.

5. Technical Architecture
5.1 Tech Stack

    Frontend: Next.js 14/15 (App Router).

    Styling: Tailwind CSS.

    Backend/API: convex.

    AI Provider: Google Generative AI SDK (@google/generative-ai).

    Utilities: lucide-react (for icons like clocks, bowls, clipboards).

5.2 Data Schema (JSON Output from Gemini)

The AI must return data in this exact structure to ensure the UI doesn't break:

```json
{
  "recipe_name": "string",
  "summary": "string",
  "prep_time": "string",
  "servings": "string",
  "ingredients": ["string", "string"],
  "instructions": ["string", "string"]
}
```

**Note:** `ingredients` and `instructions` must be simple arrays of strings. The frontend handles checkbox state locally.