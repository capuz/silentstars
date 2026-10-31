---
repo: "JollyPixel/editor"
name: "editor"
description: "The collaborative 3D HTML5 game maker"
readmeQualityOk: true
url: "https://github.com/JollyPixel/editor"
homepage: "https://jollypixel.github.io/editor/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["3d", "collaborative", "game-engine-3d", "game-maker", "javascript", "threejs", "typescript", "web", "webgl"]
stars: 22
forks: 7
openIssues: 5
closedIssues: 237
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-04-29T18:39:56Z"
lastCommitAt: "2026-10-31T15:58:20Z"
lastReleaseAt: "2026-02-18T02:35:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["AlexandreMalaj", "fraxken", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ab20fa2f488df4f05297b3845748053678b32bd845e2e097e3a33b58ccc738b/JollyPixel/editor"
---

## ⚙️ Requirements
- [Node.js](https://nodejs.org/en/) version 24 or higher
- [pnpm](https://pnpm.io/) v12+ for workspaces (the repository pins it through the `packageManager` field)

## 🧭 Workspaces

Every workspace name below drops the `@jolly-pixel/` scope: `network` is `@jolly-pixel/network`. Workspaces are grouped by sub-domain. Each arrow shows what one sub-domain provides to another.

### 🤝 Collaboration

- [network](https://github.com/JollyPixel/editor/blob/HEAD/packages/network) - Rooms, peers and state sync for the collaborative editors
- [accounts](https://github.com/JollyPixel/editor/blob/HEAD/packages/accounts) - User accounts and session tokens for JollyPixel servers
- [history](https://github.com/JollyPixel/editor/blob/HEAD/packages/history) - Command documents and per-person undo history that survives collaboration

### 🎨 Authoring

#### Shell

- [studio](https://github.com/JollyPixel/editor/blob/HEAD/packages/studio) - One project, its assets and one editor per tab
- [editor.host](https://github.com/JollyPixel/editor/blob/HEAD/packages/editors/host) - Shared launch, session and runtime boot for the editors

#### Editors and formats

Each editor is an…
