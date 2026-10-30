---
repo: "aumer-amr/labv2"
name: "labv2"
description: "My HomeOps running on Kubernetes"
readmeQualityOk: true
url: "https://github.com/aumer-amr/labv2"
language: "YAML"
languages: ["YAML", "Python"]
languagePcts: [61, 28]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "talos", "home-operations"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 39
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-07-18T09:41:03Z"
lastCommitAt: "2026-10-30T11:02:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["labv2-bot[bot]", "aumer-amr"]
openGraphImageUrl: "https://opengraph.githubassets.com/16ba36dbafc4a8c512a43c2988f61515c7d771e2d978f6ac249e26fed3022321/aumer-amr/labv2"
---

# labv2

Personal Talos Kubernetes cluster managed through Flux GitOps. Core services include Cilium, Hubble, Envoy Gateway, cert-manager, External Secrets, Spegel, Reloader, and Gatus.

This repository contains rendered cluster configuration. Initial template setup is complete; documentation now focuses on operating and redeploying the cluster.

## Runbooks

- [Deployment](https://github.com/aumer-amr/labv2/blob/HEAD/docs/deployment.md) — bootstrap Talos and applications, then verify the rollout.
- [GitOps](https://github.com/aumer-amr/labv2/blob/HEAD/docs/gitops.md) — change applications, reconcile Flux, and operate network routes.
- [Application databases](https://github.com/aumer-amr/labv2/blob/HEAD/docs/database.md) — add, connect, verify, upgrade, and recover per-application PostgreSQL clusters.
- [Application Valkey caches](https://github.com/aumer-amr/labv2/blob/HEAD/docs/valkey.md) — add, connect, verify, and upgrade isolated per-application Valkey instances.
- [Proactive AI monitoring](https://github.com/aumer-amr/labv2/blob/HEAD/docs/ai-cluster-monitoring.md) — Windmill scheduling, Qwen investigation, Langfuse tracing, and the planned GitHub issue workflow.
-…
