---
repo: "tonyd2wild/GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark"
name: "GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark"
description: "GLM-5.3-Flash (NVFP4) on 2x NVIDIA DGX Spark - vLLM TP2, 262K context, MTP. World-first deploy recipe: 7 day-0 bugs found and fixed, patched sm121 image, probes and full report."
readmeQualityOk: true
url: "https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 89
forks: 9
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T20:46:55Z"
lastCommitAt: "2026-08-28T14:34:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 20
maintainers: ["tonyd2wild"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd2a37015733c9b95bd2fea0d7ee667c06caca4fbb49a47585e32df73bb33de7/tonyd2wild/GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark"
---

# GLM-5.3-Flash NVFP4 + DFlash2 on 2x NVIDIA DGX Spark

OpenAI-compatible vLLM serving of [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
(320B total / 18B active MoE) across two DGX Spark (GB10, SM121) nodes at tensor-parallel 2,
using the [LibertAIDAI/GLM-5.3-Flash-NVFP4](https://huggingface.co/LibertAIDAI/GLM-5.3-Flash-NVFP4)
weight-only quant, **fp8 KV cache**, and the [`incoai/GLM-5.3-Flash-DFlash2`](https://huggingface.co/incoai/GLM-5.3-Flash-DFlash2)
speculative drafter. 262,144-token context. Deployed the same day the model dropped.

Two firsts, as far as we can tell: the **first working GLM-5.3-Flash deployment on DGX Spark**
(seven day-0 bugs deep — [docs/DEPLOY-REPORT.md](https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark/blob/HEAD/docs/DEPLOY-REPORT.md)), and the **first
working DFlash2 deployment of this model on GB10** ([docs/DFLASH2-SPECULATIVE-DECODING.md](https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-DFlash2-2x-DGX-Spark/blob/HEAD/docs/DFLASH2-SPECULATIVE-DECODING.md)).

> 🔀 **Running all four Sparks?** The same images scale to TP4 with the model-native 1M context —
> see the sibling repo: **[GLM-5.3-Flash at TP4 · 1M…
