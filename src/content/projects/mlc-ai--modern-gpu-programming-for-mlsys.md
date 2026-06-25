---
repo: "mlc-ai/modern-gpu-programming-for-mlsys"
name: "modern-gpu-programming-for-mlsys"
description: "modern gpu programming"
url: "https://github.com/mlc-ai/modern-gpu-programming-for-mlsys"
language: "HTML"
languages: ["HTML"]
languagePcts: [67]
stars: 246
forks: 18
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-03-26T04:28:15Z"
lastCommitAt: "2026-06-25T01:37:55Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 10
maintainers: ["tlopex", "tqchen", "spectrometerHBH"]
openGraphImageUrl: "https://opengraph.githubassets.com/48dfec5d0addeb57603a23f18423d29ac880b5d677d5d7e8324f8709e9b2be83/mlc-ai/modern-gpu-programming-for-mlsys"
---

# Modern GPU Programming For MLSys

This book teaches modern GPU kernel programming as a progression: **understand the
GPU hardware → learn to program it → write state-of-the-art kernels.** It treats
the Blackwell-class GPU — its memory hierarchy and Tensor Memory, its tensor-core and
asynchronous data-movement engines, warpgroups and clusters — as the real subject. The
vehicle is **TIRx** (Tensor IR neXt), a Python DSL for writing GPU kernels at the IR level.

📖 **Read it online: <https://mlc.ai/modern-gpu-programming-for-mlsys/>**

## What's inside

- **Part I — Understanding the GPU.** Execution and memory model, the performance model
  (roofline, overlap), a deep dive into data layout, the memory and compute engines (TMA,
  Tensor Memory, Tensor Cores), asynchronous coordination, and advanced scheduling (CLC).
- **Part II — Programming a GPU with TIRx.** An introduction to TIRx through one runnable
  single-MMA GEMM — scope, layout, and dispatch, and how compilation works — plus the tensor
  layout model (`TileLayout`, named axes, swizzle).
- **Part III — GEMM: Tiled to SOTA.** A tiled GEMM built up through TMA pipelining,
  persistent scheduling, warp specialization, and…
