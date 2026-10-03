---
repo: "MIT-RLX/rlx"
name: "rlx"
description: "Pure rust ML compiler with IR and support for multiple backends"
readmeQualityOk: true
url: "https://github.com/MIT-RLX/rlx"
homepage: "https://docs.rs/rlx"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["compiler", "cpu", "cuda", "fpga", "gpu", "ir", "linalg", "metal", "ml", "mlx"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-05-10T09:53:03Z"
lastCommitAt: "2026-10-03T09:22:29Z"
lastReleaseAt: "2026-07-19T10:20:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 39
maintainers: ["eugenehp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2aee7134b53fee00d0dc016d00bab312174e2cea610ad6fa159b648e58ba13b/MIT-RLX/rlx"
---

# RLX

RLX is an ML compiler and runtime for neural-network inference **and**
training. At its core is a small, serializable tensor IR with JAX-shaped
autodiff and transforms (`grad`, `jvp`, `hvp`, `vmap`); a compile pipeline
(HIR → MIR → LIR) legalizes, fuses, and memory-plans the graph, then runs
it through backend-specific kernels across CPU, Apple Silicon (Metal / MLX
/ ANE), NVIDIA CUDA, AMD (ROCm + XDNA NPU), Intel oneAPI, Google TPU,
Qualcomm Hexagon, cross-platform GPU (wgpu / Vulkan / WebGL / WASM),
microcontrollers (Cortex-M), FPGA, and the Cerebras WSE. It imports models
from ONNX, PyTorch (`torch.export`), and GGUF / safetensors; does
quantization (GGUF K/IQ/TQ/MX, INT8/INT4, QAT) and multi-node distributed
execution; and keeps the core model-agnostic — model crates live in
sibling repos.

The design, IR, and cross-backend benchmarks are written up in
[*RLX: A Unified Multi-Backend Tensor Compiler and Distributed Runtime in
Rust*](https://arxiv.org/abs/2609.37916) (arXiv:2609.37916).

## Table of Contents

- [Why another one](#why-another-one)
- [Install](#install)
- [Quickstart](#quickstart)
- [Examples](#examples)
  - [Simple example](#simple-example)
  - [Advanced…
