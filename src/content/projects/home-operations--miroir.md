---
repo: "home-operations/miroir"
name: "miroir"
description: "Replicated block storage CSI driver for small Kubernetes clusters"
readmeQualityOk: true
url: "https://github.com/home-operations/miroir"
homepage: "https://miroir.home-operations.com/"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 30
forks: 2
openIssues: 5
closedIssues: 67
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-18T14:06:13Z"
lastCommitAt: "2026-08-28T12:21:56Z"
lastReleaseAt: "2026-07-08T15:30:33Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["sticky-gecko[bot]", "onedr0p", "eleboucher"]
openGraphImageUrl: "https://opengraph.githubassets.com/87098fbf0a699fdc15d796719c0fe7ec951e2dde32974948784d7c2e44b24480/home-operations/miroir"
---

# miroir

Replicated block storage for small Kubernetes clusters. CSI driver
on top of LVM thin, ZFS, or loopfile backends, with optional
synchronous replication (2-3 replicas) via DRBD9.

📖 **Docs site: <https://miroir.home-operations.com/>** —
requirements, quickstart, replication and quorum concepts,
ReadWriteMany, node maintenance, monitoring, chart values, and
troubleshooting.

## When to use it

- You want replicated block storage without running Ceph.
- You're on 2-3 nodes and either have a spare disk per node (LVM), a
  ZFS pool (ZFS), or a few GB on the root filesystem (loopfile).
- You want snapshots that actually work for replicated volumes
  (both legs cut in lockstep, not whichever finishes first), plus
  restores, PVC clones, and crash-consistent group snapshots built
  on them.

## When _not_ to use it

- You need >3 replicas. DRBD9 itself allows up to 32 nodes on a
  single resource, so this is a scope decision, not a DRBD limit: the
  controller validates `1..3`, metadata reserves `--max-peers 7`
  slots per leg (enough for 2 peer replicas, the tie-breaker, 2
  remote clients, and rebuild headroom), and the quorum policies
  assume 2 data replicas plus a…
