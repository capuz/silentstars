---
repo: "axeII/home-ops"
name: "home-ops"
description: "A repository for HomeOps where I perform Infrastructure as Code (IaC) and GitOps practices."
readmeQualityOk: true
url: "https://github.com/axeII/home-ops"
language: "Python"
languages: ["Python", "Just", "Shell"]
languagePcts: [36, 34, 30]
topics: ["kubernetes", "k8s-at-home", "cert-manager", "flux", "kube-vip", "sops", "talos"]
stars: 58
forks: 3
openIssues: 13
closedIssues: 113
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-07-06T17:45:25Z"
lastCommitAt: "2026-07-10T07:01:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["axeII", "bot-akira[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b082ac2e685650fd1b0b1ff984161abd979fb24e9f1dd2950460a039524b87b8/axeII/home-ops"
---

# Home Operations

### HomeOps repo managed by k8s :wheel_of_dharma:

_... automated via [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions)_ :robot:

</div>

</div>

</div>

</div>

---

## 📖 Overview

Here, I perform DevOps best practices at home. I adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Kubernetes](https://github.com/kubernetes/kubernetes), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions). My cluster runs on three control-plane Talos nodes virtualized on Proxmox with Rook-Ceph for distributed storage.

## ⛵ Kubernetes

My Kubernetes cluster runs [Talos Linux](https://www.talos.dev) on three control-plane nodes. Two are deployed bare metal and one is deployed as Proxmox VM. Talos is a fantastic lightweight Kubernetes distribution that provides a minimal, hardened, and API-driven OS — I highly recommend it to anyone seeking a secure and reproducible Kubernetes setup.

There is a template over at…
