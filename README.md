# Adith Krishna — Data Engineer Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide. All content comes from the resume and lives in one file: `src/data/content.ts`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 20+.

## Project structure

```
public/
  Adith_Krishna_Data_Engineer_Resume.pdf   # downloaded by the Resume buttons
  favicon.svg, robots.txt, sitemap.xml
src/
  data/content.ts        # every fact on the site (edit here)
  components/            # Nav, Hero, PipelineVisual, Experience, Projects, Skills,
                         # Expertise, Education, Contact, Section, BrandIcons
  lib/icons.tsx          # icon-name -> lucide icon map
  index.css              # theme tokens + pipeline animations
vercel.json              # Vite framework preset, asset caching
```

## Common edits

- **Add GitHub:** set `github` in `src/data/content.ts` (for example `https://github.com/<user>`). The hero and contact icons appear automatically; with an empty value they are hidden so there is no dead link.
- **Update the resume:** replace the PDF in `public/` using the same file name.
- **Change the domain:** update `canonical`, `og:url` and the sitemap/robots URLs (currently `https://adithportfolio.netlify.app/`).

## Deploy to Vercel

**Dashboard**

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository.
3. Vercel detects Vite (`vercel.json` also sets it). Build command `npm run build`, output directory `dist`.
4. Click **Deploy**. Add a custom domain under **Settings → Domains** if you want one.

**CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## QA checklist

- [x] `npm run build` passes with strict TypeScript, no warnings
- [x] All six nav links scroll to their section (desktop and mobile menu)
- [x] Resume buttons (nav, hero, contact) serve the PDF; file is byte-identical to the source resume
- [x] LinkedIn and email links point to the resume's values; no GitHub link since the resume has none
- [x] No horizontal overflow at 1440px, 820px and 390px widths
- [x] No console errors or failed requests (fonts are self-hosted)
- [x] Scroll progress bar, sticky nav, mobile menu, project case-study toggle work
- [x] `prefers-reduced-motion` disables decorative animation
- [x] Every claim traced to the resume; no invented metrics, testimonials or skill percentages
