---
repo: "open-lm-engine/coda-kernels"
name: "coda-kernels"
description: "CODA: Rewriting Transformer Blocks as GEMM-Epilogue Programs"
readmeQualityOk: true
url: "https://github.com/open-lm-engine/coda-kernels"
homepage: "https://arxiv.org/abs/2605.19269"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 235
forks: 24
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2026-05-17T04:04:54Z"
lastCommitAt: "2026-08-01T06:13:53Z"
lastReleaseAt: "2026-07-19T19:09:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["HanGuo97"]
openGraphImageUrl: "https://opengraph.githubassets.com/0842660c5561dbce34d769eadafc723cb489277d27645ab6bb080b560b65c689/open-lm-engine/coda-kernels"
---

# CODA: GPU Kernels as GEMM-plus-Epilogue Programs

</p>

</p>

**CODA** is a GPU kernel abstraction that expresses Transformer operators as GEMM-plus-epilogue programs, fusing normalization, activations, residual updates, and reductions into the GEMM output tile before it is written to global memory, combining framework-level productivity with hardware-level efficiency. CODA is built on [CUTLASS CuTeDSL](https://github.com/NVIDIA/cutlass) and targets NVIDIA Hopper (H100) GPUs.

</p>

## Updates
- July 19, 2026. Released `v0.2`.
- June 23, 2026. We are restructuring CODA. For legacy version, please check `v0.1` tag.

## Installation

```bash
pip install coda-kernels
```

Or from source:

```bash
git clone https://github.com/open-lm-engine/coda-kernels.git
cd coda-kernels
pip install -e .
```

## Functional API

- [`linear_swiglu`](https://github.com/open-lm-engine/coda-kernels/blob/HEAD/coda/kernels/functional/swiglu.py)
- [`linear_cross_entropy`](https://github.com/open-lm-engine/coda-kernels/blob/HEAD/coda/kernels/functional/cross_entropy.py)
- [`linear_cross_entropy_forward`](https://github.com/open-lm-engine/coda-kernels/blob/HEAD/coda/kernels/functional/cross_entropy.py)
-…
