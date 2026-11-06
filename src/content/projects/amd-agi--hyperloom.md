---
repo: "AMD-AGI/Hyperloom"
name: "Hyperloom"
description: "An agentic system that auto-optimizes LLM workloads on AMD GPUs."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/Hyperloom"
homepage: "https://rocm.docs.amd.com/projects/hyperloom"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent", "llm", "python", "skills", "ai-agents", "amd", "amd-gpu", "gpu", "gpu-kernels", "hip"]
stars: 262
forks: 79
openIssues: 12
closedIssues: 455
watchers: 2
contributors: 108
recentReleases: 0
createdAt: "2026-03-27T18:34:28Z"
lastCommitAt: "2026-11-06T11:23:33Z"
lastReleaseAt: "2026-07-29T02:40:32Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 33
maintainers: ["zoroyihan7", "lishuoshuo-amd", "siliangchen-amd"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd2455b01a17c0f04f3bc0fc033ff535d0b2d78c0d3f3ec281189a10115a67a2/AMD-AGI/Hyperloom"
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
| [sglang#41071](https://github.com/sgl-project/sglang/pull/41071) | 2026-10-10 | Qwen3-32B-FP8, 1024 in / 512 out, concurrency 4 | MI300X | +314 % output tok/s against the untuned Triton default; made the gfx942 default by sglang#43815 |
| [sglang#43815](https://github.com/sgl-project/sglang/pull/43815) | 2026-10-27 |…
