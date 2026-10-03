---
repo: "cschmittiey/k8s-homelab"
name: "k8s-homelab"
description: "my homelab, declared in a whole bunch of yaml."
readmeQualityOk: true
url: "https://github.com/cschmittiey/k8s-homelab"
language: "PLpgSQL"
languages: ["PLpgSQL", "Shell"]
languagePcts: [73, 21]
topics: ["homelab-automation", "k8s-at-home", "kubernetes", "kubesearch"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-05T22:53:51Z"
lastCommitAt: "2026-10-03T09:21:32Z"
lastReleaseAt: "2025-01-01T01:54:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 70
maintainers: ["renovate[bot]", "cschmittiey"]
openGraphImageUrl: "https://opengraph.githubassets.com/016dea8ebeb74623c558b5c9b170bd008486790685c4818bb09436a1b84507e2/cschmittiey/k8s-homelab"
---

### My Home Operations Repository :octocat:

_... managed with Flux, Renovate, and GitHub Actions_ 🤖

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

There is a template over at [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template) that I used to create this repository. It is a good starting point for creating a new repository for your own cluster. Also consider joining the Home Operations discord!

### Installation

My Kubernetes cluster is deployed with [Talos](https://www.talos.dev). This is a semi-hyper-converged cluster - workloads and block storage are sharing the same available resources on my nodes, while I have a separate truenas server using ZFS for NFS/SMB shares, bulk file storage and backups.

### Core Components

- [cert-manager](https://github.com/cert-manager/cert-manager): Creates SSL…
