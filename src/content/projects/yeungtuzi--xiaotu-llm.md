---
repo: "yeungtuzi/Xiaotu-LLM"
name: "Xiaotu-LLM"
description: "XTU = X Transformers Unity — hybrid (CPU-expert + GPU) inference acceleration for vLLM: mainline plugin + CPU MoE engine (AVX512-VNNI/BF16 MXFP4/FP8), long-prefill GPU streaming, SM80 (A100) port."
originalDescription: "XTU = X Transformers Unity — hybrid (CPU-expert + GPU) inference acceleration for vLLM: mainline plugin + CPU MoE engine (AVX512-VNNI/BF16 MXFP4/FP8), long-prefill GPU streaming, SM80 (A100) port."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yeungtuzi/Xiaotu-LLM"
language: "Python"
languages: ["Python"]
languagePcts: [57]
topics: ["avx512", "avx512-vnni", "cpu-inference", "cpu-offloading", "deepseek", "fp8", "glm", "gpu-inference", "int8", "llm-inference"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-09T17:07:46Z"
lastCommitAt: "2026-10-27T12:39:16Z"
lastReleaseAt: "2026-10-09T09:58:05Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["yeungtuzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c16b36e599acfe52379da74baf373d1e77a316ca331ca45b206b94993edfa36/yeungtuzi/Xiaotu-LLM"
---

> **v0.2.9**: Optimized for **Qwen3.8-Flash-Next**. Adds **resident expert layers** (12 curated layers; decode 46.3/92.9/127.3 tok/s @C=1/2/4) and fixes a CUDA Graph capture crash. See the [release notes](https://github.com/yeungtuzi/Xiaotu-LLM/blob/HEAD/RELEASE_NOTES_v0.2.9.md).

> **Xiaotu-LLM** (pronounced "Xiaotu-LLM", i.e. 小兔-LLM) is an **inference architecture** for **very large MoE models**, provided as a vLLM plugin.
>
> The name expands to **eXpert Inference with Adaptive Orchestration of Tiered Units**:
> experts and layers are **placed in tiers**, and a unified scheduler **orchestrates** prefetching, residency, and overlap of compute ——
> so inference stays efficient even when VRAM can only hold a fraction of the weights.
>
> ⚠️ Naming history: the project was earlier called **vllm-xtu-moe** (abbreviated XTU at the time). Since 2026-10 it has been unified as **Xiaotu-LLM**;
> the compute engine is still called **xiaotu-moe**. Old names in historical documents are kept as they were at the time.
>
> The core idea is **tiered data placement**:
>
> * **GPU-resident**: attention/KV, dense, drafter, and other parts **needed at every step**;
> * **GPU dynamic swap-in**: hot…
