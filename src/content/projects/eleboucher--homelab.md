---
repo: "eleboucher/homelab"
name: "homelab"
description: "My Talos + Flux GitOps homelab cluster running media, automation, and observability stacks. Mirror from https://git.erwanleboucher.dev/eleboucher/homelab"
readmeQualityOk: true
url: "https://github.com/eleboucher/homelab"
language: "YAML"
languages: ["YAML"]
languagePcts: [77]
topics: ["k8s-at-home", "homelab", "kubernetes", "kubesearch", "flux", "flux-cd", "gitops", "talos"]
stars: 29
forks: 0
openIssues: 7
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-14T18:58:49Z"
lastCommitAt: "2026-10-31T15:59:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 48
maintainers: ["eleboucher"]
openGraphImageUrl: "https://opengraph.githubassets.com/68ed47d3c33bc6e619e4c4207cfc64df47810b2f2cd38921d6e7b36866cb5aac/eleboucher/homelab"
fundingLinks: ["GITHUB:https://github.com/eleboucher", "KO_FI:https://ko-fi.com/eleboucher", "LIBERAPAY:https://liberapay.com/eleboucher"]
---

# homelab K8s

### 🏠 A GitOps-managed Homelab

_Powered by [Talos](https://talos.dev), [Flux](https://fluxcd.io), and [Kubernetes](https://kubernetes.io)_

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
| **paris**   | Talos Linux | AMD Ryzen 5 5600X | 6C / 12T / 48GB | `control-plane` | 256GB…
