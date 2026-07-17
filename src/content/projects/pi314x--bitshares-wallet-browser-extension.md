---
repo: "pi314x/bitshares-wallet-browser-extension"
name: "bitshares-wallet-browser-extension"
description: "A browser extension for BitShares"
readmeQualityOk: true
url: "https://github.com/pi314x/bitshares-wallet-browser-extension"
homepage: "https://pi314x.github.io/bitshares-wallet-browser-extension/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
stars: 8
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-02-20T08:44:07Z"
lastCommitAt: "2026-07-17T05:42:37Z"
lastReleaseAt: "2026-07-13T17:51:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 72
undervaluedScore: 59
maintainers: ["pi314x", "claude", "technologiespro"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a1245bea9af553682d82ae2ffd9ec47e83d26e56b5ff9efa7828565b126b838/pi314x/bitshares-wallet-browser-extension"
---

# BitShares Wallet Browser Extension

A secure browser extension for the BitShares blockchain - similar to MetaMask but for BitShares DEX. Supports Chrome, Brave, and Firefox.

## Features

### Wallet Management
- Create new wallet with password-protected brainkey
- Import existing wallets via:
  - Account name + password (keys verified against chain before import)
  - Brainkey phrase
  - WIF private keys
  - Premium / non-standard account names supported on import
- Secure AES-256-GCM encryption
- Auto-lock functionality (configurable timer or disabled)
- Backup brainkey for recovery
- Multi-account support with watch-only accounts

### Asset Management
- View BTS and all BitShares assets
- Real-time balance updates
- USD value display with market prices
- Full transaction history with filtering
- QR code generation for receiving

### Transactions
- Send BTS and other assets
- Recipient account validation
- Optional encrypted memos
- Transaction fee calculation
- Confirmation modal for all transactions

### Full Operation Signing (All 78 BitShares Operations)

The wallet supports signing all 78 BitShares blockchain operation types, not just transfers. Every operation shows a…
