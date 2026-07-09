---
repo: "ZyFou/ProceduralTerrains"
name: "ProceduralTerrains"
description: "Three.js procedural terrain generator with tile, infinite world, planet mode, volumetric clouds, realistic water and GLB export."
readmeQualityOk: true
url: "https://github.com/ZyFou/ProceduralTerrains"
homepage: "https://terrains.zyfod.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["glb-export", "heightmap", "noise", "procedural-generation", "procedural-terrain", "shaders", "terrain-generator", "threejs", "volumetric-clouds", "webgl"]
stars: 334
forks: 47
openIssues: 0
closedIssues: 5
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-06-10T10:25:12Z"
lastCommitAt: "2026-07-09T20:43:17Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 29
maintainers: ["ZyFou"]
openGraphImageUrl: "https://opengraph.githubassets.com/39cc4a7b258df1034e335e6eef3f355c36ac2b395ec6edb52ef67019614a44ea/ZyFou/ProceduralTerrains"
---

# Procedural Terrains

A shader-driven procedural terrain generator and editor built with **React + Vite + Three.js (WebGL2)**.

Height, normals and biome colors are computed **on the GPU** — there is no baked CPU heightmap
driving the live view. The app ships three world modes (switchable from the top bar):

| Mode | What it is |
|---|---|
| **Tile** | Fixed terrain board with per-chunk LOD — best for painting, multi-tile layouts and exports |
| **Infinite World** | Streamed chunk grid around the camera with FPS walk / plane exploration |
| **Planet** | Cube-sphere procedural planet with atmosphere, volumetric clouds and orbit camera |

## Run

```sh
npm install
npm run dev
```

The dev server starts on **http://localhost:6061** and is also reachable on your local network
(Vite listens on all interfaces and prints the LAN URL, e.g. `http://192.168.x.x:6061`).
If port 6061 is already in use, Vite picks the next free port.

Production build: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Architecture

The WebGL **engine** is framework-agnostic (`src/engine/`); the editor **UI** is React
(`src/components/`). They talk through `Engine` methods + a…
