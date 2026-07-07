---
repo: "sepahead/melkor"
name: "melkor"
description: "Gaussian splatting pipelines & depth analysis for 3D reconstruction (Python/C++)."
readmeQualityOk: true
url: "https://github.com/sepahead/melkor"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [41, 23]
topics: ["3d-reconstruction", "computer-vision", "depth-estimation", "gaussian-splatting", "point-cloud", "python"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-06T20:48:39Z"
lastCommitAt: "2026-07-07T06:38:51Z"
lastReleaseAt: "2026-07-07T06:33:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 34
maintainers: ["sepahead"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d0f93de43444f327458a917c05638e17550d7c5379a95581d3ea1433f3e6aba/sepahead/melkor"
---

# Melkor

**A cross-platform 3D Gaussian Splatting toolkit — conversion, training pipelines, scene completion, and a web viewer.**

[Quick Start](#quick-start) ·
[Features](#features) ·
[Usage](#usage) ·
[Architecture](#architecture) ·
[Documentation](#documentation) ·
[Contributing](#contributing)

</div>

---

Melkor turns meshes and photo sets into 3D Gaussian splat scenes and gives you the tools to refine, compress, complete, and view them. A single CLI covers GLB/PLY/SPZ conversion with four quality tiers, densification-based scene completion, and GPU acceleration on Metal (macOS) and CUDA (Linux) with a bit-consistent CPU fallback. Around the core sit curated training pipelines (OpenSplat, gsplat, LichtFeld-Studio), feedforward reconstruction (Depth Anything 3), and a SparkJS web viewer with a Tauri desktop shell.

## Features

**Core CLI**
- **Four conversion modes** — Basic (fast vertex-to-splat), Enhanced (k-NN adaptive scale + surface alignment), Fit (differentiable-rendering optimization on Metal), Feedforward (pretrained networks)
- **Format support** — GLB/glTF → PLY/SPZ, PLY ↔ SPZ (SPZ compresses ~90% vs PLY, including spherical-harmonics data)
- **Scene completion**…
