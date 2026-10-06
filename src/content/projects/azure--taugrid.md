---
repo: "Azure/taugrid"
name: "taugrid"
description: "Cloud-native AI infrastructure for teams to run, schedule, and monitor AI workloads on GPU-enabled Kubernetes clusters, from data preparation to distributed training, fine-tuning, and inference."
readmeQualityOk: true
url: "https://github.com/Azure/taugrid"
homepage: "https://azure.github.io/taugrid/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 49
forks: 5
openIssues: 19
closedIssues: 19
watchers: 1
contributors: 13
recentReleases: 5
createdAt: "2026-07-24T01:52:00Z"
lastCommitAt: "2026-10-06T10:41:21Z"
lastReleaseAt: "2026-09-25T22:11:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 41
maintainers: ["chokevin", "dependabot[bot]", "gossion"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8b16a785fcc409aa4fbcbb9c311e1a106ffb10408ebd0498850037906a83e90/Azure/taugrid"
discussionCount: 0
---

Cloud-native AI infrastructure for GPU workloads on Kubernetes

---

TauGrid runs GPU workloads on Kubernetes, including data preparation, distributed training, fine-tuning, and inference.

It combines the **tau CLI**, workload queueing and admission with **Kueue**, Ray cluster orchestration with **KubeRay**, node-level **GPU health monitoring**, and cluster and workload **observability**. Platform teams install this stack instead of assembling each component separately. Researchers use the CLI to submit and manage workloads without configuring Kubernetes directly.

## Features

| Capability | Description |
|---|---|
| **tau CLI** | Submit, monitor, and manage AI workloads from your terminal or CI pipeline |
| **Workload Queueing** | Fair-share scheduling, quota management, and priority-based admission via Kueue |
| **Ray Orchestration** | Managed Ray clusters for distributed training and inference via KubeRay |
| **GPU Health Monitoring** | Node-level diagnostics, automated drain on hardware faults, and fleet health visibility |
| **Observability** | Integrated metrics, logs, and dashboards for clusters, GPUs, and workloads |

## Architecture

TauGrid is built on open…
