---
repo: "rustsbi/allwinner-hal"
name: "allwinner-hal"
description: "Rust embedded hardware abstract layer (HAL) library for Allwinner chips"
readmeQualityOk: true
url: "https://github.com/rustsbi/allwinner-hal"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 13
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2024-06-03T05:49:36Z"
lastCommitAt: "2026-09-13T08:29:48Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 69
maintainers: ["luojia65"]
openGraphImageUrl: "https://opengraph.githubassets.com/c860811214b87e8efe190a340dbc015113dd0af5c0d43d70d98d54c6ba24afef/rustsbi/allwinner-hal"
---

# Allwinner-HAL

Allwinner-HAL provides Rust hardware support for Allwinner SoCs. The repository
contains the following projects:

| Project | Description | Package | Documentation |
|:--------|:------------|:--------|:--------------|
| [`allwinner-hal`](https://github.com/rustsbi/allwinner-hal/blob/HEAD/allwinner-hal/) | `no_std` peripheral drivers and hardware abstractions | [](https://crates.io/crates/allwinner-hal) | [](https://docs.rs/allwinner-hal) |
| [`allwinner-rt`](https://github.com/rustsbi/allwinner-hal/blob/HEAD/allwinner-rt/) | Bare-metal startup and runtime support | [](https://crates.io/crates/allwinner-rt) | [](https://docs.rs/allwinner-rt) |
| [`rfel`](https://github.com/rustsbi/allwinner-hal/blob/HEAD/rfel/) | Host-side FEL utility for memory access, code execution, DDR initialization, and SPI flash operations | [](https://crates.io/crates/rfel) | [](https://docs.rs/rfel) |

## Hardware support

| Chip | `allwinner-hal` | `allwinner-rt` | `rfel` |
|:-----|:----------------|:---------------|:-------|
| D1 / D1-H | Supported | Supported | Supported |
| D1s / F133 | Compatible, not tested | Supported | Supported |
| V821 | Not yet supported | CPU runtime supported…
