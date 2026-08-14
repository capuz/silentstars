---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel for Claude Code, Codex, Cursor, and MCP: use fewer tokens and do less repeated work with cache-stable model traffic, context compaction + crash resume, local repeat serving, nanosecond tool policy, and local GGUF inference."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 30
forks: 13
openIssues: 1579
closedIssues: 5129
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-08-14T05:12:24Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the Fused Agent Kernel

**Manage the AI agent you already use.**

fak is one Go binary between an agent and its model/tools. Keep Claude Code, Codex, OpenCode, or your own client—and its UI, login, and model—while fak reuses stable work, compacts long sessions, enforces tool policy, journals activity, and recovers interrupted runs. The same native modules can also compose fleets of small, bounded agents in one process.

> **Start here:** install fak, then run `fak manage claude` (or `fak m claude`). No API key or new agent framework is required.

**Current focus: spend fewer tokens and turns.** See the [performance-first capability map](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/CAPABILITIES.md) for the shipped turn-tax controls, stable-prefix reuse, managed context, per-call model routing, cache-value accounting, and out-of-band session controls. The security floor remains shipped and indexed, but it supports this efficiency story rather than leading it.

## Install and run

macOS or…
