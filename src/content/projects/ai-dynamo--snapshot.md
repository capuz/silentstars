---
repo: "ai-dynamo/snapshot"
name: "snapshot"
description: "Snapshot gets GPU pods ready in seconds instead of minutes — by restoring a fully initialized GPU worker instead of starting one from scratch. Kubernetes-native checkpoint & restore that runs alongside your existing stack."
readmeQualityOk: true
url: "https://github.com/ai-dynamo/snapshot"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [45, 21]
topics: ["checkpoint-restore", "cold-start", "criu", "cuda-checkpoint", "gpu", "inference", "kubernetes"]
stars: 76
forks: 41
openIssues: 118
closedIssues: 102
watchers: 3
contributors: 34
recentReleases: 8
createdAt: "2026-07-13T16:05:40Z"
lastCommitAt: "2026-11-02T13:38:36Z"
lastReleaseAt: "2026-10-18T14:56:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 39
maintainers: ["oleg-kushniriov", "galletas1712", "shayasoolin"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ae4bbf692349667bf89ac84ce053b49b4addfbe208c48c07c0d027f74eca8a/ai-dynamo/snapshot"
discussionCount: 0
---

# Snapshot

Snapshot is a Kubernetes-native checkpoint and restore system for NVIDIA GPU
workloads. It checkpoints a fully initialized GPU pod — its running process, with
CPU and GPU memory — and restores that state on any compatible node, so a pod
becomes ready in seconds instead of minutes.

Snapshot provides the checkpoint and restore primitives for GPU pods.
Orchestration — which pods to checkpoint, when, and how the checkpoints are
restored — is left to the systems that integrate it.

> [!NOTE]
> Snapshot's APIs may still change, so it is not yet recommended for
> production-critical workloads.

## The Problem

In inference serving, a replica can't answer a single request until it is fully
initialized — model weights loaded into GPU memory, CUDA and runtime libraries
initialized, execution kernels warmed up, and computation graphs compiled. For
large models, this **cold start** takes minutes.

That cost is paid over and over. Every replica added to meet demand, every
scale-up from zero, every restart or reschedule pays the full cold start again
before it can serve traffic:

- New replicas take minutes to become ready, so autoscaling lags behind demand.
- Teams over-provision…
