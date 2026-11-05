---
repo: "ethereum-optimism/superchain-ops"
name: "superchain-ops"
description: "superchain-ops allows builders to create and execute tasks on EVM chains. "
readmeQualityOk: true
url: "https://github.com/ethereum-optimism/superchain-ops"
homepage: "https://www.optimism.io/"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [93]
topics: ["devops", "ethereum", "multsig", "optimism-l2"]
stars: 99
forks: 127
openIssues: 18
closedIssues: 158
watchers: 24
contributors: 73
recentReleases: 0
createdAt: "2023-08-18T15:52:37Z"
lastCommitAt: "2026-11-05T00:12:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 56
maintainers: ["Wazabie", "sbvegan", "mds1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e30f81f06b793d618c431488b6924ca7fe2fb4bd19f8ff144ced7965a7e93cd8/ethereum-optimism/superchain-ops"
---

> **⚠️ Important Notice: System Upgrade (August 2025)**
>
> The Superchain-ops system has undergone a significant upgrade. For access to historical executed tasks and previous system documentation, please refer to this [tag](https://github.com/ethereum-optimism/superchain-ops/tree/legacy-superchain-ops) for the archived tasks repository.
>
> • Need help? [Create an issue](https://github.com/ethereum-optimism/superchain-ops/issues) on this repo.

# Superchain-ops Task System

A tooling system for developers to write, test, and simulate onchain state changes safely before execution.

> 📚 More detailed documentation can be found in the [docs](https://github.com/ethereum-optimism/superchain-ops/blob/HEAD/docs/) directory.

## Repository Structure

The repository is organized as follows:

```
superchain-ops/
├── docs/             # Detailed documentation
└── src/
      ├── template/     # Solidity template contracts (Template developers create templates here)
      └── tasks/        # Network-specific tasks
          ├── eth/     # Ethereum mainnet tasks (Task developers create tasks here)
          └── sep/     # Sepolia testnet tasks  (Task developers create tasks here)

```

##…
