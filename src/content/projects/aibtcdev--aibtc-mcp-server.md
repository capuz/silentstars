---
repo: "aibtcdev/aibtc-mcp-server"
name: "aibtc-mcp-server"
description: "Bitcoin-native MCP server for AI agents: BTC/STX wallets, DeFi yield, sBTC peg, NFTs, and x402 payments."
readmeQualityOk: true
url: "https://github.com/aibtcdev/aibtc-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agent", "bitcoin", "blockchain", "claude", "claude-code", "defi", "mcp", "stacks", "web3", "x402"]
stars: 12
forks: 49
openIssues: 4
closedIssues: 199
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-01-09T16:33:59Z"
lastCommitAt: "2026-10-26T03:03:30Z"
lastReleaseAt: "2026-01-29T13:38:28Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 74
maintainers: ["biwasxyz", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf51438369436b545fb37ca75962d488b3352dafecddb8f85af32ff5fbbdd0d/aibtcdev/aibtc-mcp-server"
---

# @aibtc/mcp-server

Bitcoin-native MCP server for AI agents: BTC/STX wallets, DeFi yield, sBTC peg, NFTs, and x402 payments.

## Features

- **Bitcoin L1** - Check balances, send BTC, manage UTXOs via mempool.space
- **Agent's Own Wallet** - Agents get their own wallet to perform blockchain transactions
- **Secure Storage** - Wallets encrypted with AES-256-GCM and stored locally
- **350+ Tools** - Bitcoin L1 + comprehensive Stacks L2 operations
- **sBTC Support** - Native Bitcoin on Stacks operations
- **Token Operations** - SIP-010 fungible token transfers and queries
- **NFT Support** - SIP-009 NFT holdings, transfers, and metadata
- **DeFi Trading** - ALEX DEX swaps and Zest Protocol lending/borrowing
- **Stacking/PoX-5** - Stake STX with a signer manager, extend, unstake, claim sBTC rewards
- **BNS Domains** - .btc domain lookups and management (V1 + V2)
- **x402 Payments** - Automatic payment handling for paid APIs

## Quick Start

### Claude Code (Terminal)

```bash
npx @aibtc/mcp-server@latest --install
```

This configures Claude Code and creates the agent's wallet: it prints the Stacks and Bitcoin addresses, a generated password and the 24-word mnemonic **once**. Write…
