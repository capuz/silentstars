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
lastCommitAt: "2026-09-19T08:14:13Z"
lastReleaseAt: "2025-01-19T17:45:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 53
maintainers: ["konstatoivanen"]
openGraphImageUrl: "https://opengraph.githubassets.com/967ac985a96e7c94d7d1f7cb8fb348eb8661a1a123d81af5305bfc7944c75648/konstatoivanen/PKRenderer"
---

# PK Renderer

**A physically based real-time renderer made with C++, GLSL & Vulkan.**
</div>

The goal of this project is to be a feature rich & performant renderer without any precomputed scene structures or light transport. 
The visual target is to get as close as possible to path-traced reference lighting.
The performance target is to stay at a stable 6.94ms/144hz framerate at 1080p on a RTX 2080 TI.
However, this is ultimately a hobby project & thus likely to remain perpetually a work in progress.

  
## Previews

</div>

</p>

--- 

## Features

<details>
  <summary>Ray Traced Global Illumination</summary>

- Screen space radiance cache (for ray traced radiance).
- Voxel cone traced world space radiance cache.
- Basic ReSTIR for diffuse hits.
- Recurrent blur denoiser.
- Volumetrics integration.
- Rough specular approximation from diffuse SH1.
- Async TLAS & BLAS builds.

</details>

<details>
  <summary>Analytic Lights</summary>
  
  - Spot, point & directional lights.
  - IES profile support.
  - Spherical area light estimation for all types.
  - Poisson PCF shadow filtering.
  - PCSS shadow filtering for directional lights.
  - [Bend screen space…
