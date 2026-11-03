---
repo: "ataturhan21/ataturhan21.github.io"
name: "ataturhan21.github.io"
description: "React portfolio presenting Ata Turhan's background, AI engineering projects, skills and contact links."
readmeQualityOk: true
url: "https://github.com/ataturhan21/ataturhan21.github.io"
homepage: "https://ataturhan21.github.io/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [71, 21]
topics: ["ai-engineer", "ml-engineer", "portfolio"]
stars: 23
forks: 0
openIssues: 3
closedIssues: 80
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-01T19:04:59Z"
lastCommitAt: "2026-11-03T19:05:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["ataturhan21"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc8d78e3b33e908ee8512e264d3f59358fac728b388d80edf512519aeda1d2ae/ataturhan21/ataturhan21.github.io"
---

# Ata Turhan's Portfolio

A React portfolio presenting Ata Turhan's background, selected AI engineering projects, skills, and contact links.

Live site: https://ataturhan21.github.io/

The repository is named `ataturhan21.github.io`, so GitHub Pages serves it at the domain root. The old address, https://ataturhan21.github.io/ata-turhan.github.io/, redirects there.

## Local development

```bash
git clone https://github.com/ataturhan21/ataturhan21.github.io.git
cd ataturhan21.github.io
npm ci
npm start
```

This project uses React 18.3, built with Vite 8 and tested with Vitest 5 (as locked in `package-lock.json`). It needs Node.js 22.22.2 or later on 22, or 24.15 or later, the range every locked package supports, declared in `package.json` `engines`. `.nvmrc` picks Node 24 for local work and deploys (`nvm use`), and CI checks both 22 and 24. `npm start` serves the site at http://localhost:5173 and reloads on save.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Vite dev server at http://localhost:5173 |
| `npm test` | Run the test suite once (`npx vitest` keeps watching) |
| `npm run lint` | Lint the code with ESLint |
| `npm run build` | Generate…
