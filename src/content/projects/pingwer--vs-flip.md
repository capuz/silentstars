---
repo: "PingWer/vs-flip"
name: "vs-flip"
description: "VapourSynth implementation of NVIDIA FLIP Metric for perceptual quality comparison between videos."
readmeQualityOk: true
url: "https://github.com/PingWer/vs-flip"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-08-01T15:52:11Z"
lastCommitAt: "2026-10-31T09:54:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["PingWer"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f94d4682776d3afcda985de2def28d00f7a1a68a89ac9717657208520117e1e/PingWer/vs-flip"
---

# vsflip

**vsflip** is a high-performance native **VapourSynth (API 4)** plugin and Python wrapper for NVIDIA's [FLIP perceptual metric](https://github.com/NVlabs/flip). It computes frame-by-frame error maps and mean error scores that quantify visual differences between a reference and a test video based on human visual perception (modeling contrast sensitivity, color adaptation, and spatial frequency).

---

## 📦 Features

- **Dual-Backend Acceleration**:
  - **CUDA (GPU)**: Ultra-fast evaluation on NVIDIA GPUs (RTX 2000 series and newer: Turing `sm_75`, Ampere `sm_80`/`sm_86`, Ada Lovelace `sm_89`, Hopper `sm_90`, and future Blackwell architectures via PTX).
  - **CPU (OpenMP)**: Highly optimized multi-threaded fallback using separable 1D filters.
- **Modern VapourSynth API 4**: Native `fmParallel` multithreading without Python frame-loop bottlenecks or memory growth.
- **Grayscale and Magma Heatmaps**: Output error maps as 1-channel float (`GRAYS`) or 3-channel RGB (`RGBS`) using the official FLIP Magma colormap.
- **Native Frame Properties**: Every frame carries the perceptual score in `frame.props["meanFLIPError"]` (where lower values mean closer visual match; `0.0` is…
