---
repo: "NVIDIA/aicr"
name: "aicr"
description: "Tooling for optimized, validated, and reproducible GPU-accelerated AI runtime in Kubernetes"
readmeQualityOk: true
url: "https://github.com/NVIDIA/aicr"
homepage: "https://docs.nvidia.com/aicr/"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["ai", "argocd", "config", "gpu", "helm", "kubernetes", "manifest", "runtime"]
stars: 456
forks: 130
openIssues: 168
closedIssues: 1039
watchers: 1
contributors: 92
recentReleases: 0
createdAt: "2026-01-30T19:02:59Z"
lastCommitAt: "2026-11-03T12:48:06Z"
lastReleaseAt: "2026-02-04T16:04:27Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 32
maintainers: ["mchmarny", "yuanchen8911", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146205509/b8f53512-f1f4-40cb-9ecf-ca6055a897b6"
---

# NVIDIA AI Cluster Runtime

AI Cluster Runtime (AICR) makes it easy to stand up GPU-accelerated Kubernetes clusters. It captures known-good combinations of drivers, operators, kernels, and system configurations and publishes them as version-locked **recipes** — reproducible artifacts for Helm, Argo CD, Flux, and Helmfile.

> **Full documentation:** [docs.nvidia.com/aicr](https://docs.nvidia.com/aicr)

## Why We Built This

Running GPU-accelerated Kubernetes clusters reliably is hard. Small differences in kernel versions, drivers, container runtimes, operators, and Kubernetes releases can cause failures that are difficult to diagnose and expensive to reproduce.

Historically, this knowledge has lived in internal validation pipelines and runbooks. AI Cluster Runtime makes it available to everyone.

Every AICR recipe is:

- **Optimized** — Tuned for a specific combination of hardware, cloud, OS, and workload intent.
- **Validated** — Passes automated constraint and compatibility checks before publishing.
- **Reproducible** — Same inputs produce identical deployments every time.

Every AICR recipe also carries two kinds of cryptographic proof: **where it came from** (provenance —…
