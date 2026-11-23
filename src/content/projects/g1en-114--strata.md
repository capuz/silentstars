---
repo: "G1en-114/strata"
name: "strata"
description: "Strata — autoregressive layered 2D-Gaussian painter with a deployment, quantization and kernel toolchain"
originalDescription: "Strata — autoregressive layered 2D-Gaussian painter with a deployment, quantization and kernel toolchain"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/G1en-114/strata"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [50, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-15T13:51:28Z"
lastCommitAt: "2026-11-23T13:32:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["G1en-114"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca62b95711fd03962b9ebcab6d40ea60885896c7c873eab368945440a5fd599/G1en-114/strata"
---

# Strata: a generative model that paints stroke by stroke, plus its deployment, quantization and kernel toolchain

The model does not output pixels directly. In the order of semantic layers, it outputs one **generalized Gaussian stroke** at a time (position, size, angle, edge hardness, color, opacity) and **Bézier lines** (since v3, used for hair strands and outlines). The strokes stack up to form the painting. The whole pipeline is built from scratch: data production → training and reinforcement learning → evaluation → ONNX export → C++ inference runtime → quantization → GPU kernels.
The focus of this project is **deployment and high-performance computing**: each optimization first profiles the bottleneck, then changes the code, then proves the result is unchanged, and finally measures speed.
