---
repo: "simplyblock/simplyblock-operator"
name: "simplyblock-operator"
description: "Official Simplyblock Operator and CSI driver repository to manage and operate Simplyblock Storage Clusters"
readmeQualityOk: true
url: "https://github.com/simplyblock/simplyblock-operator"
language: "Go"
languages: ["Go"]
languagePcts: [79]
stars: 16
forks: 2
openIssues: 53
closedIssues: 121
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2025-12-01T09:18:14Z"
lastCommitAt: "2026-11-16T10:56:21Z"
lastReleaseAt: "2026-06-30T16:17:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 60
maintainers: ["mxsrc", "boddumanohar", "wmousa"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6b306ee5766332665efa2c69bc8cd90ef4338eedc55f66477ba0a4206c3f488/simplyblock/simplyblock-operator"
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
