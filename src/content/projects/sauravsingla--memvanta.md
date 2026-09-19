---
repo: "sauravsingla/MemVanta"
name: "MemVanta"
description: "Native C++ LLM inference runtime with GGUF, quantized kernels, paged KV cache, and memory-adaptive execution beyond RAM/VRAM limits."
readmeQualityOk: true
url: "https://github.com/sauravsingla/MemVanta"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["benchmarking", "cpp", "cpu-inference", "edge-ai", "gguf", "inference", "llm", "memory-management", "quantization", "transformers"]
stars: 37
forks: 38
openIssues: 6
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T12:42:18Z"
lastCommitAt: "2026-09-19T08:13:48Z"
lastReleaseAt: "2026-08-25T04:05:24Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 44
maintainers: ["github-actions[bot]", "sauravsingla", "Smit1603"]
openGraphImageUrl: "https://opengraph.githubassets.com/0001f4be79421799ec06a62212a39c96df4ca8c1d3ea1d8ca545e1e062005037/sauravsingla/MemVanta"
discussionCount: 0
---

# MemVanta

**Run larger local LLMs with less RAM.**

MemVanta is an experimental C++20 runtime for **low-memory CPU LLM inference** with quantized Llama-family **GGUF models**. It explores mmap-backed model access, quantized CPU kernels, and paged KV cache for memory-constrained local AI.

## Quick Start

Build and test on Linux or macOS:

```bash
git clone https://github.com/sauravsingla/MemVanta.git
cd MemVanta
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j
ctest --test-dir build --output-on-failure
```

To reproduce the published memory measurements against pinned `llama.cpp`, follow the **[reproduction guide](https://github.com/sauravsingla/MemVanta/blob/HEAD/docs/EXTERNAL_REPRODUCTION.md)**.

## Benchmark: MemVanta vs llama.cpp

| Metric | MemVanta | pinned `llama.cpp` |
|---|---:|---:|
| OpenLLaMA 7B v2 Q4_0 peak RSS | **3.80 GiB** | 7.24 GiB |
| Prompt processing | 3.79 ± 0.02 tok/s | **21.59 ± 0.02 tok/s** |
| Token generation | 1.92 ± 0.00 tok/s | **9.71 ± 0.11 tok/s** |
| Peak-RSS reduction | **47.51%** | baseline |

Source of truth:…
