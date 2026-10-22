---
repo: "educlopez/thegridcn-ui"
name: "thegridcn-ui"
description: "An authentic Tron: Ares inspired theme system for shadcn/ui"
readmeQualityOk: true
url: "https://github.com/educlopez/thegridcn-ui"
homepage: "https://thegridcn.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["shadcn", "shadcn-ui", "theme", "tron"]
stars: 392
forks: 27
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-12T15:09:10Z"
lastCommitAt: "2026-10-22T08:52:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 20
maintainers: ["educlopez"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1132871727/33eadc60-996c-4358-83d8-8882a11dff21"
---

# The GridCN

> A Tron: Ares inspired theme system for shadcn/ui. Grid-native components, six Greek-god color schemes, three.js effects, and a copy-paste registry that plugs into the shadcn CLI.

---

## What is this

The GridCN turns plain shadcn/ui into a neon, glass-HUD design system modeled after _Tron: Ares_. It ships 55+ base components, 90+ Tron-flavored components (HUDs, radars, timers, maps, 3D grids), and six themes built on `oklch()` CSS variables — all installable one-by-one through `npx shadcn add`.

Nothing is locked behind a package. Every component is raw TSX you own, just like shadcn/ui itself. The site at [thegridcn.com](https://thegridcn.com) is both the showcase and the registry.

## Features

- Six themes · Ares, Tron, Clu, Athena, Aphrodite, Poseidon
- 145+ components · base UI + Tron-specific HUD/3D/effects
- shadcn CLI native · install any component with `npx shadcn add`
- Token export · `pnpm tokens:build` emits per-theme CSS + JSON under `public/tokens/`
- Three.js integration · Grid3D, Tunnel, GridFloor, always SSR-safe
- Copy-paste friendly · full source visible in the showcase with one-click copy

## Quick start

Three ways to use The GridCN, from…
