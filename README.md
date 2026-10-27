# Fred Mugisha · Tech VA — Portfolio

Landing page for my virtual-assistant and web-development services, built with
**Next.js 14 (App Router)** and **TypeScript**. Converted from the original
single-file design in `../Design/va-landing.html`.

## Run it locally

Requires **Node.js 18.17 or newer** (check with `node -v`).

```bash
npm install      # first time only
npm run dev      # start the dev server
```

Open <http://localhost:3000>. Changes reload automatically.

Other commands:

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run build` | Production build (run this before deploying)  |
| `npm start`     | Serve the production build locally            |
| `npm run lint`  | Check the code with ESLint                    |

## Deploy free on Vercel

1. Push this project to a GitHub repository. If `Web/` is inside a bigger
   folder, either push only `Web/` as its own repo, or push the whole folder
   and set **Root Directory** to `Web` in step 4.
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to <https://vercel.com> and sign up with your GitHub account (the Hobby
   plan is free).
3. Click **Add New… → Project** and import the repository.
4. Vercel detects Next.js automatically. Leave the defaults (set **Root
   Directory** to `Web` only if you pushed the parent folder) and click
   **Deploy**.
5. You get a live URL like `https://<repo-name>.vercel.app`. Every push to
   `main` redeploys automatically; pushes to other branches get preview URLs.
6. Optional: add your own domain under **Project → Settings → Domains**.

## Project structure

```
app/
  layout.tsx        Root HTML, fonts, metadata, theme init script
  page.tsx          Home page — composes the sections below
  globals.css       Design tokens (colors, fonts) + shared classes
  icon.png          Browser-tab icon (circular profile photo)
  apple-icon.jpg    Home-screen icon on iPhone/iPad
components/         One component per section, each with its own CSS module
  Header · Hero · WorkflowDiagram · TrustStrip · Services · Process
  Packages · About · Contact · Footer
  BrandLink, ThemeToggle, CopyEmail   (small client-side interactive pieces)
  icons.tsx         Shared SVG icons
data/
  site.ts           All page copy: services, packages, facts, links…
lib/
  fonts.ts          Google Fonts via next/font (self-hosted at build time)
  theme.ts          Light/dark theme storage key + no-flash init script
```

### Editing content

Text, prices, services and links all live in [`data/site.ts`](data/site.ts).
Edit them there, not in the components.

### Theme

Colors are CSS variables at the top of `app/globals.css`. The page follows the
visitor's OS light/dark setting by default; the moon button overrides it and
remembers the choice in `localStorage`.

## Adding a backend later

The structure is ready for it:

- **API routes** go in `app/api/<name>/route.ts` (e.g. `app/api/contact/route.ts`
  for a contact form).
- **Database code** (e.g. Prisma + PostgreSQL) goes in `lib/db.ts`, with the
  schema in `prisma/schema.prisma`.
- Content in `data/site.ts` is typed, so it can be swapped for database queries
  without changing the components.
- Secrets go in `.env.local` (already git-ignored) and in Vercel under
  **Settings → Environment Variables**.
