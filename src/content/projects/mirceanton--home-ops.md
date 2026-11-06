---
repo: "mirceanton/home-ops"
name: "home-ops"
description: "Monorepo to manage my Home Lab k8s cluster."
readmeQualityOk: true
url: "https://github.com/mirceanton/home-ops"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["k8s-at-home", "gitops"]
stars: 126
forks: 7
openIssues: 3
closedIssues: 139
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-16T21:53:47Z"
lastCommitAt: "2026-11-06T11:47:58Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["mr-borboto[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0417b8751f71c5de06ce9a72ec0ae1e1979381f3c291a75f6be692c9e1b43868/mirceanton/home-ops"
fundingLinks: ["GITHUB:https://github.com/mircea-pavel-anton"]
---

# HomeOps

GitOps repository for my homelab Kubernetes cluster, a bare-metal [Talos Linux](https://www.talos.dev/) cluster reconciled continuously by [Flux](https://fluxcd.io/).

## 🎯 Scope

This repo holds everything running on my homelab Kubernetes cluster:

- **OS & node config**: [Talos Linux](https://www.talos.dev/) machine
  configuration, patches, and system extensions (`talos/`).
- **Cluster bootstrap**: the minimal, one-time `helmfile` bootstrap that
  gets Flux running (`kubernetes/clusters/<cluster>/bootstrap/`).
- **Platform components**: CNI, ingress, DNS, TLS, secrets, storage,
  databases, and observability (`kubernetes/clusters/<cluster>/apps/*-system/`).
- **Application workloads**: everything from AI/LLM tooling to media,
  home automation, games, and productivity apps
  (`kubernetes/clusters/<cluster>/apps/<domain>/`).
- **Reusable building blocks**: Kustomize components for common patterns
  like Postgres, Redis-compatible caches, backups, and OIDC clients
  (`kubernetes/components/`).

## 📁 Repository Structure

```text
home-ops/
├── talos/                # Talos machine config (talconfig.yaml + patches/)
├── kubernetes/
│   ├── clusters/
│   │   └── home/…
