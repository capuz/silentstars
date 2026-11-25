---
repo: "LaoBro/ComfyUI-GPU-Tuning"
name: "ComfyUI-GPU-Tuning"
description: "Measured runtime tuning for ComfyUI: per-architecture kernel selection, int8 linear tiles, butterfly convrot rotation, attention kernels (gfx906 first-class)"
originalDescription: "Measured runtime tuning for ComfyUI: per-architecture kernel selection, int8 linear tiles, butterfly convrot rotation, attention kernels (gfx906 first-class)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LaoBro/ComfyUI-GPU-Tuning"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["amd", "amdgpu", "attention", "comfyui", "comfyui-custom-node", "gfx906", "gpu-tuning", "hip", "int8", "mi50"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-12T04:21:57Z"
lastCommitAt: "2026-11-24T19:03:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["LaoBro", "keongmeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/336f6326fda3cc86b34eb44132a7ed5bf2185c68ffd7a1960e789149f044cfba/LaoBro/ComfyUI-GPU-Tuning"
---

# ComfyUI-GPU-Tuning

Comprehensive measurement and tuning of ComfyUI's model inference implementations: int8 linear, attention, VAE, text encoder, and single-token decoding. **Does not modify ComfyUI source code**; everything is installed as runtime wrappers. `COMFY_GPU_TUNE=off` disables all of it. Which optimizations are enabled is determined by measured data; GPUs that have not been measured keep the generic path.

## Measured results (MI50 32 GB):

| Model | Parameters | Node disabled | Node enabled |
|---|---|---|---|
| Qwen-Image 2.1 | 1024²              | 19.73 s/it | 3.55 s/it |
| Qwen3.5-9B     | 4096 context       | 1.27 it/s  | 37 it/s   |
| SDXL           | 1024² batch_size 4 | 4.85 s/it  | 3.49 s/it |

## Installation

1. Clone the repository into the ComfyUI custom nodes directory
```bash
git clone https://github.com/LaoBro/ComfyUI-GPU-Tuning custom_nodes/ComfyUI-GPU-Tuning
```
2. See [docs/PORTING.md](https://github.com/LaoBro/ComfyUI-GPU-Tuning/blob/HEAD/docs/PORTING.md) for measurement and tuning; this can be handed off to an agent to complete automatically
