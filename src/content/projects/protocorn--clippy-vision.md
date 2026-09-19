---
repo: "protocorn/clippy-vision"
name: "clippy-vision"
description: "Fully local AI assistant that watches your screen to eliminate the context problem. No cloud. No data leakage."
readmeQualityOk: true
url: "https://github.com/protocorn/clippy-vision"
homepage: "https://github.com/protocorn/clippy-vision/releases/latest"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["ai", "electron", "local-ai", "ollama", "privacy", "rag", "screen-capture", "windows"]
stars: 17
forks: 12
openIssues: 8
closedIssues: 19
watchers: 5
contributors: 11
recentReleases: 6
createdAt: "2026-06-23T04:54:44Z"
lastCommitAt: "2026-09-19T02:46:47Z"
lastReleaseAt: "2026-09-11T14:18:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 59
maintainers: ["protocorn", "github-actions[bot]", "rusetiq"]
openGraphImageUrl: "https://opengraph.githubassets.com/68ddd71251004e318aa89cbcafc83e7006ac903129cca27e3ca20d85209930da/protocorn/clippy-vision"
discussionCount: 6
---

# Clippy Vision

> **A local, free, auditable memory layer for your AI agents — and a local LLM chat you can talk to yourself.** It watches your work on-device, stores it privately, and lets you use that memory two ways: through MCP (Cursor, Claude Desktop, VS Code, or any MCP client), or directly in Clippy's own chat with a local model. MCP is optional; the app works without it.

</p>

---

## What is Clippy Vision?

Clippy Vision is **infrastructure for personal context**: it watches your work, remembers it on-device, and answers from that memory.

It passively observes active windows, clipboard, typing patterns, and screenshots, then builds a continuously updating store of what you actually did. You can use that memory in **two equal ways**:

1. **Local LLM chat (built into the app)** — open Clippy and ask it yourself. Answers come from a local model (Ollama, e.g. `qwen3:8b`) plus the same retrieval tools. No MCP setup required.
2. **MCP for external agents** — connect Cursor, Claude Desktop, VS Code, or any MCP client so *those* agents can query Clippy's memory without you pasting context.

MCP is an optional bridge. If you never connect a client, Clippy still captures,…
