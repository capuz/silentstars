---
repo: "AmSach/maple"
name: "maple"
description: "MAPLE: Manifold-Activated Pruning of Latent Experts for Sub-2-BPW MoE LLMs"
readmeQualityOk: true
url: "https://github.com/AmSach/maple"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 47
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-07T17:32:34Z"
lastCommitAt: "2026-11-12T05:42:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["AmSach"]
openGraphImageUrl: "https://opengraph.githubassets.com/b408239cb36585d2492f6db60288f7632b71b6d6610aaad081d80aad1378106c/AmSach/maple"
---

---
language:
- en
license: apache-2.0
tags:
- moe
- mixture-of-experts
- pruning
- deepseek-coder-v2
- deepseek
- gemma-4
- llama.cpp
- gguf
- edge-ai
- model-compression
base_model:
- deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct
- google/gemma-4-26B-A4B-it
pipeline_tag: text-generation
library_name: gguf
---

# MAPLE: Manifold-Activated Pruning of Latent Experts

> **Sub-2-BPW Structural Compression for Mixture-of-Experts (MoE) LLMs**  
> MAPLE compresses massive sparse MoE models into strictly sub-5GB containers, enabling **100% In-VRAM GPU Execution** on 6 GB consumer laptop GPUs with zero CPU or PCIe offloading:
> - **DeepSeek-Coder-V2-Lite-Instruct (16B MoE)**: 15.7B base compressed from 8.57 GB (Q4) / 5.64 GB (IQ2) down to **4.50 GB GGUF** (54 of 64 routed experts + 2 shared invariant experts retained), achieving **65.6 - 76.3 Tokens/Second** generation throughput.
> - **Gemma 4 26B-A4B-it (25.6B MoE)**: 25.6B base compressed from 9.92 GB down to **4.75 GB GGUF** (48 of 128 routed experts retained), achieving **45.4 Tokens/Second** generation throughput.

**Author**: Aman Sachan ([Google Scholar](https://scholar.google.com/citations?user=dfgiWLYAAAAJ&hl=en) |…
