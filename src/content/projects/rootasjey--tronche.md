---
repo: "rootasjey/tronche"
name: "tronche"
description: "Avatars nothing like you."
readmeQualityOk: true
url: "https://github.com/rootasjey/tronche"
homepage: "https://tronche.cc/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [61, 32]
topics: ["avatars", "cloudflare-workers", "nuxt"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T01:49:35Z"
lastCommitAt: "2026-08-13T17:33:31Z"
lastReleaseAt: "2026-07-20T14:43:05Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 50
undervaluedScore: 18
maintainers: ["rootasjey", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/75f5a7ff6966e3aefd6ca942ea6658fa3578b734c56cccc32c282dd2a0a08b7b/rootasjey/tronche"
promoted: true
---

# tronche

Avatars nothing like you.

Tronche generates unique SVG avatars from a name and a color palette. Available as a [vanilla JS package](#vanilla-usage) (no framework), a [Vue component](#vue-usage), a [React component](#react-usage), a [Solid component](#solid-usage), a [Svelte component](#svelte-usage), a [Lit component](#lit-usage), an [Angular component](#angular-usage), a [Nuxt module](#nuxt-module), and a [REST API](#rest-api).

## Installation

```sh
npm install tronche
```

### Package structure

```
node_modules/tronche/
├── dist/
│   ├── index.js         # Core library (ESM, framework-agnostic)
│   ├── index.d.ts       # Core TypeScript declarations
│   ├── vue/
│   │   ├── index.js     # Vue components (pre-compiled)
│   │   └── index.d.ts   # Vue component types
│   ├── react/
│   │   ├── index.js     # React components (pre-compiled)
│   │   └── index.d.ts   # React component types
│   ├── solid/
│   │   ├── index.js     # Solid components (pre-compiled)
│   │   └── index.d.ts   # Solid component types
│   ├── svelte/
│   │   ├── index.js     # Svelte components (pre-compiled)
│   │   └── index.d.ts   # Svelte component types
│   ├── lit/
│   │   ├── index.js…
