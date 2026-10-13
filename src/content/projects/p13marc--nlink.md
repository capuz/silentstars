---
repo: "p13marc/nlink"
name: "nlink"
description: "Async Rust library for Linux network configuration via netlink - a modern alternative to iproute2 — mirror of https://git.marcpardo.eu/marcpardo/nlink"
readmeQualityOk: true
url: "https://github.com/p13marc/nlink"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 10
forks: 4
openIssues: 9
closedIssues: 81
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-01T11:40:49Z"
lastCommitAt: "2026-10-13T10:57:22Z"
lastReleaseAt: "2026-07-03T11:59:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 65
maintainers: ["p13marc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5fd7347db4b31e073ccf88ded288b77f94f29c22b5a5649336b667e2e7a4dd5/p13marc/nlink"
---

# nlink

A Rust library for Linux network configuration via netlink. Async/tokio-native,
type-safe, owns its wire format end-to-end (no `rtnetlink` / `netlink-packet-*`
dependency). CLI binaries (`nlink-ip`, `nlink-tc`, `nlink-ss`, `nlink-nft`,
`nlink-wg`, `nlink-bridge`, `nlink-devlink`, `nlink-ethtool`, `nlink-wifi`,
`nlink-config`) ship as proof-of-concept demonstrations of the library —
each `nlink-` prefixed so it never shadows the system tool it mirrors.

## Install

```toml
nlink = "0.32"
```

Feature flags: `sockdiag`, `tuntap`, `output`, `namespace_watcher`,
`syscall_batch` (recvmmsg/sendmmsg batching), `serde`, `schemars` (JSON Schema for
`NetworkConfig`), `lab` (test harness), `wireguard-keys` (WireGuard key
generation), `full` (all of them but `lab`). Full list in the
[docs.rs feature table](https://docs.rs/crate/nlink/latest/features).

MSRV: Rust 1.88, edition 2024: the oldest stable that builds every target with
every feature. It is raised only in a minor release, for a language or library
feature worth it, and the CHANGELOG says so.

## Quick start

```rust,no_run
use nlink::netlink::{Connection, Route, RtnetlinkGroup, NetworkEvent};
use tokio_stream::StreamExt;…
