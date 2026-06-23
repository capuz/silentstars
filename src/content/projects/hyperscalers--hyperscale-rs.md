---
repo: "hyperscalers/hyperscale-rs"
name: "hyperscale-rs"
description: "Rust implementation of Hyperscale consensus protocol."
url: "https://github.com/hyperscalers/hyperscale-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 25
forks: 13
openIssues: 20
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-07T13:58:05Z"
lastCommitAt: "2026-06-23T23:29:32Z"
lastReleaseAt: "2026-01-10T08:10:58Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 42
maintainers: ["flightofthefox"]
openGraphImageUrl: "https://opengraph.githubassets.com/37ac6dd049d63a156f73c9c80d6e9bede835234162d0196cd13d9c3801222ed3/hyperscalers/hyperscale-rs"
---

# hyperscale-rs

> **Warning**: Work in progress. Do not use.

Rust implementation of Hyperscale consensus protocol.

**What's different:**
- Pure consensus layer — no I/O, no locks, no async
- Created with deterministic simulation testing in mind
- Faster two-chain commit consensus based on HotStuff-2
- Optimistic pipelining — proposers propose immediately after QC formation
- Improved cross-shard livelock prevention
- Real Radix Engine integration

## Crates

| Crate | Purpose |
|-------|---------|
| [`beacon`](crates/beacon) | Beacon-chain coordinator (PC/SPC/MSC consensus, validator-set + topology source) |
| [`core`](crates/core) | The `StateMachine` and `SubStateMachine` traits that everything implements |
| [`dispatch`](crates/dispatch) | Abstract trait for scheduling CPU-intensive work across priority-isolated pools |
| [`dispatch-pooled`](crates/dispatch-pooled) | Production dispatch using rayon thread pools with core allocation and pinning |
| [`dispatch-sync`](crates/dispatch-sync) | Deterministic inline dispatch for simulation (runs closures on calling thread) |
| [`engine`](crates/engine) | Radix Engine integration for smart contract execution |
|…
