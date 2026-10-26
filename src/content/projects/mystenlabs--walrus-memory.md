---
repo: "MystenLabs/walrus-memory"
name: "walrus-memory"
description: "A portable memory layer that makes AI agents reliable across apps and sessions. Persistent, verifiable, and fully under your control."
readmeQualityOk: true
url: "https://github.com/MystenLabs/walrus-memory"
homepage: "https://walrus.xyz/memory"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [49, 25]
topics: ["agent-memory", "ai-agents", "long-term-memory", "agentic-ai", "artificial-intelligence", "generative-ai", "llm", "mcp", "multi-agent-systems", "portable-memory"]
stars: 126
forks: 48
openIssues: 80
closedIssues: 453
watchers: 6
contributors: 29
recentReleases: 0
createdAt: "2025-07-29T07:32:39Z"
lastCommitAt: "2026-10-26T09:18:07Z"
lastReleaseAt: "2026-05-25T04:50:20Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 49
maintainers: ["harrymove-ctrl", "ducnmm", "HoangDucBach"]
openGraphImageUrl: "https://opengraph.githubassets.com/c53ebb5e9e6db9b392a2f047dc83c45d0076ca90646c0ee413caf292f65e32bd/MystenLabs/walrus-memory"
---

# Walrus Memory

Portable agent memory — take your agent's memory anywhere.

Walrus Memory enables AI agents to operate reliably across apps and sessions,
without losing context. Portable, verifiable, and fully controlled by you, it's
the memory layer that lets agents handle complex workflows and coordinate using
data they can trust.

> Walrus Memory is currently in beta and actively evolving. While fully usable today, we continue to refine the developer experience and operational guidance. We welcome feedback from early builders as we continue to improve the product.

## For AI Agents

- **Single-file guide**: Read [`SKILL.md`](https://github.com/MystenLabs/walrus-memory/blob/HEAD/SKILL.md) for a complete integration reference (install, configure, API surface, troubleshooting)
- **LLM-friendly docs**: [`llms.txt`](https://docs.wal.app/walrus-memory/llms.txt) — structured overview following the [llmstxt.org](https://llmstxt.org) standard

## Install

```bash
pnpm add @mysten-incubation/memwal
```

Peer dependencies (install as needed):

```bash
pnpm add @mysten/sui @mysten/seal @mysten/walrus ai zod
```

## Quick Start

```ts
import { MemWal } from "@mysten-incubation/memwal";…
