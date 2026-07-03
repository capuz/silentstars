---
repo: "cashubtc/cdk"
name: "cdk"
description: "Cashu Development Kit"
url: "https://github.com/cashubtc/cdk"
homepage: "https://cashudevkit.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 226
forks: 135
openIssues: 33
closedIssues: 507
watchers: 7
contributors: 69
recentReleases: 0
createdAt: "2023-04-26T02:18:33Z"
lastCommitAt: "2026-07-03T12:38:32Z"
lastReleaseAt: "2025-02-13T11:23:20Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 98
undervaluedScore: 46
maintainers: ["thesimplekid", "asmogo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0761f766ce83c8d70831461f2f9fc9e6b5c57987ee44b30fbf13016fa85abc30/cashubtc/cdk"
discussionCount: 21
---

> [!Warning]
> This project is in early development, it does however work with real sats! Always use amounts you don't mind losing.

# Cashu Development Kit

CDK is a collection of rust crates for [Cashu](https://github.com/cashubtc) wallets and mints written in Rust.

**ALPHA** This library is in early development, the api will change and should be used with caution.

## Quick Start

CDK uses Nix flakes to manage development environments. We provide a lean default shell for standard development and a full-stack shell for integration testing.

```bash
# Enter the lean development shell (Rust + PostgreSQL)
nix develop

# OR enter the full regtest environment (Bitcoind + Lightning Nodes)
nix develop .#regtest
```

For more details on available environments, see the [Development Guide](DEVELOPMENT.md).

## Project structure

The project is split up into several crates in the `crates/` directory:

* Libraries:
    * [**cashu**](./crates/cashu/): Core Cashu protocol implementation.
    * [**cdk**](./crates/cdk/): Rust implementation of Cashu protocol.
    * [**cdk-http-client**](./crates/cdk-http-client/): HTTP client abstraction for wallet-to-mint communication.
    *…
