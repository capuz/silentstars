---
repo: "NSDeathman/SoftX-Software-Graphics-API"
name: "SoftX-Software-Graphics-API"
description: "Software DirectX-like graphics API"
readmeQualityOk: true
url: "https://github.com/NSDeathman/SoftX-Software-Graphics-API"
homepage: "https://discord.gg/EH23cwfN"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-25T16:40:13Z"
lastCommitAt: "2026-07-04T22:18:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 26
maintainers: ["NSDeathman"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb4e014fb5e21bba93371ecba09e3eda9f8e67402f406d6c97fb22e7b3e40ffc/NSDeathman/SoftX-Software-Graphics-API"
---

# SoftX – Software Graphics API

SoftX is a modern, high-performance software graphics API designed for x86/x64 platforms.  
It provides a DirectX‑style programming model with full support for **vertex**, **geometry**, and **pixel shaders**, while leveraging **tile‑based multithreaded rendering** and **SIMD acceleration** (SSE/AVX) for maximum efficiency.

## Key Features

- **DirectX‑inspired pipeline** – familiar concepts: device, immediate/deferred contexts, shaders, constant buffers, texture bindings.
- **Tile‑based rendering** – automatic binning of triangles into screen tiles, enabling efficient parallelization.
- **Multithreading** – create multiple deferred contexts to record command lists concurrently, then execute them in parallel.
- **SIMD optimised rasterisers** – scalar, SSE, and AVX backends selected at runtime based on CPU capabilities.
- **Shader support** – C++ callable objects (std::function) for vertex, geometry and pixel shaders; easy to integrate custom shading logic.
- **Occlusion query** – hardware‑style asynchronous occlusion queries with per‑draw call visibility results. Backed by a separate SIMD‑optimised query rasteriser that counts visible samples.
-…
