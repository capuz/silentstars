---
repo: "1Solon/Home-Server-Configuration"
name: "Home-Server-Configuration"
description: "This is the Kubernetes config for my home cluster, I use Flux to sync this and the cluster itself. "
readmeQualityOk: true
url: "https://github.com/1Solon/Home-Server-Configuration"
language: "Python"
languages: ["Python", "Shell", "PowerShell"]
languagePcts: [44, 33, 24]
topics: ["fluxcd", "homelab", "kubernetes", "kubesearch"]
stars: 22
forks: 3
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-02-25T16:16:36Z"
lastCommitAt: "2026-08-24T04:22:05Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 62
maintainers: ["1Solon", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c1b97a2055637cfb858aff29ccb650bf61b0865d00d8109a8cb814b382de9c1/1Solon/Home-Server-Configuration"
---

## Solon's Home Server Config

_GitOps-managed Kubernetes cluster running on Talos Linux with Flux CD and Renovate_

</div>

</div>

## 🏗️ Architecture Overview

This is a **GitOps-managed Kubernetes home server** with the following stack:

- **Nodes**: 5-node hybrid cluster (4x ARM64, 1x x86_64)
- **OS**: Talos Linux v1.12.1 (immutable, API-configured)
- **Kubernetes**: v1.35.0
- **GitOps**: Flux CD manages all workloads from this repository
- **Storage**: Longhorn for persistent volumes, Crunchy Postgres for databases, Dragonfly for caching
- **Networking**: Cilium CNI, Envoy Gateway, Cloudflare DNS/DDNS, Tailscale VPN
- **Secrets**: SOPS with AGE encryption + 1Password via External Secrets Operator (mostly this, some former)

## 📂 Repository structure

The Git repository contains the following directories:

```sh
📁
└──📁 kubernetes
    ├──📁 ai
    │   ├──📁 litellm
    │   ├──📁 openwebui
    │   └──📁 searxng
    ├──📁 games
    │   └──📁 abiotic-factor
    ├──📁 infra
    │   ├──📁 flux
    │   │   ├──📁 instance
    │   │   ├──📁 notifications
    │   │   ├──📁 operator
    │   │   ├──📁 receiver
    │   │   ├──📁 repositories
    │   │   └──📁 secrets
    │   ├──📁…
