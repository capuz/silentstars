---
repo: "d9d-project/d9d"
name: "d9d"
description: "d9d - d[istribute]d - distributed training framework based on PyTorch that tries to be efficient yet hackable"
readmeQualityOk: true
url: "https://github.com/d9d-project/d9d"
homepage: "https://d9d-project.github.io/d9d/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "cuda", "distributed", "distributed-systems", "llm", "pytorch"]
stars: 34
forks: 4
openIssues: 13
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-12T19:52:27Z"
lastCommitAt: "2026-10-02T10:01:18Z"
lastReleaseAt: "2026-02-12T19:14:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 40
maintainers: ["mrapplexz", "github-actions[bot]", "DaniilSergeev17"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d3957404627bb4a3da5b38024294b5aaa465345e790969bdab58121cb2fe29c/d9d-project/d9d"
---

# The d9d Project

**d9d** is a distributed training framework built on top of PyTorch 2.0. It aims to be hackable, modular, and efficient, designed to scale from single-GPU debugging to massive clusters running 6D-Parallelism.

[LET'S START TRAINING 🚀](https://d9d-project.github.io/d9d/)

## Installation

Just use your favourite package manager:
```bash
pip install d9d
poetry add d9d
uv add d9d
```

### Extras

* `d9d[aim]`: [Aim](https://aimstack.io/) experiment tracker integration.
* `d9d[visualization]`: Plotting libraries required to some advanced visualization functionality.
* `d9d[linear-attention]`: Efficient Linear Attention kernels.
* `d9d[backend-sdpa-flash-attention-2]`: [FlashAttention 2](https://github.com/Dao-AILab/flash-attention) SDPA backend kernels.
* `d9d[backend-sdpa-flash-attention-4]`: [FlashAttention 4](https://github.com/Dao-AILab/flash-attention) SDPA backend kernels.
* `d9d[moe]`: Efficient Mixture of Experts GPU kernels. You should build and install some dependencies manually before installation: [DeepEP](https://github.com/deepseek-ai/DeepEP), [grouped-gemm](https://github.com/fanshiqing/grouped_gemm/).
* `d9d[cce]`: Efficient Fused Cross-Entropy…
