---
repo: "anthr76/infra"
name: "infra"
description: "My home or for-home infrastructure written as code defining GitOps principles for Kubernetes clusters. "
url: "https://github.com/anthr76/infra"
homepage: "https://discord.gg/sD6VgcwZqM"
language: "Just"
languages: ["Just", "Shell"]
languagePcts: [65, 20]
topics: ["kubernetes", "kubernetes-cluster", "kubernetes-deployment", "pi-cluster", "etcd", "terraform", "ansible", "fluxcd", "flux", "k8s"]
stars: 107
forks: 9
openIssues: 13
closedIssues: 27
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2020-10-06T12:39:02Z"
lastCommitAt: "2026-06-24T00:23:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 46
maintainers: ["renovate[bot]", "anthr76"]
openGraphImageUrl: "https://opengraph.githubassets.com/27d5c3d19c26f2f266d2b21a86d368c11b0dd65f216b26554bac8391ac708c6a/anthr76/infra"
discussionCount: 1
---

# Home Infrastructure

![GitHub last commit](https://img.shields.io/github/last-commit/anthr76/infra)

</div>

---

## 📖 Overview

This repository contains my home infrastructure-as-code, managing Kubernetes clusters, cloud resources, and on-premises virtualization using GitOps principles. Flux watches this repository and applies changes automatically to maintain desired state across my infrastructure.

This is a multi-cloud, multi-environment setup supporting home automation, media services, monitoring, and infrastructure experiments.

**Related Repositories:**
- [anthr76/snowflake](https://github.com/anthr76/snowflake) - System-level configuration (NixOS, routers, nodes)

---

## ⛵ Kubernetes

### Core Components

- [Flux](https://fluxcd.io/) - GitOps operator for Kubernetes
- [Cilium](https://cilium.io/) - eBPF-based container networking (CNI)
- [Rook Ceph](https://rook.io/) - Distributed storage for persistent volumes
- [VolSync](https://volsync.readthedocs.io/) - Asynchronous PVC replication to rsync.net
- [CloudNative-PG](https://cloudnative-pg.io/) - PostgreSQL operator

### Automation & Security

- [Renovate](https://github.com/renovatebot/renovate) - Automated dependency…
