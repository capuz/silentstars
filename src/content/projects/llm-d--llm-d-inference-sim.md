---
repo: "llm-d/llm-d-inference-sim"
name: "llm-d-inference-sim"
description: "A lightweight, configurable, and real-time simulator designed to mimic the behavior of vLLM without the need for GPUs or running actual heavy models."
readmeQualityOk: true
url: "https://github.com/llm-d/llm-d-inference-sim"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["incubating"]
stars: 224
forks: 176
openIssues: 10
closedIssues: 261
watchers: 27
contributors: 114
recentReleases: 0
createdAt: "2025-04-09T08:04:04Z"
lastCommitAt: "2026-10-29T10:37:37Z"
lastReleaseAt: "2025-09-16T06:54:47Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 46
maintainers: ["irar2", "David-Wu1119", "mayabar"]
openGraphImageUrl: "https://opengraph.githubassets.com/e46b23613ba2f5f9bbedfa9176e9feab31c2b63e6456221303e3859041807422/llm-d/llm-d-inference-sim"
---

# vLLM Simulator

`llm-d-inference-sim` is a lightweight, configurable, and real-time simulator designed to mimic the behavior of vLLM without the need for GPUs or running actual heavy models. It operates as a fully OpenAI-compliant server, allowing developers to test clients, schedulers, and infrastructure using realistic request-response cycles, token streaming, and latency patterns.

## Why is this required?

Running full LLM inference requires significant GPU resources and introduces non-deterministic latency, making it difficult to isolate infrastructure bugs or iterate quickly on control-plane logic. This simulator decouples development from heavy inference, offering a controlled environment to:

- **Accelerate Infrastructure Development**: Test routing, scheduling, and KV cache locality logic without waiting for slow, expensive GPU operations.
- **Ensure Deterministic Testing**: simulate precise token timing and latency to isolate performance regressions and bugs in a way that is impossible with non-deterministic real models.
- **Validate Observability**: Mirror vLLM’s Prometheus metrics to ensure monitoring and alerting systems are functioning correctly before deploying to…
