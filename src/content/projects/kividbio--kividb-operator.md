---
repo: "kividbio/kividb-operator"
name: "kividb-operator"
description: "A kubernetes operator for KiviDB"
readmeQualityOk: true
url: "https://github.com/kividbio/kividb-operator"
homepage: "https://kividb.io"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["in-memory", "kubernetes", "operator", "redis"]
stars: 76
forks: 13
openIssues: 13
closedIssues: 21
watchers: 0
contributors: 6
recentReleases: 7
createdAt: "2026-07-21T21:50:59Z"
lastCommitAt: "2026-11-12T11:39:16Z"
lastReleaseAt: "2026-11-04T03:19:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 39
maintainers: ["murtazayusuf", "SaiPisey2", "lofoneh"]
openGraphImageUrl: "https://opengraph.githubassets.com/74ae133a587bfafff134a3b60aea2ac80b7aeeba5e6d59168a012b539721765c/kividbio/kividb-operator"
---

alt="KiviDB">

A Kubernetes operator for [kividb](https://kividb.io), a
Redis-RESP-compatible in-memory store written in Rust. It manages a
`KividbCluster` custom resource describing a single-master, N-replica
kividb cluster — plus four companion CRDs
(`KividbConfig`/`KividbAclConfig`/`KividbSnapshotConfig`/`KividbSnapshot`,
see [Custom resources](#custom-resources) below) — and handles:

- **Automatic failover** — an unhealthy master is detected and replaced by
  promoting the most caught-up replica, with pod labels (not Service
  specs) moved to reflect the new topology.
- **Separate master/replica Services**, each independently configurable
  as `ClusterIP`, `NodePort`, or `LoadBalancer` (with static IP /
  annotations / source-range support).
- **Explicit, user-pinned image** plus a declared `standard`/`tls`/`lua`/
  `full` variant so the operator wires up the right configuration (TLS
  certificate mounting from a Kubernetes Secret, etc.) for whichever
  build you point it at.
- **ACL user management** and legacy `requirepass`, rendered into
  kividb's Redis-compatible ACL file from Kubernetes Secrets.
- **Scheduled snapshot backups** to any S3-compatible object storage
  (AWS…
