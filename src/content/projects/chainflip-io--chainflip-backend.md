---
repo: "chainflip-io/chainflip-backend"
name: "chainflip-backend"
description: "The Chainflip backend repo, including the Chainflip Node and CFE."
readmeQualityOk: true
url: "https://github.com/chainflip-io/chainflip-backend"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 72
forks: 31
openIssues: 1
closedIssues: 1263
watchers: 13
contributors: 31
recentReleases: 0
createdAt: "2021-02-22T20:57:34Z"
lastCommitAt: "2026-11-03T10:29:37Z"
lastReleaseAt: "2023-12-13T16:33:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 52
maintainers: ["dandanlen", "chainflip-bot", "j4m1ef0rd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab9d4eee7e234387860461022af997d078863e2723cb1c594acae77ea0453a64/chainflip-io/chainflip-backend"
---

# Chainflip

[Chainflip](https://chainflip.io/) is a decentralized protocol for cross-chain crypto-currency swaps.

For an in-depth introduction to Chainflip, the [official docs](https://docs.chainflip.io/) are the best place to start.

If you are interested in contributing to the codebase or in digging into the nitty gritty details of the protocol, you have come to the right place. Please read on.

## Getting started

The project is organised using rust workspaces. See the `Cargo.toml` in this directory for a list of contained
workspaces. Each workspace should have its own `README` with instructions on how to get started. If not, please raise an issue!

## Compile and run tests

To compile the code execute:

```bash
cargo cf-build-release
```

To run the test suite execute:

```bash
cargo cf-test-ci
```

> **_NOTE:_**  cf-test-ci is an alias for cargo test with additional flags. These aliases are defined in [.cargo/config.toml](https://github.com/chainflip-io/chainflip-backend/blob/HEAD/.cargo/config.toml).

## Contributing

### Setup

Make sure you have the following packages and tools installed. The following is for debian-like systems (e.g. Ubuntu). You may need to adjust for…
