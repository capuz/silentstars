---
repo: "propeller-heads/fynd"
name: "fynd"
description: "High performance real-time DeFi routing engine built on Tycho"
readmeQualityOk: true
url: "https://github.com/propeller-heads/fynd"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 46
forks: 22
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2025-03-06T16:37:55Z"
lastCommitAt: "2026-10-08T10:51:57Z"
lastReleaseAt: "2026-03-11T16:25:40Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 56
maintainers: ["carloszanella", "Troshchk", "tamaralipows"]
openGraphImageUrl: "https://opengraph.githubassets.com/8569000ae34337b40317b8a8e2de47558507b609a03a23cfd10474bef5a13eaf/propeller-heads/fynd"
---

# Fynd

A high-performance DeFi route-finding engine built on [Tycho](https://www.propellerheads.xyz/tycho). Finds optimal swap
routes across multiple DeFi protocols in real-time.

Fynd is provided under the [Fynd License 1.0](https://github.com/propeller-heads/fynd/blob/HEAD/LICENSE.md). Use, modification, distribution, and settlement are subject to its terms.

## Features

- **Multi-protocol routing** - Routes through your favorite on-chain liquidity protocol, like Uniswap, Balancer, Curve,
  RFQ protocols, or any other protocol supported
  by [Tycho](https://docs.propellerheads.xyz/tycho/for-solvers/supported-protocols).
- **Real-time market data** - Tycho Stream keeps all liquidity states synchronized every block
- **Multi-algorithm competition** - Multiple solver pools run different algorithm configurations in parallel; the best
  result wins
- **Gas-aware ranking** - Solutions are ranked by net output after gas costs, not just raw output
- **Sub-100ms solves** - Dedicated OS threads for CPU-bound route finding, separate from the async I/O runtime
- **Production-ready** - Prometheus metrics, structured logging, health endpoints, graceful shutdown
- **Extensible** - Implement…
