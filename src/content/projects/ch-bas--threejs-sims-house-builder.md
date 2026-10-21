---
repo: "ch-bas/threejs-sims-house-builder"
name: "threejs-sims-house-builder"
description: "A browser-based 3D house builder inspired by The Sims. Design multi-floor homes with furniture, walls, roofs, and walkthrough mode. Built with Three.js + Next.js. "
readmeQualityOk: true
url: "https://github.com/ch-bas/threejs-sims-house-builder"
homepage: "https://ch-bas.github.io/threejs-sims-house-builder/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["3d", "architecture", "furniture", "house-building", "interior-design", "nextjs", "open-source", "react", "room-planner", "tailwindcss"]
stars: 83
forks: 10
openIssues: 63
closedIssues: 253
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-05-30T14:05:47Z"
lastCommitAt: "2026-10-21T08:48:57Z"
lastReleaseAt: "2026-08-31T08:21:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 40
maintainers: ["ch-bas"]
openGraphImageUrl: "https://opengraph.githubassets.com/01a7a405a0256a141756b5df7d1dc5625a1840218148f5b0cd29dd72e939b5a1/ch-bas/threejs-sims-house-builder"
---

# Three.js Sims-like House Builder

 
A lightweight, open-source Sims-like house builder built entirely in the browser using Three.js.

This repository provides a polished, grid-based architecture and interior design system featuring wall patterns, floor styles, modular stairs, and dynamic UI panels.

Built with Next.js 15, React 18, Three.js, and Tailwind CSS. No backend, no authentication — everything runs client-side.

**[Live Demo](https://ch-bas.github.io/threejs-sims-house-builder/)** 
## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

Type-check and test:

```bash
npm run typecheck
npm run test         # Vitest unit suite (reducer, geometry, schema, share, …)
```

## Feature tour

### Building

- **69 furniture items** across 12 categories (Seating, Tables, Bedroom,
  Storage, Kitchen, Bathroom, Electronics, Security, Decor, Outdoor,
  People, Structure).
- **Multi-floor buildings** up to 4 levels — ground floor + up to three
  upper floors, with a FloorSwitcher to select, add, remove, rename
  (double-click), reorder, and **clone** the active floor. Each floor
  has its own items and…
