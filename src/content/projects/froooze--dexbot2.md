---
repo: "froooze/DEXBot2"
name: "DEXBot2"
description: "Rewrite and optimize grid trading for market making on BitShares."
readmeQualityOk: true
url: "https://github.com/froooze/DEXBot2"
homepage: "https://dexbot.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 9
forks: 9
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-08-24T00:44:10Z"
lastCommitAt: "2026-09-29T10:01:27Z"
lastReleaseAt: "2025-12-27T10:16:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 92
maintainers: ["froooze"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0e6ac84c25dcab16ab876902a043116bf2bf176882d12d18ff3e2748444b887/froooze/DEXBot2"
discussionCount: 0
---

# DEXBot2

DEXBot2 is the first open source trading bot with zero runtime dependencies and a fully adaptive market making strategy.

</p>

## Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Zero-Dependency Process Management](#-zero-dependency-process-management)
- [Bot Management](#-bot-management)
- [PM2 Process Management](#-pm2-process-management)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Links](#-links)

## ✨ Features

- **Grid Trading** — geometric order grids that rebalance as price moves
- **Adaptive Signals** — AMA and trend inputs tune grid placement
- **Credit & MPA** — credit offer and debt workflows
- **Runtime Safety** — replay-safe fills, sync recovery, and cleanup
- **Secure Ops** — encrypted keys and credential daemon

## 🌱 Quick Start

```bash
# Requires Node.js v22.12 or newer
npm i -g dexbot

dexbot key                 # Set up master password and import keys
dexbot bot                 # Create and manage bot configurations
dexbot start               # Start DEXBot2
```

Detailed setup: [Installation](#-installation).

### First Run

New to…
