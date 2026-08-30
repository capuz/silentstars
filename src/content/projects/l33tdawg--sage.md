---
repo: "l33tdawg/sage"
name: "sage"
description: "(S)AGE - (Sovereign) Agent Governed Experience"
readmeQualityOk: true
url: "https://github.com/l33tdawg/sage"
homepage: "https://orcid.org/0009-0001-7248-2411"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["agentic-ai", "artificial-intelligence", "bft-consensus", "bft-network", "distributed-systems", "governance"]
stars: 244
forks: 26
openIssues: 0
closedIssues: 39
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-03-01T05:54:50Z"
lastCommitAt: "2026-08-30T00:44:53Z"
lastReleaseAt: "2026-03-09T11:10:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 30
maintainers: ["l33tdawg", "ihubanov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c25aa98729f8bdd6865fd2159d24cbe8f9fb919af31ccfa05e483d44aa69ef9f/l33tdawg/sage"
---

# (S)AGE — Sovereign Agent Governed Experience

**Persistent, consensus-validated memory infrastructure for AI agents.**

SAGE gives AI agents institutional memory that persists across conversations, goes through BFT consensus validation, carries confidence scores, and decays naturally over time. Not a flat file. Not a vector DB bolted onto a chat app. Infrastructure — built on the same consensus primitives as distributed ledgers.

The architecture is described in [Paper 1: Agent Memory Infrastructure](https://github.com/l33tdawg/sage/blob/HEAD/papers/Paper1%20-%20Agent%20Memory%20Infrastructure%20-%20Byzantine-Resilient%20Institutional%20Memory%20for%20Multi-Agent%20Systems.pdf).

> **Just want to install it?** [Download here](https://l33tdawg.github.io/sage/) — double-click, done. Works with any AI.

</a>

---

## Architecture

```
Agent (Claude, ChatGPT, DeepSeek, Gemini, etc.)
  │ MCP / REST
  ▼
sage-gui
  ├── ABCI App (validation, confidence, decay, Ed25519 sigs)
  ├── Memory Auto-Voter (dedup, quality, consistency — one vote per node, signed with the node's consensus key)
  ├── Governance Engine (on-chain validator proposals + voting)
  ├── CometBFT consensus…
