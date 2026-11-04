---
repo: "NVIDIA/NVSentinel"
name: "NVSentinel"
description: "NVSentinel detects and remediates GPU faults on Kubernetes nodes"
readmeQualityOk: true
url: "https://github.com/NVIDIA/NVSentinel"
homepage: "https://docs.nvidia.com/nvsentinel/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["accelerated-computing", "breakfix", "gpu", "gpu-monitoring", "resilience", "automation", "kubernetes", "observability"]
stars: 426
forks: 163
openIssues: 82
closedIssues: 476
watchers: 11
contributors: 100
recentReleases: 0
createdAt: "2025-09-16T12:43:23Z"
lastCommitAt: "2026-11-03T17:47:19Z"
lastReleaseAt: "2026-02-02T11:47:41Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 40
maintainers: ["XRFXLP", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b885881a9191008f76e1ac53b8989b474c1c1ed34200f1db61f4920e89d043f/NVIDIA/NVSentinel"
discussionCount: 5
---

# NVSentinel

**NVSentinel detects and remediates GPU faults on Kubernetes nodes**

A single bad GPU can silently corrupt a training run or leave a node sitting idle for hours before anyone notices. NVSentinel **detects** faults as they happen, **protects** jobs by cordoning and draining the affected node, and **remediates** it with a GPU reset or a reboot, returning it to service with no paging required.

- 🔍 **Detect**: real-time GPU, NIC, and system-level fault detection via DCGM, syslog, and cloud provider maintenance events
- 🛡️ **Protect**: cordon and drain the affected node before a fault spreads to other jobs
- 🔧 **Remediate**: auto-repair with a targeted GPU reset or a full reboot, then bring the node back into service
- 🧩 **Extensible**: pluggable health monitors, drain strategies, and remediation actions

## Prerequisites

- Kubernetes 1.34+ 
- Helm 3.0+
- [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator)
- [cert-manager](https://cert-manager.io/) v1.21+
- Persistent storage support for a database

The commands below get you ready for NVSentinel: the first makes sure the GPU Operator exposes DCGM as its own service, since NVSentinel queries it directly…
