---
repo: "fenio/homelab"
name: "homelab"
description: "k8s homelab powered by Talos/omni and flux"
readmeQualityOk: true
url: "https://github.com/fenio/homelab"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [53, 47]
topics: ["fluxcd", "gitops", "homelab", "homelab-setup", "k8s", "kubernetes", "cilium", "k8s-at-home", "renovate", "victoriametrics"]
stars: 37
forks: 5
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-18T16:38:17Z"
lastCommitAt: "2026-10-28T09:59:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["fenio", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0452f1291f17898555c655891abba8d19eca2903fcdfa30bfd6878afb6e7c8e/fenio/homelab"
---

# Talos-based homelab powered by Flux

This is home to my personal Kubernetes lab cluster running on [Talos Linux](https://www.talos.dev/) and managed by [Sidero Omni](https://omni.siderolabs.com/). [Flux](https://github.com/fluxcd/flux2) watches this Git repository and makes the changes to my cluster based on the manifests in the [cluster](https://github.com/fenio/homelab/blob/HEAD/cluster/) directory. [Renovate](https://github.com/renovatebot/renovate) also watches this Git repository and creates pull requests when it finds updates to Docker images, Helm charts, and other dependencies.

| Device                        | Count | OS Disk Size | Data Disk Size | Ram  | Operating System | Purpose           |
| ----------------------------- | ----- | ------------ | -------------- | ---- | ---------------- | ----------------- |
| Mikrotik RB4011iGS+5HacQ2HnD | 1     | 512MB        |                | 1GB  | RouterOS 7.13    | Router            |
| Dell Wyse 5070                | 3     | 16GB         | 128GB          | 12GB | Talos v1.13.3    | Control plane     |
| Odroid H3+                    | 1     | 64GB         | 8x480GB SSD    | 32GB | TrueNAS Scale    | NAS / storage     |

-…
