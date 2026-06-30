---
repo: "ROCm/FlyDSL"
name: "FlyDSL"
description: "FlyDSL is the Python front‑end of the project: Flexible LaYout DSL."
url: "https://github.com/ROCm/FlyDSL"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["amdgpu", "cute", "gpu", "mlir", "performance", "python-dsl", "deep-learning"]
stars: 218
forks: 74
openIssues: 56
closedIssues: 76
watchers: 9
contributors: 2349
recentReleases: 2
createdAt: "2025-11-23T14:25:05Z"
lastCommitAt: "2026-06-30T06:51:43Z"
lastReleaseAt: "2026-06-17T11:50:56Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 32
maintainers: ["sjfeng1999", "coderfeli", "jhinpan"]
openGraphImageUrl: "https://opengraph.githubassets.com/086ce4f5e954fc5f85dcc9fcb6121e6a9cf761f5b0e890d2ef758b70dc03b104/ROCm/FlyDSL"
discussionCount: 1
---

# FlyDSL (<span style="color:#2f81f7"><strong>F</strong></span>lexible <span style="color:#2f81f7"><strong>l</strong></span>ayout p<span style="color:#2f81f7"><strong>y</strong></span>thon DSL)
> A Python DSL and a MLIR stack for authoring high‑performance GPU kernels with explicit layouts and tiling. 

FlyDSL is the **Python front‑end** of the project: a *Flexible Layout Python DSL* for expressing
tiling, partitioning, data movement, and kernel structure at a high level.

**FlyDSL**: FlyDSL is powered by the Fly dialect:
an end‑to‑end, MLIR‑native compiler stack for GPU kernels. Its core is the `fly` dialect—a first‑class
layout IR with explicit algebra and coordinate mapping, plus a composable lowering pipeline to GPU/ROCDL.

## Overview

- **FlyDSL (Python DSL)**: author kernels in Python and compile them through the Fly dialect
  - Primary package: `python/flydsl/`
  - Kernel examples: `kernels/` (importable as `kernels.*`)
- **Fly dialect**: the layout IR and compiler foundation
  - Core abstractions: `!fly.int_tuple`, `!fly.layout`, `!fly.coord_tensor`, `!fly.memref`
  - Algebra ops: composition/product/divide/partition + coordinate mapping ops
- **Embedded MLIR Python…
