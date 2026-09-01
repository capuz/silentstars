---
repo: "gnoswap-labs/gnoswap"
name: "gnoswap"
description: "Core smart contracts (realms) of GnoSwap"
readmeQualityOk: true
url: "https://github.com/gnoswap-labs/gnoswap"
homepage: "http://gnoswap.io/"
language: "Gno"
languages: ["Gno"]
languagePcts: [98]
stars: 17
forks: 16
openIssues: 5
closedIssues: 24
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2022-11-17T03:07:47Z"
lastCommitAt: "2026-09-01T08:49:26Z"
lastReleaseAt: "2025-08-11T11:23:21Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 77
maintainers: ["junghoon-vans", "jinoosss", "notJoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/729a57a10f4fd4cc769d4565156812621cdc86fe7f314777dca9d2c531aaff7b/gnoswap-labs/gnoswap"
---

# GnoSwap Contracts

Smart contracts for GnoSwap AMM DEX on Gno.land.

## Prerequisites

- GNU Make 3.81 or higher
- Latest version of [gno.land](https://github.com/gnolang/gno)

## Directory Structure

```
gnoswap/
├── contract/                       # Smart contracts
│   ├── p/                          # Packages (libraries)
│   │   └── gnoswap/
│   │       ├── gnsmath/            # AMM math utilities
│   │       ├── int256/             # 256-bit signed integers
│   │       ├── uint256/            # 256-bit unsigned integers
│   │       ├── rbac/               # Role-based access control
│   │       └── consts/             # Protocol constants
│   │
│   └── r/                          # Realms (contracts)
│       └── gnoswap/
│           ├── v1/                 # Protocol v1 contracts
│           │   ├── pool/           # Concentrated liquidity pools
│           │   ├── position/       # LP position NFTs
│           │   ├── router/         # Swap routing
│           │   ├── staker/         # Liquidity mining
│           │   ├── gov/            # Governance
│           │   ├── launchpad/      # Token distribution
│           │   ├── protocol_fee/   # Fee management
│           │…
