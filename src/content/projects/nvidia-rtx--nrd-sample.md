---
repo: "NVIDIA-RTX/NRD-Sample"
name: "NRD-Sample"
description: "NRD sample and sandbox, demonstrating path tracing and denoising best practices"
readmeQualityOk: true
url: "https://github.com/NVIDIA-RTX/NRD-Sample"
language: "C++"
languages: ["C++", "HLSL"]
languagePcts: [59, 38]
stars: 212
forks: 33
openIssues: 3
closedIssues: 20
watchers: 17
contributors: 5
recentReleases: 0
createdAt: "2021-09-27T16:49:59Z"
lastCommitAt: "2026-10-30T10:24:30Z"
lastReleaseAt: "2022-10-28T10:50:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["dzhdanNV"]
openGraphImageUrl: "https://opengraph.githubassets.com/59b34d4515c30e53cbb162a7d1612a497b84d5cd0c9f5242415aec2af0f05cbf/NVIDIA-RTX/NRD-Sample"
---

# NRD SAMPLE

NRD Sample is a high-performance playground and reference implementation for path tracing in games. It provides a comprehensive environment to see [*NRD (NVIDIA Real-time Denoisers)*](https://github.com/NVIDIA-RTX/NRD) in action across all possible use cases and compare it directly with *DLSS-RR*. While *NRD* and *DLSS-RR* are highly competitive today, effective comparison requires enabling *NRD* "SH" mode (set via the `NRD_MODE` macro in `Shared.hlsli`). The sample is designed to demonstrate production-ready path tracing best practices suitable for real-time gaming that balance visual fidelity with high performance. A core focus of the project is high-performance glass and transparency rendering. Built on the [*NRI (NVIDIA Rendering Interface)*](https://github.com/NVIDIA-RTX/NRI), the sample is natively cross-platform, supporting both *D3D12* and *Vulkan*. The ideas from the sample are already used in several *AAA* games and game mods.

Features:
- best-in-class performance:
  - RTX 4080 @ 1440p (native) shows ~150 FPS at day time and ~110 FPS at night time in *Bistro* scene (when the importance sampling comes into play)
- fast path tracing based on *Trace Ray…
