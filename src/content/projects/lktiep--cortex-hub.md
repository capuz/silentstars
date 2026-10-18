---
repo: "lktiep/cortex-hub"
name: "cortex-hub"
description: "Self-hosted AI Agent Memory + Code Intelligence Platform — one MCP endpoint for persistent memory, AST-aware code search, shared knowledge, and quality enforcement across all your AI coding agents."
readmeQualityOk: true
url: "https://github.com/lktiep/cortex-hub"
homepage: "https://hub.jackle.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["ai-agents", "claude-code", "code-intelligence", "cursor", "developer-tools", "docker", "knowledge-base", "mcp", "memory", "self-hosted"]
stars: 61
forks: 18
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-03-18T13:26:13Z"
lastCommitAt: "2026-10-18T08:16:50Z"
lastReleaseAt: "2026-10-17T15:05:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["github-actions[bot]", "lktiep"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1588b6d63579e5525088280783897a7d5fc91818cca457f4962f9f855c1f55c/lktiep/cortex-hub"
discussionCount: 1
---

---

## Why Cortex?

Every AI coding agent works in **isolation**. Switch IDE, switch machine, switch project — the agent starts from zero. Your team's hard-won decisions, bug fixes, and architectural patterns live and die inside individual chat sessions.

**Cortex Hub** is a self-hosted backend that gives **every agent on your team persistent memory, shared knowledge, and cross-project intelligence** via a single [MCP](https://modelcontextprotocol.io/) endpoint:

```
        Claude Code    Cursor    Antigravity    Codex    Gemini
              │          │            │           │         │
              └──────────┴────────────┴───────────┴─────────┘
                                  │
                          ┌───────▼────────┐
                          │  Cortex Hub    │  ← one MCP endpoint for everything
                          │                │
                          │  Memory        │  Agents remember across sessions
                          │  Knowledge     │  Team shares bug fixes, patterns
                          │  Code Intel    │  Search any project's code by name
                          │  Quality Gates │  Enforce build/lint before commit…
