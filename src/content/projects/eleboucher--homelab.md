---
repo: "eleboucher/homelab"
name: "homelab"
description: "My Talos + Flux GitOps homelab cluster running media, automation, and observability stacks. Mirror from https://git.erwanleboucher.dev/eleboucher/homelab"
readmeQualityOk: true
url: "https://github.com/eleboucher/homelab"
language: "YAML"
languages: ["YAML"]
languagePcts: [79]
topics: ["k8s-at-home", "homelab", "kubernetes", "kubesearch", "flux", "flux-cd", "gitops", "talos"]
stars: 23
forks: 0
openIssues: 6
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-14T18:58:49Z"
lastCommitAt: "2026-07-20T06:32:03Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 40
maintainers: ["eleboucher"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a52aaa7aeb977b6baeefd3a706da82599209cc773a1cde1a79436f420246a62/eleboucher/homelab"
fundingLinks: ["GITHUB:https://github.com/eleboucher", "KO_FI:https://ko-fi.com/eleboucher", "LIBERAPAY:https://liberapay.com/eleboucher"]
---

# homelab K8s

### 🏠 A GitOps-managed Homelab

_Powered by [Talos](https://talos.dev), [Flux](https://fluxcd.io), and [Kubernetes](https://kubernetes.io)_

<br />

  <br />
</p>

</div>

---

## 📖 Overview

This repository hosts the Infrastructure as Code (IaC) for my Kubernetes homelab. It runs a media server stack, home automation, and observability infrastructure.

The cluster is built on **Talos Linux**, an immutable and minimal OS, and managed via **GitOps** principles using **Flux**. Changes pushed to this repository are automatically reconciled in the cluster.

---

## ⚙️ Hardware

My cluster is a hybrid setup running on bare metal and virtualized nodes.

| Node        | OS          | Hardware          | Specs           | Role            | Storage                                                            |
| :---------- | :---------- | :---------------- | :-------------- | :-------------- | :----------------------------------------------------------------- |
| **kharkiv** | Talos Linux | Intel i5 12th Gen | 8C / 16T / 47GB | `worker`        |                                                                    |
| **paris**   | Talos Linux | AMD Ryzen 5 5600X | 6C / 12T /…
