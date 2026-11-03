---
repo: "1314521gjy/ComfyUI-Local-Infinite-Canvas"
name: "ComfyUI-Local-Infinite-Canvas"
description: "ComfyUI-Local Infinite Canvas: local Infinite Canvas × ComfyUI integration (based on basketikun/infinite-canvas, MIT)"
originalDescription: "ComfyUI-本地无限画布：本地 Infinite Canvas × ComfyUI 集成（基于 basketikun/infinite-canvas, MIT）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1314521gjy/ComfyUI-Local-Infinite-Canvas"
language: "Python"
languages: ["Python", "JavaScript", "TypeScript"]
languagePcts: [53, 24, 23]
stars: 145
forks: 26
openIssues: 12
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-25T11:09:22Z"
lastCommitAt: "2026-11-03T10:52:24Z"
status: "newborn"
tags: ["solo_builder", "under_pressure"]
healthScore: 60
undervaluedScore: 22
maintainers: ["1314521gjy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e00a4daf69ba8f6d0811ce694b366b07b3ff73b39df50e6cba87347e4f9f073/1314521gjy/ComfyUI-Local-Infinite-Canvas"
---

# ComfyUI-本地无限画布 (ComfyUI-Local Infinite Canvas)

A local-first **Infinite Canvas × ComfyUI** integration that connects an open-source infinite canvas, ComfyUI workflows, and a local gateway, without relying on cloud APIs.

> Current version **v0.24.3** (2026-11-01). The GitHub repository slug is `ComfyUI-Local-Infinite-Canvas` (GitHub repository names only support ASCII). The project's Chinese name is **ComfyUI-本地无限画布**.

## Features

- Infinite canvas: text, image, video, configuration, and group nodes; wiring, box selection, export, and auto-save.
- The local gateway exposes ComfyUI workflows as OpenAI-compatible models. The canvas only changes the channel Base URL and does not modify upstream code.
- Images: Z-Image Turbo, Krea2 Aesthetics, MOSS SFT (8-step fast / 50-step high quality, regional layout), and Qwen Image 2.1 (multi-image editing / true-mask local repainting / outpainting).
- Video: MiniMax-H3 text-to-video, first-and-last-frame, and multi-reference, three entry points sharing a balanced dialogue-scene workflow. Supports sampling preview, LoRA cards, and first/last-frame and multi-reference assets.
- Upscaling: ESRGAN fast upscaling, SeedVR2 image…
