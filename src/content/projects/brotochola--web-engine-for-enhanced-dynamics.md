---
repo: "brotochola/Web-Engine-for-Enhanced-Dynamics"
name: "Web-Engine-for-Enhanced-Dynamics"
description: "Multithreaded 2D web game engine: 50,000+ entities and 250,000 sprites at 60 FPS in a browser tab. ECS, Box2D 3.2 on WASM (pthreads, SIMD), LiquidFun fluids, WebGL + WebGPU, compute shaders, lighting, tilemaps. About 1 MB. Open source."
readmeQualityOk: true
url: "https://github.com/brotochola/Web-Engine-for-Enhanced-Dynamics"
homepage: "https://web-engine-for-enhanced-dynamics.vercel.app/demos/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["game", "game-engine", "game-engine-2d", "gamedev", "multithread", "multithreading", "webworkers", "sharedarraybuffer", "webgl2", "webgpu"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-15T18:26:09Z"
lastCommitAt: "2026-10-29T21:09:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 66
maintainers: ["brotochola"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1097207287/367d2c7d-e021-4260-abfb-c6ddb8d6b082"
---

# Web Engine for Enhanced Dynamics

**A multithreaded 2D game engine that makes the browser behave like a modern game console.**

`~1 MB` · `ECS` · `Box2D 3.2 on WebAssembly` · `LiquidFun fluids` · `WebGL + WebGPU` · `50,000+ entities at 60 FPS`

   

**[▶ Live demos](https://web-engine-for-enhanced-dynamics.vercel.app/demos)** · **[▶ Engine showcase (video)](https://youtu.be/V_4fTu9eKwo)** · **[Documentation](https://github.com/brotochola/Web-Engine-for-Enhanced-Dynamics/blob/main/docs/README.md)**

Many browser games run simulation and rendering on a single thread. This engine does not. Physics, game logic, spatial queries, particles, render preparation, rendering and audio each run in their own worker and share memory through `SharedArrayBuffer`, with zero-copy data paths. The result is tens of thousands of simulated entities, real rigid-body physics, fluids, lighting and GPU compute at 60 FPS, in a browser tab, from a bundle of about 1 MB.

---

## By the Numbers

| Scenario                                                                     | Result                        |
| ---------------------------------------------------------------------------- |…
