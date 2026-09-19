---
repo: "CURRENTF/Sparse-vLLM"
name: "Sparse-vLLM"
description: "A sparse-first inference engine (sparsevllm). It also contains DeltaKV compressor training + evaluation tooling (deltakv)."
readmeQualityOk: true
url: "https://github.com/CURRENTF/Sparse-vLLM"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 76
forks: 12
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-01-29T10:41:11Z"
lastCommitAt: "2026-09-19T08:12:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 36
maintainers: ["kuma-loong", "CURRENTF"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e46dfcbe0c69a825f90677e1bc04c6543894a84d884b7cbb55bf27469de2605/CURRENTF/Sparse-vLLM"
---

<p>
  </p>
</div>

A sparse-first inference engine for long-context LLM serving.

</div>

## Project Overview

Sparse-vLLM is an inference framework built with sparsity as the first design principle. Instead of layering sparse methods on top of a conventional KV cache, it rethinks cache layout, controller flow, and kernels so that multiple sparse mechanisms can plug in cleanly.

> **Note:** DeltaKV compressor training code is maintained separately in
> [CURRENTF/DeltaKV](https://github.com/CURRENTF/DeltaKV). This repository only
> keeps the native DeltaKV inference implementation under `src/sparsevllm/`;
> it does not include DeltaKV training code or an HF reference implementation.

## Key Runtime Principles

- Runtime parameter names are identical across `LLM(...)`, `Config`, JSON
  configs, benchmark manifests, and internal consumers. Use `sparse_method`
  everywhere; legacy field aliases are not accepted.
- Sparse method runtime state belongs in
  `src/sparsevllm/engine/cache_manager/`; `attention.py` should stay generic.
- Prefill scheduling is method-specific and registry-owned. The source of
  truth is `src/sparsevllm/method_registry.py`, not benchmark scripts.
- Sparse-vLLM…
