---
repo: "ahb-sjsu/turboquant-pro"
name: "turboquant-pro"
description: "Embedding & KV cache compression for LLMs and vector databases. PCA-Matryoshka + TurboQuant: 27x compression at 99.8% recall@10 (all methods benchmarked with identical reranking). Learned codebooks, asymmetric K/V, CUDA kernels, HNSW, auto-config. 397 tests. MIT."
url: "https://github.com/ahb-sjsu/turboquant-pro"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 20
forks: 1
openIssues: 8
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2026-04-03T09:32:29Z"
lastCommitAt: "2026-07-04T06:12:33Z"
lastReleaseAt: "2026-07-04T04:59:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 47
maintainers: ["ahb-sjsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/91d14b7a8fa26a91269349a566834070c90b80141eecd5af79b2cbd53a541b7c/ahb-sjsu/turboquant-pro"
discussionCount: 1
---

# TurboQuant Pro

**PCA-Matryoshka dimension reduction + TurboQuant scalar quantization for embedding compression, LLM KV caches, model weight pruning, pgvector, FAISS, and NATS transport.**

Up to **27× embedding compression** at high recall, competitive with the 2024 SOTA (RaBitQ / OPQ) via compressed-domain retrieval. Multi-modal (text, vision, audio, code), production observability, runs on consumer GPUs (Volta+) and CPU.

> **Every headline number — with its reproduction status — is in [`CLAIMS.md`](CLAIMS.md)** as a table row: claim, dataset, one-click notebook, hardware, and whether it's CPU-reproducible or GPU-experimental (27× compression, RaBitQ/OPQ comparison, 4–20× faster builds, 22% learned-codebook error reduction, KV-cache results). Test count: see the CI badge above.

> **What this is — two contributions in one toolkit.** (1) *Embedding / vector-DB compression*: PCA-reordered dimensions + scalar quantization for high-recall compressed retrieval. (2) *KV-cache compression*: architecture-aware, per-channel / asymmetric treatment of attention **keys** (generic vector-reconstruction metrics are actively misleading for keys). The two tracks share code but are evaluated…
