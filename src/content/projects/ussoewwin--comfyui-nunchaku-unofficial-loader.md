---
repo: "ussoewwin/ComfyUI-nunchaku-unofficial-loader"
name: "ComfyUI-nunchaku-unofficial-loader"
description: "HSWQ fp8e4m3 Loader, Upscaler, detailer, however, Those nodes are also compatible with HSWQ, as well as the more common FP8E4M3 models."
url: "https://github.com/ussoewwin/ComfyUI-nunchaku-unofficial-loader"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-25T07:04:15Z"
lastCommitAt: "2026-06-23T23:26:54Z"
lastReleaseAt: "2026-01-16T01:04:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 14
maintainers: ["ussoewwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1c085b9137c8970e5cde908eddae6686c14bd1c7a9e787bbefb9d7e140db2c/ussoewwin/ComfyUI-nunchaku-unofficial-loader"
---

# ComfyUI-HSWQ-and-unofficial-nunchaku-loader

</p>

## ⚠️ IMPORTANT NOTICE – SDXL SVDQ DEPRECATION

After extensive long-term testing, repeated real-world benchmarking, and significant development effort devoted specifically to improving generation speed and VRAM efficiency, active development of SDXL SVDQ (4-bit) support in this repository has been discontinued.

Throughout this process, multiple optimization strategies were evaluated, including kernel behavior analysis, runtime integration adjustments, and execution-path tuning. However, despite these efforts, the fundamental limitations of SDXL SVDQ remained unchanged.

For SDXL models, SVDQ / FP4 quantization does **NOT** provide practical advantages over standard fp16 execution:

- No consistent generation speed improvement, even after extensive tuning
- No meaningful VRAM reduction in real-world usage scenarios
- Additional runtime overhead caused by fp16 conversion, kernel dispatch, and integration costs

While a reduction in model file size was achieved, this factor alone is insufficient to justify continued SDXL SVDQ support, given the lack of runtime and memory efficiency benefits.

As a result:

- SDXL SVDQ models…
