---
repo: "lvyufeng/PocketLLM"
name: "PocketLLM"
description: "Inference engine for large language models on consumer GPUs, with deep optimization for older hardware"
readmeQualityOk: true
url: "https://github.com/lvyufeng/PocketLLM"
homepage: "https://lvyufeng.github.io/PocketLLM/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [58, 38]
topics: ["ascend", "consumer-gpu", "cuda", "deepseek", "glm", "inference", "inference-engine", "llm", "minimax", "moe"]
stars: 54
forks: 9
openIssues: 7
closedIssues: 54
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-04-29T07:09:41Z"
lastCommitAt: "2026-10-10T10:05:21Z"
lastReleaseAt: "2026-09-14T15:28:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["lvyufeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/f807d9ad8063b973d84d59e928e76edbfa7af6e5234530d6986588eebec89d1f/lvyufeng/PocketLLM"
---

# PocketLLM

**English** | [中文](https://github.com/lvyufeng/PocketLLM/blob/HEAD/README_CN.md)

Run a large language model on **one accelerator** — a single GPU, an edge board, the phone in your
pocket. One process owns one device. If the checkpoint does not fit, it is quantized further.

> **Status: the C engine runs Qwen3-0.6B, f16 or `q4_k_m`; the Python package does not run a model.**
> `src/` (`libpocketllm.so`) reads a GGUF, tokenizes with the checkpoint's own BPE, walks the Qwen3
> graph and decodes greedily — on `f32`/`f16` weights, and on packed `q4_k`/`q6_k` that are decoded
> inside the kernel and never widened. Checked token-for-token against llama.cpp on `cpu` and on a
> `cuda` card, for both a 1.4 GB f16 checkpoint and the 456 MB `q4_k_m` one quantized from it — each
> backend against the attention convention it implements, since llama.cpp's default flash-attention
> mode and its full-softmax mode are different arithmetic and pick different tokens at a near-tie.
> The Python package is the *host side* — the kernel ABI as spec, the numpy oracle, the
> GGUF loader, the quantization decoders, the execution layer and the OpenAI-compatible HTTP surface
> — and **no Python…
