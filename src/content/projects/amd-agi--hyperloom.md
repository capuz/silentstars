---
repo: "AMD-AGI/Hyperloom"
name: "Hyperloom"
description: "An agentic system that auto-optimizes LLM workloads on AMD GPUs."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/Hyperloom"
homepage: "https://rocm.docs.amd.com/projects/hyperloom"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "llm", "python", "skills", "ai-agents", "amd", "amd-gpu", "gpu", "gpu-kernels", "hip"]
stars: 257
forks: 76
openIssues: 13
closedIssues: 442
watchers: 2
contributors: 105
recentReleases: 0
createdAt: "2026-03-27T18:34:28Z"
lastCommitAt: "2026-10-28T09:57:22Z"
lastReleaseAt: "2026-07-29T02:40:32Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 33
maintainers: ["BaoYunkai", "zoroyihan7", "luochen-amd"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4139745b931b5ffd191d7af381229b96a80d30ced809c81d3cfdeeae7acaa7b/AMD-AGI/Hyperloom"
---

# ROCm Hyperloom

**ROCm™ Hyperloom** is a multi-agent harness that autonomously optimizes inference
on AMD Instinct™ GPUs. It profiles each workload, searches framework and kernel
optimizations, validates every candidate end to end, and carries proven results
into a recipe knowledge base — without per-model human tuning.

It supports text generation, image generation, and custom pipelines on vLLM,
SGLang, and xDiT.

## Merged upstream

Hyperloom found each of these in a real optimization session on AMD Instinct GPUs, and vLLM or
SGLang merged it. The numbers are quoted from the linked PR and were measured on the upstream
revision it names; the PR also carries the benchmark commands, the accuracy checks, and the
operating points where the gain does not apply.

| Upstream PR | Merged | Model / workload | GPU | Measured effect |
|-------|------|-------|------|-------|
| [vllm#58539](https://github.com/vllm-project/vllm/pull/58539) | 2026-09-30 | DeepSeek-V4.1-Flash, 307 in / 23 out, TP=2 | MI355X | +53.9 % total tok/s, −37.0 % mean TTFT |
| [sglang#41071](https://github.com/sgl-project/sglang/pull/41071) | 2026-10-10 | Qwen3-32B-FP8, 1024 in / 512 out, concurrency 4 | MI300X | +314…
