---
repo: "bottlesdevs/next-core"
name: "next-core"
description: "The source code of the Next core library."
readmeQualityOk: true
url: "https://github.com/bottlesdevs/next-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 15
forks: 3
openIssues: 9
closedIssues: 3
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2025-01-04T19:30:20Z"
lastCommitAt: "2026-11-07T09:29:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 58
maintainers: ["cyberphantom52"]
openGraphImageUrl: "https://opengraph.githubassets.com/46840577f114a5cf8a92432bd1f25a6d4907741118c6f54e05e96fe5ac5dc136/bottlesdevs/next-core"
fundingLinks: ["GITHUB:https://github.com/bottlesdevs", "LIBERAPAY:https://liberapay.com/Bottles", "CUSTOM:https://usebottles.com/funding"]
---

# bottles-core

`bottles-core` is the application library behind Bottles Next. It manages Wine
and Proton prefixes, runtime tools and prefix components, and launches
Windows programs in them.

The main entry point is [`Core`]. Opening it resolves the application's data
directories, loads persisted state, initializes addon and prefix
registries. Long-running changes
return an [`Operation`]: a lazy future with progress reporting and cooperative
cancellation.

## Quick start

A complete application opens the core once, keeps it alive while managers and
operations are in use, and shuts down its background download service before
exiting. Opening performs filesystem I/O and, with `fvs` enabled,
may start an `fvs2d` process:

```rust,no_run
use bottles_core::Core;

# async fn run() -> Result<(), bottles_core::error::Error> {
let core = Core::builder().build().await?;

for prefix in core.prefixes().list() {
    println!("{}: {:?}", prefix.id(), prefix.state()?.backend);
}

core.shutdown().await?;
# Ok(())
# }
```

## Core concepts

- [`Core`] owns the shared services and top-level managers.
- [`Prefixes`] provides the current collection of [`Prefix`] handles and
  publishes every…
