---
repo: "volcano-sh/kthena"
name: "kthena"
description: "Lightweight, Modular, Kubernetes-native AI serving platform for scalable model serving."
readmeQualityOk: true
url: "https://github.com/volcano-sh/kthena"
homepage: "https://kthena.volcano.sh"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 485
forks: 220
openIssues: 158
closedIssues: 485
watchers: 10
contributors: 122
recentReleases: 0
createdAt: "2025-05-08T08:14:48Z"
lastCommitAt: "2026-10-26T03:02:21Z"
lastReleaseAt: "2026-07-16T07:32:47Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 39
maintainers: ["volcano-sh-bot", "YaoZengzeng", "iamtanishqjain"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/979885343/d919ee0f-e7b2-4dbd-8529-6df597f4516c"
discussionCount: 2
---

# Kthena

| <a href="https://kthena.volcano.sh/">Documentation</a> | <a href="https://kthena.volcano.sh/blog">Blog</a> | <a href="#">White Paper</a> | <a href="#">Slack</a> |

## Overview

**Kthena** is a lightweight, Kubernetes-native LLM inference platform that transforms how organizations deploy and manage Large Language Models in production. Built with declarative model lifecycle management and intelligent request routing, it provides high performance and enterprise-grade scalability for LLM inference workloads.

The platform extends Kubernetes with purpose-built Custom Resource Definitions (CRDs) for managing LLM workloads, supporting multiple inference engines (vLLM, SGLang, Triton) and advanced serving patterns like prefill-decode disaggregation. Kthena's architecture separates control plane operations (model lifecycle, autoscaling policies) from data plane traffic routing through an intelligent router, enabling teams to manage complex LLM deployments with familiar cloud-native patterns while delivering cost-driven autoscaling, heterogeneous accelerators support, and multi-backend inference engines.

Kthena is deliberately **lightweight and composable**. The entire platform…
