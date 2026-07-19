---
repo: "run-ai/karta"
name: "karta"
description: "Translation layer that maps any Kubernetes framework's Custom Resource Definitions (CRDs) into a standardized, generic structure."
readmeQualityOk: true
url: "https://github.com/run-ai/karta"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["inference", "k8s", "kubernetes", "training", "crd", "translation", "karta"]
stars: 55
forks: 7
openIssues: 22
closedIssues: 35
watchers: 3
contributors: 79
recentReleases: 0
createdAt: "2025-07-23T14:25:02Z"
lastCommitAt: "2026-07-19T06:11:12Z"
lastReleaseAt: "2026-03-01T13:42:18Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["lavianalon", "yuval-gr", "AviadHayumi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1caf328a67bde9fc30974357e21d55d6e42b8204f0a63723934f9191d532884/run-ai/karta"
discussionCount: 1
---

# Karta

**A standard way to describe the structure of any Kubernetes workload type.**

Karta lets you define a portable, declarative blueprint for any Kubernetes workload - whether it's a simple Deployment, a distributed PyTorchJob, or a custom CRD. Controllers and platforms can then use that blueprint to inspect, modify, and manage workloads without hard-coding knowledge of each type.

## The Problem

In Kubernetes, and especially in AI systems, a workload is not a standalone execution unit such as a single Pod. Instead, it is composed of multiple components organized in a complex hierarchy of resources, often exposed via custom resource definitions (CRDs) - for example: PyTorchJob, RayCluster, and MPIJob. Each of these CRDs structures the workload configuration differently, but they all share the same conceptual building blocks: pod specifications, scaling parameters, and status definitions.

If you're building a controller, scheduler, or platform that needs to work with multiple workload types, you end up writing bespoke logic for each one:

- Where is the pod template?
- How do I find the replica count?
- Which status conditions mean "running" vs "failed"?
- How do I modify…
