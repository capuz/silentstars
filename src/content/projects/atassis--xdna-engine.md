---
repo: "atassis/xdna-engine"
name: "xdna-engine"
description: "General inference engine for the AMD XDNA2 (Strix) NPU - Rust + hand-written AIE kernels"
readmeQualityOk: true
url: "https://github.com/atassis/xdna-engine"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [49, 32]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T22:10:55Z"
lastCommitAt: "2026-09-29T09:56:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["atassis"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb9da33ff92e3c0e50edb42ab5942848e323943c5f63a0a481939b5801952ccd/atassis/xdna-engine"
---

# xdna-engine

A general inference engine for the **AMD XDNA2 (Strix) NPU**, written in Rust with
hand-written AIE kernels. It runs transformer and conv models - ASR, embeddings, small
LLMs, and vision - on the NPU under Linux via the open MLIR-AIE / IRON kernel stack,
with a host-CPU fallback for ops that are not yet on-device.

ASR was the first target, but the engine is not ASR-specific: the same primitives
(resident dataflow, fused decode, KV cache, multi-precision GEMM/GEMV) serve every
front through one `Frontend / Encoder / Head` pipeline.

## Why the NPU

This pipeline is **data-movement-bound, not compute-bound**. The NPU's cores sit mostly
idle; the cost is bytes streamed from LPDDR and array shape-reloads. The engine is built
around that fact: keep weights and activations on-chip, fuse op sequences into few
dispatches, and quantize to cut the bytes moved. The payoff is latency, energy, and
freeing the CPU - see [docs/data-movement-thesis.md](https://github.com/atassis/xdna-engine/blob/HEAD/docs/data-movement-thesis.md).

## What works today

- **LLM decode** - Qwen3-0.6B generates on the NPU: the whole MLP block and the whole QKV
  head each compile to one design, and a…
