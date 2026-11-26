---
repo: "enwove/flyx"
name: "flyx"
description: "Zero-dependency local LLM inference engine in a ~50 MB binary — native long context, tuned per GPU, built-in speculative decoding and web dashboard."
readmeQualityOk: true
url: "https://github.com/enwove/flyx"
homepage: "https://enwove.ai/product/flyx"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [45, 24]
topics: ["anthropic-api", "cpp", "cuda", "gguf", "inference", "llm", "local-llm", "long-context", "openai-api", "speculative-decoding"]
stars: 48
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2026-11-23T08:48:17Z"
lastCommitAt: "2026-11-26T13:00:43Z"
lastReleaseAt: "2026-11-23T09:05:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 26
maintainers: ["pmzzs", "yijiazheng17"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1468507631/48ee283d-95bc-4b9a-89aa-5d81a3f88c61"
---

---

**FLYX** is a zero-dependency local LLM engine in a ~50 MB binary — native long context, tuned per GPU, no setup required. Run GGUF models as they are and serve them to your browser, scripts, and coding agents over OpenAI- and Anthropic-compatible APIs.

## Key Features

- **Native long context, no quality loss** — Gives every model its full trained context on a single consumer GPU. When K/V cache outgrows VRAM, it spills cleanly into system RAM instead of truncating or sliding-windowing: **123 tok/s at 256K on a 24 GB RTX 4090**, **165 tok/s at 256K on an RTX 5090** (`NVFP4`), and **100% long-context retrieval across 32K–256K** ([details](https://github.com/enwove/flyx/blob/HEAD/docs/benchmarks.md#1-qwen38-27b-long-context-coding-benchmark)).
- **Tuned per GPU, zero manual flags** — Ships measured kernel tuning tables for 11 NVIDIA GPUs and automatically sizes context length, K/V precision, and GPU/RAM placement from available memory. No guessing offload counts, batch sizes, or cache types.
- **No install, no dependencies, ~50 MB** — CUDA and C++ runtimes are linked in; only the NVIDIA driver (≥ 580) is required. No CUDA Toolkit, Python, or Docker.
