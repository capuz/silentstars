---
repo: "Lakonik/ComfyUI-piFlow"
name: "ComfyUI-piFlow"
description: "ComfyUI Nodes for AsymFlow and pi-Flow"
readmeQualityOk: true
url: "https://github.com/Lakonik/ComfyUI-piFlow"
homepage: "https://github.com/Lakonik/LakonLab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["comfyui", "distillation", "generative-ai", "flux", "qwen-image"]
stars: 197
forks: 11
openIssues: 9
closedIssues: 27
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2025-11-07T08:40:09Z"
lastCommitAt: "2026-11-21T12:34:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 25
maintainers: ["Lakonik"]
openGraphImageUrl: "https://opengraph.githubassets.com/35b18eadfd8df7b24a9feb79f32339eff87fb7d4f8687f32f3305faf60d777f1/Lakonik/ComfyUI-piFlow"
---

# ComfyUI Nodes for pi-H3, AsymFlow, and pi-Flow

**ComfyUI-piFlow** is a collection of custom nodes for [ComfyUI](https://github.com/comfyanonymous/ComfyUI) that implement the following model families:
- **pi-H3**
  The fastest MiniMax H3. 2–4 steps, no VAE decoder.
  **[[Workflows](https://github.com/Lakonik/ComfyUI-piFlow/blob/HEAD/docs/piH3.md)]**

- **AsymFlow**
  Generates realistic images in pixel space. 
  **[[Workflows](https://github.com/Lakonik/ComfyUI-piFlow/blob/HEAD/docs/AsymFlow.md)]**

- **pi-Flow**
  Fast few-step generation.
  **[[Workflows](https://github.com/Lakonik/ComfyUI-piFlow/blob/HEAD/docs/piFlow.md)]**

## Installation

**This extension requires ComfyUI version 0.45.0 or higher**. Older ComfyUI releases are no longer supported.

**Please uninstall any non-official pi-H3, AsymFlow, or pi-Flow extensions before installing this extension**, as they may cause compatibility issues.

### ComfyUI Manager

If you are using [ComfyUI Manager](https://github.com/Comfy-Org/ComfyUI-Manager), you can load a [workflow](#workflows) first, and then install the missing nodes via ComfyUI Manager.
