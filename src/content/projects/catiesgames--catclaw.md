---
repo: "CatiesGames/catclaw"
name: "catclaw"
description: "Personal AI assistant gateway powered by Claude Code — multi-agent, multi-channel (Discord/Telegram/TUI), session management, tool approval, memory system"
url: "https://github.com/CatiesGames/catclaw"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "ai-assistant", "claude", "claude-code", "discord-bot", "mcp", "multi-agent", "rust", "self-hosted", "telegram-bot"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T06:35:04Z"
lastCommitAt: "2026-06-30T06:50:03Z"
lastReleaseAt: "2026-03-18T02:18:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["jbzion", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fb741d316afc2c50c500afd5c9b61cd04f7e0ea159bfba98837cf7300d7fd1a/CatiesGames/catclaw"
---

</p>

</p>

---

**English** | [繁體中文](README.zh-TW.md)

CatClaw is a Rust daemon that turns your **Claude Code subscription** into a personal AI assistant accessible from Discord, Telegram, Slack, and a beautiful terminal UI. Inspired by OpenClaw, built from scratch in Rust for performance, reliability, and full Anthropic compliance.

## Why CatClaw?

- **Use your Claude Code subscription** &mdash; no API keys, no surprise bills. CatClaw spawns `claude -p` subprocesses that use your existing Claude Code plan.
- **Multi-agent** &mdash; define multiple AI personas (main assistant, research expert, code reviewer), each with their own personality, memory, and tool permissions.
- **Multi-channel** &mdash; talk to your agents from Discord, Telegram, Slack, or the built-in TUI. All channels share the same session and memory system.
- **Tool approval system** &mdash; require user confirmation before agents execute sensitive tools (Bash, Edit, etc.) with inline approval UI in TUI and Discord/Telegram/Slack buttons.
- **Stateless gateway** &mdash; all state persisted to SQLite. Kill the daemon anytime, restart, and everything picks up where it left off.
- **Beautiful TUI** &mdash;…
