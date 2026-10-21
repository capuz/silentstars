---
repo: "DavidFeder/pulsechain-mcp"
name: "pulsechain-mcp"
description: "PulseChain MCP server for AI agents: chain reads, markets, swap quotes, and encrypted wallets"
readmeQualityOk: true
url: "https://github.com/DavidFeder/pulsechain-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-wallets", "defi", "hex", "mcp", "mcp-server", "mcp-servers", "model-context-protocol", "model-context-protocol-mcp", "model-context-protocol-server", "pulsechain"]
stars: 11
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-26T03:01:17Z"
lastCommitAt: "2026-10-21T21:12:37Z"
lastReleaseAt: "2026-10-02T06:37:26Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 86
undervaluedScore: 62
maintainers: ["DavidFeder", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/4625b02d1f182c85c48a156be8fab86ecdab8288a7ae36949619b27d6367b6bc/DavidFeder/pulsechain-mcp"
---

# pulsechain-mcp

An MCP server that lets AI agents work with **PulseChain** and encrypted agent wallets.

You can give your AI agent its own PLS and other tokens in a local wallet it controls.

Sending PLS and swaps on PulseX/Piteas have been successful.

**Version `1.0.12`** · MCP TypeScript SDK **2.0.0** (stable) · dual-era `2026-07-28` + `2025-11-25`

## Features

- PulseChain data and market research
- Smart contract reviews and creation
- Swap quotes/prices and executions
- Encrypted agent wallets — send PLS and other tokens to a wallet your agent can control

## Security

- AI Agent starts with zero PLS and is in "Research Only Mode" until you fund it's wallet. Sending PLS to your agent is optional, if you do be smart and start small.
- Kill switch command can disable the wallet
- Encrypted keys at rest (AES-256-GCM)
- Unique wallet directory per process
- Don't give your agent more coins than you are willing to lose, agents make mistakes just like humans

## Setup (humans)

1. Install **Node.js 24.22.1** (Active LTS) or a newer build on a supported line — **22.23.4**, **24.22.1**, or **26.12.1** — or have your agent do it. These are the 21 October 2026 security releases.…
