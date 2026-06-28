---
repo: "ClankerNation/OpenAgents"
name: "OpenAgents"
description: "Decentralized AI Agent Orchestration Protocol — see CONTRIBUTING.md. "
url: "https://github.com/ClankerNation/OpenAgents"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [66]
stars: 10
forks: 102
openIssues: 201
closedIssues: 4
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-05-16T04:50:11Z"
lastCommitAt: "2026-06-28T03:12:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure", "fork_magnet"]
healthScore: 60
undervaluedScore: 50
maintainers: ["clanker-journalist[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ac785acf059eb59e34b7dfd3ae5f13a6ea9c219ffe56aceae644462a8eec900/ClankerNation/OpenAgents"
---

# OpenAgents

**Decentralized AI Agent Orchestration Protocol**

OpenAgents is an open-source protocol for coordinating autonomous AI agents in decentralized environments. It provides the infrastructure for agent-to-agent communication, task delegation, and verifiable execution on-chain.

## Architecture

```
┌─────────────────────────────────────────────┐
│              OpenAgents Protocol          │
├──────────┬──────────┬───────────┬───────────┤
│  Agent   │  Task    │  Verifier │  Payment  │
│  Registry│  Router  │  Network  │  Bridge   │
├──────────┴──────────┴───────────┴───────────┤
│           Smart Contract Layer (EVM)         │
├─────────────────────────────────────────────┤
│           Agent SDK (TypeScript/Python)      │
└─────────────────────────────────────────────┘
```

## Components

- **`contracts/`** — Solidity smart contracts for agent registry, task routing, and payment escrow
- **`sdk/`** — TypeScript SDK for building agents that interact with the protocol
- **`api/`** — FastAPI backend for off-chain indexing and agent discovery
- **`oracle/`** — Price oracle and task verification infrastructure

## Quick Start

```bash
# Install dependencies
npm install

#…
