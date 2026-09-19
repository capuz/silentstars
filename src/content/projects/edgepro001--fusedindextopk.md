---
repo: "EdgePro001/FusedIndexTopK"
name: "FusedIndexTopK"
description: "High-Performance fused Indexer and exact Top-K kernels for the DeepSeek V3.2 sparse-attention architecture, built with DeepGEMM-style cuda design, device-side exact repair, and GPU benchmarks."
readmeQualityOk: true
url: "https://github.com/EdgePro001/FusedIndexTopK"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [69, 22]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-09T13:35:35Z"
lastCommitAt: "2026-09-19T08:15:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 14
maintainers: ["EdgePro001"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b6a07a533b2efde96b3928ac9b074a92285f0d58db60a4269ce417c85751dd9/EdgePro001/FusedIndexTopK"
---

# FusedIndexTopK

FusedIndexTopK is an exact, unordered Top-K operator for the DeepSeek V3.2
indexer workload on NVIDIA Hopper GPUs. It keeps score production and the
normal Top-K path in one kernel, so a dense `Q × N` score matrix is never
materialized.

The current release targets:

- FP8 MQA indexer inputs compatible with the pinned DeepGEMM revision
- `Q = 4096`, `K = 2048`, and `8192 <= N <= 163840`
- SM90/H20
- exact Top-K membership, including ties at the selection threshold

## What is fused

The main kernel combines tensor-core score production, threshold filtering,
candidate collection, radix selection, and final result emission. Candidates
remain in CTA shared memory. Long-context execution has a small bounded spill
workspace; the consumer merges that spill while later math work is still in
flight. A separate sampled-GEMM prepass estimates the threshold, and a
device-masked exact repair path handles the uncommon rows that fail the fast
path.

The normal path therefore has zero dense-score traffic and no full candidate
list in global memory. Long-context overflow may use only the bounded spill
described in…
