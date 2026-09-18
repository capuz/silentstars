---
repo: "sauravsingla/MemVanta"
name: "MemVanta"
description: "Native C++ LLM inference runtime with GGUF, quantized kernels, paged KV cache, and memory-adaptive execution beyond RAM/VRAM limits."
readmeQualityOk: true
url: "https://github.com/sauravsingla/MemVanta"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["benchmarking", "cpp", "cpu-inference", "edge-ai", "gguf", "inference", "llm", "memory-management", "quantization", "transformers"]
stars: 37
forks: 38
openIssues: 5
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T12:42:18Z"
lastCommitAt: "2026-09-18T08:27:07Z"
lastReleaseAt: "2026-08-25T04:05:24Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 44
maintainers: ["sauravsingla", "github-actions[bot]", "Smit1603"]
openGraphImageUrl: "https://opengraph.githubassets.com/94b2046d63ca8af21b6d9711cdf52182d284e6daf907b0d9b6ce7a95db19a257/sauravsingla/MemVanta"
discussionCount: 0
---

# MemVanta

**Memory-efficient local LLM inference in C++20.**

> **Run quantized GGUF models on CPUs when RAM capacity matters more than maximum tokens/sec.**

MemVanta is an experimental CPU inference runtime built around one goal: **fit larger local LLMs into smaller RAM budgets** using quantized kernels, mmap-backed model access, bounded caching, and paged KV cache.

**47.50% lower peak RSS on OpenLLaMA 7B v2 Q4_0 · ~3.80 GiB vs 7.24 GiB**  
**CPU-only · GGUF · Q4_0 / Q6_K / Q8_0 · AVX2/FMA · mmap · paged KV cache**

Status: **Active experimental runtime · trained-model validation up to 7B**

**Quick links:** [7B benchmark](#results-at-a-glance) · [30-second start](#30-second-start) · [Architecture](#architecture) · [Benchmark evidence](#benchmark-evidence) · [Reproduction](#reproducing-the-benchmarks) · [Contributing](#contributing)

> **Want to try it?** Build and run the benchmark executable → [30-second start](#30-second-start)

## When should I use MemVanta?

MemVanta is designed for experiments where **RAM is the primary constraint**: low-memory CPU inference, edge or constrained machines, GGUF runtime research, quantized kernel work, mmap/page-cache behavior, and…
