---
repo: "AMD-AGI/Infera"
name: "Infera"
description: "More token goodput from frontier models. A distributed, SLA-aware serving mesh — disaggregated prefill/decode, KV-aware routing, and cache offload, tuned to your production SLA."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/Infera"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["rocm", "llm-inference"]
stars: 19
forks: 3
openIssues: 15
closedIssues: 2
watchers: 1
contributors: 62
recentReleases: 7
createdAt: "2026-07-20T22:24:19Z"
lastCommitAt: "2026-09-03T08:13:19Z"
lastReleaseAt: "2026-08-14T01:05:49Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 41
maintainers: ["weilei0120", "llying-001", "jiejingzhangamd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea9da761120f82017dc8763d15f3c670a9d5c6424a986cafbba40c196bb79205/AMD-AGI/Infera"
---

# Infera: Scaling Goodput for Agentic AI with Distributed Inference Orchestration

[What's Infera?](#whats-infera) | [Key features](#key-features) | [Quick Start](#quick-start) | [Engine images](#engine-images) | [Benchmarks](#benchmarks) | [Documentation](#documentation) | [Roadmap](#roadmap) | [License](#license)

AMD ROCm™ Infera is a distributed inference reference solution for large-scale deployments — a
conductor for your inference GPU orchestra. It coordinates engine instances across three dimensions,
KV-Aware Routing, Prefill-Decode Disaggregation, and KV-Cache Tiering, tuned to your production SLA.

Infera is open source from day one and ROCm-native, built for AMD Instinct™ GPUs. It presents a
single OpenAI-compatible endpoint — and the Anthropic Messages API through a translation
layer — in front of one or many engine instances, and runs vLLM, SGLang, or ATOM underneath.

## What's Infera?

Modern inference engines optimize execution within an engine instance, but production systems rely
on many instances for scale, availability, and workload specialization. As deployments grow, teams
typically use conventional load balancing or custom logic to distribute requests.

This…
