---
repo: "NethermindEth/pluto"
name: "pluto"
description: "Pluto is a Proof of Stake Ethereum Distributed Validator Middleware Client written in Rust"
readmeQualityOk: true
url: "https://github.com/NethermindEth/pluto"
homepage: "https://nethermindeth.github.io/pluto/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["blockchain", "consensus-layer", "distributed-systems", "distributed-validator", "ethereum", "proof-of-stake", "rust"]
stars: 8
forks: 6
openIssues: 45
closedIssues: 235
watchers: 2
contributors: 23
recentReleases: 2
createdAt: "2025-10-08T05:47:41Z"
lastCommitAt: "2026-10-05T10:46:51Z"
lastReleaseAt: "2026-09-21T22:27:12Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 87
maintainers: ["iamquang95", "varex83agent", "emlautarom1-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4c5cb6baefc1d713e822b8c3cf91fc889d38aa3b1718013067e6730bc12a31/NethermindEth/pluto"
---

# Pluto

Pluto is an alternative implementation of [Charon](https://github.com/ObolNetwork/charon/), a distributed validator middleware client for Ethereum Staking. It enables a group of independent operators to safely run a single validator by coordinating duties across multiple nodes.

Pluto, like Charon, is used by stakers to distribute the responsibility of running Ethereum Validators across a number of different instances and client implementations.

See the official docs at https://docs.obol.org/ for introductions and key concepts.

## Documentation

The [Obol Docs](https://docs.obol.org/) website is the best place to get started.
The important sections are [intro](https://docs.obol.org/learn/charon),
[key concepts](https://docs.obol.org/docs/int/key-concepts) and [charon](https://docs.obol.org/docs/charon/intro).

## Version compatibility

Considering [semver](https://semver.org) as the project's versioning scheme, two given versions of Charon are:
 - **compatible** if their `MAJOR` number is the same, `MINOR` and `PATCH` numbers differ
 - **incompatible** if their `MAJOR` number differs

There are several reasons to justify a new `MAJOR` release, for example:
 - a new…
