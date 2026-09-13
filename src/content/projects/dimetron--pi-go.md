---
repo: "dimetron/pi-go"
name: "pi-go"
description: "Go implementation of AI coding agent"
readmeQualityOk: true
url: "https://github.com/dimetron/pi-go"
homepage: "https://pi-go.sh"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["acp", "ai-agent", "cli", "coding-agent", "go", "golang", "llm", "mcp", "terminal", "tui"]
stars: 157
forks: 22
openIssues: 4
closedIssues: 15
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-03-16T11:10:21Z"
lastCommitAt: "2026-09-13T08:28:27Z"
lastReleaseAt: "2026-04-01T15:01:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 31
maintainers: ["dimetron"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef0a474e262bb2e52e3b9fe302641e0df4441e81f87a50bb309ad703040ab7ef/dimetron/pi-go"
discussionCount: 1
---

# pi-go

A terminal-based coding agent built on [Google ADK Go](https://adk.dev/). It connects to multiple LLM providers, runs
sandboxed tools, integrates LSP, and ships with a process-based subagent system.

## Features

- **Multi-provider LLM** — Claude (Anthropic), GPT/O-series (OpenAI), Gemini (Google), Mistral, Grok (xAI), Azure OpenAI, OpenRouter, OpenCode, and Ollama (local or cloud) for models
- **Sandboxed tools** — read, write, edit, shell, grep, find, tree, and git operations. All tools are restricted to the project directory via `os.Root`.
- **Interactive TUI** — Bubble Tea v2 with Markdown rendering (Glamour), slash commands, and theming
- **Session persistence** — JSONL append-only event logs with branching, compaction, and resume
- **Model roles** — Named configurations (default, smol, slow, plan, commit) selectable via CLI flags
- **Subagents** — Process-based multi-agent system with types: explore, plan, designer, reviewer, task, quick_task
- **LSP** — JSON-RPC client for Go, TypeScript/JS, Python, and Rust, with auto-format and diagnostics hooks
- **AI Git tools** — Repository overview, file diffs, hunk parsing, and LLM-generated conventional commits (`/commit`)…
