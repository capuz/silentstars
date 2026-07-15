---
repo: "hua-bang/pulse-agent"
name: "pulse-agent"
description: "A repo about coding agent."
readmeQualityOk: true
url: "https://github.com/hua-bang/pulse-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 27
forks: 1
openIssues: 2
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-26T14:13:09Z"
lastCommitAt: "2026-07-15T05:53:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 41
maintainers: ["hua-bang", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/21a181adedb7ebb5c51a72a636a9f338d7dc8d3a147c96c059bf70128883f83f/hua-bang/pulse-agent"
---

# Pulse Agent

Plugin-first coding agent monorepo with a reusable engine, an interactive CLI, multi-agent orchestration, and optional server/runtime integrations.

## Language
- English docs (this file)
- Chinese docs: [`README-CN.md`](https://github.com/hua-bang/pulse-agent/blob/HEAD/README-CN.md)

## Repository layout

This repo is a `pnpm` workspace monorepo (`packages/*`, `apps/*`).

### Packages

| Path | npm name | Purpose |
| --- | --- | --- |
| `packages/engine` | `pulse-coder-engine` | Core runtime: loop, hooks, built-in tools, plugin manager |
| `packages/cli` | `pulse-coder-cli` | Interactive terminal app built on top of the engine |
| `packages/pulse-sandbox` | `pulse-sandbox` | Sandboxed JavaScript executor and `run_js` tool adapter |
| `packages/memory-plugin` | `pulse-coder-memory-plugin` | Host-side memory plugin and integration helpers |
| `packages/plugin-kit` | `pulse-coder-plugin-kit` | Shared utilities for plugins (worktree helpers, vault, devtools) |
| `packages/orchestrator` | `pulse-coder-orchestrator` | Multi-agent orchestration (TaskGraph, planner, scheduler, runner, aggregator) |
| `packages/agent-teams` | `pulse-coder-agent-teams` | Agent teams…
