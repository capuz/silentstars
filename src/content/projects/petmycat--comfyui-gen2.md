---
repo: "petmycat/ComfyUI-gen2"
name: "ComfyUI-gen2"
description: "Some custom nodes made for ComfyUI to accommodate things like QwenImage 2512's ControlNet Union Fun model released by AlibabaPAI. "
readmeQualityOk: true
url: "https://github.com/petmycat/ComfyUI-gen2"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 28]
stars: 24
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-29T09:55:15Z"
lastCommitAt: "2026-10-23T09:33:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 23
maintainers: ["petmycat"]
openGraphImageUrl: "https://opengraph.githubassets.com/c949375217275bf00fbfbef9d4f6669b28065f92f81d8f3d6ee4345f2edaf250/petmycat/ComfyUI-gen2"
---

# ComfyUI-gen2

Custom nodes for API-driven workflows, LanPaint inpainting, and everyday image and text tasks.

## API panels

### Gen2 Input Panel

Bring a workflow's controls into one node. Define up to 32 named inputs: text, integers, decimals, booleans, images, dropdown choices, and seeds.

Set defaults, numeric ranges, and step sizes in **Configure**. Upload images from the panel and choose whether seeds stay fixed or change between runs. Connect each parameter to the part of your workflow it controls.

### Gen2 Output Panel

Collect named results from your workflow in one place. Preview and save images, inspect text and numeric results, and copy the combined inputs and outputs as JSON.

Connect the Input Panel's **PANEL_LINK** output to this node to keep each run's parameters alongside its results. Together, the panels define the inputs and outputs for workflows you call through an API.

## LanPaint inpainting

### Gen2 LanPaint Soft Denoise Patch

Use a soft mask to control how strongly LanPaint preserves the source image across an edit. Adjust blending strength over the sampling steps, and choose whether the reference follows the original image, the latest generated…
