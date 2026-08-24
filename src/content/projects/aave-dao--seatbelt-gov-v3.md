---
repo: "aave-dao/seatbelt-gov-v3"
name: "seatbelt-gov-v3"
description: "Aave Seatbelt for governance proposals"
readmeQualityOk: true
url: "https://github.com/aave-dao/seatbelt-gov-v3"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 21
forks: 7
openIssues: 4
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-08-22T12:25:32Z"
lastCommitAt: "2026-08-24T04:21:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0a442c0df0597b09f1135f55a388fb4d0382bcf3b35589ab95c850c7749b9395/aave-dao/seatbelt-gov-v3"
---

# Aave Seatbelt

A comprehensive toolset for making Aave on-chain governance safer through automated proposal verification and simulation.

## Overview

Aave Seatbelt executes and interprets governance proposal simulations by forking networks, simulating proposal execution, and generating detailed human-readable reports. This allows voters and developers to understand exactly what effects a proposal will have before it's executed on mainnet.

## Features

- **State change analysis**: Track all state changes caused by proposal execution
- **Event monitoring**: Capture and display all events triggered during execution
- **Contract compilation reports**: Identify potential warnings in affected contracts
- **Aave-specific interpretations**: Deep analysis of Aave Pool contracts and ecosystem changes
- **Multi-network support**: Simulate proposals across all Aave-supported networks
- **Dual simulation engines**: Tenderly-based simulation with Foundry fallback & e2e testing

## Prerequisites

- [Bun](https://bun.sh) runtime (see `.nvmrc` for version)
- [Foundry](https://getfoundry.sh) for local simulations
- RPC endpoints for target networks
- Tenderly account (for Tenderly-based…
