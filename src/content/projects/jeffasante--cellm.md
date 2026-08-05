---
repo: "jeffasante/cellm"
name: "cellm"
description: "A from-scratch LLM inference runtime for iOS/Android, targeting phones with under 512MB RAM. It's research-grade, not a wrapper around llama.cpp or a port of vLLM. "
readmeQualityOk: true
url: "https://github.com/jeffasante/cellm"
homepage: "https://jeffasante.github.io/cellm/"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["android", "inference", "ios", "kv-cache", "llm", "metal", "mobile", "on-device-ai", "rust", "transformer"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-29T22:35:05Z"
lastCommitAt: "2026-08-05T06:07:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 48
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/381736b58018f1a6613058effc171bb2542ad0e16d92d9177a1d6e78328dc5f6/jeffasante/cellm"
---

# cellm — Mobile-Native LLM Serving Engine

> A ground-up LLM inference engine for iOS and Android, written in Rust. Brings server-grade serving concepts — paged KV cache, continuous decode scheduling, multi-session concurrency — to phones running under 512MB RAM.

Not a wrapper around `llama.cpp`. Not a port of `vLLM`. A new runtime designed for mobile constraints from scratch.

> [!NOTE]
> This is just a research project—don't get mad at me lol!

## Quick Links

| Resource | Path |
|---|---|
| **Getting Started** | [Quick Start](#quick-start) below |
| **Architecture & Design** | [`docs/project_architecture.md`](https://github.com/jeffasante/cellm/blob/HEAD/docs/project_architecture.md) |
| **Paged KV Cache Deep Dive** | [`docs/paged-kv-cache-foundation.md`](https://github.com/jeffasante/cellm/blob/HEAD/docs/paged-kv-cache-foundation.md) |
| **Benchmarks** | [`docs/benchmarks/README.md`](https://github.com/jeffasante/cellm/blob/HEAD/docs/benchmarks/README.md) |
| **Model Conversion** | [`docs/convert-quantized-models.md`](https://github.com/jeffasante/cellm/blob/HEAD/docs/convert-quantized-models.md) |
| **VLM (Vision) Guide** |…
