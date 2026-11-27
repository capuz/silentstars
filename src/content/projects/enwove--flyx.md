---
repo: "enwove/flyx"
name: "flyx"
description: "Zero-dependency local LLM inference engine in a ~50 MB binary — native long context, tuned per GPU, built-in speculative decoding and web dashboard."
readmeQualityOk: true
url: "https://github.com/enwove/flyx"
homepage: "https://enwove.ai/product/flyx"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [46, 26]
topics: ["anthropic-api", "cpp", "cuda", "gguf", "inference", "llm", "local-llm", "long-context", "openai-api", "speculative-decoding"]
stars: 100
forks: 10
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 2
createdAt: "2026-11-23T08:48:17Z"
lastCommitAt: "2026-11-27T13:01:49Z"
lastReleaseAt: "2026-11-26T19:16:06Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 33
maintainers: ["pmzzs", "rucnyz", "snag3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1468507631/48ee283d-95bc-4b9a-89aa-5d81a3f88c61"
---

---

**FLYX** is a zero-dependency local LLM engine that fits in a single ~57 MB Windows `.exe` — fast speculative decoding, native long context, tuned per GPU, no setup required. Run supported GGUF models as they are and serve them to your browser, scripts, and coding agents over OpenAI- and Anthropic-compatible APIs.

## Key Features

- **Up to 6× faster generation** — Built-in speculative decoding (MTP, DFlash2, DSpark, and prompt lookup): **565.5 tok/s** on Qwen3.8-27B and **438.9 tok/s** on Inkling-2-Mini on an RTX 5090 ([Performance](#performance)).
- **Up to 1M native context on a consumer PC** — Runs Inkling-2-Mini at 1M context on 16 GB VRAM + 32 GB RAM.
- **Tuned per GPU, zero manual flags** — Ships measured kernel tuning tables for 16 NVIDIA GPUs and automatically sizes context length, K/V precision, and GPU/RAM placement from available memory. No guessing offload counts, batch sizes, or cache types.
- **No install, no dependencies, ~57 MB** — CUDA and C++ runtimes are linked in; only the NVIDIA driver (≥ 580) is required. No CUDA Toolkit, Python, or Docker. Single ~57 MB `.exe` on Windows (double-click to run), or a tarball on Linux.
