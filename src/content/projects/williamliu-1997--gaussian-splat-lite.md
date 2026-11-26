---
repo: "WilliamLiu-1997/Gaussian-Splat-Lite"
name: "Gaussian-Splat-Lite"
description: "High-performance 3D Gaussian Splatting (3DGS) renderer for Three.js with WebGPU and WebGL2 support. Loads PLY and SPZ files and supports LOD streaming for SOG, RAD, and LCC2 scenes. Includes a Node.js tool that converts PLY or SPZ files into streamable RAD or SOG scenes with multiple lods."
readmeQualityOk: true
url: "https://github.com/WilliamLiu-1997/Gaussian-Splat-Lite"
homepage: "https://gaussian-splat-lite.vercel.app/"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [73, 24]
topics: ["3dgs", "threejs", "ply", "spz", "rad", "sog", "webgpu", "lod", "webgl", "renderer"]
stars: 455
forks: 54
openIssues: 1
closedIssues: 4
watchers: 21
contributors: 4
recentReleases: 1
createdAt: "2026-08-03T02:52:17Z"
lastCommitAt: "2026-11-26T15:19:57Z"
lastReleaseAt: "2026-08-29T12:35:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 27
maintainers: ["WilliamLiu-1997", "Patrick-van-Halm-360Fabriek"]
openGraphImageUrl: "https://opengraph.githubassets.com/b25f58133ac37184226ff55f6cacfa5ce6c0d7003fe629fc94009920f86a5a01/WilliamLiu-1997/Gaussian-Splat-Lite"
---

# Gaussian-Splat-Lite

**Three.js Gaussian Splatting · WebGPU · Streaming**

High performance 3D Gaussian Splatting (3DGS) renderer for **Three.js** with **WebGPU**/**WebGL2**. Supports PLY, SPZ, SOG, and RAD files, with streaming LOD for RAD, SOG, and LCC2 scenes.

**[Try Live Demo](https://gaussian-splat-lite.vercel.app/examples/#basic-viewer)**

## Features

| Focus | What you get |
| --- | --- |
| **WebGPU / WebGL2** | Use the same Three.js scene API with either renderer |
| **Large-scene streaming** | Load RAD, SOG, and LCC2 detail as the camera moves, with smooth transitions |
| **Stochastic rendering** | Optional transparency mode, with an experimental neural denoiser to smooth it |
| **Offscreen capture** | Render Splats to images, cube maps, and environment maps for reflections |
| **SDF edits** | Recolor or hide parts of a model without moving Splats |
| **Data and precision** | Load URLs, files, or bytes; place local models in large GIS/ECEF scenes |

## Installation

```sh
npm install gaussian-splat-lite three
```

Requires Three.js `>=0.187.0`.
