---
repo: "MPanknin/kiln-render"
name: "kiln-render"
description: "A WebGPU-native out-of-core rendering system for large virtualized volumetric data."
readmeQualityOk: true
url: "https://github.com/MPanknin/kiln-render"
homepage: "https://www.kilnrender.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["large-scale-dataset", "out-of-core", "raymarching", "virtual-texturing", "volume-rendering", "webgpu", "wgsl"]
stars: 62
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T10:50:58Z"
lastCommitAt: "2026-09-27T09:27:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 36
maintainers: ["MPanknin", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1167487166/43e7a8a4-42ab-4273-a2e3-18efb764ff99"
---

# Kiln

A WebGPU-native out-of-core volume rendering system for large virtualized volumetric datasets.

Kiln streams multi-gigabyte volumes over HTTP, rendering them at interactive framerates using a bounded GPU residency/atlas cache and virtual-texture indirection. It handles single-channel and multichannel OME-Zarr datasets (up to 4 channels).

> **v0.4.1** — Multichannel rendering is in **beta**; see [Multichannel](https://github.com/MPanknin/kiln-render/blob/HEAD/docs/rendering/multichannel.md) for details and known limitations.

**Documentation:** New to Kiln? Start with the [Guide](https://github.com/MPanknin/kiln-render/blob/HEAD/docs/guide/introduction.md), or browse the [full docs index](https://github.com/MPanknin/kiln-render/blob/HEAD/docs/README.md).

---

*Chameleon CT scan — 2160 MB, 1024 × 1024 × 1080 @ 16-bit · [Live demo →](https://kilnrender.com/app/?mode=dvr&wc=0.35&ww=0.55&iso=0.20&tf=grayscale&up=-y&scale=0.5&cam=0.070%2C3.630%2C3.930%2C0.108%2C0.001%2C-0.066) · [Gallery →](https://kilnrender.com/gallery.html)*

## Install

```bash
npm install kiln-render
```

Ships as an ES module with bundled dependencies and TypeScript types (including `@webgpu/types`) — no…
