---
repo: "drdator/q3edit"
name: "q3edit"
description: "Browser-based Quake III Arena map editor with WebGL2 and client-side BSP compilation."
readmeQualityOk: true
url: "https://github.com/drdator/q3edit"
homepage: "https://q3edit.com"
language: "TypeScript"
languages: ["TypeScript", "C"]
languagePcts: [46, 40]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-18T10:24:23Z"
lastCommitAt: "2026-07-21T06:12:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 37
maintainers: ["drdator"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e15e6b556e7b3066362aaed6f3ca5ac1b2cce06e3c2b069a655602ab705c554/drdator/q3edit"
---

# Q3Edit

Q3Edit is a work-in-progress Quake III Arena map editor that runs entirely in
the browser with WebGL2. It supports editing `.map` files, brush and patch
geometry, entities, textures, terrain, and client-side BSP compilation.

[Open Q3Edit](https://q3edit.com)

## Features

- Four Radiant-style 2D and 3D editing viewports
- Brush, patch, clipping, CSG, vertex, terrain, and transform tools
- Entity editing and target/path visualization
- Local `.map` file loading and saving
- Browser-local PK3 management with ordering and enable/disable controls
- OpenArena textures by default, with optional retail Quake III PK3 files
- q3map compiled to WebAssembly for client-side BSP, VIS, and light stages
- ioquake3 compiled to WebAssembly for playing compiled maps in the editor

Q3Edit is under active development. Save important work frequently and keep
copies of your source `.map` files.

## Development

Requirements:

- Node.js 22 or newer
- A modern browser with WebGL2
- `curl`, `unzip`, and `shasum` to prepare OpenArena assets
- Git, CMake, and Emscripten 5.0.3 to build the WebAssembly tools

Install dependencies and prepare the default texture assets:

```sh
npm ci
npm run…
