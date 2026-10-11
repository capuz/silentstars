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
lastCommitAt: "2026-10-11T10:14:32Z"
lastReleaseAt: "2026-07-03T11:59:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 65
maintainers: ["p13marc"]
openGraphImageUrl: "https://opengraph.githubassets.com/978bfb4d50812b904deec5d98d2a24a599ff8d60060ce9c530d8f2d32515fa42/p13marc/nlink"
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
nlink = "0.31"
```

Feature flags: `sockdiag`, `tuntap`, `output`, `namespace_watcher`,
`syscall_batch` (recvmmsg/sendmmsg batching), `serde`, `schemars` (JSON Schema for
`NetworkConfig`), `lab` (test harness), `wireguard-keys` (WireGuard key
generation), `full`. Full list in the
[docs.rs feature table](https://docs.rs/crate/nlink/latest/features).

MSRV: Rust 1.98, edition 2024.

## Quick start

```rust,no_run
use nlink::netlink::{Connection, Route, RtnetlinkGroup, NetworkEvent};
use tokio_stream::StreamExt;

#[tokio::main]
async fn main() -> nlink::Result<()> {
    let conn = Connection::<Route>::new()?;

    // Query
    for link in conn.get_links().await? {
        println!("{}: {} (up={})",…
