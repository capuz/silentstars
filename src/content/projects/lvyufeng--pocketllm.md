---
repo: "lvyufeng/PocketLLM"
name: "PocketLLM"
description: "Inference engine for large language models on consumer GPUs, with deep optimization for older hardware"
readmeQualityOk: true
url: "https://github.com/lvyufeng/PocketLLM"
homepage: "https://lvyufeng.github.io/PocketLLM/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [44, 37]
topics: ["ascend", "consumer-gpu", "cuda", "deepseek", "glm", "inference", "inference-engine", "llm", "minimax", "moe"]
stars: 53
forks: 9
openIssues: 20
closedIssues: 29
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-04-29T07:09:41Z"
lastCommitAt: "2026-09-22T08:46:13Z"
lastReleaseAt: "2026-09-14T15:28:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 40
maintainers: ["lvyufeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/2793f29b04de0f7f0f21ea7cc2bd73f55dac98a429e11e559ccc3ddb6de07351/lvyufeng/PocketLLM"
---

# PocketLLM

[中文](https://github.com/lvyufeng/PocketLLM/blob/HEAD/README_CN.md) | English

PocketLLM is an experimental C++/CUDA and PyTorch inference stack for running large language models on consumer multi-GPU systems. It combines model-specific kernels, low-bit formats, tensor/expert parallelism, CPU/GPU placement, and reproducible single-request benchmarks.

The project started with DeepSeek-V4 on 4×RTX 2080 Ti and now includes validated runtimes for DeepSeek-V4, MiniMax-M2.7, GLM-5.2, and Qwen3.8-27B-FP8. PocketLLM is not a single universal backend: each model has a runtime matched to its architecture and checkpoint format.

> **Status:** research and engineering software. The numbers below are measurements from specific checkpoints and hardware configurations, not general performance guarantees.

## Installation

### Quick install (full capabilities)

```bash
# Install the build prerequisites first; the build imports them from the
# environment rather than fetching them. See the note below.
pip install "torch>=2.0,<2.7" "setuptools>=68" wheel ninja cmake pybind11

pip install pocketllm --no-build-isolation
```

This installs PocketLLM with both PyTorch and C++ engine…
