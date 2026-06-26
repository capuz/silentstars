---
repo: "mitchross/talos-argocd-proxmox"
name: "talos-argocd-proxmox"
description: "Talos ArgoCD Homelab. My personal production Cluster. "
url: "https://github.com/mitchross/talos-argocd-proxmox"
homepage: "https://mitchross.github.io/talos-argocd-proxmox/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [42, 41]
topics: ["argocd", "home-operations", "homelab", "k8s-at-home", "selfhosted"]
stars: 76
forks: 22
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-09T03:38:57Z"
lastCommitAt: "2026-06-26T23:40:07Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 52
maintainers: ["mitchross", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4567e31467d64e103be5d2ea8154dcd8dc5954723e802c8f22773976f7d5d049/mitchross/talos-argocd-proxmox"
---

# Talos ArgoCD Proxmox Cluster

> Production-grade GitOps Kubernetes cluster on Talos OS with self-managing ArgoCD, Cilium, and zero-touch PVC backup/restore

A GitOps-driven Kubernetes cluster using **Talos OS** (secure, immutable Linux for K8s), ArgoCD, and Cilium, running on Proxmox. Managed via **[Omni](https://github.com/siderolabs/omni)** (Sidero's Talos management platform) with the **[Proxmox Infrastructure Provider](https://github.com/siderolabs/omni-infra-provider-proxmox)** for automated node provisioning.

## Key Features

- **Self-Managing ArgoCD** - ArgoCD manages its own installation, upgrades, and ApplicationSets from Git
- **Directory = Application** - Apps discovered automatically by directory path, no manual Application manifests
- **Sync Wave Ordering** - Strict deployment ordering prevents race conditions
- **Zero-Touch Backups** - Add a label to a PVC, get automatic Kopia backups to NFS with disaster recovery
- **Gateway API** - Modern ingress via Cilium Gateway API (not legacy Ingress)
- **GPU Support** - Full NVIDIA GPU support via Talos system extensions and GPU Operator
- **Zero SSH** - All node management via Omni UI or Talos API

## Repositories &…
