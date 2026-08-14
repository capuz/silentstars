---
repo: "rarible/protocol-contracts"
name: "protocol-contracts"
description: "Interfaces for smart contracts used by Rarible"
readmeQualityOk: true
url: "https://github.com/rarible/protocol-contracts"
language: "JavaScript"
languages: ["JavaScript", "Solidity", "TypeScript"]
languagePcts: [40, 33, 26]
stars: 405
forks: 240
openIssues: 1
closedIssues: 25
watchers: 15
contributors: 29
recentReleases: 0
createdAt: "2021-02-18T04:34:55Z"
lastCommitAt: "2026-08-14T05:07:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 33
maintainers: ["XLazer4", "contractor-byte"]
openGraphImageUrl: "https://opengraph.githubassets.com/7412d20265b587eabf743b3524ea44f64ab1ce39e630b28c00f9b8f4aace6d1e/rarible/protocol-contracts"
---

# Deployed Addresses

Deployed contracts' addresses for all supported networks can be found [here](https://github.com/rarible/protocol-contracts/blob/HEAD/projects/hardhat-deploy/networks/)

# Smart contracts for Rarible Protocol

Consists of:

* Exchange v2: responsible for sales, auctions etc.
  * security audit was done by ChainSecurity: https://chainsecurity.com/security-audit/rarible-exchange-v2-smart-contracts/
* Tokens: for storing information about NFTs
* Specifications for on-chain royalties supported by Rarible

See more information about Rarible Protocol at [docs.rarible.org](https://docs.rarible.org).

Also, you can find Rarible Smart Contracts deployed instances across Mainnet, Testnet and Development at [Contract Addresses](https://docs.rarible.org/reference/contract-addresses/) page.

## Quick Start

```shell
yarn
yarn bootstrap
```

If error, check node version for `yarn` expected node version ">=14.18.2", for check and set necessary version use, for example:
```shell
node -v
nvm use 18.13.0
```

## Deployment

The Rarible Protocol consists of multiple projects that need to be deployed in sequence. Use the following commands for different deployment scenarios.

###…
