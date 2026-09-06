---
repo: "ngriaznov/sundog"
name: "sundog"
description: "Easy and embeddable distributed cache"
readmeQualityOk: true
url: "https://github.com/ngriaznov/sundog"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-28T16:47:13Z"
lastCommitAt: "2026-09-06T07:32:03Z"
lastReleaseAt: "2026-09-05T11:27:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["ngriaznov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1349833547/3d705dc1-990f-40d6-9d2d-bed742ec7df5"
---

[//]: # (Badges 404 until the crate's first publish; the URLs are the real post-publish targets.)

# sundog

sundog is an embedded, replicated cache for Rust services. Every instance on the
network finds the others, forms a cluster over gossip, and keeps named caches
coherent between them. No cache server, no coordinator, no config beyond a
cluster name. Caches run in one of three modes: invalidation, full replication,
or local-only.

It's named for the [parhelion](https://en.wikipedia.org/wiki/Sun_dog), the
optical effect where ice crystals render extra copies of the sun next to the
real one. A replicated cache, drawn by the atmosphere.

Consistency is best-effort on purpose. Gossip membership and last-write-wins
skip the cost of a consensus protocol for cache data, and anti-entropy repairs
whatever gossip's fire-and-forget delivery drops.

## Getting it

```sh
cargo add sundog
```

or in `Cargo.toml`:

```toml
[dependencies]
sundog = "0.4"
```

sundog is async, on [tokio](https://tokio.rs); the examples below assume a tokio
runtime. [Feature flags](#feature-flags) are additive: `cargo add sundog
--features tls,prometheus`.

## Quick start

```rust
use std::time::Duration;

use…
