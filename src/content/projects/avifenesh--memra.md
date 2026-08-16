---
repo: "avifenesh/memra"
name: "memra"
description: "memra is a Rust + CUDA inference engine built for NVIDIA RTX PRO 6000 Blackwell and RTX 5090. It serves GGUF models over an OpenAI-compatible API, and every default it ships was measured on those two cards — both Blackwell sm_120a, with a separately compile-gated Hopper/H100 (sm_90a) lane alongside."
readmeQualityOk: true
url: "https://github.com/avifenesh/memra"
homepage: "https://huggingface.co/Avifenesh/bw24-bench"
language: "Rust"
languages: ["Rust", "Sass"]
languagePcts: [26, 24]
topics: ["blackwell", "cuda", "gguf", "gpu-kernels", "moe", "nvfp4", "rust", "speculative-decoding", "ai", "inference"]
stars: 305
forks: 35
openIssues: 0
closedIssues: 2
watchers: 23
contributors: 2
recentReleases: 10
createdAt: "2026-07-05T20:45:33Z"
lastCommitAt: "2026-08-16T04:08:16Z"
lastReleaseAt: "2026-07-10T00:12:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["avifenesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/269df8b6f8dd312b645055578b54128fa0434387d69114164d682f08aaf2f6dd/avifenesh/memra"
---

# memra

> **Running in production:** memra serves the public API at
> **[inference.tiyuvta.ai](https://inference.tiyuvta.ai)** — prepaid, OpenAI-compatible, one model
> live. If you want the engine's behaviour without owning the card, that is the shortest path to it,
> and the endpoint's [model card](https://inference.tiyuvta.ai/model) publishes the same measurements
> this README does, with their conditions. The lab behind both is
> **[tiyuvta.ai](https://tiyuvta.ai)**.

| | |
|---|---|
| **What** | Inference engine, Rust + CUDA, OpenAI-compatible serving |
| **Tuned for** | RTX PRO 6000 Blackwell (`sm_120a`) and RTX 5090, with a compile-gated H100 (`sm_90a`) lane |
| **Format** | GGUF primary; safetensors/NVFP4 paths under active work |
| **Shape** | One model per GPU, PP-2 across two when the weights do not fit |
| **Hosted** | [inference.tiyuvta.ai](https://inference.tiyuvta.ai) · lab: [tiyuvta.ai](https://tiyuvta.ai) |
| **Licence** | MIT |

**Contents** — [Install](#install) · [Quick start](#quick-start) ·
[Performance samples](#performance-samples) · [Models and hardware](#models-and-hardware) ·
[Serving](#serving) · [Design boundaries](#design-boundaries) · [Docs](#docs)…
