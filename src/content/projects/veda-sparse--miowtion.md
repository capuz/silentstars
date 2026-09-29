---
repo: "veda-sparse/Miowtion"
name: "Miowtion"
description: "Sparse acceleration and LoRA fine-tuning of MiniMax-H3 on resource-constrained machines."
readmeQualityOk: true
url: "https://github.com/veda-sparse/Miowtion"
homepage: "https://veda-sparse.github.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["minimax-h3", "sparse-attention", "video-generation"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-23T11:05:20Z"
lastCommitAt: "2026-09-29T08:10:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["veda-sparse-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa642eb8b2a5478f7efce8b093b1ae410702ac2226025986d48127497acca0a3/veda-sparse/Miowtion"
---

# Miowtion

**Sparse acceleration and LoRA fine-tuning of [MiniMax-H3](https://github.com/MiniMax-AI/MiniMax-H3) on resource-constrained machines.**

| <a href="docs/INDEX.md"><b>Documentation</b></a> | <a href="#getting-started"><b>Quick Start</b></a> | <a href="docs/pitfalls.md"><b>Pitfalls</b></a> | <a href="AGENTS.md"><b>Contributing</b></a> |

</div>

Miowtion makes the 33B MiniMax-H3 audio-video DiT fast to run and cheap to adapt
on hardware it was not built for: consumer GPUs with 24 GB (verified on 2x / 1x
RTX 4090), with the weights streamed from host memory, and, as work in progress,
Apple silicon with NVMe offloading.

- **Sparse acceleration (Veda).** Video tokens are permuted into 3D tiles of 128
  tokens, a small per-head predictor scores (query tile, key tile) pairs, and only
  the top-scoring blocks are computed by a FlashAttention-4 (CuTe DSL) block-sparse
  kernel (vendored SM8x patch for RTX 30/40). At 90% sparsity one RTX 4090 runs a
  14.4 s 16:9 clip ~3.1x faster end to end than dense attention.
- **LoRA fine-tuning.** FSDP2 training with partial CPU offload, stream-overlapped
  weight copies, precomputed AdaLN tables and memory-bounded (chunked) kernels:…
