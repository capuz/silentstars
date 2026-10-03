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
stars: 42
forks: 3
openIssues: 2
closedIssues: 77
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-06-18T14:06:13Z"
lastCommitAt: "2026-10-03T08:53:08Z"
lastReleaseAt: "2026-07-08T15:30:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 45
maintainers: ["sticky-gecko[bot]", "onedr0p", "amasolov"]
openGraphImageUrl: "https://opengraph.githubassets.com/2254ee64180cfefbd932be70f7edfd191632d52340d86aa361520299c589efbe/home-operations/miroir"
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
