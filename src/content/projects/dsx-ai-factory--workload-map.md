---
repo: "dsx-ai-factory/workload-map"
name: "workload-map"
description: "Translation layer that maps any Kubernetes framework's Custom Resource Definitions (CRDs) into a standardized, generic structure."
readmeQualityOk: true
url: "https://github.com/dsx-ai-factory/workload-map"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["inference", "k8s", "kubernetes", "training", "crd", "translation", "karta"]
stars: 74
forks: 18
openIssues: 31
closedIssues: 90
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2025-07-23T14:25:02Z"
lastCommitAt: "2026-10-05T10:47:25Z"
lastReleaseAt: "2026-03-01T13:42:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["AviadHayumi", "dependabot[bot]", "rogirun"]
openGraphImageUrl: "https://opengraph.githubassets.com/22010f61bb79b03b99f2298b2aae30d0b8a452a379daea53e1ab07c7a9f6fa22/dsx-ai-factory/workload-map"
discussionCount: 2
---

# Workload-Map (formerly Karta)

> **Repository move and rename notice:** On September 10, 2026, this repository
> moved from the run-ai GitHub organization to
> `dsx-ai-factory/karta`. On September 15, 2026, the project was renamed from
> Karta to Workload-Map to align with DSX OS naming conventions, and the
> repository moved again to
> [`dsx-ai-factory/workload-map`](https://github.com/dsx-ai-factory/workload-map).
> Existing repository URLs and standard Git operations continue to work through
> GitHub redirects. The Go module path has also moved to
> `github.com/dsx-ai-factory/workload-map`; update any pinned `go get` or import
> paths, GitHub Actions, webhooks, or other automation that reference
> `run-ai/karta` or `dsx-ai-factory/karta`.

**A standard way to describe the structure of any Kubernetes workload type.**

Karta lets you define a portable, declarative blueprint for any Kubernetes workload - whether it's a simple Deployment, a distributed PyTorchJob, or a custom CRD. Controllers and platforms can then use that blueprint to inspect, modify, and manage workloads without hard-coding knowledge of each type.

## The Problem

In Kubernetes, and especially in AI systems, a…
