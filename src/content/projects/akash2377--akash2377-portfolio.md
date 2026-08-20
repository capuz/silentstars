---
repo: "Akash2377/Akash2377_portfolio"
name: "Akash2377_portfolio"
description: "Personal portfolio and freelance site. React 19, TypeScript, Vite and Tailwind v4, prerendered to static HTML."
readmeQualityOk: true
url: "https://github.com/Akash2377/Akash2377_portfolio"
homepage: "https://akashsurve2377.netlify.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 24]
topics: ["css", "html", "react", "redux"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-18T15:07:44Z"
lastCommitAt: "2026-08-20T03:45:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["Akash2377"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c42a052f06ed0b0c887597bb0a02241b83397f228e145740ae5e5c6c10de761/Akash2377/Akash2377_portfolio"
discussionCount: 8
---

# Akash Surve — portfolio

Personal site. Rebuilt from scratch in 2026: the previous version was a
Create React App template (MUI v4, `react-reveal`, eight colour themes); this
one is a small hand-written Vite app with a single design system.

**Stack** — Vite 7 · React 19 · TypeScript · Tailwind CSS v4 · Motion

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint       # type-check only
npm run check      # build, then run the browser check suite
```

## Checks

`npm run check` builds the site and drives it in a real browser. Every
assertion in `scripts/checks/` exists because something actually broke:

| Suite | Covers |
|---|---|
| `responsive` | 14 widths from 320 to 2560px: sideways scroll, elements escaping the viewport, clipped text, console errors |
| `a11y` | axe-core WCAG 2.1 AA in **both** themes — contrast bugs only appear in one |
| `interactions` | Bottom bar, gallery, active-section tracking, skip link, tab order, prefilled mailto, reduced motion |
| `hash` | Every deep link lands correctly on first load **and** after…
