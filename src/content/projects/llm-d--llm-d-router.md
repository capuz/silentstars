---
repo: "llm-d/llm-d-router"
name: "llm-d-router"
description: "llm-d Router: The intelligent entry point for inference requests"
readmeQualityOk: true
url: "https://github.com/llm-d/llm-d-router"
homepage: "https://llm-d.ai/docs/architecture/core/router"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["inference", "kubernetes", "networking", "ai", "gateway-api"]
stars: 338
forks: 370
openIssues: 226
closedIssues: 776
watchers: 32
contributors: 271
recentReleases: 0
createdAt: "2025-05-05T12:45:33Z"
lastCommitAt: "2026-09-15T08:54:25Z"
lastReleaseAt: "2025-09-26T02:03:31Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 94
undervaluedScore: 45
maintainers: ["llm-d-router-release-notes[bot]", "zdtsw", "elevran"]
openGraphImageUrl: "https://opengraph.githubassets.com/539c9c15013efb2304ab03e40a01f7802bf734ce2b000fade6c8c4a56b77baec/llm-d/llm-d-router"
discussionCount: 0
---

# llm-d Router

> [!IMPORTANT]
> **Terminology Change**: The *Inference Scheduler* has been renamed to **llm-d Router**; see [Terminology](https://github.com/llm-d/llm-d-router/blob/HEAD/README.md#terminology).

> [!IMPORTANT]
> **API & Code Consolidation**: Core Endpoint Picker (EPP) code and the `InferenceObjective` and `InferenceModelRewrite` APIs have been merged into this repository from [Gateway API Inference Extension (GIE)]. The GIE repository now exclusively hosts the `InferencePool` API—an extension of the [Kubernetes Gateway API]—and defines the Endpoint Picker Protocol.

The **llm-d Router** is the intelligent entry point for inference traffic, delivering LLM load and prefix-cache aware routing, request prioritization, and advanced flow control across diverse request formats to fulfill complex serving objectives. It supports a flexible deployment model: it can run in **Standalone Mode**, where a self-managed Envoy proxy runs either alongside the EPP or as a separate service, or integrate with L7 load balancers—including self-managed instances (e.g., Istio, AgentGateway) and cloud-managed services (e.g., Google Cloud's Application Load Balancer)—via the Kubernetes…
