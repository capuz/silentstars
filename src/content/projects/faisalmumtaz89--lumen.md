---
repo: "faisalmumtaz89/Lumen"
name: "Lumen"
description: "LLM inference in Rust - Metal & CUDA"
readmeQualityOk: true
url: "https://github.com/faisalmumtaz89/Lumen"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["anthropic", "cuda", "inference", "llm", "llm-inference", "llm-serving", "metal", "moe", "nvidia", "openai"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-11T23:18:45Z"
lastCommitAt: "2026-09-10T08:20:24Z"
lastReleaseAt: "2026-08-18T18:20:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 52
maintainers: ["faisalmumtaz89", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c7a46ca5af35f006b3cad7cc172e12d4c8e7ac9f3bc6cd88b33196d059cff6/faisalmumtaz89/Lumen"
---

</p>

# Lumen

[servelumen.com](https://servelumen.com) ·
[Getting started](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/docs/getting-started.md) ·
[Models](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/docs/support.md) ·
[Server](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/docs/server.md) ·
[Production](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/docs/production.md) ·
[Benchmarks](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/bench/RESULTS.md) ·
[Releases](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/RELEASING.md) ·
[Changelog](https://github.com/faisalmumtaz89/Lumen/blob/HEAD/CHANGELOG.md)

**LLM inference in Rust, for Apple Silicon and NVIDIA CUDA.**

A single binary that downloads a model, runs it GPU-resident, and prints text — built from scratch with zero ML dependencies (no PyTorch, no ONNX, no Python), native CUDA C and Metal kernels, a native tokenizer, and a native model format.

```bash
lumen run qwen3.5-9b:q8_0 "Write a haiku about Rust"
```

That one command downloads the model on first use, converts it, picks your backend (Metal on Apple Silicon, CUDA on NVIDIA), and streams tokens.

> **Status:** Production-ready for the shipped Qwen3.5…
