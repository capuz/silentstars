---
repo: "ducks/claux"
name: "claux"
description: "Claude Code rewrite in Rust"
readmeQualityOk: true
url: "https://github.com/ducks/claux"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai", "claude-code", "rust"]
stars: 9
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-01T16:38:12Z"
lastCommitAt: "2026-07-04T22:19:43Z"
lastReleaseAt: "2026-07-04T22:22:04Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 61
maintainers: ["ducks"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab6674c6dcdbff82db9f6705a6bb59916daab1770e6879ef405ce2b1a95fa67/ducks/claux"
---

# claux

A terminal-based AI coding assistant written in Rust. Streams responses, executes tools, manages sessions, and stays out of your way.

## Features

- **Streaming chat** with tool execution (Read, Write, Edit, Glob, Grep, Bash, WebFetch, Agent)
- **Interactive permissions** — prompts before writes, `y/n/a` (always allow per-session)
- **Session persistence** — JSONL-based, resume with `/resume` or `--resume`
- **Compaction** — `/compact` summarizes conversation to free context
- **Model switching** — `/model <name>` mid-conversation
- **Sub-agents** — Agent tool spawns scoped sub-conversations
- **Auto-compact** — triggers when conversation gets large
- **Cost tracking** — per-model token usage and USD estimates
- **Prompt caching** — automatic Anthropic cache breakpoints on the system prompt and conversation, cutting input cost and latency on long sessions
- **Context assembly** — git status, CLAUDE.md, environment info in system prompt
- **TUI mode** — full-screen ratatui interface with `--tui`
- **Multi-provider** — Anthropic, OpenAI, Ollama, or any OpenAI-compatible endpoint
- **OAuth support** — can reuse existing `claude login` credentials (best-effort; see Auth)
-…
