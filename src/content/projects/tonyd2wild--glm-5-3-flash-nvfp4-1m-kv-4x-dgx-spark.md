---
repo: "tonyd2wild/GLM-5.3-Flash-NVFP4-1M-KV-4x-DGX-Spark"
name: "GLM-5.3-Flash-NVFP4-1M-KV-4x-DGX-Spark"
description: "GLM-5.3-Flash (320B MoE) at TP4 across four DGX Sparks, same day as the model drop: 36 tok/s, 1.26M-token FP8 KV pool, 262K context, MTP spec decode. First TP4 glm5_next outside B200 hardware. Full patched-image recipe + the GB10 memory study."
readmeQualityOk: true
url: "https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-1M-KV-4x-DGX-Spark"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [51, 35]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-27T00:12:30Z"
lastCommitAt: "2026-08-27T14:32:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 19
maintainers: ["tonyd2wild"]
openGraphImageUrl: "https://opengraph.githubassets.com/556cf3fd7358702a7afbd2aca1bdb81e24c3ea8fb4114992e69b77162822b329/tonyd2wild/GLM-5.3-Flash-NVFP4-1M-KV-4x-DGX-Spark"
---

# GLM-5.3-Flash NVFP4 · 1M-Token KV · 4x DGX Spark · 36 tok/s

[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) (320B / A18B MoE, released 2026-08-26) serving across **all four NVIDIA DGX Spark (GB10) nodes** at tensor-parallel 4, using the [LibertAIDAI/GLM-5.3-Flash-NVFP4](https://huggingface.co/LibertAIDAI/GLM-5.3-Flash-NVFP4) quant — deployed the same day the model dropped.

**As far as we can tell: the first TP4 `glm5_next` deployment outside NVIDIA B200 hardware, the first fp8 KV cache for a NoPE-MLA model on any consumer Blackwell part, and a 1.26-million-token KV pool on $16K of desk hardware.**

## Numbers

| Metric | TP4 flagship |
|---|---|
| Decode | **35.7 tok/s** generic median · **up to 63.8 tok/s** warmed on structured/agentic output (MTP acceptance runs hot — [re-bench below](#warmed-streaming-re-bench--the-357-is-a-floor-not-the-ceiling-2026-08-27)) |
| TTFT | **0.204 s median** |
| Context | **1,048,576 (model-native 1M) — launcher default** · the 1.26M-token KV pool physically holds a full 1M-token request. Cap --max-model-len lower (e.g. 300000) for a snappier multi-user endpoint |
| KV pool | **5,033,164 tokens fp8** — 4.82 concurrent…
