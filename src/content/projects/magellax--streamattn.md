---
repo: "MagellaX/StreamAttn"
name: "StreamAttn"
description: "A high-performance attention mechanism that computes softmax normalization in a single streaming pass using running accumulators (online softmax). "
readmeQualityOk: true
url: "https://github.com/MagellaX/StreamAttn"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["cuda", "llms", "rl", "triton"]
stars: 32
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-02-10T14:01:30Z"
lastCommitAt: "2026-09-30T09:57:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 46
maintainers: ["MagellaX", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55ad90c164791739b0eab9cc080d622902f9b47673f8c3132177bb1cc01a40e/MagellaX/StreamAttn"
---

# StreamAttn

**Adaptive attention research, built on streaming online softmax and native
Triton/CUDA kernels.**

StreamAttn's goal is to make LLM inference faster by deciding which attention
work a query actually needs. The intended kernel avoids K/V reads and matrix
products when their contribution can be bounded within an output-error budget,
and computes more when the query needs it. Decisions must cost less than the
work they remove.

The generalized adaptive kernel is **not yet demonstrated**. Exact kernels,
page-native execution, and the compiler are supporting infrastructure and the
no-skipping reference path. Their measured wins are real, but do not establish
adaptive work avoidance. Fixed seed policies are separate calibrated
experiments, not the final algorithm. FlashInfer and FlashAttention remain
performance baselines; unsupported serving cases keep their existing fallbacks.

The shared foundation streams K/V tiles, maintains numerically stable online
softmax state, and avoids materializing the full attention matrix. The research
question is what additional work can be omitted without losing the information
the model needs.

> **Project status:** research engine with…
