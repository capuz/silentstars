---
repo: "guilhermewolf/atoca.house"
name: "atoca.house"
description: "A mono repository for my home infrastructure and Kubernetes cluster which adheres to Infrastructure as Code (IaC) and GitOps practices where possible"
readmeQualityOk: true
url: "https://github.com/guilhermewolf/atoca.house"
language: "YAML"
languages: ["YAML"]
languagePcts: [95]
topics: ["gitops", "k8s-at-home", "kubernetes", "self-hosted", "kubesearch"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-20T14:52:44Z"
lastCommitAt: "2026-07-22T06:09:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["renovate[bot]", "guilhermewolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbc80c147677acdba6eb30cfa4f4606e17cc586e29b58c6c7297d624e64e3342/guilhermewolf/atoca.house"
---

## A Toca - K8s

My _Personal_ Kubernetes GitOps Repository

_... managed with ArgoCD and GitHub Actions_

</div>

</div>

</div>

&nbsp;&nbsp;

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster implementing GitOps practices using [Talos Linux](https://talos.dev/), [Kubernetes](https://kubernetes.io/), [ArgoCD](https://argoproj.github.io/argo-cd/), and [GitHub Actions](https://github.com/features/actions). The repository manages 60+ applications across a hyper-converged Kubernetes cluster with automated dependency updates via [Renovate](https://renovatebot.com/).

---

### Installation

My cluster is a 3-node high-availability setup running **Talos Linux** with **Kubernetes**. All three nodes function as control planes (no dedicated workers), providing both compute and distributed storage via Rook-Ceph. This hyper-converged architecture maximizes resource utilization across all nodes, with each node contributing:

- **Compute:** Kubernetes workload scheduling
- **Storage:** 1TB NVMe disk for Ceph distributed storage (block, filesystem, and object)
- **Control Plane:** etcd member and Kubernetes API server

The cluster uses…
