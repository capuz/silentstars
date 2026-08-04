---
repo: "brookfacehe2421/flashloan-scalper-bot"
name: "flashloan-scalper-bot"
description: "Quick profit scalper using flashloan mechanics"
readmeQualityOk: true
url: "https://github.com/brookfacehe2421/flashloan-scalper-bot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bot", "ethereum", "javascript", "profits", "scalping"]
stars: 314
forks: 227
openIssues: 0
closedIssues: 0
watchers: 80
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T15:22:27Z"
lastCommitAt: "2026-08-04T06:13:18Z"
status: "newborn"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 27
maintainers: ["brookfacehe2421"]
openGraphImageUrl: "https://opengraph.githubassets.com/67ba9bcabd1e9e51ea053e10109cb0bd2d8cb4d873d89f01f460eceb6537f7ba/brookfacehe2421/flashloan-scalper-bot"
---

# FlashLoanArbitrage 🚀

Hi! This is my project **FlashLoanArbitrage** — a bot for arbitrage on DeFi with flash loans. Using a smart contract and a local script `goflash.js`, which runs on your computer. Sharing it so you can try it out!



## How It Works 💡

1. **Smart Contract**:
   - Takes a flash loan in USDC.
   - Converts your ETH to USDC before the deal.
   - Buys ETH at a low price on one platform.
   - Sells ETH at a high price on another.
   - Repays the loan, pays fees and gas.
   - Converts the profit from USDC back to ETH.
   - The remainder is your profit!

2. **Script `goflash.js`**:
   - Checks ETH/USDC prices on five DeFi platforms.
   - Waits for a price difference of **0.9%** or more to avoid losses.
   - If the difference is there, it triggers arbitrage through the contract.

## Which DeFi Protocols I Use 💰

I added four protocols for flash loans:

- **Aave (0.05%)**: Tons of liquidity, up to **10,000,000 USDC**.
- **dYdX (0.05%)**: Fast, up to **500,000 USDC**.
- **Uniswap V3 (0.01%)**: Low fees, up to **5,000,000 USDC**.
- **Balancer (0.02%)**: Flexible pools, up to **1,000,000 USDC**.

The bigger the loan, the higher the fee.…
