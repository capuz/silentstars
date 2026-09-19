---
repo: "Dicklesworthstone/dwarf_fortress_mcp"
name: "dwarf_fortress_mcp"
description: "A semantic, transactional, replayable MCP control plane that lets autonomous AI agents operate Dwarf Fortress as a long-lived civilization. Safe-Rust phase-0B scaffold: MVCC world state, witnessed semantic plans, evidence-backed effects, deterministic replay."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/dwarf_fortress_mcp"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [73, 23]
topics: ["ai-agents", "autonomous-agents", "control-plane", "deterministic", "dfhack", "dwarf-fortress", "game-automation", "llm-tools", "mcp", "model-context-protocol"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-29T23:22:51Z"
lastCommitAt: "2026-09-19T02:45:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f4e7c3e6846a901a0753b5e77bf46be82a0a57690faef75820b3e7ed7c0c6aa/Dicklesworthstone/dwarf_fortress_mcp"
---

# dwarf_fortress_mcp

**A semantic, transactional, replayable control plane for agents operating Dwarf Fortress as a
long-lived civilization rather than a keyboard-and-screen toy.**

> **Current status:** the repository contains an authenticated protocol-1.0 **read-only** DFHack
> stack, canonical live citizen observations, an agent-oriented MCP server, exact compatibility and
> anti-rollback machinery, source-bound executable qualification, a protocol-bound V2 process
> boundary, and an implemented protocol-1.1 retained-announcement development stack. The checked-in
> compatibility registry is **empty**. No live tuple is admitted, protocol 1.1 is not in the
> production runner map, no live mutation RPC exists, and the final current source generation has
> no newly checked-in full qualification receipt. Read
> [`IMPLEMENTATION_STATUS.md`](https://github.com/Dicklesworthstone/dwarf_fortress_mcp/blob/HEAD/IMPLEMENTATION_STATUS.md) before interpreting target architecture as
> deployed behavior.

The motivating problem is not merely “let a model press keys.” Dwarf Fortress is an unusually rich
long-horizon environment, but a naive automation layer would expose incomplete observations,…
