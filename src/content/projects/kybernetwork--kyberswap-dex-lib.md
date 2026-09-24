---
repo: "KyberNetwork/kyberswap-dex-lib"
name: "kyberswap-dex-lib"
description: "DexLib is a library used by Kyberswap backend to integrate with decentralized exchanges. This library enables external DEX developers to integrate their DEX with Kyberswap by creating pull requests to this repository."
readmeQualityOk: true
url: "https://github.com/KyberNetwork/kyberswap-dex-lib"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 70
forks: 126
openIssues: 6
closedIssues: 10
watchers: 8
contributors: 92
recentReleases: 0
createdAt: "2023-05-23T10:06:39Z"
lastCommitAt: "2026-09-24T08:41:20Z"
lastReleaseAt: "2023-06-22T03:38:08Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 55
maintainers: ["NgoKimPhu", "sunspirit99", "lehainam-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5c3e663bd71304477c61ba998385e074f61852e5237bb0d0dab71b09433f57c/KyberNetwork/kyberswap-dex-lib"
---

# kyberswap-dex-lib

## What?

KyberSwap uses this lib for off-chain tracking and computation, specifically

1. Fetch pools;
2. Track latest pool states; and
3. Simulate expected output for a given input swap amount

in order to search for the optimal aggregated swapping route.

## How to Contribute?

* Off-chain: Implements 3 things in pkg/liquidity-source (pkg/source contains legacy code using big.Int):

1. PoolsListUpdater: fetches latest pool list incrementally
2. PoolTracker: tracks latest pool state on new log event or on an interval
3. PoolSimulator: simulates expected output for a given input swap amount
  a. It's recommended to use uint256.Int for better performance
  b. CloneState should also be implemented

* On-chain: Contribute encoding to https://github.com/KyberNetwork/ks-dex-adapter-lib
