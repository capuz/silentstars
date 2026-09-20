---
repo: "nulcell/homecloud"
name: "homecloud"
description: "General information about home cloud setup using MaaS, CloudStack, and Kubernetes"
readmeQualityOk: true
url: "https://github.com/nulcell/homecloud"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [59, 41]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-16T18:29:06Z"
lastCommitAt: "2026-09-20T08:46:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 57
maintainers: ["nulcell", "renovate-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/326c86d706608cd4620aea1a31c81da54b1532dc761d383c11a4d118cf8f0fb5/nulcell/homecloud"
---

# HomeCloud

Self-hosted private cloud on bare metal. Talos + Cilium + ArgoCD + Longhorn + KubeVirt.

Two nodes today (1 control plane with scheduling on, 1 worker), designed to scale to a 3-node HA control plane.

## Layout

| Path                                   | Purpose                                                                                                           |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`cluster/`](https://github.com/nulcell/homecloud/blob/HEAD/cluster/)                 | Talos machine configs + imperative bootstrap (Cilium, ArgoCD). Start at [`cluster/README.md`](https://github.com/nulcell/homecloud/blob/HEAD/cluster/README.md). |
| [`gitops/`](https://github.com/nulcell/homecloud/blob/HEAD/gitops/)                   | ArgoCD's source of truth - root, infrastructure, operators, security, services, apps.                             |
| [`charts/`](https://github.com/nulcell/homecloud/blob/HEAD/charts/)                   | Helm umbrella charts referenced by `gitops/apps/*`.…
