---
repo: "mitchross/talos-argocd-proxmox"
name: "talos-argocd-proxmox"
description: "Talos ArgoCD Homelab. My personal production Cluster. "
readmeQualityOk: true
url: "https://github.com/mitchross/talos-argocd-proxmox"
homepage: "https://mitchross.github.io/talos-argocd-proxmox/"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [38, 35]
topics: ["argocd", "home-operations", "homelab", "k8s-at-home", "selfhosted"]
stars: 79
forks: 22
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-09T03:38:57Z"
lastCommitAt: "2026-07-29T06:14:10Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 51
maintainers: ["renovate[bot]", "mitchross"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d49a2d300aeb622122f28fc07f53de1dfe6be77795c1d92dd0848334911063/mitchross/talos-argocd-proxmox"
---

# Talos ArgoCD Proxmox Cluster

> Production-grade GitOps Kubernetes cluster on Talos OS with self-managing ArgoCD, Cilium, and zero-touch PVC backup/restore.

A GitOps-driven Kubernetes cluster on **Talos OS** (secure, immutable Linux for K8s) with **ArgoCD** and **Cilium**, running on Proxmox. Nodes are provisioned and managed through **[Omni](https://github.com/siderolabs/omni)** (Sidero's Talos platform) with the **[Proxmox Infrastructure Provider](https://github.com/siderolabs/omni-infra-provider-proxmox)** — no SSH, no manual node config.

The cluster rebuild follows one ordered runbook below. Omni provisions Talos,
then the one-time bootstrap seeds Gateway API CRDs, Cilium, 1Password
credentials, and ArgoCD. ArgoCD takes over and deploys everything else from
this repo.

## Key Features

- **Self-Managing ArgoCD** — ArgoCD manages its own install, upgrades, and ApplicationSets from Git
- **Directory = Application** — apps are discovered by directory path; no hand-written `Application` manifests
- **Sync Wave Ordering** — strict deployment order prevents race conditions
- **Zero-Touch Backups** — label a namespace + drop a per-PVC stub, get automatic…
