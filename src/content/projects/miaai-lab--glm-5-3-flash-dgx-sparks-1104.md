---
repo: "MiaAI-Lab/GLM-5.3-Flash-DGX-Sparks-1104"
name: "GLM-5.3-Flash-DGX-Sparks-1104"
description: "GLM-5.3-Flash on DGX Sparks (ver 1104) with TensorFold"
readmeQualityOk: true
url: "https://github.com/MiaAI-Lab/GLM-5.3-Flash-DGX-Sparks-1104"
homepage: "https://mia-ai.net"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 107
forks: 24
openIssues: 11
closedIssues: 6
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2026-11-04T11:54:11Z"
lastCommitAt: "2026-11-11T11:16:27Z"
status: "newborn"
tags: ["funded"]
healthScore: 70
undervaluedScore: 29
maintainers: ["MiaAI-Lab", "travellingsoldier85", "laidick"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc1d1ceb1ff70ddfcd958ae77327ab451ecbf8b08ca16d3b22f5bf6b47590c08/MiaAI-Lab/GLM-5.3-Flash-DGX-Sparks-1104"
fundingLinks: ["GITHUB:https://github.com/MiaAI-Lab"]
---

> [!IMPORTANT]
> **This is a brand-new recipe, version 1104.** It is not an update of
> [GLM-5.3-Flash-EXL3-2x-DGX-Sparks-TensorFold](https://github.com/MiaAI-Lab/GLM-5.3-Flash-EXL3-2x-DGX-Sparks-TensorFold)
> (the Python-engine recipe and its `zig-engine` branch, which stay as they are). It descends from the lab's
> [2x RTX PRO 6000 recipe](https://github.com/MiaAI-Lab/GLM-5.3-Flash-2x-RTX-PRO-6000-TensorFold): the same engine pin
> and 93 of its patches unchanged, plus a two-Spark launch over the ConnectX-7 link, unified-memory budgeting and twelve
> GB10 patches, every default measured on the pair. Different engine lineage, different patch stack, different numbers.

**Engine: TensorFold 1.1.9** (`tensorfold-native --version`), upstream commit
[`f350cd3e`](https://github.com/ashhart/TensorFold/commit/f350cd3ea253a042e205746928271f9d8f71a82d) plus this recipe's
115 engine patches (`patches/engine/`).

This recipe serves GLM-5.3-Flash from an EXL3 checkpoint on **two NVIDIA DGX Sparks** (GB10, 128 GB unified memory
each) at tensor parallel 2, one rank on each Spark, over their ConnectX-7 link. It uses TensorFold's native Zig/CUDA
server (`tensorfold-native`) built in Docker for…
