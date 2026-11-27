---
repo: "LyraCoreProject/LyraCore"
name: "LyraCore"
description: "A Vanilla game server aimed at providing the best developer experience"
readmeQualityOk: true
url: "https://github.com/LyraCoreProject/LyraCore"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["game-server", "rust", "spacetimedb", "vanilla-wow", "world-of-warcraft", "wow"]
stars: 15
forks: 6
openIssues: 15
closedIssues: 470
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-08-05T08:43:54Z"
lastCommitAt: "2026-11-27T16:16:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 51
maintainers: ["Mathih13"]
openGraphImageUrl: "https://opengraph.githubassets.com/efd06e9bc7a5123e4719a483914d52a38ddf9ac055010e226125b5d9fd6f3d01/LyraCoreProject/LyraCore"
---

LyraCore is a World of Warcraft 1.12.1 server written in Rust on [SpacetimeDB](https://spacetimedb.com/).
All game state and rules live in the database. You add content with Packages, without editing core
files, and players connect with an unmodified client.

> **Not ready for deployment.**
> LyraCore is in an early phase of development and is not secure. Do not use it for a public realm.

## Quickstart

### Requirements
- A World of Warcraft 1.12.1 client, build 5875. None is distributed here.
- [Rust](https://rust-lang.org/tools/install/) through rustup. `rust-toolchain.toml` pins 1.97.1, and rustup installs it on the first `cargo` call.
- The SpacetimeDB CLI, exactly version 2.14.0. `module/Cargo.toml` pins it, and `lyracore preflight` refuses any other version. `install.sh` offers to install it.
- A Linux or macOS machine or container. On Windows, use WSL2 with Ubuntu; see [`docs/windows.md`](https://github.com/LyraCoreProject/LyraCore/blob/HEAD/docs/windows.md).
