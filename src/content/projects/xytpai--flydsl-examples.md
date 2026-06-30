---
repo: "xytpai/flydsl-examples"
name: "flydsl-examples"
description: "An unofficial FlyDSL kernel example repository. Have fun !"
url: "https://github.com/xytpai/flydsl-examples"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T02:53:42Z"
lastCommitAt: "2026-06-30T06:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 38
maintainers: ["xytpai", "XiaobingSuper"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b606c5201c48272e712d5a54b92943e8c846cd11e9fe3fdc3123652d5acf807/xytpai/flydsl-examples"
---

# FlyDSL-Examples

This is an unofficial FlyDSL kernel example repository.
If you are using AMD GPUs, we hope to provide a step-by-step guide to help you get familiar with writing operators using FlyDSL.
Empowered by https://github.com/rocm/flydsl we are now able to develop high-performance GPU kernels in Python on AMD GPU, similar to CUDA/CuteDSL.
This repository will provide the following examples from scratch:

- [x] Pointwise Add
- [x] Batch Reduce
- [x] RMS Norm
- [x] HGEMM (wmma)
- [x] Allreduce
- [x] HGEMM Allreduce Fusion
- [x] Linear Attention (decode)
- [ ] Flash Attention
- [ ] GEMM-FP8

For IR study: https://mlir.llvm.org/docs/

## 0. How to build install FlyDSL on AMD GPUs

Check the ROCm version using `amd-smi`. My version is `7.0.1`.

```bash
git clone https://github.com/ROCm/FlyDSL
cd FlyDSL
git checkout fd9ca4fed12095099920eca19efa5f9940b93577
bash scripts/build_llvm.sh -j64

# After this you will see the installed path.
# ==============================================
# LLVM/MLIR build completed successfully!

# To configure flydsl, use:
# cmake .. -DMLIR_DIR=/home/yuxu/llvm-project/build-flydsl/lib/cmake/mlir

# Packaged install prefix:
#…
