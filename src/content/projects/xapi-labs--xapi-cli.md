---
repo: "xapi-labs/xapi-cli"
name: "xapi-cli"
description: "Agent-friendly CLI for xAPI - discover and call capabilities and APIs"
readmeQualityOk: true
url: "https://github.com/xapi-labs/xapi-cli"
homepage: "https://xapi.to"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent", "agents", "ai", "api", "crypto", "douyin-api", "instagram-api", "kuaishou-api", "reddit-api", "tiktok-api"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-27T09:52:24Z"
lastCommitAt: "2026-10-22T08:51:56Z"
lastReleaseAt: "2026-04-10T14:30:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["dxiongya", "Glacier-Luo", "AmazingAng"]
openGraphImageUrl: "https://opengraph.githubassets.com/d489d52a627832a64a77fe4b719d1e9376f2eba5109289cfa86633989b96c20c/xapi-labs/xapi-cli"
---

# xapi-to

Agent-friendly command-line interface for [xAPI](https://xapi.to) — discover and call capabilities and APIs from your terminal or AI agent.

## Installation

```bash
# Via npx (no install needed)
npx xapi-to --help

# Or install globally with npm
npm install -g xapi-to

# Or from source
cd xapi-cli && bun install
```

The published CLI runs on Node.js 18.17+ (the Undici 6 transport dependency minimum). Bun is only required for local source development and tests.

## Teach Your Agent the xAPI Skill

Paste into Cursor, Claude Code, or any agent that supports skills:

```bash
npx skills add xapi-labs/xapi-cli
```

This installs the bundled [`xapi` skill](https://github.com/xapi-labs/xapi-cli/blob/HEAD/skills/xapi), which teaches the agent
how to call social, search, domains/DNS, crypto, BlockPI RPC, Binance Web3, and
AI services through this CLI. Then just ask
— "what's the price of BTC" — and it takes it from there. Set up a key first;
see [Quick Start](#quick-start).

Providers can install the CLI-native [`xapi-provider` skill](https://github.com/xapi-labs/xapi-cli/blob/HEAD/skills/xapi-provider/SKILL.md),
which covers service registration, billing and WebSocket…
