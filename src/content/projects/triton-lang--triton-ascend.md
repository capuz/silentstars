---
repo: "triton-lang/triton-ascend"
name: "triton-ascend"
description: "Triton language and compiler for Ascend NPU"
url: "https://github.com/triton-lang/triton-ascend"
homepage: "https://triton-ascend.readthedocs.io"
language: "MLIR"
languages: ["MLIR", "C++", "Python"]
languagePcts: [40, 30, 29]
stars: 78
forks: 124
openIssues: 84
closedIssues: 17
watchers: 0
contributors: 181
recentReleases: 1
createdAt: "2026-01-05T18:13:41Z"
lastCommitAt: "2026-06-25T06:40:48Z"
lastReleaseAt: "2026-05-19T17:57:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 39
maintainers: ["xuedinge233", "hongziqi", "TecJesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/be0de2152f1885c43b2bf5c2e92a0f8a662d8d5a6d31bd97de84eb2de87ca33e/triton-lang/triton-ascend"
---

# Project Overview and Value Proposition

Triton-Ascend is a Triton compilation framework built for the Ascend platform, aiming to enable Triton code to run efficiently on Ascend hardware.

- ## Core Value

Triton is a Python-based compilation framework that has been favored by developers in recent years. Developers only need to focus on the tile/block slicing mode and the computation logic based on tiles/blocks. During the compilation of Triton code, the compiler automatically completes memory allocation, data transfer, data computation, and pipeline parallelism based on the characteristics of underlying hardware. This greatly reduces the operator development difficulty and significantly improves the development efficiency.
Triton-Ascend adapts the Triton compilation stack to Huawei Ascend NPUs and provides a series of optimizations based on Triton, so that Triton code can run efficiently on Ascend hardware after compilation.
Currently, Triton-Ascend is still being improved. We will continuously improve the completeness of Triton Python APIs, support more data types, make memory access more flexible, and continuously optimize the automatic optimization capability of the compiler…
