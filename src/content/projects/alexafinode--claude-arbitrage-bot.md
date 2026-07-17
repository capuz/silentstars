---
repo: "alexafinode/claude-arbitrage-bot"
name: "claude-arbitrage-bot"
description: "Arbitrage bot for Ethereum-compatible networks with built-in Python automation"
readmeQualityOk: true
url: "https://github.com/alexafinode/claude-arbitrage-bot"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [100]
topics: ["ai", "arbitrage", "bot", "btc", "claude", "codex", "contract", "ether", "ethereum", "gpt"]
stars: 164
forks: 74
openIssues: 0
closedIssues: 0
watchers: 18
contributors: 1
recentReleases: 0
createdAt: "2026-07-16T00:58:40Z"
lastCommitAt: "2026-07-17T06:03:03Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 28
maintainers: ["alexafinode"]
openGraphImageUrl: "https://opengraph.githubassets.com/55ec9a0a7b0f935cdc54a37b18105765bcc82d437b2c7dee73d23f5b4067df96/alexafinode/claude-arbitrage-bot"
---

# Arbitrage Bot with Built-in Python Automation



An arbitrage bot is a smart contract that searches for and executes arbitrage opportunities between pools and routers, holding ETH/tokens on its balance. Below is a step-by-step guide on how to deploy your bot and get it running without a single manual call.

## What the bot is

An arbitrage bot is a smart contract connected to an external automation script that controls its operation.

- **`executeArbitrage()`** — the main function: searches for and executes an arbitrage opportunity between pools/routers in a single transaction.
- **`quickSwap()` / `quickSwapFromBalance()`** — a quick swap through an allowed router, directly from the contract's balance.
- **`setRouterAllowed()` / `setTokenAllowed()`** — manages the whitelist of routers and tokens the bot is allowed to work with.
- **`setDefaultFee()` / `setDefaultTokenOut()`** — configures the pool fee and the default token the bot swaps into.
- **`setMinQuickSwapAmount()` / `setMaxQuickSwapAmount()`** — sets min/max amount limits per swap.
- **`setPaused()`** — emergency pause, stopping all contract operations.
- **`revokeApproval()`** — revokes previously…
