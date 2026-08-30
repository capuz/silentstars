---
repo: "go-steer/core-agent"
name: "core-agent"
description: "Reusable Go base agent on the Google ADK — multi-provider (Gemini, Vertex, Claude on Anthropic + Vertex), MCP-native, with AGENTS.md, skills, and permissions wired up."
readmeQualityOk: true
url: "https://github.com/go-steer/core-agent"
homepage: "https://go-steer.github.io/core-agent/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["adk", "agent", "anthropic", "claude", "gemini", "golang", "llm", "mcp", "vertex-ai"]
stars: 6
forks: 1
openIssues: 40
closedIssues: 265
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-14T15:17:48Z"
lastCommitAt: "2026-08-30T09:24:11Z"
lastReleaseAt: "2026-07-10T17:11:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 67
maintainers: ["mastersingh24", "go-steer-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1238913250/3c4f5d63-8ba9-4563-9a16-e8c06897c1dd"
---

# core-agent

A production-grade Go substrate for multi-turn LLM agents, built on the [Google Agent Development Kit](https://pkg.go.dev/google.golang.org/adk). Ships the wiring — providers, MCP, skills, permissions, durable sessions, remote attach, an in-process Bubble Tea TUI, and a headless CLI — so downstream projects can focus on their own tools and product logic.

**📚 Full documentation: [go-steer.github.io/core-agent](https://go-steer.github.io/core-agent/)**

---

## Features

**Runtime**
- Multi-turn conversation via ADK's `runner.Runner`; parallel tool-call dispatch.
- In-process Bubble Tea TUI as the default TTY surface; `--no-tui` line REPL fallback; slim build (`-tags no_tui`) drops the TUI tree entirely.
- `autonomous.Run` for unattended workers with turn / token / cost / wallclock budgets and model-driven termination; `autonomous.Resume` picks up from a durable checkpoint after a crash.
- Long-session survivability: automatic post-turn compaction at ~85% context utilization, subtasks with `agentic_*` tool wrappers that keep bulk tool output out of the parent's context, and task-boundary checkpoints via `mark_task_done`. See [Context…
