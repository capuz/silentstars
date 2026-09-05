---
repo: "antonellof/ferrox"
name: "ferrox"
description: "Pure-Rust GGUF inference engine with quantized CPU, Metal & CUDA kernels, MoE support, OpenAI-compatible server. Benchmarked head-to-head against llama.cpp."
readmeQualityOk: true
url: "https://github.com/antonellof/ferrox"
homepage: "https://www.fratepietro.com/2026/ferrox-rust-gguf-inference-engine/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai", "inference", "inference-engine", "llm-inference", "rust"]
stars: 54
forks: 3
openIssues: 7
closedIssues: 34
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-04T15:28:10Z"
lastCommitAt: "2026-09-05T07:47:40Z"
lastReleaseAt: "2026-08-20T15:07:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 43
maintainers: ["antonellof"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd0d7c4b458344b4b6048e94935a97c373aba53ec596db43d9c19ca7e70df588/antonellof/ferrox"
---

**A pure-Rust GGUF inference engine. Dense and MoE, on CPU, Apple Metal, or CUDA.**

**[Features](https://github.com/antonellof/ferrox/blob/HEAD/docs/FEATURES.md)** ·
**[Models](https://github.com/antonellof/ferrox/blob/HEAD/docs/MODELS.md)** ·
**[CLI](https://github.com/antonellof/ferrox/blob/HEAD/docs/CLI.md)** ·
**[API](https://github.com/antonellof/ferrox/blob/HEAD/docs/API.md)** ·
**[Config](https://github.com/antonellof/ferrox/blob/HEAD/docs/CONFIG.md)** ·
**[Benchmarks](https://github.com/antonellof/ferrox/blob/HEAD/benchmarks/README.md)** ·
**[Studio UI](https://github.com/antonellof/ferrox/blob/HEAD/ui/)** ·
**[Agents](https://github.com/antonellof/ferrox/blob/HEAD/docs/AGENTS_COOKBOOK.md)** ·
**[Roadmap](https://github.com/antonellof/ferrox/blob/HEAD/docs/ROADMAP.md)** ·
**[Changelog](https://github.com/antonellof/ferrox/blob/HEAD/CHANGELOG.md)** ·
**[Contributing](https://github.com/antonellof/ferrox/blob/HEAD/CONTRIBUTING.md)**

</div>

---

Ferrox loads GGUF checkpoints and runs them on the hardware you already
own. No llama.cpp bindings, no ggml wrapper. The loader, the quantized
kernels, attention and expert routing are written here, in Rust.

- **One binary, no…
