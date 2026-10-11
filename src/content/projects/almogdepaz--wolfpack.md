---
repo: "almogdepaz/wolfpack"
name: "wolfpack"
description: "Self-hosted browser terminal manager for AI coding agents. Control Claude Code, Codex, Gemini, and shell sessions from your phone or browser over Tailscale."
readmeQualityOk: true
url: "https://github.com/almogdepaz/wolfpack"
homepage: "https://almogdepaz.github.io/wolfpack/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["claude", "codex", "developer-tools", "pwa", "self-hosted", "tailscale", "terminal", "tmux", "ai-coding", "browser-terminal"]
stars: 47
forks: 8
openIssues: 11
closedIssues: 81
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-30T14:18:25Z"
lastCommitAt: "2026-10-11T10:15:42Z"
lastReleaseAt: "2026-02-27T23:17:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["almogdepaz", "almogbot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fdb7429a4e132481c090def527104a1a7b423ec8368d4432910b05590ddfa7a/almogdepaz/wolfpack"
discussionCount: 1
---

# Wolfpack — browser terminal manager for AI coding agents

**Run coding agents remotely—from your desktop or phone.** Keep their persistent terminals on your own machines, then monitor and control them even when you are away from your desk.

Wolfpack is a self-hosted control room built for remote and mobile use. Connect directly over your private Tailscale network without a Wolfpack-hosted relay or account. From the phone PWA, you can see which agents need attention, open a live terminal, and respond without returning to the host machine.

Built-in coding-agent provider choices: Claude Code, Codex, Gemini CLI, Cursor, Pi. Shell is the always-available fallback, and custom commands or wrappers on `PATH` are supported separately.

Sessions live in a Rust PTY broker, not the web server, so closing the browser or restarting only the web server does not end them; a broker restart or login-service reinstallation can terminate them.

**Homepage:** [almogdepaz.github.io/wolfpack](https://almogdepaz.github.io/wolfpack/) · **Agent-readable overview:** [llms.txt](https://almogdepaz.github.io/wolfpack/llms.txt)

### desktop demo

### mobile views

Monitor your sessions, spot agents waiting…
