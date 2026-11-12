---
repo: "YutoMaeda1209/ShikisiMap"
name: "ShikisiMap"
description: "Unofficial Map for Shikisima Tetora."
originalDescription: "Unofficial Map for Shikisima Tetora."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/YutoMaeda1209/ShikisiMap"
homepage: "https://map.mendako.dev"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [75, 21]
topics: ["leaflet", "map", "nodejs", "react", "vite"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 60
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-13T02:50:53Z"
lastCommitAt: "2026-11-12T05:37:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 81
maintainers: ["YutoMaeda1209", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ee4b6d3d7938b40c3a894ab4c9d7d588108a5529c7a08201da890af8e12562/YutoMaeda1209/ShikisiMap"
---

[Japanese (JA) / [English (EN)](https://github.com/YutoMaeda1209/ShikisiMap/blob/HEAD/README-en.md)]

# ShikisiMap

A map website that compiles spots introduced in videos posted by Vtuber [Shikisima Tetora](https://www.youtube.com/@ch.1676).
It also supports displaying spots near your current location and previewing YouTube videos.

## Key Features
- **Map display**: Interactive map display using `leaflet` and `react-leaflet`
- **Spot list**: List, filter, and select spots in the sidebar
- **Current location marker**: Shows your current location based on browser geolocation
- **Lightweight media embedding**: Video preview using `react-lite-youtube-embed`

## Tech Stack
- Framework: React 19, TypeScript
- Build: Vite
- Map: Leaflet (`leaflet`, `react-leaflet`)
- Other: `react-window` (list virtualization), etc.

## Quick Start
1. Set up the development environment using a DevContainer
1. Start the development server:

```bash
cd src/frontend
npm run dev
```

Access the address Vite displays in the browser (usually `http://localhost:5173`).

## Main Files
- `src/frontend/`: Frontend (Vite + React)
    - `src/`: Source code directory
        - `Map.tsx`: Map component
        -…
