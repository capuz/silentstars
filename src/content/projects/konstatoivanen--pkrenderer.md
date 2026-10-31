---
repo: "konstatoivanen/PKRenderer"
name: "PKRenderer"
description: "A Physically Based Vulkan Renderer."
readmeQualityOk: true
url: "https://github.com/konstatoivanen/PKRenderer"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["vulkan", "graphics", "bloom", "rendering-engine", "rendering", "global-illumination", "fog", "glsl", "lighting", "pbr"]
stars: 34
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-11-22T11:18:11Z"
lastCommitAt: "2026-10-31T19:00:57Z"
lastReleaseAt: "2025-01-19T17:45:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["konstatoivanen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e87652ad6db59b7e60977c46d70e8602ea0efeca70ea9abf9aa813d2566eaf38/konstatoivanen/PKRenderer"
---

# PK Renderer

**A physically based real-time renderer made with C++, GLSL & Vulkan.**

The goal of this project is to be a feature rich & performant renderer without any precomputed scene structures or light transport. 
The visual target is to get as close as possible to path-traced reference lighting.
The performance target is to stay at a stable 6.94ms/144hz framerate at 1080p on a RTX 2080 TI.
However, this is ultimately a hobby project & thus likely to remain perpetually a work in progress.

  
## Previews

--- 

## Features

- Screen space radiance cache (for ray traced radiance).
- Voxel cone traced world space radiance cache.
- Basic ReSTIR for diffuse hits.
- Recurrent blur denoiser.
- Volumetrics integration.
- Rough specular approximation from diffuse SH1.
- Async TLAS & BLAS builds.

  
  - Spot, point & directional lights.
  - IES profile support.
  - Spherical area light estimation for all types.
  - Poisson PCF shadow filtering.
  - PCSS shadow filtering for directional lights.
  - [Bend screen space shadows.](https://www.bendstudio.com/blog/inside-bend-screen-space-shadows/)
  - Directional shadow cascades.
  - Clustered forward rendering.
  

  - PBR BxDF
    -…
