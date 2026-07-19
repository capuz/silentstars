---
repo: "tomas-rampas/claude-agentic-framework"
name: "claude-agentic-framework"
description: "Claude Code Agentic Framework"
readmeQualityOk: true
url: "https://github.com/tomas-rampas/claude-agentic-framework"
language: "Shell"
languages: ["Shell", "PowerShell"]
languagePcts: [65, 35]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-07T15:24:24Z"
lastCommitAt: "2026-07-19T06:07:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 61
maintainers: ["tomas-rampas", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9eae34cdf3430030577ece4a7b01c093b99d2084571150c0e5d784985941b0dd/tomas-rampas/claude-agentic-framework"
---

# Claude Code CLI - Agent Execution Framework

A configuration framework for [Claude Code CLI](https://docs.claude.com/en/docs/claude-code) that adds 21 specialized agents, a real peer-review enforcement gate, an anti-drift consistency system, and intelligent task routing.

**This is NOT a standalone tool** — it requires Claude Code CLI as the underlying platform.

---

## Overview

This framework extends Claude Code CLI with:

- **21 Specialized Agents** covering the full development lifecycle
- **Real Enforcement Hooks** — a blocking peer-review Stop gate plus session-context and delegation-hint hooks, registered via `settings.template.json` and covered by tests
- **Anti-Drift Consistency System** — dynamic validator, doc generator, and CI gate that keep the registry, docs, and filesystem in lockstep
- **MCP Integration** — 5 MCP servers for code intelligence, file operations, documentation lookup, structured reasoning, and web fetching

---

## Prerequisites

| Requirement | Purpose |
|-------------|---------|
| **[Claude Code CLI](https://docs.claude.com/en/docs/claude-code)** | Agent execution platform (required) |
| **Git** | Version control |
| **PowerShell 7.3+ (`pwsh`)**…
