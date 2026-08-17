---
repo: "doublewordai/inference-lab"
name: "inference-lab"
description: "High-performance LLM inference simulator for analyzing serving systems"
readmeQualityOk: true
url: "https://github.com/doublewordai/inference-lab"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-05T14:59:42Z"
lastCommitAt: "2026-08-17T04:20:02Z"
lastReleaseAt: "2026-01-24T16:37:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 49
maintainers: ["fergusfinn", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21925c5c38c953f7704e05f01a3d4b1b35c51a46846384522b1a16bfe2da87fc/doublewordai/inference-lab"
---

# Inference Lab

**[Documentation](https://doublewordai.github.io/inference-lab/)**

LLM inference simulator for analyzing serving systems.
Simulates GPU clusters serving LLM inference workloads with realistic
performance modeling.

## Features

- **Roofline performance model**: per-precision compute streams and memory
  bandwidth, MoE expert loading, MLA / sliding-window / hybrid-linear KV,
  TP / EP collectives
- **vLLM-style scheduling**: chunked prefill, preemption with recompute,
  FCFS / priority / length-based policies, preemption-free admission
- **KV cache**: block allocation from each model's exact KV footprint,
  prefix caching with block sharing, cascade attention
- **Memory graph**: KV tiers beyond HBM as a graph of stores and links per
  hardware preset (host DRAM / NVMe behind PCIe, Grace memory behind
  NVLink-C2C, NVLink, NICs); per-GPU or node-shared stores; transfers at
  max-min fair share over every edge of their path
- **Replicas and routing**: N identical workers behind a pluggable router —
  round-robin, least-loaded, prefix-affinity, KV-aware
- **Disaggregated serving**: prefill and decode pools; hand-offs ride the
  memory graph's NICs and network core
-…
