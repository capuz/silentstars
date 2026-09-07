---
repo: "ClankerNation/OpenAgents"
name: "OpenAgents"
description: "Decentralized AI Agent Orchestration Protocol — see CONTRIBUTING.md. "
readmeQualityOk: true
url: "https://github.com/ClankerNation/OpenAgents"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [66]
stars: 12
forks: 117
openIssues: 201
closedIssues: 3
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-05-16T04:50:11Z"
lastCommitAt: "2026-09-07T08:34:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure", "fork_magnet"]
healthScore: 60
undervaluedScore: 49
maintainers: ["clanker-journalist[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ebbff4d0c12ee5b13448117b0ee988e4de426341021a375cee7aab2219fce49/ClankerNation/OpenAgents"
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
