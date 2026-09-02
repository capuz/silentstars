---
repo: "powerfs/powerfs"
name: "powerfs"
description: "Zero-jitter unified parallel file system for HPC and LLM KV cache"
readmeQualityOk: true
url: "https://github.com/powerfs/powerfs"
homepage: "https://www.powerfs.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 12
forks: 4
openIssues: 21
closedIssues: 6
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2026-06-30T02:01:57Z"
lastCommitAt: "2026-09-02T08:03:09Z"
lastReleaseAt: "2026-07-30T23:15:13Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 48
maintainers: ["Michael-powerfs"]
openGraphImageUrl: "https://opengraph.githubassets.com/63ba238c5e4b41552f391c8010a41d261f03bdd57709daf6cb0f63abb6528381/powerfs/powerfs"
discussionCount: 1
---

# PowerFS

**One storage for HPC + AI. Rust-native. Zero jitter.**

Unified POSIX / S3 / KV cache in a single cluster — eliminating the three-stack fragmentation that plagues HPC+AI converged infrastructure.

[Introduction](#introduction) • [Architecture](#architecture) • [Core Features](#core-features) • [Roadmap](#-roadmap) • [Scenarios](#application-scenarios) • [Benchmark](#benchmark) • [Quick Start](#quick-start) • [Articles](https://github.com/powerfs/powerfs/blob/HEAD/articles/) • [License](#license)

---

## Why PowerFS?

| The Problem | The PowerFS Solution |
|---|---|
| HPC storage (Lustre/BeeGFS) can't do AI KV inference | Built-in KV Cache engine + GPU Direct zero-copy |
| Cloud storage (Ceph) lacks POSIX + massive parallel I/O | Filer Raft strong consistency, 10K+ MPI parallel |
| Three isolated stacks = data silos + high cost | One unified architecture, one data pool, one deployment |

---

## Key Features

- **Rust-native, zero GC** — No STW jitter, stable p99 under sustained full load
- **Three interfaces, one data pool** — POSIX (FUSE/Kernel) + S3 + KV cache, stored once, shared everywhere
- **Filer Raft strong consistency** — Linearizable metadata via Raft…
