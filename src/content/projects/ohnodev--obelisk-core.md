---
repo: "ohnodev/obelisk-core"
name: "obelisk-core"
description: "The consciousness engine for The Obelisk 🧠"
url: "https://github.com/ohnodev/obelisk-core"
homepage: "https://theobelisk.ai"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 37]
topics: ["ai", "ai-agents", "artificial-intelligence", "consciousness-research", "llm-agent", "quantum-computing"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-28T11:38:00Z"
lastCommitAt: "2026-06-24T06:39:50Z"
lastReleaseAt: "2026-03-05T09:59:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["mergestorm-cyclone[bot]", "ohnodev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1144176474/6bcb057e-fefb-4019-a026-a0defd8daaf9"
---

# Obelisk Core

</p>

  <strong>Open-source AI agent framework with a visual workflow editor, self-hosted inference, and one-click deployment</strong>
</p>

</p>

</p>

**Obelisk Core** is an open-source framework for building, running, and deploying AI agents. Design workflows visually, connect to a self-hosted LLM, and deploy autonomous agents — all from your own hardware.

**Status**: 🟡 Alpha — v0.2.0-alpha

---

## How It Works

Obelisk Core uses several services that work together:

```text
┌──────────────────────────────────┐
│         Visual Workflow Editor   │     ← Browser UI (Next.js)
│   Design agent workflows with    │     Build, test, and deploy
│   drag-and-drop nodes            │     workflows visually
└──────────────┬───────────────────┘
               │ executes
┌──────────────▼───────────────────┐
│      TypeScript Execution Engine │     ← Agent Runtime (Node.js)
│   Runs workflows as autonomous   │     Nodes: inference, Telegram,
│   agents in Docker containers    │     memory, scheduling, Clanker, Polymarket, etc.
└──────────────┬───────────────────┘
               │ calls
     ┌─────────┴─────────┬─────────────────┬──────────────────┐
     ▼…
