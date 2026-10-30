# Faith Ouma: Portfolio

Personal portfolio built from my Figma design with **React, TypeScript, Vite and Tailwind CSS v4**.

## Pages

| Route                 | What's there                                                   |
| --------------------- | -------------------------------------------------------------- |
| `/`                   | Hero, About Me, stats, skills, selected work, contact          |
| `/projects`           | Featured projects, Figma explorations, experience, core skills |
| `/projects/gma`       | GMA Sports case study                                          |
| `/projects/afritech`  | Afritech Sports case study                                     |

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

You don't need to touch the components to update text:

- **`src/data/site.ts`** has your name, intro, phone, email, links, stats, skills, experience and tools
- **`src/data/projects.ts`** has project cards, case-study content and the Figma exploration links
- **`public/images/`** has your photo and the website screenshots

To add a Figma link to an exploration card, paste it into `figmaUrl` in `src/data/projects.ts`.
To replace your photo, overwrite `public/images/faith.jpg` with a higher-resolution version.

## Deploy to Vercel

1. Create a new GitHub repo (for example `portfolio`) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Fao14/portfolio.git
   git push -u origin main
   ```
2. On vercel.com choose **Add New → Project**, import the repo and click **Deploy**.
   Vercel detects Vite automatically (build command `npm run build`, output `dist`).
3. `vercel.json` already rewrites every route to `index.html`, so links like `/projects/gma` work on refresh.

## Colours (from Figma)

| Token    | Hex       |
| -------- | --------- |
| brand    | `#EA3E77` |
| canvas   | `#F8F6F6` |
| blush    | `#F8E9EE` |
| ink      | `#0F172A` |

These live in `src/index.css` under `@theme`.
