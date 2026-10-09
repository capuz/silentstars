---
repo: "gpustack/runner"
name: "runner"
description: "Collection of Dockerfiles to build images for various inference services across different accelerated backends."
readmeQualityOk: true
url: "https://github.com/gpustack/runner"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 16
forks: 16
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-08-11T06:02:34Z"
lastCommitAt: "2026-10-09T18:56:44Z"
lastReleaseAt: "2025-11-08T13:25:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 73
maintainers: ["yxf0314", "thxCode", "lemisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f27577b67d07b33f8b904923cec28f4ac7d4ef75801c3d7e8808ac8ea681a07/gpustack/runner"
---

# GPUStack Runner

GPUStack Runner registers accelerated backends and inference services for GPUStack.
This repository maintains the Python library, container recipes, and measured runner catalog.

## Features

- Register accelerated inference services for GPUStack: vLLM, SGLang, MindIE, and VoxBox.
- Select runners with the Python API by backend, service, and dependency constraints, backed by the measured package catalog.
- Build runner images from the maintained container recipes in `pack/`.

### Supported runners

Each cell shows the newest supported engine version with its runtime line, and every supported version is listed in [Supported runners](https://github.com/gpustack/runner/blob/HEAD/docs/supported-runners.md).

| Backend | vLLM | SGLang | MindIE | VoxBox |
| --- | --- | --- | --- | --- |
| [Ascend CANN](https://github.com/gpustack/runner/blob/HEAD/docs/supported-runners.md#ascend-cann) | `0.23.0` (9.1) | `0.5.12.post1` (8.5) | `2.3.0` (8.5) | |
| [Iluvatar CoreX](https://github.com/gpustack/runner/blob/HEAD/docs/supported-runners.md#iluvatar-corex) | `0.8.3` (4.2) | | | |
| [NVIDIA…
