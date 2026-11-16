---
repo: "hyukudan/strix-halo-engine-lab"
name: "strix-halo-engine-lab"
description: "Exact LLM inference engine written from scratch for AMD Strix Halo (gfx1151, ROCm/HIP). Qwen3.8-Flash-Next on one node or two replicas; DeepSeek V4.1 Flash across two nodes over USB4 with an optional RTX PRO. Speculative decoding bit-identical to greedy, up to 255 tok/s on coding chat. MiniMax and GLM next."
readmeQualityOk: true
url: "https://github.com/hyukudan/strix-halo-engine-lab"
language: "C++"
languages: ["C++", "HIP"]
languagePcts: [55, 27]
topics: ["amd", "gfx1151", "gguf", "hip", "llm-inference", "mixture-of-experts", "mtp", "rocm", "speculative-decoding", "strix-halo"]
stars: 31
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-29T08:05:32Z"
lastCommitAt: "2026-11-16T11:53:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 30
maintainers: ["hyukudan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2e2b040b35647cca4866ff736fdd995c2e85ee799a0e798d82933b3eb22755f/hyukudan/strix-halo-engine-lab"
---

# Strix Halo engine lab

[English](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/README.md) · [Español](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/README.es.md)

This is a C++/HIP inference engine for AMD Strix Halo: Ryzen AI Max+ 395, Radeon 8060S (`gfx1151`), 128 GB of unified
memory, Linux and ROCm. It runs on one node, or on two nodes linked by USB4. An RTX PRO 6000 adds optional routes.
It runs Qwen3.8-Flash-Next, DeepSeek V4.1 Flash, MiniMax M3.1 Flash and GLM-5.3 Flash in production.
Nemotron 3.5 Bolt E4B, MiniMax H3 (audio + video) and MiniMax-H3-Image (text to image) are opt-in builds.
The default path is exact: its tokens are identical to the declared reference path.
How we measure and what "exact" covers: [methodology](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/docs/methodology.md).

## Results

Shipped defaults, greedy decoding, one request. The numbers are workload-specific. Conditions, repeat counts and
off switches are in [performance](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/docs/performance.md) and [measured gains](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/docs/measured-gains.md).…
