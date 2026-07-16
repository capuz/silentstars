---
repo: "mitchross/talos-argocd-proxmox"
name: "talos-argocd-proxmox"
description: "Talos ArgoCD Homelab. My personal production Cluster. "
readmeQualityOk: true
url: "https://github.com/mitchross/talos-argocd-proxmox"
homepage: "https://mitchross.github.io/talos-argocd-proxmox/"
language: "Shell"
languages: ["Shell", "Python", "Lua"]
languagePcts: [42, 34, 20]
topics: ["argocd", "home-operations", "homelab", "k8s-at-home", "selfhosted"]
stars: 78
forks: 22
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-09T03:38:57Z"
lastCommitAt: "2026-07-16T05:58:45Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 52
maintainers: ["mitchross", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec216c49e2a1098a53c7fbe7b72f3c83a48be35c343fdc8dd2d2bed2e86974fa/mitchross/talos-argocd-proxmox"
---

# Talos ArgoCD Proxmox Cluster

> Production-grade GitOps Kubernetes cluster on Talos OS with self-managing ArgoCD, Cilium, and zero-touch PVC backup/restore.

A GitOps-driven Kubernetes cluster on **Talos OS** (secure, immutable Linux for K8s) with **ArgoCD** and **Cilium**, running on Proxmox. Nodes are provisioned and managed through **[Omni](https://github.com/siderolabs/omni)** (Sidero's Talos platform) with the **[Proxmox Infrastructure Provider](https://github.com/siderolabs/omni-infra-provider-proxmox)** — no SSH, no manual node config.

The whole cluster boots from one script. Once Omni hands you a running Talos cluster, bootstrap is **four copy-paste steps** (Gateway CRDs → Cilium → secrets → ArgoCD), and ArgoCD takes over and deploys everything else from this repo.

## Key Features

- **Self-Managing ArgoCD** — ArgoCD manages its own install, upgrades, and ApplicationSets from Git
- **Directory = Application** — apps are discovered by directory path; no hand-written `Application` manifests
- **Sync Wave Ordering** — strict deployment order prevents race conditions
- **Zero-Touch Backups** — label a namespace + drop a per-PVC stub, get automatic…
