---
repo: "mirceanton/home-ops"
name: "home-ops"
description: "Monorepo to manage my Home Lab k8s cluster."
readmeQualityOk: true
url: "https://github.com/mirceanton/home-ops"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
topics: ["k8s-at-home", "gitops"]
stars: 122
forks: 7
openIssues: 5
closedIssues: 134
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-16T21:53:47Z"
lastCommitAt: "2026-10-05T10:46:57Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["mr-borboto[bot]", "mircea-pavel-anton"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f61a56dac2e92d4c82de179e14835f9473b7932ee4a8e40f0f2f5db26cd615a/mirceanton/home-ops"
fundingLinks: ["GITHUB:https://github.com/mircea-pavel-anton"]
---

# HomeOps

GitOps repository for my homelab Kubernetes cluster, a bare-metal [Talos Linux](https://www.talos.dev/) cluster reconciled continuously by [Flux](https://fluxcd.io/).

## 🎯 Scope

This repo holds everything running on my homelab Kubernetes cluster:

- **OS & node config**: [Talos Linux](https://www.talos.dev/) machine
  configuration, patches, and system extensions (`talos/`).
- **Cluster bootstrap**: the minimal, one-time `helmfile` bootstrap that
  gets Flux running (`bootstrap/`).
- **Platform components**: CNI, ingress, DNS, TLS, secrets, storage,
  databases, and observability (`apps/*-system/`).
- **Application workloads**: everything from AI/LLM tooling to media,
  home automation, games, and productivity apps (`apps/<domain>/`).
- **Reusable building blocks**: Kustomize components for common patterns
  like Postgres, Redis-compatible caches, backups, and OIDC clients
  (`components/`).

## 📁 Repository Structure

```text
home-ops/
├── talos/               # Talos machine config (talconfig.yaml + patches/)
├── bootstrap/           # One-shot Helmfile: Cilium + Flux operator/instance, CRDs
├── apps/
│   ├── flux-system/     # Flux itself, Headlamp (cluster UI),…
