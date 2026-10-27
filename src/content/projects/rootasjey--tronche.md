---
repo: "rootasjey/tronche"
name: "tronche"
description: "Avatars nothing like you."
readmeQualityOk: true
url: "https://github.com/rootasjey/tronche"
homepage: "https://tronche.cc/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 32]
topics: ["avatars", "cloudflare-workers", "nuxt"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T01:49:35Z"
lastCommitAt: "2026-10-26T10:25:06Z"
lastReleaseAt: "2026-07-20T14:43:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 29
maintainers: ["rootasjey", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e13e57736f0227b9549213bd316e9fb80a68229a46675517b3e37013c156c2a9/rootasjey/tronche"
promoted: true
postedAt: "2026-10-25T22:16:55.952Z"
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
