---
repo: "meta-pytorch/MSLK"
name: "MSLK"
description: "MSLK (Meta Superintelligence Labs Kernels) is a collection of PyTorch GPU operator libraries that are designed and optimized for GenAI training and inference, such as FP8 row-wise quantization and collective communications."
url: "https://github.com/meta-pytorch/MSLK"
language: "Python"
languages: ["Python", "C++", "Cuda"]
languagePcts: [37, 26, 23]
stars: 114
forks: 62
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 54
recentReleases: 0
createdAt: "2025-11-03T23:07:34Z"
lastCommitAt: "2026-06-26T23:38:04Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 76
undervaluedScore: 38
maintainers: ["cthi", "jwfromm", "bottler"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f9e019b97ecb9456f793a6fafdd11cfa2ae8fc4e33c73773d7840fc8b7cce0e/meta-pytorch/MSLK"
---

# MSLK Library

MSLK (Meta Superintelligence Labs Kernels, formerly known as **[FBGEMM GenAI](https://github.com/pytorch/FBGEMM/tree/main/fbgemm_gpu/experimental/gen_ai)**)
is a collection of high-performance kernels and optimizations built on top of PyTorch
primitives for GenAI training and inference.

## **Installation**

```bash
# Install MSLK for CUDA
pip install mslk --index-url https://download.pytorch.org/whl/cu130
# Install MSLK for ROCm
pip install mslk --index-url https://download.pytorch.org/whl/rocm7.1/
# Install a nightly CUDA version
pip install --pre mslk --index-url https://download.pytorch.org/whl/nightly/cu130
# Install a nightly ROCm version
pip install --pre mslk --index-url https://download.pytorch.org/whl/nightly/rocm7.1/
```

## Release Compatibility Table

MSLK is released in accordance to the PyTorch release schedule, and each
release has no guarantee to work in conjunction with PyTorch releases that are
older than the one that the MSLK release corresponds to.

| MSLK Release | Corresponding PyTorch Release | Supported Python Versions | Supported CUDA Versions | Supported CUDA Architectures | Supported ROCm Versions | Supported ROCm Architectures |…
