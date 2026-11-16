---
repo: "hardenedlinux/SonicBoom"
name: "SonicBoom"
description: "SonicBoom is a compiler-first PyTorch alternative for language, vision, audio, and training. It builds on proven kernels and pushes performance further through compiler optimization, with native HTTP serving powered by GNU Artanis."
readmeQualityOk: true
url: "https://github.com/hardenedlinux/SonicBoom"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [55, 23]
topics: ["scheme", "mlir", "gguf", "inference-engine", "llama-cpp", "pytorch-alternative", "deep-learning-compiler", "local-llm", "deepseek", "gemma"]
stars: 34
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-28T01:19:15Z"
lastCommitAt: "2026-11-16T04:11:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 38
maintainers: ["NalaGinrut"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93a705304019b6e6035d7b1f39fbe4a35fdb90984f38d6f85cb4e8827904e98/hardenedlinux/SonicBoom"
---

# SonicBoom

**A native tensor runtime. No Python. One `.so`.**

On a desktop RTX 3050, SonicBoom edits code with Qwen2.5-7B at
**471 tok/s, 12.2× its own plain decode**. llama.cpp's fastest speculative
mode reaches 408 tok/s, and its output then differs from its own
non-speculative output on some turns. SonicBoom's output is identical, bit for
bit, with speculation on or off.

SonicBoom is written from the ground up in C++ and CUDA, exposed through a
stable C ABI, with GNU Guile as its first-class language. No Python
interpreter, pip or wheel tree is involved in inference.

## Numbers

**Qwen2.5-7B-Instruct Q4_K_M** on an RTX 3050 8 GB

| Workload | SonicBoom | llama.cpp | Ratio |
|---|---:|---:|---:|
| **Code editing, speculative decoding** | **471.1 tok/s** | 407.7 tok/s ¹ | **1.16×** |
| **Same output with speculation on and off** | **10 of 10 turns** | 8 of 10 turns ¹ | |
| Decode, speculation off, context 512 | 40.6 tok/s | 43.3 tok/s | 0.94× |
| Decode, speculation off, context 4K | 38.3 tok/s | 41.4 tok/s | 0.92× |
| Prefill, 512-token prompt | 1600 tok/s | 1594 tok/s | 1.00× |
| Prefill, 8K-token prompt | 1008 tok/s | 1425 tok/s | 0.71× |

Through the OpenAI-compatible…
