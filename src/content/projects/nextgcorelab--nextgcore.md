---
repo: "NextgCoreLab/nextgcore"
name: "nextgcore"
description: "NextG Core epc"
readmeQualityOk: true
url: "https://github.com/NextgCoreLab/nextgcore"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 16
forks: 9
openIssues: 17
closedIssues: 146
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-12-30T21:58:03Z"
lastCommitAt: "2026-09-19T01:15:46Z"
lastReleaseAt: "2026-07-02T23:22:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 62
maintainers: ["parlakisik"]
openGraphImageUrl: "https://opengraph.githubassets.com/f846549ccd934add70df0816ce8878693801cc9fed32ff4bb683ad962421681f/NextgCoreLab/nextgcore"
---

# NextGCore - Pure Rust 5G/LTE Core Network

NextGCore is a pure Rust implementation of a 5G/LTE mobile core network, derived from the Open5GS project. It provides a complete 5G Standalone (SA) core with zero C library dependencies, validated end-to-end against the companion nextgsim gNB/UE simulator (registration + PDU session + user-plane data). It is a research/interop implementation, not a production-certified core.

## Key Features

- **Pure Rust** - No C library dependencies, enabling true cross-compilation
- **Cross-Platform** - Build for Linux (x86_64, ARM64), macOS, and more
- **Userspace SCTP** - Pure Rust SCTP implementation over UDP (no kernel SCTP required)
- **Async/Await** - Modern async runtime using Tokio
- **Container-Ready** - Optimized Docker images with minimal footprint
- **Complete 5GC** - All core network functions implemented
- **Rel-17/18 features** - RedCap reduced-AMBR, XR delay-critical GBR 5QI (82-85), SNPN NID authorization, MINT/disaster-roaming multi-SUPI, and UAV geofence authorization wired end-to-end (see `docker/rust/README.md` → Rel-17/18 Feature Knobs / End-to-End Tests)

## Quickstart

### Option 1: Docker (Recommended)

The fastest way to…
