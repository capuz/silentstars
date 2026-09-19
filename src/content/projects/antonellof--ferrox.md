---
repo: "antonellof/ferrox"
name: "ferrox"
description: "Pure-Rust GGUF inference engine with quantized CPU, Metal & CUDA kernels, MoE support, OpenAI-compatible server. Benchmarked head-to-head against llama.cpp."
readmeQualityOk: true
url: "https://github.com/antonellof/ferrox"
homepage: "https://www.fratepietro.com/2026/ferrox-rust-gguf-inference-engine/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai", "inference", "inference-engine", "llm-inference", "rust", "local-llm"]
stars: 58
forks: 6
openIssues: 4
closedIssues: 46
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-04T15:28:10Z"
lastCommitAt: "2026-09-19T08:15:20Z"
lastReleaseAt: "2026-08-20T15:07:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 44
maintainers: ["antonellof"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdb4682c441c86e6824af1532e4be30191d35e158e1a7d6551cab91c4953c642/antonellof/ferrox"
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
