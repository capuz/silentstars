---
repo: "vx-lang/Vx"
name: "Vx"
description: "Vx: one language, every chip."
readmeQualityOk: true
url: "https://github.com/vx-lang/Vx"
homepage: "https://vxlang.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["compiler", "heterogeneous-computing", "mlir", "rust"]
stars: 226
forks: 28
openIssues: 389
closedIssues: 708
watchers: 1
contributors: 11
recentReleases: 3
createdAt: "2026-09-09T04:05:21Z"
lastCommitAt: "2026-10-18T08:17:53Z"
lastReleaseAt: "2026-10-10T15:22:48Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 32
maintainers: ["hiraditya", "epsilon-phase", "Andrewfeng123"]
openGraphImageUrl: "https://opengraph.githubassets.com/2599790056af34dccf08139bf4c4c9464f91f86e0cfe14c682ac32054f20c3f1/vx-lang/Vx"
discussionCount: 6
---

______________________________________________________________________

## Why Vx?

Modern high-performance programs are rarely confined to a single CPU. They orchestrate work across host DRAM, PCIe buses, GPU high-bandwidth memory (HBM), and specialized accelerators like NPUs or the Apple Neural Engine (ANE).

In conventional languages (CUDA, C++, Python), **hardware topology and memory spaces are invisible to the compiler**. If host code reads a device pointer, or if an asynchronous transfer is not awaited, your program fails at runtime: with a silent corruption, a fatal segmentation fault, or an out-of-memory (OOM) crash hours into a distributed training job.

**Vx eliminates this class of bugs at compile time.**

Where a value lives (`Memory::CPU_DRAM`, `Memory::GPU_HBM`, `Memory::NPU_HBM`) and where code executes (`Topology::GPU[0]`, `Topology::NPU[0]`, `Topology::ANE`) are first-class types. The compiler checks memory capacity, bus bandwidth, and address visibility *before* code ever touches silicon:

| Challenge | Today (CUDA / C++ / PyTorch) | The Vx Way |
| :--- | :--- | :--- |
| **Invalid device memory access** | Host reads GPU pointer $\\rightarrow$ runtime segfault…
