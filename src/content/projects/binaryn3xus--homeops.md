---
repo: "binaryn3xus/HomeOps"
name: "HomeOps"
description: "A mono repository for my home infrastructure and Kubernetes cluster which adheres to Infrastructure as Code (IaC) and GitOps practices where possible"
readmeQualityOk: true
url: "https://github.com/binaryn3xus/HomeOps"
language: "YAML"
languages: ["YAML"]
languagePcts: [84]
topics: ["flux", "gitops", "kubernetes", "renovate", "self-hosted", "hacktoberfest", "home-operations", "talos"]
stars: 20
forks: 0
openIssues: 1
closedIssues: 92
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-12-29T00:39:30Z"
lastCommitAt: "2026-08-26T04:17:57Z"
lastReleaseAt: "2023-04-01T01:13:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["binaryn3xus", "unsc-oni-ancilla[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc0cc3283e7489f08fdf127e4b4eb56708b6c44d140f50a3aa150095f6618358/binaryn3xus/HomeOps"
---

### Fleetcom Operations :octocat:

_... managed with Flux, Azure KeyVault, and GitHub Actions_ 🤖

</div>

</div>

</div>

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
- [cilium](https://github.com/cilium/cilium): eBPF-based networking for my workloads.
- [cloudflared](https://github.com/cloudflare/cloudflared): Enables Cloudflare secure access…
