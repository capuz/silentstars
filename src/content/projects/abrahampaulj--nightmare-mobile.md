---
repo: "AbrahamPaulJ/nightmare-mobile"
name: "nightmare-mobile"
description: "On-device, ComfyUI-style node graph for image/video diffusion on Android. Run MiniMax H3 and WAN 2.2 14B on the Qualcomm Hexagon NPU. SD1.5, SDXL, Flux, Z-Image, Anima, Qwen Image 2.1, Krea 2 & MOSS Image. Inpainting, outpainting, ControlNet, LoRA, IP-Adapter & LivePortrait. Fully offline, no server, no account."
readmeQualityOk: true
url: "https://github.com/AbrahamPaulJ/nightmare-mobile"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["android", "comfyui", "edge-ai", "image-generation", "inpainting", "jetpack-compose", "kotlin", "local-ai", "mobile-ai", "npu"]
stars: 234
forks: 21
openIssues: 18
closedIssues: 101
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-09-07T10:08:28Z"
lastCommitAt: "2026-11-14T21:57:53Z"
lastReleaseAt: "2026-09-18T13:29:42Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine", "under_pressure"]
healthScore: 86
undervaluedScore: 31
maintainers: ["AbrahamPaulJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcdb57adf2b848e8872c823217771d7893d529cf6ac786f260c475271f059e01/AbrahamPaulJ/nightmare-mobile"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/abrahampaulj"]
discussionCount: 0
---

# Nightmare Mobile

**A node graph for image and video generation on Android, running on the Qualcomm Hexagon NPU.**
Text to image, image to image, inpainting, upscaling, image editing, text to video and motion transfer. All on
the phone. No server, no account, no cloud.

**[Download the APK](https://github.com/AbrahamPaulJ/nightmare-mobile/releases/latest)** ·
**[User guide](https://abrahampaulj.github.io/nightmare-mobile/)** ·
**[Report a problem](https://github.com/AbrahamPaulJ/nightmare-mobile/issues)**

## What your phone needs

Android 12 or newer, arm64, a Snapdragon with a Hexagon NPU. Models are not in the APK: pick one
and it downloads on first use; the app shows which ones your phone can run. On a phone without a
Snapdragon (MediaTek Dimensity, Exynos, Google Tensor) the app says so and offers no downloads: Text to image and
Image to image still run there with an imported SDXL MNN or SD 1.5 CPU model, on the GPU or CPU.

| chip | runs |
|---|---|
| Snapdragon 888 and newer | SD 1.5 |
| 8 Gen 1, 8+ Gen 1 | Anima Turbo 1.1 and Anima 2.9B on the DiT engine, run on the CPU: on testers' phones the NPU never finished a DiT step there, so a 512x512 picture takes about 15 to 20…
