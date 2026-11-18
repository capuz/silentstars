---
repo: "shengdaklp99/ComfyUI-lyw-MA-Loader"
name: "ComfyUI-lyw-MA-Loader"
description: "Powerful LoRA loader for ComfyUI: presets, folders, multi-select, Civitai metadata and previews, optional Lora Manager integration."
readmeQualityOk: true
url: "https://github.com/shengdaklp99/ComfyUI-lyw-MA-Loader"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [76, 23]
topics: ["comfyui", "comfyui-custom-node", "comfyui-node", "lora", "stable-diffusion"]
stars: 47
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-16T02:35:50Z"
lastCommitAt: "2026-11-18T12:07:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 9
maintainers: ["shengdaklp99"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbf38bdb48f6a55c87e3c6aa5d4d021fd12fd05c8ced6e5b3a50560434f42f18/shengdaklp99/ComfyUI-lyw-MA-Loader"
---

# ComfyUI-lyw-MA-Loader

A standalone, visual LoRA loader node for ComfyUI — organize LoRAs into groups, manage presets and favorites, fetch Civitai previews and trigger words, and optionally stay in sync with [Lora Manager](https://github.com/willmiao/ComfyUI-Lora-Manager).

中文说明：[README.zh.md](https://github.com/shengdaklp99/ComfyUI-lyw-MA-Loader/blob/HEAD/README.zh.md)

## Changelog

Only notable changes are listed here; minor visual or text tweaks are omitted.

### 1.0.7

- Added ComfyUI Desktop compatibility by replacing native prompt/confirm/alert dialogs with in-page dialogs across presets, folders, weights, and metadata actions

### 1.0.5

- Added author recommended weights: row badges, metadata refresh statistics, and one-click apply
- Recommended weights are detected and saved from every metadata crawl path; newly added LoRAs inherit saved values
- The LoRA info dialog shows recommended weight; LORA string imports sync trigger words and recommended weights
- The metadata manager only lists LoRAs whose Civitai info has a recommendation but local info does not; items without one are skipped
- Added a layout option to hide the recommended-weight column
