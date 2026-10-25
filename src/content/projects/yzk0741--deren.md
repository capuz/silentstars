---
repo: "YzK0741/deren"
name: "deren"
description: "A modular C++23 real-time renderer featuring PBR, anime-style toon shading, Slang shaders, and a backend-independent RHI with a Vulkan backend."
readmeQualityOk: true
url: "https://github.com/YzK0741/deren"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-03T05:08:37Z"
lastCommitAt: "2026-10-25T09:00:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["YzK0741"]
openGraphImageUrl: "https://opengraph.githubassets.com/4656969c6bd24c2b12aeccca97090abd486235eb0f98790a5e97f1a93a29a1cd/YzK0741/deren"
---

# deren

**deren** is a real-time renderer written in modern C++23 modules. Its portable engine uses RHI and GUI contracts to load graphics implementations as DLLs.

> The project was renamed from `vulkan_render` to `deren` on 2026-10-02. Portable modules now use `deren.engine.*` and `deren::engine`; native Vulkan implementations retain `deren.vulkan.*` and `deren::vulkan`.

[Gaussian splatting details and viewer setup](#gaussian-splatting).

with SSAO, the cascaded shadows, the IBL prefilter and the traced-GI path that has since been removed
(`1162d88`) - captured headlessly at 1080x960 from the scene's own framing, so they can be regenerated rather
than re-taken by hand. The character shot is the character-forward pipeline on a posed anime
model; that session had the `toon shading` combo at `off (plain pbr)`, so the shading response is the smooth
one and the banded cel looks are the combo's other values (see **Cel/toon shading** below). The debug overlay,
the title bar and the taskbar were cropped away. See [`docs/screenshots/README.md`](https://github.com/YzK0741/deren/blob/HEAD/docs/screenshots/README.md) for both.</sub>

## Build helpers

The repo ships setup / build / run…
