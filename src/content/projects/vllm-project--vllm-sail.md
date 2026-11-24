---
repo: "vllm-project/vllm-sail"
name: "vllm-sail"
description: "Community maintained hardware plugin for vLLM on T-Head SAIL"
readmeQualityOk: true
url: "https://github.com/vllm-project/vllm-sail"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 33
forks: 23
openIssues: 53
closedIssues: 33
watchers: 0
contributors: 35
recentReleases: 9
createdAt: "2026-09-23T07:10:55Z"
lastCommitAt: "2026-11-24T13:06:52Z"
lastReleaseAt: "2026-11-22T03:31:25Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 84
undervaluedScore: 47
maintainers: ["kaiw-95", "Yunzshi310", "alicesuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5e00a674dc683ce43e7d2ee3fb073ba10a5fc3adc29ea3f1721a68791ddcc20/vllm-project/vllm-sail"
---

## Overview

vLLM SAIL is a hardware plugin for [vLLM](https://github.com/vllm-project/vllm).
It connects vLLM's inference engine to the SAIL software stack, bringing PPU
kernels, attention backends, quantization and model integration to the standard
vLLM Python API and OpenAI-compatible server.

**SAIL** is the software brand and **Zhenwu (真武)** is the hardware product
name. The T-Head AI chips are **Zhenwu 810E** and **Zhenwu M890**. The Python
distribution is `vllm-sail`, the import package is `vllm_sail`, and the vLLM
plugin name is `ppu`.

The plugin builds native kernels with **HGGC**, using the `hgcc` compiler and
[cmake-hgcc](https://github.com/t-head/cmake-hgcc). PPU libraries and
[Triton for SAIL](https://github.com/t-head/triton-for-sail) provide specialized
compute paths. vLLM discovers the installed plugin through its platform and
general plugin entry points.
