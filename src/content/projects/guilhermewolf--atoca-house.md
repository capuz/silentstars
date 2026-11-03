---
repo: "guilhermewolf/atoca.house"
name: "atoca.house"
description: "A mono repository for my home infrastructure and Kubernetes cluster which adheres to Infrastructure as Code (IaC) and GitOps practices where possible"
readmeQualityOk: true
url: "https://github.com/guilhermewolf/atoca.house"
language: "YAML"
languages: ["YAML"]
languagePcts: [98]
topics: ["gitops", "k8s-at-home", "kubernetes", "self-hosted", "kubesearch"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-20T14:52:44Z"
lastCommitAt: "2026-11-03T12:49:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["guilhermewolf", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a63d3bed935a003d870403d5c29cab4371f9de686b93ab6e74aca4b2898c7f3/guilhermewolf/atoca.house"
---

## A Toca - K8s

My _Personal_ Kubernetes GitOps Repository

_... managed with ArgoCD and GitHub Actions_

&nbsp;&nbsp;

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster implementing GitOps practices using [Talos Linux](https://talos.dev/), [Kubernetes](https://kubernetes.io/), [ArgoCD](https://argoproj.github.io/argo-cd/), and [GitHub Actions](https://github.com/features/actions). The repository manages 60+ applications across a hyper-converged Kubernetes cluster with automated dependency updates via [Renovate](https://renovatebot.com/).

---

### Installation

My cluster is a 3-node high-availability setup running **Talos Linux** with **Kubernetes**. All three nodes function as control planes (no dedicated workers), providing both compute and distributed storage via Rook-Ceph. This hyper-converged architecture maximizes resource utilization across all nodes, with each node contributing:

- **Compute:** Kubernetes workload scheduling
- **Storage:** 1TB NVMe disk for Ceph distributed storage (block, filesystem, and object)
- **Control Plane:** etcd member and Kubernetes API server

The cluster uses **2-way replication** for storage,…
