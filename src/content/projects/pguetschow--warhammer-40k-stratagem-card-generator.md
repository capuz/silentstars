---
repo: "pguetschow/warhammer-40k-stratagem-card-generator"
name: "warhammer-40k-stratagem-card-generator"
description: "Generates a printable version for Warhammer 40k 10th edition stratagems suitable for MTG-styled sleeves (2.5 inches x 3.5 inches)"
readmeQualityOk: true
url: "https://github.com/pguetschow/warhammer-40k-stratagem-card-generator"
homepage: "https://stratagemprint40k.app"
language: "Vue"
languages: ["Vue", "CSS"]
languagePcts: [48, 33]
stars: 12
forks: 4
openIssues: 9
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-09-05T20:30:38Z"
lastCommitAt: "2026-07-04T22:19:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 46
maintainers: ["josephdouce", "pguetschow"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbfe7d6966cfffb0b10172cd6158ca15e666097a955c0686856a79cf3c5b1f99/pguetschow/warhammer-40k-stratagem-card-generator"
---

# Warhammer 40K Stratagem Card Generator

## Description
Generate and print Warhammer 40,000 stratagem cards sized for 2.5″ × 3.5″ sleeves. Built with Vue 3 + Vite.

Available at [stratagemprint40k.app](https://stratagemprint40k.app).

## Requirements
- **Node.js**: 22.12+ (Vite 5 compatible)
- **Dependencies**: Vue 3
- **Dev tooling**: Vite 5, TypeScript 5, `@vitejs/plugin-vue`

## Setup
```bash
# 1) Install
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build

# (Optional) Preview the production build
npm run preview

# Refresh Wahapedia data for all configured editions
npm run update:data
```

## How to collaborate

Generated game data lives under **`public/data/<edition>/cards.json`**. The edition selector is driven by **`public/data/editions.json`**.

Run `npm run update:data` to download Wahapedia’s export overview workbook, follow its linked CSV exports, and rebuild the edition JSON files.

### Top-level structure
```json
{
  "edition": "11",
  "editionLabel": "11th Edition",
  "sourceUrl": "https://wahapedia.ru/wh40k11ed/the-rules/data-export/",
  "lastUpdate": "YYYY-MM-DD HH:mm:ss",
  "factionGroups": {
    "<GroupName>":…
