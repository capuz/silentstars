---
repo: "kalpeshsinghal0055-ai/xauusdrobot"
name: "xauusdrobot"
description: "XAUUSD Robot - #1 Free Gold EA for MT4 & MT5 | AI Algo Trading Bot 2026"
readmeQualityOk: true
url: "https://github.com/kalpeshsinghal0055-ai/xauusdrobot"
language: "HTML"
languages: ["HTML"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-25T00:39:39Z"
lastCommitAt: "2026-10-24T08:19:55Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]", "kalpeshsinghal0055-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/29a2e3df91370b7b1ddc77c6abb5814d3d7f8d3b5761bcccbfdee261973d82bf/kalpeshsinghal0055-ai/xauusdrobot"
---

# xauusdrobot.com

Marketing site for the free BBFxAi XAUUSD trading robots (MT4/MT5), plus a
blog, free gold-trading calculators and a weekly gold news calendar.

## Stack
- React 19 + Vite + Tailwind (SPA in `client/`)
- Static prerender of key routes via `scripts/prerender.mjs` (Puppeteer)
- Static blog posts and tools live in `client/public/`
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` (pnpm)

## Develop
```
pnpm install
pnpm dev          # local dev server
pnpm vite build   # production build to dist/public
node scripts/prerender.mjs
```

## Publishing a blog post
Add a folder under `client/public/blog/<slug>/index.html`, a card in
`client/src/pages/Blog.tsx`, a `<url>` entry in `client/public/sitemap.xml`,
and cross-link it from related posts. Push to `main` to deploy.
