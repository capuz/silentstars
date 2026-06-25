---
repo: "binaryn3xus/HomeOps"
name: "HomeOps"
description: "A mono repository for my home infrastructure and Kubernetes cluster which adheres to Infrastructure as Code (IaC) and GitOps practices where possible"
url: "https://github.com/binaryn3xus/HomeOps"
language: "YAML"
languages: ["YAML"]
languagePcts: [84]
topics: ["flux", "gitops", "kubernetes", "renovate", "self-hosted", "hacktoberfest", "home-operations", "talos"]
stars: 20
forks: 0
openIssues: 2
closedIssues: 91
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-12-29T00:39:30Z"
lastCommitAt: "2026-06-25T02:09:04Z"
lastReleaseAt: "2023-04-01T01:13:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["unsc-oni-ancilla[bot]", "binaryn3xus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a00be6a789ae8acc02fdfee04a6c88d2558aeb5e7c8c863bf28c45c292d65634/binaryn3xus/HomeOps"
---

### Fleetcom Operations :octocat:

_... managed with Flux, Azure KeyVault, and GitHub Actions_ 🤖

</div>

</div>

</div>

![GitHub License](https://img.shields.io/github/license/binaryn3xus/HomeOps?style=flat-square)

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using the tools like [just](https://github.com/casey/just), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

### Installation

My Kubernetes cluster is deploy with [Talos](https://www.talos.dev). This is a semi-hyper-converged cluster, workloads and block storage are sharing the same available resources on my nodes while I have a separate server with on my Synology NAS for storage for bulk file storage and backups.

### Core Components

- [cert-manager](https://github.com/cert-manager/cert-manager): Creates SSL certificates for services in my cluster.
- [cilium](https://github.com/cilium/cilium): eBPF-based networking for my…
