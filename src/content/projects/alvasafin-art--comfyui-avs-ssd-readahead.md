---
repo: "alvasafin-art/ComfyUI-AVS-SSD-ReadAhead"
name: "ComfyUI-AVS-SSD-ReadAhead"
description: "Speed up ComfyUI model loading on slow SSDs with adaptive sequential read-ahead for Windows."
readmeQualityOk: true
url: "https://github.com/alvasafin-art/ComfyUI-AVS-SSD-ReadAhead"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-08T15:57:59Z"
lastCommitAt: "2026-08-30T09:26:11Z"
lastReleaseAt: "2026-08-08T16:22:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 18
maintainers: ["alvasafin-art"]
openGraphImageUrl: "https://opengraph.githubassets.com/52483a34956946fd6a978fbdadd274ccd54d98dc386cac773147882d271279df/alvasafin-art/ComfyUI-AVS-SSD-ReadAhead"
---

# ComfyUI-AVS-SSD-ReadAhead

**Speed up ComfyUI model loading and model switching on slower SSDs on Windows.**

> **Status:** Windows-only, GPU-vendor neutral in the ReadAhead code path.  
> **Current patch:** v1.0.0, rebuilt around the current lifecycle and protections of ComfyUI PR #15538 as of 2026-08-27.  
> **Activation:** standalone custom node + Application Settings toggle. No ReadAhead CLI argument is added or required.

## What it does

AVS SSD ReadAhead starts a short-lived helper Python process when ComfyUI begins loading a large `.safetensors` or `.sft` file. The helper reads the file sequentially so Windows can populate its normal file cache while ComfyUI continues through its standard model-loading path.

ComfyUI remains authoritative. The helper never replaces the loader and never modifies model weights, sampling, VRAM residency, mmap ownership, device transfers, unload policy, GPU synchronization, or image quality.

The optimization is mainly useful when storage I/O is a bottleneck: SATA SSDs, older SSDs, external SSDs, or other relatively slow storage. Fast NVMe systems may see a smaller benefit or no meaningful benefit.

## v1.0 safety model

The old standalone…
