---
repo: "harry7557558/spirula-studio"
name: "spirula-studio"
description: "Cross-vendor 3D Gaussian Splatting trainer - video to splat to mesh, Vulkan or CUDA."
readmeQualityOk: true
url: "https://github.com/harry7557558/spirula-studio"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["3d-gaussian-splatting", "gaussian-splatting", "3d-reconstruction", "3dgs", "computer-vision", "360-camera", "mesh-generation", "cross-vendor", "cuda", "vulkan"]
stars: 458
forks: 41
openIssues: 31
closedIssues: 35
watchers: 16
contributors: 9
recentReleases: 10
createdAt: "2024-05-04T03:03:05Z"
lastCommitAt: "2026-09-19T01:17:46Z"
lastReleaseAt: "2026-09-13T01:51:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 36
maintainers: ["harry7557558", "MotivaCG", "tutudoudou"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1d4bc0cf9a9c9df53028b9a27f9cd3711d50fc1630a1e63a118229044ac5c2c/harry7557558/spirula-studio"
---

# Spirula Studio

&nbsp;
&nbsp;

[**Download**](https://github.com/harry7557558/spirula-studio/releases/) &#8226;
[**Build from Source**](#build-from-source) &#8226;
[**Gallery**](#gallery) &#8226;
[**Web Viewer**](https://harry7557558.github.io/spirula-studio/viewer/)

</div>

Spirula Studio trains 3D Gaussian Splatting models &ndash; from raw photo/video to splat to textured mesh &ndash; in one self-contained binary. No Python/PyTorch, no separate COLMAP install. Runs on NVIDIA, AMD, Intel, and Apple GPUs via Vulkan, trains 10M full-SH Gaussians in 8 GB VRAM, and has native support for fisheye and 360° cameras.

<sup>Dataset credit: [Garage](https://www.kaggle.com/datasets/simonbethke/garage) by Simon Bethke (CC BY-SA 4.0); Flight Systems and Control Lab at UTIAS; MegaDepth-X; Mip-NeRF 360.</sup>

</div>

## Features

- Cross vendor support via Vulkan compute &ndash; Runs on **NVIDIA, AMD, Intel, and Apple** GPUs

- One strategy combining advantages of **MCMC/IGS+/MRNF** &ndash; Sharper results, fewer floaters, from objects to large scenes

- Extreme **VRAM efficiency** with quantized training &ndash; Up to 10 million SH3 Gaussians in 8GB VRAM

- Native **360° camera** and…
