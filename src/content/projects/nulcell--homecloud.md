---
repo: "nulcell/homecloud"
name: "homecloud"
description: "My homelab setup using GitOps"
readmeQualityOk: true
url: "https://github.com/nulcell/homecloud"
homepage: "https://status.nulcell.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["argocd", "cilium", "cnpg", "falco", "helm", "homelab", "kubernetes", "longhorn", "renovate", "sops"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-16T18:29:06Z"
lastCommitAt: "2026-10-11T10:15:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 63
maintainers: ["nulcell"]
openGraphImageUrl: "https://opengraph.githubassets.com/d19cf42c0d0267e2723af8a3416d285d1bdbf20176f775c26e72098aa4ddf83e/nulcell/homecloud"
---

# HomeCloud

Self-hosted private cloud on bare metal. Talos + Cilium + ArgoCD + Longhorn + KubeVirt.

Two nodes today (1 control plane with scheduling on, 1 worker), designed to scale to a 3-node HA control plane.

## Layout

| Path                                   | Purpose                                                                                                           |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`cluster/`](https://github.com/nulcell/homecloud/blob/HEAD/cluster/)                 | Talos machine configs + imperative bootstrap (Cilium, ArgoCD). Start at [`cluster/README.md`](https://github.com/nulcell/homecloud/blob/HEAD/cluster/README.md). |
| [`gitops/`](https://github.com/nulcell/homecloud/blob/HEAD/gitops/)                   | ArgoCD's source of truth - root, infrastructure, operators, security, services, apps.                             |
| [`manifests/`](https://github.com/nulcell/homecloud/blob/HEAD/manifests/)             | Ad-hoc / one-shot manifests, applied manually. Not reconciled by ArgoCD.…
