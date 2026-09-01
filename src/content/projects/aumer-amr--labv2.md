---
repo: "aumer-amr/labv2"
name: "labv2"
description: "My HomeOps running on Kubernetes"
readmeQualityOk: true
url: "https://github.com/aumer-amr/labv2"
language: "YAML"
languages: ["YAML"]
languagePcts: [92]
topics: ["flux", "gitops", "kubernetes", "kubesearch", "talos", "home-operations"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-07-18T09:41:03Z"
lastCommitAt: "2026-09-01T08:47:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 72
maintainers: ["aumer-amr", "labv2-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a4e23d24ce209c6e26f701bc1bf07bfa1db960031b31162b97b9bff28506c57/aumer-amr/labv2"
---

</div>

# labv2

Personal Talos Kubernetes cluster managed through Flux GitOps. Core services include Cilium, Hubble, Envoy Gateway, cert-manager, External Secrets, Spegel, Reloader, and Gatus.

This repository contains rendered cluster configuration. Initial template setup is complete; documentation now focuses on operating and redeploying the cluster.

## Runbooks

- [Deployment](https://github.com/aumer-amr/labv2/blob/HEAD/docs/deployment.md) — bootstrap Talos and applications, then verify the rollout.
- [GitOps](https://github.com/aumer-amr/labv2/blob/HEAD/docs/gitops.md) — change applications, reconcile Flux, and operate network routes.
- [Application databases](https://github.com/aumer-amr/labv2/blob/HEAD/docs/database.md) — add, connect, verify, upgrade, and recover per-application PostgreSQL clusters.
- [Application Valkey caches](https://github.com/aumer-amr/labv2/blob/HEAD/docs/valkey.md) — add, connect, verify, and upgrade isolated per-application Valkey instances.
- [Reset](https://github.com/aumer-amr/labv2/blob/HEAD/docs/reset.md) — return one or all Talos nodes to maintenance mode.
- [Maintenance](https://github.com/aumer-amr/labv2/blob/HEAD/docs/maintenance.md) —…
