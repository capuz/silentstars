---
repo: "yanfei0725/dsh-qwen-paint"
name: "dsh-qwen-paint"
description: "DSH plugin / DeepSeek Harness: local text-to-image, image-to-image, local inpainting, element removal, four-direction outpainting, and high-resolution upscaling. Calls Qwen-Image 2.1 / official Turbo through a local ComfyUI. Image data travels only over the 127.0.0.1 loopback, requires no API key, and has zero call cost. Windows / Linux, NVIDIA / Intel Arc / AMD GPUs."
originalDescription: "DSH 插件 / DeepSeek Harness：本地文生图、图生图、局部重绘、元素移除、四向扩图与高清放大。经本机 ComfyUI 调用 Qwen-Image 2.1 / 官方 Turbo，出图数据仅走 127.0.0.1 回环，无需 API 密钥、零调用费用。Windows / Linux，NVIDIA / Intel Arc / AMD 显卡。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yanfei0725/dsh-qwen-paint"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["amd-rocm", "comfyui", "cross-platform", "deepseek-harness", "dsh-plugin", "gpu-acceleration", "image-generation", "intel-arc", "linux", "local-first"]
stars: 35
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-10T14:27:32Z"
lastCommitAt: "2026-11-10T14:49:33Z"
lastReleaseAt: "2026-10-14T08:49:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 45
maintainers: ["yanfei0725"]
openGraphImageUrl: "https://opengraph.githubassets.com/80306691aa9819c7e9107344e376b11c3cbe9117737a8a5c955cd73d386a58e3/yanfei0725/dsh-qwen-paint"
---

# dsh-qwen-paint · (Drawing) Qwen (Optimized Edition)

A local image generation and editing plugin for **DeepSeek Harness**. It calls **Qwen-Image 2.1 / official Turbo** models through a local **ComfyUI** instance, enabling text-to-image, 1–3 image editing, local inpainting, element removal, and four-direction outpainting within the conversation. Results are saved to disk and displayed directly in the session interface.

## Features

| Capability | Tool | Description |
| --- | --- | --- |
| Text-to-image | `draw_image` | Generates images from prompts; finished output is saved to disk and shown directly in the session |
| Image-to-image / multi-reference image editing | `draw_image` | 1–16 reference images (since 0.19.0), wired in by index to `images.image_N` |
| Local inpainting | `inpaint_image` | Redraws within the mask, then crops and pastes back |
| Element removal | `remove_image` | Removes objects within the mask and fills in the background |
| Four-direction outpainting | `outpaint_image` | Expands up / down / left / right by percentage |
| High-resolution upscaling | `upscale_image` | Shares the same node graph as the built-in upscaler |

- **Local, no API**: Image data…
