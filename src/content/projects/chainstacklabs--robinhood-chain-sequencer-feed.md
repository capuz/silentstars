---
repo: "chainstacklabs/robinhood-chain-sequencer-feed"
name: "robinhood-chain-sequencer-feed"
description: "Decode the sequencer feed of Robinhood Chain or any Arbitrum Nitro chain, including Elysium, Arbitrum One, and Arbitrum Nova"
readmeQualityOk: true
url: "https://github.com/chainstacklabs/robinhood-chain-sequencer-feed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["arbitrum", "robinhood-chain", "elysium", "arbitrum-nitro", "arbitrum-orbit", "hyperliquid", "kinetiq", "sequencer-feed"]
stars: 36
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-26T08:49:33Z"
lastCommitAt: "2026-10-29T10:20:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 26
maintainers: ["smypmsa", "pucedoteth", "hey-research-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/956c388d35a096b6458feaf6671205d55950b845afc3781ce8724e93f2b8f23b/chainstacklabs/robinhood-chain-sequencer-feed"
---

• <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •

# Robinhood Chain sequencer feed decoder

> **Experimental.** A demo. Do not use it in production.

Robinhood Chain has no public mempool. The sequencer publishes each block on a WebSocket feed.
A feed message contains the transaction order and the calldata. It does not contain receipts.

This repo shows how to:

1. Connect to the feed.
2. Decode the transactions and the calldata of known trade functions.
3. Execute feed blocks in a local EVM: [local execution](https://github.com/chainstacklabs/robinhood-chain-sequencer-feed/blob/HEAD/examples/local_execution/).

All Arbitrum Nitro chains use the same feed format. `rhfeed` also reads Arbitrum One, Arbitrum
Nova, Elysium, and other Orbit chains. See [Other Arbitrum Nitro chains](#other-arbitrum-nitro-chains).

## Quick start

Requirements: Docker and [uv](https://docs.astral.sh/uv/getting-started/installation/).

```bash
docker compose up -d --wait relay   # start the relay
uv sync
uv run rhfeed                       # Ctrl-C to stop
```

```
seq 20543500  2 tx…
