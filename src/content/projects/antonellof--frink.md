---
repo: "antonellof/frink"
name: "frink"
description: "Pure-Rust GGUF inference engine with quantized CPU, Metal & CUDA kernels, MoE support, OpenAI-compatible server. Benchmarked head-to-head against llama.cpp."
readmeQualityOk: true
url: "https://github.com/antonellof/frink"
homepage: "https://www.fratepietro.com/2026/frink-rust-alternative-to-llama-cpp/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai", "inference", "inference-engine", "llm-inference", "rust", "local-llm"]
stars: 67
forks: 8
openIssues: 25
closedIssues: 76
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-08-04T15:28:10Z"
lastCommitAt: "2026-11-09T11:59:27Z"
lastReleaseAt: "2026-08-20T15:07:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 41
maintainers: ["antonellof"]
openGraphImageUrl: "https://opengraph.githubassets.com/895c0f4574c3d91cba8ef1240c685527b8b9d4f1b5a2b339c277748819a1174b/antonellof/frink"
---

**A pure-Rust GGUF inference engine. Dense and MoE, on CPU, Apple Metal, or CUDA.**

**[Features](https://github.com/antonellof/frink/blob/HEAD/docs/FEATURES.md)** ·
**[Models](https://github.com/antonellof/frink/blob/HEAD/docs/MODELS.md)** ·
**[CLI](https://github.com/antonellof/frink/blob/HEAD/docs/CLI.md)** ·
**[API](https://github.com/antonellof/frink/blob/HEAD/docs/API.md)** ·
**[Config](https://github.com/antonellof/frink/blob/HEAD/docs/CONFIG.md)** ·
**[Benchmarks](https://github.com/antonellof/frink/blob/HEAD/benchmarks/README.md)** ·
**[Studio UI](https://github.com/antonellof/frink/blob/HEAD/ui/)** ·
**[Agents](https://github.com/antonellof/frink/blob/HEAD/docs/AGENTS_COOKBOOK.md)** ·
**[Roadmap](https://github.com/antonellof/frink/blob/HEAD/docs/plans/north-star.md)** ·
**[Changelog](https://github.com/antonellof/frink/blob/HEAD/CHANGELOG.md)** ·
**[Contributing](https://github.com/antonellof/frink/blob/HEAD/CONTRIBUTING.md)**

---

Frink loads GGUF checkpoints and runs them on the hardware you already
own. It does not bind to llama.cpp or wrap ggml: the loader, the
quantized kernels, attention and expert routing are all written here,
in Rust.

- **One binary, no…
