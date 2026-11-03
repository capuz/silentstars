---
repo: "aumer-amr/labv2"
name: "labv2"
description: "My HomeOps running on Kubernetes"
readmeQualityOk: true
url: "https://github.com/aumer-amr/labv2"
language: "YAML"
languages: ["YAML", "Python"]
languagePcts: [59, 29]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "talos", "home-operations"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 39
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-07-18T09:41:03Z"
lastCommitAt: "2026-11-03T10:51:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["aumer-amr", "labv2-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f02074b6f6335ca7c3ab21eada17fff5c64905ff0a4e0f83781604155c538a2/aumer-amr/labv2"
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
