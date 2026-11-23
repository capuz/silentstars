---
repo: "hyukudan/strix-halo-engine-lab"
name: "strix-halo-engine-lab"
description: "C++ inference on AMD Strix Halo (one node or USB4 pair) and NVIDIA RTX PRO 6000. Engines for Qwen3.8-Flash-Next, Qwen3.8-27B, DeepSeek V4.1 Flash, GLM-5.3 Flash, Hy4-flash, MiniMax M3.1 Flash, MiniMax H3, MiniMax-H3-Image and Nemotron 3.5 Bolt E4B."
readmeQualityOk: true
url: "https://github.com/hyukudan/strix-halo-engine-lab"
language: "C++"
languages: ["C++", "HIP"]
languagePcts: [56, 23]
topics: ["amd", "gfx1151", "gguf", "hip", "llm-inference", "mixture-of-experts", "mtp", "rocm", "speculative-decoding", "strix-halo"]
stars: 39
forks: 8
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-29T08:05:32Z"
lastCommitAt: "2026-11-23T12:26:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 34
maintainers: ["hyukudan"]
openGraphImageUrl: "https://opengraph.githubassets.com/58f3edcf3762f9f69552a4b0bc297acd11bb2da0937ec14645131dc634553fc3/hyukudan/strix-halo-engine-lab"
---

# Strix Halo engine lab

[English](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/README.md) · [Español](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/README.es.md)

This is a C++/HIP inference engine for AMD Strix Halo: Ryzen AI Max+ 395, Radeon 8060S (`gfx1151`), 128 GB of unified
memory, Linux and ROCm. It runs on one node, or on two nodes linked by USB4. An RTX PRO 6000 adds optional routes.
It runs Qwen3.8-Flash-Next, DeepSeek V4.1 Flash, MiniMax M3.1 Flash and GLM-5.3 Flash in production.
Opt-in builds include Qwen3.8-27B, Hy4-flash, Nemotron 3.5 Bolt E4B, MiniMax H3 (audio + video)
and MiniMax-H3-Image (text to image).
Profiles vary by engine. EXACT preserves the bits of its declared reference.
How we measure and what "exact" covers: [methodology](https://github.com/hyukudan/strix-halo-engine-lab/blob/HEAD/docs/methodology.md).
