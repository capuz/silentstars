---
repo: "sgl-project/sglang-jax"
name: "sglang-jax"
description: "JAX backend for SGL"
readmeQualityOk: true
url: "https://github.com/sgl-project/sglang-jax"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 298
forks: 110
openIssues: 139
closedIssues: 388
watchers: 4
contributors: 71
recentReleases: 4
createdAt: "2025-07-18T00:54:26Z"
lastCommitAt: "2026-07-06T07:04:30Z"
lastReleaseAt: "2026-05-29T06:29:44Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 41
maintainers: ["Rodrian7", "MokusMokun", "JamesBrianD"]
openGraphImageUrl: "https://opengraph.githubassets.com/b19304837c019b0a466d438c1005b5a5712d8866446eafd0278012c7f5491165/sgl-project/sglang-jax"
discussionCount: 6
---

# SGL-JAX: High-Performance LLM Inference on JAX/TPU

SGL-JAX is a high-performance, JAX-based inference engine for Large Language Models (LLMs), specifically optimized for Google TPUs. It is engineered from the ground up to deliver exceptional throughput and low latency for the most demanding LLM serving workloads.

The engine incorporates state-of-the-art techniques to maximize hardware utilization and serving efficiency, making it ideal for deploying large-scale models in production on TPUs.

## Key Features

- **High-Throughput Continuous Batching**: Implements a sophisticated scheduler that dynamically batches incoming requests, maximizing TPU utilization and overall throughput.
- **Optimized KV Cache with Radix Tree**: Utilizes a Radix Tree for KV cache management (conceptually similar to PagedAttention), enabling memory-efficient prefix sharing between requests and significantly reducing computation for prompts with common prefixes.
- **FlashAttention Integration**: Leverages a high-performance FlashAttention kernel for faster and more memory-efficient attention calculations, crucial for long sequences.
- **Tensor Parallelism**: Natively supports tensor parallelism to…
