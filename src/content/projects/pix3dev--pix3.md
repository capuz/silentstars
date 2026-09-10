---
repo: "pix3dev/pix3"
name: "pix3"
description: "PlayableAds and web games AI Agents first editor"
readmeQualityOk: true
url: "https://github.com/pix3dev/pix3"
homepage: "https://pix3.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-25T21:30:17Z"
lastCommitAt: "2026-09-10T08:21:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["gritsenko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1064321320/054e9895-a6aa-4c32-a9a8-016be31bc9cf"
---

# Pix3 Editor

### ▶ [Open the editor: **editor.pix3.dev**](https://editor.pix3.dev)

Runs in the browser — nothing to install. Project site and feature tour: **[pix3.dev](https://pix3.dev)**.

Pix3 is a browser-based editor for building rich HTML5 scenes that combine 2D and 3D layers.

The workspace targets Node.js 24.15.0 or newer within the Node 24 LTS line.

## Architecture Overview

Pix3 employs an **operations-first architecture** where all state mutations are handled by `OperationService`. Actions are initiated via `CommandDispatcher`, which wraps operations. Core functionalities are provided by **injectable services** (`@injectable()`, `@inject()`). UI and metadata are managed by **Valtio reactive proxies** (`appState`), while **scene nodes are non-reactive** and owned by `SceneManager` in `SceneGraph` objects. The rendering is handled by a single **Three.js pipeline**. UI components extend `ComponentBase`, defaulting to **light DOM**. A **Property Schema System** dynamically renders UI in the Inspector based on node schemas.

Scene creation commands use a shared `CreateNodeBaseCommand` in `src/features/scene`, while each concrete `Create*Command` keeps node-specific…
