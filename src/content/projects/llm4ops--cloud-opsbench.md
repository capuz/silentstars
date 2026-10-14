---
repo: "LLM4Ops/Cloud-OpsBench"
name: "Cloud-OpsBench"
description: "A Reproducible Benchmark for Agentic Root Cause Analysis in Cloud Systems"
readmeQualityOk: true
url: "https://github.com/LLM4Ops/Cloud-OpsBench"
homepage: "https://arxiv.org/abs/2603.00468"
language: "Go"
languages: ["Go"]
languagePcts: [53]
topics: ["agentic-ai", "aiops", "kubernetes", "root-cause-analysis", "site-reliability-engineering"]
stars: 42
forks: 8
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T02:41:29Z"
lastCommitAt: "2026-10-14T08:57:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["wiluen"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a2ac9a22af3817065a56a338956e5048df535c8c35977b88a64823afc8602dd/LLM4Ops/Cloud-OpsBench"
---

**Cloud-OpsBench** is a benchmark for **agentic root cause analysis (RCA)** in Kubernetes-based cloud systems. It is built around a state snapshot paradigm: instead of requiring a live cluster, each fault case stores the cluster state, alerts, logs, and tool cache needed for deterministic diagnosis and replay.

The current release covers **two microservice systems**, **57 fault types**, and **754 fault cases**:

- **Online Boutique**: 550 cases
- **Train-Ticket**: 204 cases

## Key Features

- **Agentic RCA benchmark**: designed for multi-step diagnosis with tool use, not static classification.
- **No live cluster required**: benchmark cases can be run directly from the released artifacts without deploying Kubernetes clusters or microservice systems.
- **Deterministic replay**: each case is stored as an immutable snapshot, avoiding runtime system noise and preserving faithful diagnostic results across repeated runs.
- **Full-stack fault coverage**: includes admission, scheduling, startup, runtime, service routing, performance, and infrastructure faults.
- **Milestone-based process evaluation**: evaluates whether an agent acquires the required diagnostic evidence through…
