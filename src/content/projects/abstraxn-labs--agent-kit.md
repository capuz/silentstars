---
repo: "Abstraxn-Labs/agent-kit"
name: "agent-kit"
description: "Backend SDK for creating and managing Web3 AI agents with auto-provisioned Abstraxn server wallets."
readmeQualityOk: true
url: "https://github.com/Abstraxn-Labs/agent-kit"
homepage: "https://docs.abstraxn.com/guides/ai/agent-kit-overview"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "blockchain", "mcp", "sdk", "typescript", "wallet", "web3"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-07-31T05:39:48Z"
lastCommitAt: "2026-07-31T06:29:07Z"
lastReleaseAt: "2026-07-31T06:29:50Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 28
maintainers: ["sandeep-antier", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10199219979f5fecb6190766d91ce88fab9410e8e247b87c85e00913c599e7cc/Abstraxn-Labs/agent-kit"
---

# @abstraxn/agent-kit

Backend SDK for creating and managing Web3 AI agents with auto-provisioned Abstraxn server wallets.

[Report Bug](https://github.com/Abstraxn-Labs/agent-kit/issues) · [Request Feature](https://github.com/Abstraxn-Labs/agent-kit/issues)

## Installation

```bash
npm install @abstraxn/agent-kit
```

## Prerequisites

- **Node.js** >= 18
- **API Key** from the [Abstraxn Dashboard](https://dashboard.abstraxn.com)

<details>
<summary>Table of Contents</summary>

- [Basic Integration](#basic-integration)
  - [1. Initialize the SDK](#1-initialize-the-sdk)
  - [2. Create an Agent (with auto-provisioned wallet)](#2-create-an-agent-with-auto-provisioned-wallet)
  - [2b. Create an Agent (external / bring-your-own wallet)](#2b-create-an-agent-external--bring-your-own-wallet)
  - [3. List Agents](#3-list-agents)
  - [4. Get Agent by ID](#4-get-agent-by-id)
  - [5. Update Agent](#5-update-agent)
  - [6. Set Spend Policy](#6-set-spend-policy)
  - [7. Interaction Policies (off-chain guardrails)](#7-interaction-policies-off-chain-guardrails)
  - [8. Autonomous Transactions (delegated MCP execution)](#8-autonomous-transactions-delegated-mcp-execution)
  - [9. Delete…
