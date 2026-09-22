---
repo: "triton-lang/Triton-to-tile-IR"
name: "Triton-to-tile-IR"
description: "incubator repo for CUDA-TileIR backend"
readmeQualityOk: true
url: "https://github.com/triton-lang/Triton-to-tile-IR"
language: "MLIR"
languages: ["MLIR", "Python", "C++"]
languagePcts: [38, 34, 27]
stars: 161
forks: 15
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 308
recentReleases: 3
createdAt: "2025-12-13T01:55:47Z"
lastCommitAt: "2026-09-22T08:45:18Z"
lastReleaseAt: "2026-09-17T10:04:48Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 36
maintainers: ["glassmanK", "lezcano", "Jokeren"]
openGraphImageUrl: "https://opengraph.githubassets.com/d713344ba0675cfec3276c077355afd1c57039296b22ca38022b0c3e6adae965/triton-lang/Triton-to-tile-IR"
---

# Triton CUDA Tile IR Backend
This incubator repo adds the CUDA Tile IR backend to Triton. Users can enable the CUDA Tile IR backend by setting the environment variable `ENABLE_TILE=1`. This branch uses Triton 3.7, public CUDA Tile IR v13.4.0 sources, and matching 13.4.59 compiler and runtime components. Set `ENABLE_TILE=1` before importing Triton.

## Getting Started

Download a wheel matching your Python version and platform from the
[releases](https://github.com/triton-lang/Triton-to-tile-IR/releases), then follow
[INSTALL.md](https://github.com/triton-lang/Triton-to-tile-IR/blob/HEAD/INSTALL.md) for installation and environment activation.
The default backend is PTX; set `ENABLE_TILE=1` before importing Triton to select
CUDA Tile IR.

For configuration examples and tuning guidance, see
[Performance Tuning Tips](https://github.com/triton-lang/Triton-to-tile-IR/blob/HEAD/third_party/tileir/PerformanceTuningTips.md).
For upstream project information, see [the original Triton README](https://github.com/triton-lang/Triton-to-tile-IR/blob/HEAD/README.original.md).

## How to install?
doesn't change
```
pip install -e .
```

## How to run CUDA Tile IR Backend?

```bash
export…
