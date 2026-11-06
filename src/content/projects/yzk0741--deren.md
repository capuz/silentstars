---
repo: "YzK0741/deren"
name: "deren"
description: "A real-time renderer that chases the newest C++ and graphics API features"
readmeQualityOk: true
url: "https://github.com/YzK0741/deren"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-03T05:08:37Z"
lastCommitAt: "2026-11-06T11:24:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["YzK0741"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae059c87b774a476666782f38083d2dfb1aa7c288a016397aec7342c78db7b70/YzK0741/deren"
---

**deren** is a real-time renderer that chases the newest C++ and graphics API features. Its portable engine uses RHI and GUI contracts to load graphics implementations as DLLs. The current baseline combines C++26 modules, PBR, anime-style toon shading, Gaussian splatting, Slang shaders, and a backend-independent RHI with a Vulkan backend.

> The project was renamed from `vulkan_render` to `deren` on 2026-10-02. Portable modules now use `deren.engine.*` and `deren::engine`; native Vulkan implementations retain `deren.vulkan.*` and `deren::vulkan`.

[Gaussian splatting details and viewer setup](#gaussian-splatting).

Khronos PBR Neutral tone mapping, captured at 1080x960 with fixed cameras on 2026-10-29.
These are material previews with direct sun, shadows, SSAO and temporal/post effects disabled.
The Laevatain half-body and face shots use the GameToon profile with the captured light rig and display transform.
Both were captured directly from the renderer with TAA and FXAA enabled and exposure set to 0.92.
See [`docs/screenshots/README.md`](https://github.com/YzK0741/deren/blob/HEAD/docs/screenshots/README.md) for the capture settings.</sub>

## Build helpers

The repo ships…
