---
repo: "AdebayoGit/raft"
name: "raft"
description: "Raft is an embedded, offline-first database built in Rust for mobile apps. Local device is the source of truth. Sync is optional."
readmeQualityOk: true
url: "https://github.com/AdebayoGit/raft"
language: "Rust"
languages: ["Rust"]
languagePcts: [61]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T19:51:15Z"
lastCommitAt: "2026-07-04T23:13:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 54
maintainers: ["codeheart01", "AdebayoGit"]
openGraphImageUrl: "https://opengraph.githubassets.com/8db2e8d53537affd3bed69406f6d063a4726c398c587c2f460ad9d9360daf536/AdebayoGit/raft"
---

# Raft

> A mobile-native embedded database. Offline-first by design.

Raft is an embedded, offline-first database built in Rust, designed from the ground up for mobile clients. It is not an adaptation of a server-side database. Every architectural decision assumes the device is the primary compute, connectivity is unreliable, and sync is a feature — not a requirement.

By default, the local database is the source of truth. The network is a sync channel.

## Why Raft

Most embedded databases on mobile started life on a server. Their assumptions — fast disks, tens of cores, abundant memory, reliable I/O — leak through to mobile in a hundred small ways: bursty battery drain, unpredictable cold-start times, tail latency on flaky filesystems.

Raft was designed for the device first:

- **LSM-tree storage** optimised for mobile flash I/O patterns and write amplification
- **CRDT-backed fields** for automatic, deterministic conflict resolution on sync
- **Reactive queries** as a first-class primitive, not a bolt-on
- **Per-collection sync authority** — `LocalFirst`, `RemoteAuthority`, or `RemoteFirst` modes
- **Tiny binary** — no SQL parser, minimal dependencies, mobile-conscious linker…
