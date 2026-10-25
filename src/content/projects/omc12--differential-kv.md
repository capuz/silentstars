---
repo: "Omc12/Differential-KV"
name: "Differential-KV"
description: "Differential-KV (DKV) is a sparse KV-cache inference runtime designed for high-efficiency, memory-bounded long-context Large Language Model (LLM) inference across Apple Silicon (MLX) and CUDA GPUs."
readmeQualityOk: true
url: "https://github.com/Omc12/Differential-KV"
homepage: "https://www.researchgate.net/publication/410864213"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["cuda", "efficient-inference", "kv-cache", "llms", "long-context", "memory-compression", "mlx", "sparse-attention", "transformer-inference"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-12T09:59:51Z"
lastCommitAt: "2026-10-25T08:40:45Z"
lastReleaseAt: "2026-08-30T05:52:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["Omc12"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ed2a149ae93638cd4913846effb427cd5e24747bd673c2d82dd0b586901bd62/Omc12/Differential-KV"
discussionCount: 2
---

# Differential-KV (DKV): Anchor + Low-Rank KV-Cache Compression

**Differential-KV (DKV)** is a sparse KV-cache inference runtime designed for high-efficiency, memory-bounded long-context Large Language Model (LLM) inference across Apple Silicon (MLX) and CUDA GPUs.

ResearchGate: https://www.researchgate.net/publication/410864213

Author: **Om Chimurkar** (Newton School of Technology, Rishihood University)  
Paper: https://doi.org/10.5281/zenodo.21539110

***Try a demo here***: https://huggingface.co/spaces/Om1232/Differential-KV

---

## 📌 Core Architecture & Paper Overview

The Key-Value (KV) cache is the primary memory bottleneck in long-context LLM inference: its memory footprint scales linearly $O(L)$ with sequence length $L$, causing commodity hardware to run out of memory (OOM) during prefill or generation long before model weights exhaust VRAM.

Differential-KV addresses this by partitioning the KV cache into fixed micro-blocks of size $B_s = 256$ tokens and decomposing each block into four complementary components:

1. **Anchor Token ($a_k, a_v$):** The first token in the block, preserved in exact precision to serve as an anchor reference.
2. **Joint $K \mid V$ Low-Rank…
