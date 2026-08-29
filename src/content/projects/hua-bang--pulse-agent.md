---
repo: "hua-bang/pulse-agent"
name: "pulse-agent"
description: "A repo about coding agent."
readmeQualityOk: true
url: "https://github.com/hua-bang/pulse-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 28
forks: 2
openIssues: 2
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-26T14:13:09Z"
lastCommitAt: "2026-08-29T10:22:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["hua-bang"]
openGraphImageUrl: "https://opengraph.githubassets.com/82efc06823f0c854db3f2dccaa6fc2c3a7e62a4d867b73614cf0704d8ee7a7d7/hua-bang/pulse-agent"
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
| `packages/plugin-kit` | `pulse-coder-plugin-kit` | Plugin umbrella: worktree, vault, devtools, memory, and Langfuse modules behind subpath exports |
| `packages/agent-teams` | `pulse-coder-agent-teams` | Agent teams coordination built on the engine's orchestrator module |
| `packages/acp` | `pulse-coder-acp` | Agent Context Protocol — typed client, runner, and state store |
| `packages/canvas-cli` | `@pulse-coder/canvas-cli` | Canvas-related CLI helpers |

### Apps

| Path | Purpose |
| --- | --- |
| `apps/remote-server` | HTTP service…
