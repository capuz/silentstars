---
repo: "Ambiguous-Interactive/fortress-rollback"
name: "fortress-rollback"
description: "Fortress Rollback is an AI fork of GGRS focusing around correctness, configurability, observability, and zero runtime panics."
readmeQualityOk: true
url: "https://github.com/Ambiguous-Interactive/fortress-rollback"
homepage: "https://ambiguous-interactive.github.io/fortress-rollback/"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
stars: 5
forks: 1
openIssues: 0
closedIssues: 55
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2025-12-06T03:59:42Z"
lastCommitAt: "2026-11-16T04:14:49Z"
lastReleaseAt: "2026-02-07T19:16:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 82
maintainers: ["wallstop", "dependabot[bot]", "wallstop-auto-releaser[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f654bfa7fc3ba12861cada5a469d078f96dd43b7cf34035cfc3c370d8f013fb6/Ambiguous-Interactive/fortress-rollback"
---

# Fortress Rollback

Fortress Rollback is a correctness-first peer-to-peer rollback networking library for
deterministic multiplayer games. It uses 100% safe Rust (`#![forbid(unsafe_code)]`), returns
recoverable errors instead of panicking in production code, and exposes a request-driven game
loop: advance the session, then fulfill the ordered save, load, and simulation requests it returns.

The project began as a hardened fork of [GGRS](https://github.com/gschup/ggrs) and now includes
graceful peer drop, runtime input delay, redundant-host spectators, and opt-in hot-join.

> [!WARNING]
> Fortress Rollback is alpha software. Expect API changes before 1.0 and test upgrades against
> your game before release. The project follows semantic versioning to the extent possible.

## Install and Try It

Add the library and Serde derives to your game:

```toml
[dependencies]
fortress-rollback = "0.14"
serde = { version = "1", features = ["derive"] }
```

To see a complete deterministic loop first, clone this repository and run:

```bash
cargo run --example sync_test
```

Then follow [Build Your First Session](https://wallstop.github.io/fortress-rollback/getting-started/). It starts without…
