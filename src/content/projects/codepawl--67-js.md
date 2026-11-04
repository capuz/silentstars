---
repo: "codepawl/67.js"
name: "67.js"
description: "A WebGL2 3D engine that AI agents drive"
readmeQualityOk: true
url: "https://github.com/codepawl/67.js"
homepage: "https://67js.codepawl.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["3d", "3d-engine", "ai-agents", "gltf", "javascript", "mcp", "model-context-protocol", "pbr", "rendering", "webgl2"]
stars: 8
forks: 0
openIssues: 11
closedIssues: 132
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T20:06:27Z"
lastCommitAt: "2026-11-04T11:27:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 55
maintainers: ["anxuanng"]
openGraphImageUrl: "https://opengraph.githubassets.com/872dd3579d464f8e68330097ecb1c62c23fc14d15e916920464b480f8e566417/codepawl/67.js"
---

67js is a WebGL2 renderer with addons for terrain, vegetation, characters, liquid, vehicles and media export.
A scene is plain data: each part has a geometry, a matrix and a material.
An agent builds and changes a scene through an MCP server, looks at PNG previews and renders stills or MP4 video.
The goal is to be as capable as Blender and as light as three.js. [Issue #23](https://github.com/codepawl/67.js/issues/23) tracks the work.

## Install

```sh
npm install 67js@npm:@codepawlhq/67js
```

The registry name is `@codepawlhq/67js`. The command installs it under the alias `67js`, so imports stay short.
The package is ESM. The tools need Node.js 20.19 or later, and rendering needs a WebGL2 browser.

## Quick start

```js
import { Renderer67, box, sphere } from '67js';

// Column-major 4x4 matrix: scale, then move.
const placed = ([x, y, z], [width, height, depth] = [1, 1, 1]) =>
  new Float32Array([width, 0, 0, 0, 0, height, 0, 0, 0, 0, depth, 0, x, y, z, 1]);

const parts = [
  {
    name: 'Floor',
    geometry: box(),
    matrix: placed([0, 0, 0], [8, 0.1, 8]),
    material: { color: [0.4, 0.42, 0.45], metallic: 0, roughness: 0.9, emission: 0 },
  },
  {
    name: 'Ball',…
