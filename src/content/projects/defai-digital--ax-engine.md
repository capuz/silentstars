---
repo: "defai-digital/ax-engine"
name: "ax-engine"
description: "Apple Silicon LLM runtime supporting Gemma 4 and Qwen 3.6 MTP modes"
readmeQualityOk: true
url: "https://github.com/defai-digital/ax-engine"
homepage: "https://automatosx.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 28]
topics: ["ai-interface", "generative-ai", "inference-engine", "llm", "local-llm", "macos", "metal", "rust", "gemma4", "mtp"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 44
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T04:42:30Z"
lastCommitAt: "2026-07-16T05:59:21Z"
lastReleaseAt: "2026-03-23T10:41:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["automatosx"]
openGraphImageUrl: "https://opengraph.githubassets.com/89c0d4f762dfa3352771c1b2d3eb90fa95247f00aa3daee5f3d7366306f05d7f/defai-digital/ax-engine"
---

# AX Engine

AX Engine is a Mac-first LLM inference runtime for Apple Silicon. Install a
wheel, download a model, and serve OpenAI-compatible endpoints locally — with
a repo-owned MLX path for Gemma, Qwen, and GLM, first-class MTP, and
peer-backed benchmarks against `mlx-lm`, llama.cpp, MTPLX, and lightning-mlx.

**Requires macOS 26 (Tahoe)+ on Apple Silicon (M2 Max or newer, 32 GB+ unified
memory).**

## Why AX Engine

- **Faster speculative decode** — one-command MTP packages
  (`ax-engine download-mtp`) with measured speedups vs same-package direct, and
  peer decode wins vs MTPLX and lightning-mlx on Qwen3.6
- **Strong direct decode on Apple Silicon** — Gemma and Qwen paths compete with
  `mlx-lm` and llama.cpp Metal on published decode charts
- **You own the stack you serve** — AX runs the MLX graph, KV/runtime, and
  OpenAI-compatible server for Gemma / Qwen / GLM; `mlx-lm` and `llama.cpp` stay
  optional compatibility adapters
- **Claims you can audit** — public rows ship with checked-in artifacts (route,
  model snapshot, sampler, accept rate, provenance)

## Quick Start

```bash
python3 -m pip install --upgrade pip
python3 -m pip install -U "ax-engine[download]>=6.9.0,<7"…
