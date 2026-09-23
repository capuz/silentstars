---
repo: "feichai0017/orbitkv"
name: "orbitkv"
description: "High Performance KV Cache for LLM Inference"
readmeQualityOk: true
url: "https://github.com/feichai0017/orbitkv"
homepage: "https://feichai0017.github.io/orbitkv/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [53, 44]
topics: ["rust", "llm-inference", "kv-cache", "attention", "memory-management", "orbitkv", "sglang", "vllm"]
stars: 263
forks: 18
openIssues: 0
closedIssues: 2
watchers: 10
contributors: 5
recentReleases: 0
createdAt: "2025-03-31T12:17:45Z"
lastCommitAt: "2026-09-23T08:46:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 41
maintainers: ["feichai0017"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f7a1deb5babd277685e1ac7a174219e6b044338705133e1eeb6bef063812df/feichai0017/orbitkv"
discussionCount: 0
---

</p>

</p>

</p>

## About

**OrbitKV extends the KV cache of vLLM and SGLang beyond GPU memory.** Keep
reusable prefixes in DRAM and SSD, then restore them when a matching request
arrives. This helps workloads with repeated documents, shared system prompts,
and conversations whose prefixes no longer fit in the engine's GPU cache.

Run one Cache Manager per host and enable your engine's adapter. The engine
owns GPU memory and scheduling; OrbitKV manages external replicas and transfers.
The single-node path is GPU-tested on **vLLM 0.29.0** and **SGLang 0.5.20**.
Multi-node cache sharing is experimental. Interfaces may change before 1.0.

## Key features

- **DRAM and SSD caching.** Reuse prefixes after GPU eviction or an engine
  restart while the Cache Manager remains alive.
- **Direct GPU transfers.** Both engines register GPU buffers through CUDA IPC;
  adapters fence the producing CUDA stream, and Rust handles cache queries,
  reads and transfer completion.
- **Model-aware recovery.** Cache identity includes model artifacts, computation
  settings and storage layout. Compiled recovery rules select the required
  attention pages, sliding windows and recurrent checkpoints for…
