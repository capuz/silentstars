---
repo: "mlc-ai/TIRx-kernels"
name: "TIRx-kernels"
description: "High-performance GPU kernels written in TIRx."
readmeQualityOk: true
url: "https://github.com/mlc-ai/TIRx-kernels"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 88
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2026-06-16T17:21:42Z"
lastCommitAt: "2026-08-21T04:12:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 28
maintainers: ["spectrometerHBH", "jinhongyii", "qianruiy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7ffcd86ea8aae3e71ae757a6504399bd382b4d963899acb1c1a55938e2ec891/mlc-ai/TIRx-kernels"
---

# TIRx kernels

High-performance GPU kernels written in [TIRx](https://github.com/apache/tvm).

## Kernels

All kernels target `sm_100a`. **Kernel** is the registry name accepted by the
`--kernel` CLI filters; **Module** is its source file, relative to the bucket
directory under `tirx_kernels/`. Each bucket holds the kernels ported from one
upstream project.

`basic/` — native TIRx kernels, with no single upstream project:

| Kernel                | Module                   | What it is |
| --------------------- | ------------------------ | ---------- |
| `fp16_bf16_gemm`      | `fp16_bf16_gemm.py`      | Dense GEMM |
| `nvfp4_gemm`          | `nvfp4_gemm.py`          | Dense GEMM |
| `rmsnorm`             | `rmsnorm.py`             | RMSNorm |
| `allgather_gemm`      | `allgather_gemm.py`      | AllGather + GEMM (multi-GPU, NVSHMEM) |
| `gemm_reduce_scatter` | `gemm_reduce_scatter.py` | GEMM + ReduceScatter (multi-GPU, NVSHMEM) |

`flashattention/` — Dao-AILab flash-attention ports:

| Kernel                           | Module                        | What it is |
| -------------------------------- | ----------------------------- | ---------- |
| `flash_attention4`…
