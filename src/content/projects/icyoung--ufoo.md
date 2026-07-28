---
repo: "Icyoung/ufoo"
name: "ufoo"
description: "Multi-agent workspace protocol - context sharing, event bus, and coordination for AI agents"
readmeQualityOk: true
url: "https://github.com/Icyoung/ufoo"
homepage: "https://ufoo.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 16
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-30T11:18:37Z"
lastCommitAt: "2026-07-28T14:57:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 44
maintainers: ["icyouo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c4e4b177770d0333253a86470337605d0d607269d08efcc1d896ac7426d82d5/Icyoung/ufoo"
---

# ufoo

[中文](https://github.com/Icyoung/ufoo/blob/HEAD/README.zh-CN.md)

ufoo is a project-scoped multi-agent workspace runtime. It wraps Claude Code,
OpenAI Codex, Antigravity, and ufoo's native `ucode` agent with a shared chat
dashboard, daemon, event bus, memory, reports, group orchestration, and terminal
launch modes.

Package: [u-foo on npm](https://www.npmjs.com/package/u-foo)

## Highlights

- One TUI dashboard for launching, watching, messaging, and resuming agents.
- Project daemon over `.ufoo/run/ufoo.sock` for launch/resume, reports, groups,
  cron, and controller routing.
- Project-local event bus for agent-to-agent messages, wakeups, queue checks,
  and activation.
- Shared context primitives: decisions, durable memory, prompt history, reports,
  and agent registry state.
- Launch modes for internal, tmux, host, Terminal.app, and iTerm2 workflows.
- Built-in group templates for launching and orchestrating multi-agent workflows.
- `ucode`, a native ufoo coding-agent runtime.
- `ufoo mcp`, a local global MCP bridge for external MCP-capable agents.

## Requirements

- Node.js 18 or newer.
- macOS for Terminal.app/iTerm2 integration.
- Claude Code, Codex CLI, or…
