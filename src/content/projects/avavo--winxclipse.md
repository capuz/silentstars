---
repo: "avavo/WinXclipse"
name: "WinXclipse"
description: "Winlator-focused project for Samsung Xclipse GPUs, featuring Exynos-oriented tweaks, wrappers, and Vulkan."
readmeQualityOk: true
url: "https://github.com/avavo/WinXclipse"
language: "Java"
languages: ["Java", "C"]
languagePcts: [47, 44]
stars: 38
forks: 3
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 8
recentReleases: 7
createdAt: "2026-06-06T00:48:08Z"
lastCommitAt: "2026-10-29T21:24:08Z"
lastReleaseAt: "2026-08-28T15:50:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 39
maintainers: ["3mariko", "avavo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1260863973/716724ab-d507-48ab-96d1-f999021b8d8e"
discussionCount: 0
---

# WinXclipse  
  
WinXclipse is an Android project based on Winlator CMOD and adapted for Samsung Exynos devices with Xclipse GPUs.  
  
## What is WinXclipse?  
  
WinXclipse allows Windows applications and games to run on Android by combining:  
  
- Wine and Proton runtimes, including ARM64EC builds  
- CPU translation layers: FEXCore and Box64  
- Graphics stacks: DXVK, VKD3D-Proton, the built-in hybrid Default/CMOD v1/Kirimu wrappers, and downloadable CMOD v2/GameNative/Ref4ik-v6 packages
- Container management for isolated runtime configurations, input controls, diagnostics, and external content delivery  
  
Development is focused on the Exynos/Xclipse platform. Every supported GPU pairing — from Xclipse 530 (RDNA2) through 920, 940/950 (RDNA3) to 960 (RDNA4) — receives dedicated tuning for BCn texture handling, unified-memory-aware VRAM caps, and CPU cluster scheduling on big.LITTLE/DynamIQ Exynos SoCs.  

See [CHANGELOG.md](https://github.com/avavo/WinXclipse/blob/HEAD/CHANGELOG.md) for detailed behavior notes.
  
## Disclaimer  
  
WinXclipse is experimental. Performance, stability, graphics-driver behavior, and game compatibility can vary according to the device,…
