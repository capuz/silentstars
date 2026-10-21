---
repo: "0xMiden/node"
name: "node"
description: "Reference implementation of the node for the Miden blockchain"
readmeQualityOk: true
url: "https://github.com/0xMiden/node"
homepage: "https://0xmiden.github.io/node/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 105
forks: 140
openIssues: 105
closedIssues: 815
watchers: 12
contributors: 80
recentReleases: 0
createdAt: "2023-06-27T16:13:14Z"
lastCommitAt: "2026-10-21T08:49:54Z"
lastReleaseAt: "2025-01-29T14:09:16Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 97
undervaluedScore: 56
maintainers: ["Mirko-von-Leipzig", "kkovaacs", "SantiagoPittella"]
openGraphImageUrl: "https://opengraph.githubassets.com/011650909f120df6cd0beaf76ec1715a16f8a9c8ce7f2cacfa014bdc4bdec0f1/0xMiden/node"
discussionCount: 30
---

# Miden node

[ci-badge]: https://github.com/0xMiden/node/actions/workflows/ci.yml/badge.svg
[ci-link]: https://github.com/0xMiden/node/actions/workflows/ci.yml
[developer-docs]: https://0xMiden.github.io/node/index.html

This repository contains the core infrastructure components of a Miden network, including the sequencer and full node
implementations. It also defines the public gRPC API for interfacing with the network.

Miden is still under active development. The components in this repository, including the RPC schema, should be treated
as unstable. The current network design remains centralized while the proving system and protocol mature.

## Documentation

Node documentation for official testnet versions is available as part of the official Miden docs at
<https://docs.miden.xyz/core-concepts/node/>. This includes guides for network operators, full node runners, and
builders looking to run a local Miden network.

The gRPC schema can be found in the top-level [`proto`](https://github.com/0xMiden/node/blob/HEAD/proto) directory. Note that this will reflect the current
development state, and one should look to the official docs for network schemas.

The rest of this README is…
