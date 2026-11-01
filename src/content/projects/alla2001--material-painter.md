---
repo: "alla2001/material-painter"
name: "material-painter"
description: "PBR texture painter: paint, bake mesh maps and design materials with a node graph. Rust + wgpu."
readmeQualityOk: true
url: "https://github.com/alla2001/material-painter"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [62, 29]
stars: 32
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-31T23:03:35Z"
lastCommitAt: "2026-11-01T10:43:44Z"
lastReleaseAt: "2026-11-01T02:03:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 20
maintainers: ["alla2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba14d937c887b028f6191c77a8227fe5ca0a3aa6effc5c47c6d02376662899ac/alla2001/material-painter"
fundingLinks: ["KO_FI:https://ko-fi.com/allaeddinerakik"]
---

# Material Painter

  &nbsp;
  &nbsp;

A fast, lightweight PBR texture painter for game and film assets: paint
materials onto 3D models with layers, smart materials and masks, bake mesh
maps, build materials in a node graph and write your own node shaders.

> **Early access.** Material Painter works and is in daily use, but it is
> young: expect rough edges, and please report what you find.

## Features

- **Material Paint**: a layer stack with paint, fill and folder layers, blend
  modes and opacity; brushes with tips, grain, pen pressure, stabilizer,
  symmetry and screen, surface or UV projection; polygon fill by triangle,
  quad, loose part, object or UV island.
- **Smart materials and masks**: dozens of ready-made materials, smart mask
  generators (edge wear, dirt, dust, rain streaks, drips, cavity grime...),
  mask layers with blend modes, and mask filters (levels, blur, warp, noise
  breakup...).
- **Mesh map baking**: ambient occlusion, curvature, cavity, thickness,
  normal and height from a high poly, position, world normal, ID and more,
  with cages and match-by-name.
- **Material Designer**: a node graph of tileable textures that drives fill
  layers and masks, with…
