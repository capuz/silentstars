---
repo: "woct0rdho/evotensile"
name: "evotensile"
description: "Evolutionary algorithm for hipBLASLt TensileLite config search"
readmeQualityOk: true
url: "https://github.com/woct0rdho/evotensile"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-06-18T11:57:02Z"
lastCommitAt: "2026-07-14T05:54:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["woct0rdho"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5e389ddea3cb9d53a87293a0178da6fa9068ac598a6e609c7a67761f8fffb03/woct0rdho/evotensile"
---

# EvoTensile

Work in progress. README and docs are AI-generated and intended for AI to read.

EvoTensile is a framework for TensileLite kernel tuning using smart search algorithms. It's inspired by [Helion](https://github.com/pytorch/helion), [rocm\_wmma\_gemm](https://github.com/adelj88/rocm_wmma_gemm), [Ductile](https://github.com/ROCm/rocm-libraries/pull/8831), and [GEKO](https://github.com/ROCm/rocm-libraries/pull/8832).

Notable features:
- high-throughput search on whether one shape or thousands of shapes.
- family stratified seeding, GOMEA, learned linkage, learned tree surrogate on one or multi shapes.
- Bayesian joint search on multi shapes, which borrows configs from neighboring shapes.
- early screening of obviously slow configs.
- multi-armed bandit algorithm to rank candidates with noisy measurements.
- compilation cache and multiprocess compilation.
- correctness validation against current hipBLASLt on GPU.
- database for persisted search history.
- simulated timing from known history when evaluating search strategy, without rerunning measurements.

There is not yet a fully automated top-level search loop, but the loop can be driven by AI.

I've tuned the gfx1151…
