---
repo: "chainstacklabs/fomo-solana-rh-listeners"
name: "fomo-solana-rh-listeners"
description: "Onchain listeners and a technical reference for the FOMO trading app on Solana, Robinhood Chain, BNB Smart Chain, Base, Ethereum and Monad"
readmeQualityOk: true
url: "https://github.com/chainstacklabs/fomo-solana-rh-listeners"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blockchain", "fomo", "fomo-family", "robinhood-chain", "solana", "trading", "web3", "base-chain", "ethereum", "monad"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-06T11:17:56Z"
lastCommitAt: "2026-11-01T10:44:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 16
maintainers: ["smypmsa"]
openGraphImageUrl: "https://opengraph.githubassets.com/102bb44ed79f04f74da82cdf0851dabf7e926e4df2485b92f3aa4640582894ea/chainstacklabs/fomo-solana-rh-listeners"
---

• <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •

# FOMO onchain

> **Experimental.** A reference implementation, not for production use.

FOMO is a cross-chain social trading app that deploys no contracts. Its onchain footprint is
ERC-4337 wallets, Relay's settlement contracts and ordinary AMM pools, on Solana and five EVM
chains: Robinhood Chain, BNB Smart Chain, Base, Ethereum and Monad. This repository maps that
footprint and ships working listeners for the trade flow on every one of them.

## Quickstart

Needs [uv](https://docs.astral.sh/uv/), which fetches the Python it wants on the first run, and one
RPC endpoint per chain.

```bash
uv sync
cp .env.example .env    # fill in a WSS and an HTTPS endpoint per EVM chain, and SOLANA_MAINNET_WSS
uv run scripts/00_listen_fomo.py 60
```

Every chain is on by default, and a chain whose endpoint is missing stops the run naming the
variable to set. Turn a chain off by name to run without it:

```bash
uv run scripts/00_listen_fomo.py 60 eth-off monad-off
```

To follow one person, pass their addresses after the…
