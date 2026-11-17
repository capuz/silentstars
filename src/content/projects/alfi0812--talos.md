---
repo: "alfi0812/talos"
name: "talos"
description: "Personal Talos Cluster"
readmeQualityOk: true
url: "https://github.com/alfi0812/talos"
homepage: "https://alfi0812.de"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["clustertool", "gitops", "helm", "kubernetes", "kubesearch", "truecharts"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-25T17:35:44Z"
lastCommitAt: "2026-11-17T14:31:46Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 76
maintainers: ["viserion-renovate[bot]", "alfi0812"]
openGraphImageUrl: "https://opengraph.githubassets.com/07bc95b924832071cfbd6aa7d63b6143adb26602de79cf04a10af567dadc39bc/alfi0812/talos"
---

# 🧊 Personal Talos Kubernetes Cluster

*A self-hosted, GitOps-driven Kubernetes cluster built on Talos Linux, focused on reliability, observability, and clean automation.*

---

## 📌 Overview

This repository contains the full **GitOps-managed configuration** for my personal Kubernetes cluster.
The cluster runs on **Talos Linux** and is fully declarative: every component, application, and configuration is defined in Git and continuously reconciled using **FluxCD**.

Key goals of this setup:

* 🔁 **Reproducibility** – rebuild the entire cluster from Git
* 🔒 **Immutability & Security** – minimal OS, no SSH, API-driven management
* 📈 **Observability** – metrics, alerts, and public status visibility
* 🤖 **Automation-first** – updates, deployments, and testing without manual intervention

---

## 🧠 Design Decisions

### Why Talos Linux?
- Immutable, minimal OS reduces attack surface
- No SSH or package manager
- Fully API-driven, ideal for GitOps-based Kubernetes clusters

### Why FluxCD?
- Continuous reconciliation instead of one-shot deployments
- Native Kubernetes integration
- Works seamlessly with SOPS for encrypted secrets

### Why a Single-Node Cluster?
- Simplifies…
