---
repo: "joshuaswarren/omarchy-mlx"
name: "omarchy-mlx"
description: "MLX-compatible Vulkan and ANE backends for Apple Silicon running Linux."
readmeQualityOk: true
url: "https://github.com/joshuaswarren/omarchy-mlx"
homepage: "https://joshuaswarren.github.io/omarchy-mlx/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [51, 36]
stars: 90
forks: 11
openIssues: 8
closedIssues: 19
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-08-31T22:48:50Z"
lastCommitAt: "2026-10-12T11:16:02Z"
lastReleaseAt: "2026-09-06T14:40:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 38
maintainers: ["joshuaswarren", "ddalcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/57b19200b179f1db12075ccf70823ec9645f142ab027a6f30977f0fa459bcb85/joshuaswarren/omarchy-mlx"
fundingLinks: ["GITHUB:https://github.com/joshuaswarren", "KO_FI:https://ko-fi.com/joshuaswarren", "CUSTOM:https://www.amazon.com/hz/wishlist/ls/68QP8VI8GBCM"]
---

# omarchy-mlx

Sponsor this work or help stock the lab: [joshuawarren.com/sponsors](https://joshuawarren.com/sponsors)

MLX on the Apple GPU under Linux, and Core ML models on the
Apple Neural Engine.

[MLX](https://github.com/ml-explore/mlx) is Apple's array framework for
machine learning on Apple silicon. Upstream it speaks Metal, so it runs
on macOS only. omarchy-mlx runs the same `import mlx.core as mx` code on
an Apple silicon Mac running
[Omarchy](https://github.com/omacom/omarchy) Linux. The GPU driver is
Mesa's Honeykrisp Vulkan stack. Tensors stay on the GPU. There is no
Metal and no CPU fallback.

It is for people who run Linux on an M1 or M2 Mac. You get local chat,
serving, and speech to text, with no macOS and no cloud account.

## What runs on Omarchy Linux

mlx-lm, oMLX, mlx-serve, TensorFold, sushi, llama.cpp (Vulkan) and MCDMA have been tested on an Apple silicon Mac under Linux. The status of each, with the commit or measurement behind it, is in [docs/ENGINES.md](https://github.com/joshuaswarren/omarchy-mlx/blob/HEAD/docs/ENGINES.md).

## What you get

- The `mlx` Python module with the Vulkan GPU backend. The distribution
  name is `mlx-omarchy`; the module…
