# Deployment Guide: Chef Gemini Clone

Follow this step-by-step guide to deploy your app to Vercel.

## Prerequisites

1.  **GitHub Account**: Ensure your project is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
3.  **Convex Account**: You should already be logged in via `npx convex dev`.

## Step 1: Push to GitHub

If you haven't already, commit your changes and push to GitHub:

```bash
git add .
git commit -m "Ready for deployment"
# Create a repository on GitHub and follow instructions to push, e.g.:
# git remote add origin https://github.com/YOUR_USERNAME/chef-gemini-clone.git
# git branch -M main
# git push -u origin main
```

## Step 2: Deploy Convex to Production (CRITICAL)

Before deploying the frontend, you need to deploy your backend functions and schema to a live production Convex instance.

1.  Run the deployment command:
    ```bash
    npx convex deploy
    ```
    *This command will create a production deployment in your Convex dashboard.*

2.  **SAVE THE OUTPUT**: The command will output environment variables at the end. Look for:
    *   `CONVEX_DEPLOYMENT`
    *   `NEXT_PUBLIC_CONVEX_URL`

3.  **ADD API KEY TO CONVEX DASHBOARD**:
    *   Go to [dashboard.convex.dev](https://dashboard.convex.dev)
    *   Select your project (e.g., `chef-gemini-clone` or `fastidious-elk-237`).
    *   Go to **Settings** -> **Environment Variables**.
    *   Add a new variable:
        *   **Key**: `GEMINI_API_KEY`
        *   **Value**: *(Paste your Google Gemini API Key here)*
    *   **Click Save**.
    *   *Without this, your "Generate Recipe" feature will throw a Server Error.*

## Step 3: Deployment on Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
2.  Import your `chef-gemini-clone` repository from GitHub.
3.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `./` (default).

4.  **Environment Variables** (CRITICAL):
    Expand the "Environment Variables" section and add the following keys.

    | Key | Value | Source |
    | :--- | :--- | :--- |
    | `CONVEX_DEPLOYMENT` | *(e.g., fastidious-elk-237)* | From Step 2 Output (Deployment Name) |
    | `NEXT_PUBLIC_CONVEX_URL` | *(e.g., https://...convex.cloud)* | From Step 2 Output |

    *Note: You do NOT need `GEMINI_API_KEY` in Vercel, only in the Convex Dashboard.*

5.  Click **Deploy**.

## Step 4: Finalize

1.  Vercel will build your project. Wait for it to finish.
2.  Once complete, your app is live! Vercel will give you a URL (e.g., `chef-gemini-clone.vercel.app`).
3.  **Test it**: Open the URL on your phone and desktop to ensure PWA features and responsive design work.

## Troubleshooting

*   **Server Error "Called by client"**: This means `GEMINI_API_KEY` is missing in the **Convex Dashboard**. Go back to Step 2.3.
*   **Convex Errors**: If data isn't loading, verify `NEXT_PUBLIC_CONVEX_URL` in Vercel matches your production Convex URL.
