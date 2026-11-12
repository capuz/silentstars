---
repo: "ProjectOpenSea/opensea-skill"
name: "opensea-skill"
description: "Agent skill for interacting with OpenSea"
readmeQualityOk: true
url: "https://github.com/ProjectOpenSea/opensea-skill"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 53
forks: 17
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-01-31T21:13:59Z"
lastCommitAt: "2026-11-12T05:43:40Z"
lastReleaseAt: "2026-05-07T22:51:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 32
maintainers: ["ryanio", "CodySearsOS", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2946e7a259af48db5b0ee3ebfa6ac2ee599ef200dcca84c60eb3e8e3915e335/ProjectOpenSea/opensea-skill"
---

# OpenSea Skills

[Agent Skills](https://agentskills.io/specification) for [OpenSea](https://opensea.io/): query NFT and token data, trade NFTs on Seaport, swap ERC20 tokens, and build AI agent tools with onchain gating.

## Installation

Each method installs the router `SKILL.md` and all five skills:

```bash
# Installs the router and all five skills (recommended)
npx skills add ProjectOpenSea/opensea-skill --yes

# ClawHub (single slug, all skills bundled)
clawhub install opensea-marketplace

# Manual (Claude Code / Cursor / Codex)
git clone https://github.com/ProjectOpenSea/opensea-skill.git ~/.claude/skills/opensea
```

The agent reads the root `SKILL.md` first, and it sends the agent to the right skill for the task.

## Choosing a skill

```
Want to use OpenSea?
├── Query NFT/token data, search, collection stats ──────── opensea-api
├── Buy/sell NFTs (listings, offers, fulfillment) ───────── opensea-marketplace
├── Swap ERC20 tokens (DEX aggregator) ──────────────────── opensea-swaps
├── Set up wallet signing for transactions ──────────────── opensea-wallet
└── Build/register/gate AI agent tools (ERC-8257) ───────── opensea-tool-sdk
```

Cases that are easy to send to the…
