---
repo: "crossgram-project/website"
name: "website"
description: "CrossGram product website, deployment handbook, and client downloads"
readmeQualityOk: true
url: "https://github.com/crossgram-project/website"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [72, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-31T11:51:09Z"
lastCommitAt: "2026-11-04T08:03:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]", "std-microblock", "Decrabbityyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb43602e2a0bd07fce1b2b87620fa66c7462bfd1a81920be8407afdf6e6cca45/crossgram-project/website"
---

# CrossGram Website

The product website, deployment handbook, and client downloads for CrossGram.
A small static React app: Vite + React 19 + TypeScript + React Router, deployed to
GitHub Pages.

## Development

```bash
npm ci
npm run dev          # http://127.0.0.1:5173
```

## Verification

```bash
npm test             # vitest unit + component tests
npm run build        # tsc --noEmit, vite build, GitHub Pages 404 fallback
npm run test:e2e:install
npm run test:e2e     # playwright: desktop, desktop-dark, mobile
```

## Pages

| Route            | Source                            |
| ---------------- | --------------------------------- |
| `/`              | `src/pages/Home.tsx`              |
| `/downloads`     | `src/pages/Downloads.tsx`         |
| `/docs`          | `src/pages/docs/DocsIndex.tsx`    |
| `/docs/linux`    | `src/pages/docs/DocsLinux.tsx`    |
| `/docs/windows`  | `src/pages/docs/DocsWindows.tsx`  |

Shared chrome (`src/app/`), design tokens (`src/styles/tokens.css`) and base
typography/utilities (`src/styles/base.css`) are the only styling layer; every page adds
its own small CSS file. The site has no design-token toggle: it follows the operating
system…
