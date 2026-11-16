---
repo: "sonirico/go-hyperliquid"
name: "go-hyperliquid"
description: "Unofficial golang client SDK for api.hyperliquid.xyz supporting both API and websocket channels"
readmeQualityOk: true
url: "https://github.com/sonirico/go-hyperliquid"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["golang", "hyperliquid", "sdk", "sdk-go", "blockchain", "dex", "exchange", "go", "api"]
stars: 128
forks: 106
openIssues: 0
closedIssues: 27
watchers: 3
contributors: 26
recentReleases: 0
createdAt: "2025-03-04T19:48:35Z"
lastCommitAt: "2026-11-16T04:21:36Z"
lastReleaseAt: "2025-08-09T21:36:42Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["dependabot[bot]", "github-actions[bot]", "hail100"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2825e7a7001bd257a46cc7dbe2e429517ce1f66ba8cc99187079ff0f79b9209/sonirico/go-hyperliquid"
fundingLinks: ["KO_FI:https://ko-fi.com/sonirico"]
---

# go-hyperliquid

Unofficial Go client for the Hyperliquid exchange API. This implementation follows the same philosophy and patterns as the official Python SDK.

## Installation

```bash
go get github.com/sonirico/go-hyperliquid
```

## Features

This Go SDK provides **full feature parity** with the official Python SDK, including:

### Trading Features

- **Order Management**: Limit orders, market orders, trigger orders, order modifications
- **Position Management**: Leverage updates, isolated margin, position closing
- **Bulk Operations**: Bulk orders, bulk cancellations, bulk modifications
- **Advanced Trading**: Market open/close with slippage protection, scheduled cancellations
- **Builder Support**: Order routing through builders with fee structures

### Account Management

- **Referral System**: Set referral codes, track referral state
- **Sub-Accounts**: Create and manage sub-accounts, transfer funds
- **Multi-Signature**: Convert to multi-sig, execute multi-sig actions
- **Vault Operations**: Vault deposits, withdrawals, and transfers

### Asset Management

- **USD Transfers**: Cross-chain USD transfers, spot transfers
- **Class Transfers**: USD class transfers (perp ↔…
