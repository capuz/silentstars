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
stars: 49
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-04T15:28:10Z"
lastCommitAt: "2026-08-28T14:23:33Z"
lastReleaseAt: "2026-08-20T15:07:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 40
maintainers: ["antonellof", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b39da50bbbb47cd023dfbed532fea431bf6e926898b3a0e874019b4df715473/antonellof/ferrox"
---

**A pure-Rust GGUF inference engine. Dense and MoE, on CPU, Apple Metal, or CUDA.**

**[Features](https://github.com/antonellof/ferrox/blob/HEAD/docs/FEATURES.md)** ·
**[Models](https://github.com/antonellof/ferrox/blob/HEAD/docs/MODELS.md)** ·
**[CLI](https://github.com/antonellof/ferrox/blob/HEAD/docs/CLI.md)** ·
**[API](https://github.com/antonellof/ferrox/blob/HEAD/docs/API.md)** ·
**[Config](https://github.com/antonellof/ferrox/blob/HEAD/docs/CONFIG.md)** ·
**[Benchmarks](https://github.com/antonellof/ferrox/blob/HEAD/benchmarks/RESULTS.md)** ·
**[Studio UI](https://github.com/antonellof/ferrox/blob/HEAD/ui/)** ·
**[Agents](https://github.com/antonellof/ferrox/blob/HEAD/docs/AGENTS_COOKBOOK.md)** ·
**[Roadmap](https://github.com/antonellof/ferrox/blob/HEAD/docs/ROADMAP.md)** ·
**[Contributing](https://github.com/antonellof/ferrox/blob/HEAD/CONTRIBUTING.md)**

</div>

---

Ferrox loads GGUF checkpoints and runs inference on your hardware. No
bindings to llama.cpp, no ggml wrapper. The loader, quantized kernels,
attention and expert routing are all implemented here.

- **Quantized end to end.** Weights stay quantized on mmap and
  dequantization happens inside the matmul, so an…
