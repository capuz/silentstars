---
repo: "superform-xyz/v2-core"
name: "v2-core"
description: "Superform v2 contracts"
readmeQualityOk: true
url: "https://github.com/superform-xyz/v2-core"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [95]
stars: 13
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2024-10-21T20:16:13Z"
lastCommitAt: "2026-09-29T08:11:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 67
maintainers: ["supervaulter", "subhasishgoswami", "vikramarun"]
openGraphImageUrl: "https://opengraph.githubassets.com/e626eecd78cc4646989ae76a9f937fe400d40c216e5b6c1089c0d84e7b4838d6/superform-xyz/v2-core"
---

# Overview

Superform v2 Core is a modular DeFi protocol for yield abstraction that allows dynamic execution and flexible composition of user operations via ERC7579 modules. 

Core consists of the following components:

- **Execution Layer**: ERC7579 executors (SuperExecutor, SuperDestinationExecutor) that process hook bundles with transient storage for gas-efficient inter-hook communication.
- **Validation Layer**: Merkle-proof validators (SuperValidator, SuperDestinationValidator) enabling single-signature authorization for batched multi-chain operations.
- **Accounting Layer**: SuperLedger and YieldSourceOracles for trustless cost basis tracking and performance fee calculation across vault standards (ERC4626, ERC5115, ERC7540, Pendle).
- **Infrastructure**: Bridge adapters for cross-chain messaging, SuperNativePaymaster for ERC20 gas sponsorship, and SuperBundler for batched UserOperation processing.

📚 [Documentation](https://docs.superform.xyz/) | 🔒 [Audits](https://github.com/superform-xyz/v2-core/tree/dev/audits)

## Repository Structure

```
src/
│   ├── core/
│   │   ├── accounting/     # SuperLedger and yield source oracles
│   │   ├── adapters/       # Bridge adapter…
