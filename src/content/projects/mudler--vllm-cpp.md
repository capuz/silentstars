---
repo: "mudler/vllm.cpp"
name: "vllm.cpp"
description: "a community oriented 1:1 vLLM port in C++ with additional features"
readmeQualityOk: true
url: "https://github.com/mudler/vllm.cpp"
language: "C++"
languages: ["C++"]
languagePcts: [76]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T21:35:04Z"
lastCommitAt: "2026-07-11T06:01:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["mudler"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9791303058cdf75431b0d527102190bfefeda1f195ec90808ecac60e649e13d/mudler/vllm.cpp"
---

# vllm.cpp

A 1:1 port of [vLLM](https://github.com/vllm-project/vllm) to pure C++ —
no Python, no PyTorch, no ggml at runtime. It mirrors the V1 architecture and
targets the same algorithms and serving surface; the tables below distinguish
the implemented subset from the remaining parity work. It is usable as a
library (llama.cpp-style) with a C API, an example CLI, and an
OpenAI-compatible server.

> ⚠️ **Pre-release, under heavy development.** Both NVFP4 gate models —
> **Qwen3.6-35B-A3B** (MoE hybrid) and **Qwen3.6-27B** (dense W4A4) — now run the
> full paged engine end-to-end on **NVIDIA GB10** (DGX Spark, sm_121a) with
> **token-exact greedy gates passing**, and throughput is measured against vLLM
> on real hardware. We **beat vLLM run eager** on both models; against vLLM's
> *production* config (CUDA graphs + torch.compile) **both gate models measure
> ≥1.0× total throughput at their large-concurrency operating points**: the
> **35B at 1.02×** (Triton-AOT GDN build; 0.99× in the default pure-C++ build)
> and the **27B at 1.007× conc16 / 1.007× conc32** (vendored FA-2 prefill,
> default-on; per-rep spreads in *Status*) — with better TTFT/TPOT and less
> peak memory on both.…
