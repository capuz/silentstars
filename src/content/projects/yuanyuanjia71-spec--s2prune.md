---
repo: "yuanyuanjia71-spec/S2Prune"
name: "S2Prune"
description: "    Official implementation of S²Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models."
readmeQualityOk: true
url: "https://github.com/yuanyuanjia71-spec/S2Prune"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-01T08:17:13Z"
lastCommitAt: "2026-11-05T08:05:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 22
maintainers: ["yuanyuanjia71-spec"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eda3f08be5ac030dc077aaed2ab132f569c99e394686edce272985a342b169c/yuanyuanjia71-spec/S2Prune"
---

Spatially Structured Visual Token Pruning<br>
  for Multimodal Large Language Models

  Zhejiang University

---

## News

- 🎉 **S²Prune has been accepted to WACV 2027!**

## Overview

**Reference implementation:** Qwen2.5-VL-7B-Instruct.

S²Prune reduces the visual sequence processed by a multimodal LLM without training an auxiliary selector. It separates **where to spend the token budget** from **which local tokens to retain**:

1. **Structural-density allocation** assigns more capacity to visually complex regions.
2. **Response-aware local sampling** keeps the most informative token in each allocated local cell.

The released implementation physically shortens the sequence after decoder Layer 0 while preserving text tokens, special tokens, original token order, and M-RoPE coordinates.

## Highlights

- **Training-free:** no additional model, fine-tuning, or learned scoring head.
- **Exact token budgets:** retain exactly `B ∈ {32, 64, 128, 192}` tokens from the original 576 visual tokens.
- **Content-adaptive allocation:** distribute the residual budget in proportion to regional Laplacian complexity.
- **Early response-aware selection:** use representation change across decoder…
