---
repo: "notwitcheer/llm-bench-rig"
name: "llm-bench-rig"
description: "Dual-engine (llama.cpp + vLLM) LLM benchmarking pipeline for GGUF & safetensors on NVIDIA GPUs — speed, quality, live dashboard, publishable cards."
readmeQualityOk: true
url: "https://github.com/notwitcheer/llm-bench-rig"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["benchmarking", "cuda", "fastapi", "gguf", "llama-cpp", "llm", "lm-evaluation-harness", "machine-learning", "mmlu", "nvidia"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T19:03:15Z"
lastCommitAt: "2026-07-17T05:58:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 37
maintainers: ["notwitcheer"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e46c005859d92d526b8540dfcfb781decdf264982016c3fda3b976ba133fd35/notwitcheer/llm-bench-rig"
---

# llm-bench-rig

Professional benchmarking pipeline for GGUF and safetensors models on NVIDIA GPUs. Built for RTX 5090 (Blackwell), works with any CUDA-capable GPU.

Dual-engine: **llama.cpp** for GGUF models, **vLLM** for safetensors. Produces structured JSON results, live web dashboard, and publishable benchmark cards.

## What it does

- **Speed benchmarks** — prompt processing (pp128/pp512/pp2048) and text generation (tg128) via llama-bench or vLLM API
- **Quality benchmarks** — MMLU, ARC-Challenge, HellaSwag, HumanEval, GSM8K via lm-evaluation-harness
- **Live dashboard** — FastAPI + SSE, real-time GPU stats and benchmark progress
- **Export** — HTML reports, PNG cards (1200x675 for X/HF), cross-model comparison pages
- **Queue manager** — batch benchmarks with review gates between models

## Setup

```bash
# Clone and configure
cp config.example.yaml config.yaml
# Edit config.yaml with your paths and hardware

# Install dependencies
pip install -r requirements.txt
playwright install chromium
```

## Usage

```bash
# Benchmark a single model
python bench.py path/to/model.gguf

# Speed benchmarks only
python bench.py path/to/model.gguf --speed-only

# Queue multiple models…
