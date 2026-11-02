---
repo: "simplyblock/simplyblock-operator"
name: "simplyblock-operator"
description: "Official Simplyblock Operator and CSI driver repository to manage and operate Simplyblock Storage Clusters"
readmeQualityOk: true
url: "https://github.com/simplyblock/simplyblock-operator"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 15
forks: 2
openIssues: 52
closedIssues: 119
watchers: 0
contributors: 24
recentReleases: 0
createdAt: "2025-12-01T09:18:14Z"
lastCommitAt: "2026-11-02T11:36:01Z"
lastReleaseAt: "2026-06-30T16:17:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 60
maintainers: ["noctarius", "boddumanohar", "wmousa"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5836dcf17f3b0d0164c7d39855a9435eb5b4b57aa623d89be6ffe9f6c4505df/simplyblock/simplyblock-operator"
---

# Simplyblock for Kubernetes

**Everything you need to run simplyblock — high-performance NVMe/TCP block storage — natively on Kubernetes**

### 📖 Read the full documentation at **[docs.simplyblock.io](https://docs.simplyblock.io)**

---

## 🚀 Overview

This repository is the home of simplyblock's Kubernetes integration. It bundles the operator, the
CSI driver, the shared node-level storage library, and the Helm charts that deploy them — so the
whole stack is developed, versioned, built, and released together from a single source tree.

**Simplyblock** delivers enterprise-grade, software-defined block storage to Kubernetes over
**NVMe-over-TCP**: ultra-low latency, snapshots, clones, erasure coding, multi-tenancy, and QoS —
without specialized hardware or vendor lock-in.

👉 For the supported, end-to-end installation flow, see the
[Simplyblock Kubernetes Deployment Guide](https://docs.simplyblock.io/latest/deployments/kubernetes/).

---

## 🧱 Components

| Component | Path | Description |
|-----------|------|-------------|
| **Operator** | [`operator/`](https://github.com/simplyblock/simplyblock-operator/blob/HEAD/operator/README.md) | Kubernetes operator for declarative…
