---
repo: "triton-lang/triton-ascend"
name: "triton-ascend"
description: "Triton language and compiler for Ascend NPU"
url: "https://github.com/triton-lang/triton-ascend"
homepage: "https://triton-ascend.readthedocs.io"
language: "MLIR"
languages: ["MLIR", "C++", "Python"]
languagePcts: [40, 30, 29]
stars: 84
forks: 134
openIssues: 87
closedIssues: 22
watchers: 0
contributors: 182
recentReleases: 1
createdAt: "2026-01-05T18:13:41Z"
lastCommitAt: "2026-07-02T06:32:39Z"
lastReleaseAt: "2026-05-19T17:57:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 39
maintainers: ["Tian-Fantasea", "hongziqi", "TecJesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/4295dc9e954b36b093e240e2b5fcfd550cb437acc5407c5b4caeb3a02f7cbec0/triton-lang/triton-ascend"
---

# Project Overview and Value Proposition

Triton-Ascend is a Triton compilation framework built for the Ascend platform, aiming to enable Triton code to run efficiently on Ascend hardware.

- ## Core Value

Triton is a Python-based compilation framework that has been favored by developers in recent years. Developers only need to focus on the tile/block slicing mode and the computation logic based on tiles/blocks. During the compilation of Triton code, the compiler automatically completes memory allocation, data transfer, data computation, and pipeline parallelism based on the characteristics of underlying hardware. This greatly reduces the operator development difficulty and significantly improves the development efficiency.
Triton-Ascend adapts the Triton compilation stack to Huawei Ascend NPUs and provides a series of optimizations based on Triton, so that Triton code can run efficiently on Ascend hardware after compilation.
Currently, Triton-Ascend is still being improved. We will continuously improve the completeness of Triton Python APIs, support more data types, make memory access more flexible, and continuously optimize the automatic optimization capability of the compiler…
