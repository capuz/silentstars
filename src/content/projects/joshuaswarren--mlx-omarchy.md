---
repo: "joshuaswarren/mlx-omarchy"
name: "mlx-omarchy"
description: "MLX-compatible Vulkan and ANE backends for Apple Silicon running Linux."
readmeQualityOk: true
url: "https://github.com/joshuaswarren/mlx-omarchy"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [44, 42]
stars: 53
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-31T22:48:50Z"
lastCommitAt: "2026-09-14T09:12:04Z"
lastReleaseAt: "2026-09-06T14:40:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 37
maintainers: ["joshuaswarren"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c2f1cc9058a067bf36b5a5ef31326b9a5597eccbc91d29f74273a98821f046/joshuaswarren/mlx-omarchy"
---

# mlx-omarchy

MLX on Apple GPU under Linux.

[MLX](https://github.com/ml-explore/mlx) is Apple's array framework. Upstream it runs on Metal, so it runs on macOS. mlx-omarchy is the GPU backend that keeps `import mlx.core as mx` and `mx.gpu` on Apple Silicon Linux through Mesa's Honeykrisp Vulkan 1.4 stack. There is no Metal. GPU work never falls back to CPU tensors.

Open defects live in the [defect ledger](https://github.com/joshuaswarren/mlx-omarchy/blob/HEAD/docs/known-defects.md).

## Demo

https://github.com/user-attachments/assets/7b2326f0-4679-4784-9622-e403b99be853

One-command install on an M1 running Omarchy, the first model download, the streamed answer with its measured tokens per second, and the launcher entry; 2:47, unedited, no narration. Also at [joshuaswarren.github.io/mlx-omarchy](https://joshuaswarren.github.io/mlx-omarchy/).

## Hardware

Apple M1 is verified on [Omarchy](https://github.com/omarchy-mac/omarchy-mac) with Mesa Honeykrisp. Apple M1 Max GPU is measured; T6001 `/dev/accel/accel0` is live. Later SoCs follow.

## Install (v0.4.2)

On an M1 running Omarchy, one command installs the release wheel into a private
venv under `~/.local/share/mlx-omarchy`,…
