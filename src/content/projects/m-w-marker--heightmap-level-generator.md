---
repo: "m-w-marker/heightmap-level-generator"
name: "heightmap-level-generator"
description: "Free procedural terrain and heightmap generator for Unreal, Unity and Godot, running in the browser on WebGPU"
readmeQualityOk: true
url: "https://github.com/m-w-marker/heightmap-level-generator"
homepage: "https://m-w-marker.github.io/heightmap-level-generator/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["erosion", "gamedev", "godot", "heightmap", "level-design", "level-generator", "map-generator", "procedural-generation", "procedural-terrain", "terrain-generator"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-11T09:49:02Z"
lastCommitAt: "2026-11-17T14:47:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 54
maintainers: ["m-w-marker"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1365791260/730792a4-343c-4aa5-b134-fcb4fe4200c7"
---

# Heightmap Level Generator

**Free procedural terrain and heightmap generator for Unreal Engine, Unity and Godot, running in your browser.
No install, no account.**

**▶ Try it: https://m-w-marker.github.io/heightmap-level-generator/** (needs WebGPU, e.g. desktop Chrome or Edge)

## What it does

- **Terrain on the GPU**, live while you drag sliders: hills, mountains, cliffs, rock terraces, erosion, rivers and lakes, 256–1280 m at 0.5 m per pixel
- **Road network** with towns, following the terrain, grade-limited, never under water
- **Four biomes**: temperate, steppe, desert, snow world, with textured 3D preview and colored rock bands (try the *Badlands* preset)
- **Walk through it** in first person, compare seeds side by side, share a map as a link

## Export

For **Unreal, Unity, Godot (Terrain3D) or three.js**, with engine-ready sizes and the import values in the metadata:

- 16-bit heightmap (PNG / `.r16`), splatmap, color map
- Masks: road, town, water, water level, slope, normals, curvature, flow
- Layout JSON (towns, roads, rivers, lakes) for PCG, Houdini or your own scripts
- 3D mesh as glTF `.glb`

Formats and parameters in detail:…
