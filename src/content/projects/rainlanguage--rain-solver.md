---
repo: "rainlanguage/rain.solver"
name: "rain.solver"
description: "Node.js app that solves (clears) Rain Orderbook orders against onchain liquidity (DEXes, other Rain Orderbooks and orders)"
readmeQualityOk: true
url: "https://github.com/rainlanguage/rain.solver"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 16
forks: 6
openIssues: 16
closedIssues: 122
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2022-11-17T17:03:05Z"
lastCommitAt: "2026-09-19T01:35:14Z"
lastReleaseAt: "2023-05-08T22:56:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 69
maintainers: ["rouzwelt"]
openGraphImageUrl: "https://opengraph.githubassets.com/72f73d21d636853c3f94bb325ffb621b6d68a25e0c5e8423ac4a991516cf1823/rainlanguage/rain.solver"
---

# Rain Solver
Rain Solver (also known as Rain Orderbook Arbitrage Bot) is a NodeJS app that solves (clears) Rain orderbook orders against major DeFi platforms liquidity, other Rain Orderbooks and opposite orders of the same Rain Orderbook, by finding arbitrage trades for token pairs of the active orders that are queried from a subgraph, once an opportunity is found a transaction is submitted to one of [Rain Arb Contracts](https://github.com/rainprotocol/rain.orderbook/tree/main/src/concrete) which handles the clearing process from there.

This app requires NodeJS v22 or higher to run and is docker ready.
This app can also be run in Github Actions with a cron job, please read below for more details.

## The Case for Profitability
Profitablity can be adjusted by using an integer ≥0 for `gasCoveragePercentage` config arg as the percentage of the gas cost of the transaction, denominated in receiving ERC20 token, the cost of the transaction is calculated in the receiving ERC20 token unit with current market price of that token against chain's native token.

for example:
- If set to 100, the receiving profit must be at least equal or greater than tx gas cost.
- If set above 100, the…
