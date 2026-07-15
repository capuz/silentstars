---
repo: "Pyiner/garyx"
name: "garyx"
description: "Garyx gateway, channel runtime, and desktop app"
readmeQualityOk: true
url: "https://github.com/Pyiner/garyx"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [51, 22]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-28T06:20:29Z"
lastCommitAt: "2026-07-15T05:53:30Z"
lastReleaseAt: "2026-05-12T14:38:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["Pyiner"]
openGraphImageUrl: "https://opengraph.githubassets.com/10caaa37ea0f8fde370d904e893421a772a9a5d08b6a33633f0b52985f3a2fd2/Pyiner/garyx"
---

# Garyx

Garyx is a local-first AI agent gateway. It connects provider-backed agents
to the places where work arrives: Telegram, Feishu / Lark, WeChat, the CLI,
HTTP / WebSocket clients, MCP tools, scheduled automations, and the macOS
desktop app. Every entry point shares the same thread history, workspace
binding, provider sessions, and task state.

Use Garyx when you want an agent to keep working across chat apps, terminals,
desktop sessions, and API calls without moving the conversation into a hosted
control plane.

## Why Garyx

| Capability | What it means |
| --- | --- |
| Local-first gateway | The gateway runs on your machine or server; config and transcripts live under `~/.garyx/`. |
| Multi-channel agents | Built-in Telegram, Feishu / Lark, WeChat, and local API channels share one routing model. |
| Provider choice | Route threads to Claude Code, Codex, Traex, Antigravity, or custom agent definitions without changing channel setup. |
| Persistent threads | A chat, desktop tab, task, or CLI send can resume the same thread and provider session. |
| Workspace-aware runs | Each thread records the directory the agent should operate in, with optional isolated Git worktrees. |
|…
