---
repo: "joshuaswarren/omarchy-mlx"
name: "omarchy-mlx"
description: "MLX-compatible Vulkan and ANE backends for Apple Silicon running Linux."
readmeQualityOk: true
url: "https://github.com/joshuaswarren/omarchy-mlx"
homepage: "https://joshuaswarren.github.io/omarchy-mlx/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [52, 35]
stars: 83
forks: 9
openIssues: 3
closedIssues: 11
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-08-31T22:48:50Z"
lastCommitAt: "2026-10-08T10:51:32Z"
lastReleaseAt: "2026-09-06T14:40:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["joshuaswarren"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d69426317708e1ee0c975d957a6a8cc56bb0a257dfa44b2df6d8263c8c9e407/joshuaswarren/omarchy-mlx"
fundingLinks: ["GITHUB:https://github.com/joshuaswarren", "BUY_ME_A_COFFEE:https://buymeacoffee.com/joshuaswarren"]
---

# omarchy-mlx

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

## What you get

- The `mlx` Python module with the Vulkan GPU backend. The distribution
  name is `mlx-omarchy`; the module stays `mlx`. Upstream source is
  fetched at a pinned commit, and this project's code lives in
  `overlay/` and `patches/`. The tree stays a small patch-set, not a
  fork.
- MLX Chat, a local web app for chat and comparing options, with a
  browser UI and a terminal mode. The install registers it in the
  launcher and sets up a user service that keeps the loaded pair ready
  across logins.
- `mlx-omarchy-serve`, a serving…
