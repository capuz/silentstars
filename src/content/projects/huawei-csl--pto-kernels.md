---
repo: "huawei-csl/pto-kernels"
name: "pto-kernels"
description: "Custom kernel collections using https://github.com/PTO-ISA/pto-isa"
readmeQualityOk: true
url: "https://github.com/huawei-csl/pto-kernels"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [67, 30]
stars: 23
forks: 18
openIssues: 38
closedIssues: 62
watchers: 1
contributors: 14
recentReleases: 1
createdAt: "2026-02-12T12:31:00Z"
lastCommitAt: "2026-11-25T13:19:41Z"
lastReleaseAt: "2026-11-04T13:48:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 59
maintainers: ["zouzias", "fiskrt", "georgebisbas"]
openGraphImageUrl: "https://opengraph.githubassets.com/5be2ce69b1de7303fe7e0a1e3d74becab236806bfb84c745a80705198b6bb665/huawei-csl/pto-kernels"
discussionCount: 1
---

# pto-kernels

A collection of high-performance custom kernels for **Ascend NPUs**, built on top of [pto-isa](https://github.com/PTO-ISA/pto-isa) — the Parallel Tile Operation virtual instruction set architecture designed by Ascend CANN.

PTO focuses on tile-level operations, enabling efficient, composable kernel development targeting Huawei's Ascend AI processors, and ships as ready-to-use PyTorch (`torch-npu`) operators.

---

## Why pto-kernels?

- **Fast** — hand-tuned tile-level kernels for Ascend NPUs, benchmarked against `torch-npu` built-ins.
- **Drop-in** — kernels are exposed as plain Python functions that operate on `torch_npu` tensors.
- **Broad coverage** — everything from elementwise ops (`abs`, `swiglu`) to linear-algebra primitives (`tri_inv`, `matmul`) to cube-based reductions (`cube_reduce`, `cube_norm`) to gated-linear-attention building blocks (GDN, KDA chunked recurrence, WY representation, KKT).
- **Extensible** — built on [pto-isa](https://github.com/PTO-ISA/pto-isa), so new kernels can be written once at the tile level and reused across ops.

---
