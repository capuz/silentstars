---
repo: "Mirantis/pelagia"
name: "pelagia"
description: "Pelagia is a Kubernetes controller that implements lifecycle management for Ceph clusters managed by Rook."
readmeQualityOk: true
url: "https://github.com/Mirantis/pelagia"
homepage: "https://mirantis.github.io/pelagia/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ceph", "csi", "kubernetes", "lifecycle-management", "rook", "storage", "storage-cluster"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-08-26T11:43:10Z"
lastCommitAt: "2026-10-30T11:02:21Z"
lastReleaseAt: "2026-07-30T15:39:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 77
maintainers: ["degorenko", "ologvinova"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad2e1e79982ab1de6a336b2e0a6e9dab10175ef1d3476d465ea1207369972154/Mirantis/pelagia"
discussionCount: 3
---

# What is Pelagia?

Pelagia is a Kubernetes controller that provides all-in-one management
for Ceph clusters installed by [Rook](https://github.com/rook/rook).
It delivers two main features:

* **Aggregates all Rook Custom Resources** (CRs) into a single
  `CephDeployment` resource, simplifying the management of Ceph clusters.
* **Provides automated lifecycle management** (LCM) of Rook Ceph OSD nodes for
  bare-metal clusters. Automated LCM is managed by the special `CephOsdRemoveTask`
  resource.

# Why Pelagia?

Pelagia is designed to simplify the management of Ceph clusters in Kubernetes
installed by [Rook](https://github.com/rook/rook).

Being solid Rook users, we had dozens of Rook CRs to manage. Thus, one day
we decided to create a single resource that would aggregate all Rook CRs and
deliver a smoother LCM experience. This is how Pelagia was born.

It supports almost all Rook CRs API, including `CephCluster`, `CephBlockPool`,
`CephFilesystem`, `CephObjectStore`, and others, aggregating them into a single
specification. We continuously work on improving Pelagia's API, adding new features,
and enhancing existing ones.

Pelagia collects Ceph cluster state and all Rook CRs…
