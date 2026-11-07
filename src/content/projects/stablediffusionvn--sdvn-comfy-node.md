---
repo: "StableDiffusionVN/SDVN_Comfy_node"
name: "SDVN_Comfy_node"
description: "SDVN custom node for comfyUI"
readmeQualityOk: true
url: "https://github.com/StableDiffusionVN/SDVN_Comfy_node"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [75, 25]
stars: 127
forks: 39
openIssues: 13
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-11-29T04:18:15Z"
lastCommitAt: "2026-11-07T09:29:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 29
maintainers: ["phamhungd"]
openGraphImageUrl: "https://opengraph.githubassets.com/46840577f114a5cf8a92432bd1f25a6d4907741118c6f54e05e96fe5ac5dc136/StableDiffusionVN/SDVN_Comfy_node"
---

# SDVN Comfy Node
**Smart node set, supporting easier and more convenient ways to use ComfyUI**

___
[**Hướng dẫn tiếng việt**](https://github.com/StableDiffusionVN/SDVN_Comfy_node/blob/HEAD/README_vi.md)

[**Installing**](#Install)

[**Guide**](#Guide)
- [✨ Base Node](#BaseNode)
- [🏞️ Image](#Image)
- [📥 Download](#Download)
- [🧬 Merge](#Merge)
- [💡 Creative](#Creative)
- [👨🏻‍💻 Dev](#Dev)
- [💬 API](#API)
- [ℹ️ Info_check](#Info_check)
- [✨ Preset](#Preset)
- [🎭 Mask](#Mask)

[**Example**](#Example)

___
# Overview

- A full toolkit of smart ComfyUI nodes covering loading/downloading, merging, masks, layouts, and API-based generation for SD15, SDXL, Flux, and more.
- Built-in conveniences: auto model-type detection (CFG/sampler/scheduler), translation + dynamic prompt support across text fields, ControlNet/Apply Style presets, and curated model/style libraries (`model_lib*.json`, `lora_lib.json`, `styles.csv`).
- Download helpers for checkpoints, LoRA, ControlNet, upscalers, IPAdapter/InstantID, and image sources (Pinterest/URL/Instagram) with aria2c acceleration when available.
- Utilities for metadata inspection/editing, streamlined wiring (Pipe/Switch/Any nodes), mask…
