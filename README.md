# E.Duffy Website

## Project structure

- `public/`
  - Static assets served directly, like images, icons, fonts.
- `src/app/`
  - `page.tsx` — home page entry.
  - `layout.tsx` — shared layout and metadata.
- `src/components/`
  - Reusable UI pieces such as header, footer, cards.
- `src/styles/`
  - Global and component CSS.
- `src/lib/`
  - Helpers, configuration, API clients.
- `src/data/`
  - Static content, page text, or design tokens.

## How to build

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Sharing the Figma MCP design link

1. Open your Figma file.
2. Click `Share` in the top-right corner.
3. Set permissions to `Anyone with the link can view` if you want external collaborators to access it.
4. Copy the link and send it to your developer or team.

> For this project, the homepage link is the most important asset to build first. If your environment blocks WebGL or Figma, screenshots are a fallback, but the original link is better because it preserves exact styles, spacing, and exportable assets.

> If you are using a Figma MCP integration or plugin, also share the exact MCP resource or plugin details with your developer so they can connect the design tokens / components.

## Deploying to Vercel

1. Create a Vercel account at `https://vercel.com`.
2. Click `New Project`.
3. Connect your GitHub, GitLab, or Bitbucket repository that contains this website.
4. Select the repository and set the root directory to this project folder if required.
5. Vercel will automatically detect Next.js and configure build settings.
6. Click `Deploy`.

### Manual deploy notes

- Use `npm run build` locally to verify the site compiles.
- Confirm `next.config.mjs` is correct and there are no broken imports.
- If you want a direct Vercel preview, share the deployed project URL after deployment.
