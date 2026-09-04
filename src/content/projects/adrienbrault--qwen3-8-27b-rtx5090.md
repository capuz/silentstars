---
repo: "adrienbrault/qwen3.8-27b-rtx5090"
name: "qwen3.8-27b-rtx5090"
description: "Qwen3.8-27B on RTX 5090s — 262K ctx, 1.5M-token KV pool, ~300 t/s code decode. NVFP4 + vLLM + sm120 patches, reproducible."
readmeQualityOk: true
url: "https://github.com/adrienbrault/qwen3.8-27b-rtx5090"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [69, 27]
topics: ["llm-inference", "lmcache", "local-llm", "quantization", "qwen", "rtx-5090", "swe-bench", "vllm"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T08:42:29Z"
lastCommitAt: "2026-09-04T08:09:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["adrienbrault"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cf25158c661bc4b46aa7131389ed791b0b4e853eed3face23231211136a496a/adrienbrault/qwen3.8-27b-rtx5090"
---

# Qwen3.8-27B on RTX 5090

Serving configuration, vLLM patches, launch scripts and measurements for running [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) on one or two RTX 5090 cards with 262K context. The target workload is a few concurrent coding agents with long contexts, plus interactive chat with vision, reasoning, tool calling and structured output all enabled.

Every number in this repo was measured on one machine, on the date given, and the raw results directory is named next to it. Nothing here is a projection.

## What you get

The served configuration (two cards, since 2026-09-04: vLLM 0.29 with nvfp4 KV, [bench/RESULTS.md](https://github.com/adrienbrault/qwen3.8-27b-rtx5090/blob/HEAD/bench/RESULTS.md) R168–R174):

| | value |
|---|---|
| context length | 262,144 tokens |
| KV pool on the GPUs | 937,795 tokens (nvfp4 KV, pinned at 14.5 GB per card), plus a 16 GiB CPU tier and a 300 GB LRU-capped disk tier that survive restarts. Both tiers work in whole 2,944-token blocks, so any prompt with at least one full block is cached; tier-served hits were verified with needles at 131K and 220K |
| decode, single stream, code, steady state | 244 t/s (2026-09-04) |
|…
