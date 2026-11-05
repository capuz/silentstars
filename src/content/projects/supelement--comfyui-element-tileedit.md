---
repo: "supElement/ComfyUI-Element_TileEdit"
name: "ComfyUI-Element_TileEdit"
description: "A node designed specifically for image editing models—supporting tiled refinement, editing, and upscaling—compatible with FLUX.3/FLUX.2 klein, Qwen-Image 2.1 / Edit 2509 / 2511,  Krea 2+lora and Moss +lora, while ensuring cross-tile consistency."
originalDescription: "A node designed specifically for image editing models—supporting tiled refinement, editing, and upscaling—compatible with FLUX.3/FLUX.2 klein, Qwen-Image 2.1 / Edit 2509 / 2511,  Krea 2+lora and Moss +lora, while ensuring cross-tile consistency."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/supElement/ComfyUI-Element_TileEdit"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 33]
topics: ["comfyui-nodes", "comfyui-workflow", "high-definition-graphics", "qwen-image", "refine", "tiled", "upscale-photo", "flux2-klein", "krea2", "qwen-image-2-1"]
stars: 20
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-10T10:01:05Z"
lastCommitAt: "2026-11-05T00:22:48Z"
lastReleaseAt: "2026-10-11T06:19:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 70
undervaluedScore: 34
maintainers: ["supElement", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3285381b892a43bd56d9400d69acbe23d7edb7c7ae52e9f4b9b97b3cc162d363/supElement/ComfyUI-Element_TileEdit"
fundingLinks: ["KO_FI:https://ko-fi.com/supElement"]
---

# ComfyUI-Element_TileEdit

A ComfyUI extension for tiled refinement / editing / upscaling designed specifically for image editing models (single image only), providing powerful tile control and local refinement capabilities.
Supported models: Qwen-Image 2.1 / Edit 2509 / 2511, FLUX.3 / FLUX.2 klein, Krea2 + identity_edit lora, Moss + Moss-Image-Edit lora.

✨ Tiled upscaling: say goodbye to the cross-tile tearing of traditional img2img.
Uses tile references to ensure cross-tile consistency. You can confidently raise the Denoise repaint strength to 0.7–1.0 while perfectly preserving the original image's character identity, structure, and texture details. Supports a custom reference strength per sampling step, precisely balancing "repair strength" and "consistency." This is something traditional img2img tiled upscaling cannot do.

✨ Tile control and local refinement: spatial tiles replace masks.
Manual split mode (by Manual) provides true "tile-level semantic isolation" and pixel-level control. For example, you can precisely box-select the layer containing the "white shirt" and enter only "change to a blue shirt" in that layer's Prompt. Unselected areas such as the background, hair,…
