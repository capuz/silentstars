---
repo: "anthr76/infra"
name: "infra"
description: "My home or for-home infrastructure written as code defining GitOps principles for Kubernetes clusters. "
readmeQualityOk: true
url: "https://github.com/anthr76/infra"
homepage: "https://discord.gg/sD6VgcwZqM"
language: "Just"
languages: ["Just"]
languagePcts: [72]
topics: ["kubernetes", "kubernetes-cluster", "kubernetes-deployment", "pi-cluster", "etcd", "terraform", "ansible", "fluxcd", "flux", "k8s"]
stars: 107
forks: 9
openIssues: 13
closedIssues: 27
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2020-10-06T12:39:02Z"
lastCommitAt: "2026-11-24T02:00:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 46
maintainers: ["renovate[bot]", "anthr76"]
openGraphImageUrl: "https://opengraph.githubassets.com/17311355a968a225c156da0736b40a1153863e4026ed3515bb5a9abb3eb24528/anthr76/infra"
discussionCount: 1
---

# Home Infrastructure

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
