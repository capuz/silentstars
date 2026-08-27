---
repo: "tonyd2wild/GLM-5.3-Flash-NVFP4-2x-DGX-Spark"
name: "GLM-5.3-Flash-NVFP4-2x-DGX-Spark"
description: "GLM-5.3-Flash (NVFP4) on 2x NVIDIA DGX Spark - vLLM TP2, 262K context, MTP. World-first deploy recipe: 7 day-0 bugs found and fixed, patched sm121 image, probes and full report."
readmeQualityOk: true
url: "https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-2x-DGX-Spark"
language: "Python"
languages: ["Python", "Jinja", "Shell"]
languagePcts: [46, 31, 24]
stars: 42
forks: 4
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T20:46:55Z"
lastCommitAt: "2026-08-27T14:32:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 11
maintainers: ["tonyd2wild"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb76d0bb10bd683a97621fc47a7e8e39b46b826dff93e6e932d2ba8e0130285/tonyd2wild/GLM-5.3-Flash-NVFP4-2x-DGX-Spark"
---

# GLM-5.3-Flash on 2x NVIDIA DGX Spark

Serving [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) (320B total / 18B active MoE, released 2026-08-26) across two DGX Spark (GB10, SM121) nodes at tensor-parallel 2, using the [LibertAIDAI/GLM-5.3-Flash-NVFP4](https://huggingface.co/LibertAIDAI/GLM-5.3-Flash-NVFP4) weight-only NVFP4 quant. **262,144-token context on TP2 — and the model-native 1,048,576 (1M) on TP4, whose 3.77M-token KV pool holds 3.6 full 1M-token requests. Working, benchmarked, same-day as the model drop.**

As far as we can tell this was the first working GLM-5.3-Flash deployment on DGX Spark hardware. Getting there took fixing **seven distinct day-0 bugs** across vLLM, FlashInfer, and their dependency chain — every one is documented in [docs/DEPLOY-REPORT.md](https://github.com/tonyd2wild/GLM-5.3-Flash-NVFP4-2x-DGX-Spark/blob/HEAD/docs/DEPLOY-REPORT.md) with root causes, receipts, and the probe scripts that found them.

## Results

| Metric | bf16 TP2 (v7) | fp8+MTP-4 TP2 (v8) | **fp8+MTP-4 TP4 (v8, flagship)** |
|---|---|---|---|
| TTFT (median, 3 runs) | 0.239 s | 0.289 s | **0.204 s** |
| Decode | 14.3 tok/s | 21.8 tok/s | **35.7 tok/s (peak…
