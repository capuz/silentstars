---
repo: "deepsteve/deepsteve"
name: "deepsteve"
description: "A hackable, open-source multi-terminal for running AI coding agents in your browser."
readmeQualityOk: true
url: "https://github.com/deepsteve/deepsteve"
homepage: "https://deepsteve.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["ai-coding", "ai-tools", "browser-terminal", "claude-code", "coding-agent", "developer-tools", "devtools", "macos", "mods", "multi-agent"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 563
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T19:58:50Z"
lastCommitAt: "2026-08-10T05:04:07Z"
lastReleaseAt: "2026-03-16T03:55:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["imichaelnorris"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7dbe56a9463219b1f54e87480a0ea955e968630dc7a73cf410b963d1ddf933e/deepsteve/deepsteve"
---

</p>

# deepsteve

https://deepsteve.com

Run multiple AI agent sessions side-by-side in your browser, each with full terminal capabilities and persistent conversation history. Supports **Claude Code** and **Codex**. OpenCode, Pi, and Hermes also run, as experimental integrations — [docs/agents.md](https://github.com/deepsteve/deepsteve/blob/HEAD/docs/agents.md) is the per-agent breakdown of what each one actually gets.

</p>

</p>

**Runs on macOS and Linux.** The daemon is managed by a LaunchAgent on macOS and a systemd user unit on Linux; both are driven through one interface (`service.sh`). On Linux tmux is a required dependency, not optional — sessions live inside it so they survive the restarts systemd performs on every crash and upgrade.

> **Security notice:** DeepSteve is **localhost-first with token authentication**. Every surface (web UI WebSocket, MCP endpoint, REST APIs) enforces a Host allowlist, an Origin allowlist, and a per-install bearer token — closing the drive-by-webpage / DNS-rebinding hole. The browser is authenticated transparently via an HttpOnly cookie (no login screen). Auth is always on; do not expose it to an untrusted network regardless.

## Terminal…
