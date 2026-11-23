---
repo: "mcp-tool-shop-org/world-forge"
name: "world-forge"
description: "2D / 2.5D world authoring studio with peer export lanes for AI RPG Engine, Unreal Engine 5, and Godot 4."
readmeQualityOk: true
url: "https://github.com/mcp-tool-shop-org/world-forge"
homepage: "https://mcp-tool-shop-org.github.io/world-forge/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["game-dev", "pixijs", "react", "rpg", "typescript", "world-building", "2-5d", "godot", "level-editor", "unreal-engine"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-03-08T15:12:29Z"
lastCommitAt: "2026-11-23T10:18:35Z"
lastReleaseAt: "2026-11-06T03:06:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 73
maintainers: ["mcp-tool-shop"]
openGraphImageUrl: "https://opengraph.githubassets.com/2321d9d63c979bc80c6db0c7063aa63fb18d07b09c9de0932f926974cb36e780/mcp-tool-shop-org/world-forge"
---

## Architecture

```
packages/
  schema/          @world-forge/schema         — spatial types, validation, 2.5D fields
  export-ai-rpg/   @world-forge/export-ai-rpg  — AI RPG Engine export pipeline + CLI
  export-unreal/   @world-forge/export-unreal  — Unreal Engine 5 export pipeline + CLI (2.5D aware)
  export-godot/    @world-forge/export-godot   — Godot 4 export pipeline + .tscn scene generation
  renderer-2d/     @world-forge/renderer-2d    — PixiJS 2D canvas renderer
  editor/          @world-forge/editor         — React web authoring app
```

## Quick Start

```bash
npm install
npm run build
npm run dev --workspace=packages/editor
```

Open `http://localhost:5173` to launch the editor.
