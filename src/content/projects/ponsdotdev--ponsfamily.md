---
repo: "ponsdotdev/ponsfamily"
name: "ponsfamily"
description: "Official repository for the ponsfamily.com smart contracts."
readmeQualityOk: true
url: "https://github.com/ponsdotdev/ponsfamily"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [100]
stars: 25
forks: 15
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T00:56:39Z"
lastCommitAt: "2026-08-27T14:33:02Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 59
undervaluedScore: 35
maintainers: ["ponsdotdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e943f241b70745215286e782194fd99951b232790863ae6f7de09dc5f3b319c8/ponsdotdev/ponsfamily"
---

# Pons Launchpad Contracts — V1 & V2
    
</a>                
                        
 
 
</div>     
  

  

This repository holds the Solidity source for the [ponsfamily.com](https://ponsfamily.com) token launchpad on Robinhood Chain, in both generations:

- **V1** (`contractsV1/`) — a CREATE2 factory that mints a fixed-supply ERC-20, opens a one-sided Uniswap **V3** position, locks the position NFT, and can run a developer buy in the same transaction.
- **V2** (`contractsV2/`) — a launch flow where the full supply mints to a constant-product **bonding curve** that trades in the pool's future quote asset, then graduates permanently into a locked full-range Uniswap **V4** pool governed by a shared hook, with quote-denominated fees, a creator tax, a fee escrow and a five-year buyback vault.

Both generations are live source and both factories are verified on chain.

Website: [ponsfamily.com](https://ponsfamily.com) · Twitter/X: [@ponsdotfamily](https://x.com/ponsdotfamily)

## Table of contents

- [Deployed factories](#deployed-factories)
- [V1 vs V2 at a glance](#v1-vs-v2-at-a-glance)
- [V1 — CREATE2 factory + locked Uniswap V3…
