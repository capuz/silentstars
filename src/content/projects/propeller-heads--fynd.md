---
repo: "propeller-heads/fynd"
name: "fynd"
description: "High performance real-time DeFi routing engine built on Tycho"
readmeQualityOk: true
url: "https://github.com/propeller-heads/fynd"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 37
forks: 15
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2025-03-06T16:37:55Z"
lastCommitAt: "2026-07-28T14:53:12Z"
lastReleaseAt: "2026-03-11T16:25:40Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 61
maintainers: ["tamaralipows", "brunoguerios", "louise-poole"]
openGraphImageUrl: "https://opengraph.githubassets.com/169eca73f9ed7853dddef3e540360f0a88e2538f9929cacab99cb93e7c7b6d4b/propeller-heads/fynd"
---

# Fynd

A high-performance DeFi route-finding engine built on [Tycho](https://www.propellerheads.xyz/tycho). Finds optimal swap
routes across multiple DeFi protocols in real-time.

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
- **Extensible** - Implement the `Algorithm` trait to add new routing strategies with zero framework changes
- **Modular** - Use just the core solving logic, or build a custom HTTP server with your own middleware…
