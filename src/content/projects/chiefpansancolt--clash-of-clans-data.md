---
repo: "chiefpansancolt/clash-of-clans-data"
name: "clash-of-clans-data"
description: "Node Package for all data for Clash of Clans game"
readmeQualityOk: true
url: "https://github.com/chiefpansancolt/clash-of-clans-data"
homepage: "https://coc-data.chiefpansancolt.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["clash-of-clans", "node", "npm-package"]
stars: 22
forks: 3
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-01-20T18:02:04Z"
lastCommitAt: "2026-11-06T02:44:30Z"
lastReleaseAt: "2026-04-16T13:48:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 63
maintainers: ["chiefpansancolt", "0053ishav", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e26de82147d01c5a65b919fe3fd36334cedd9b704e785f9d93134cc5086d597b/chiefpansancolt/clash-of-clans-data"
fundingLinks: ["GITHUB:https://github.com/chiefpansancolt", "KO_FI:https://ko-fi.com/chiefpansancolt", "PATREON:https://patreon.com/chiefpansancolt"]
---

# clash-of-clans-data

A comprehensive, fully-typed Node.js package containing all Clash of Clans game data as structured
JSON with TypeScript types and image assets, consumable as an ESM or CJS npm package.

---

## Features

- **Complete game data** — defenses, troops, spells, heroes, equipment, pets, traps, walls,
  buildings, leagues, and more for all three bases (Home Village, Builder Base, Clan Capital)
- **Fully typed** — every entity has a precise TypeScript interface; no `any`, no guessing
- **Fluent query API** — chainable namespace methods with filtering, lookup by TH level, damage
  type, and more
- **Image assets included** — every building level ships with its PNG, accessible via relative path
- **Dual ESM + CJS** — works in both modern ESM projects and legacy CommonJS

---

## Requirements

- Node.js >= 24
- pnpm (for development)

---

## Installation

```bash
npm install clash-of-clans-data
# or
pnpm add clash-of-clans-data
```

---

## Quick Start

```typescript
import { builder, clan, clanCapital, home } from "clash-of-clans-data";

// Home Village — single building
const cannon = home().defenses().cannon().first()!;
console.log(cannon.name); // "Cannon"…
