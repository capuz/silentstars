---
repo: "carlushuang/gcnasm"
name: "gcnasm"
description: "amdgpu example code in hip/asm"
readmeQualityOk: true
url: "https://github.com/carlushuang/gcnasm"
language: "C++"
languages: ["C++"]
languagePcts: [76]
stars: 66
forks: 37
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2019-05-31T02:04:21Z"
lastCommitAt: "2026-07-28T14:58:42Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 67
undervaluedScore: 30
maintainers: ["carlushuang", "kaiyang-1", "demonsan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b65c85e27ad8c0fe8da5cbd5f0651d5cdaeb33fbcb528c540b3729d3a097029d/carlushuang/gcnasm"
---

# gcnasm -- GCN Assembly & HIP Programming Examples

A collection of AMD GPU programming examples targeting **CDNA / RDNA**
architectures (primarily **gfx942 / MI300**), covering hand-written GCN
assembly kernels, HIP C++ device code, and PyTorch/Triton extensions.

## Legend

| Tag | Meaning |
|-----|---------|
| `[A]` | Hand-written GCN assembly kernel (`.s`) |
| `[H]` | HIP / C++ / CUDA device code |
| `[A/H]` | Both hand-written assembly **and** HIP host code |
| `+` | Has Python / PyTorch / Triton interface (can run from Python directly) |

## Highlighted Examples

**[`bandwidth_memread/`](https://github.com/carlushuang/gcnasm/blob/HEAD/bandwidth_memread/)** `[H]` -- The go-to
**memory bandwidth microbenchmark**. Measures peak read-only and read+write
GPU memory bandwidth using float4 vectorized, non-temporal, persistent kernels.
Supports both ROCm and CUDA. Sweeps from ~78 KB to ~1.7 GB and reports GB/s
per size. Peak observed: **~4.56 TB/s read-only** on MI308X (gfx942).
See the [detailed README](https://github.com/carlushuang/gcnasm/blob/HEAD/bandwidth_memread/README.md).

**[`vector_add_asm/`](https://github.com/carlushuang/gcnasm/blob/HEAD/vector_add_asm/)** `[A/H]` -- A…
