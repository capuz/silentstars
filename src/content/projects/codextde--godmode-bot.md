---
repo: "codextde/godmode-bot"
name: "godmode-bot"
description: "The AI coworker for everyone who works at a computer. Turns your Claude subscription into a team of agents that do the work end to end in your own browser and apps: emails, invoices, spreadsheets, shop orders. Vault for passwords, 2FA and passkeys. macOS, Windows, Linux. MIT."
readmeQualityOk: true
url: "https://github.com/codextde/godmode-bot"
homepage: "https://usegodmode.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai-agents", "ai-assistant", "automation", "browser-use", "claude-code", "desktop-app", "mcp", "open-source", "password-manager", "tauri"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-27T16:12:20Z"
lastCommitAt: "2026-10-31T19:00:59Z"
lastReleaseAt: "2026-10-19T05:01:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["danielehrhardt", "niclas-j"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ed48e27c79395b55ed14dd3ea8aadeff7abf440cc60f3672b17d820dd4a0459/codextde/godmode-bot"
---

# Godmode Bot

A desktop app that runs the official Claude Code CLI as a team of persistent agents, with a browser and a local vault
that types passwords and 2FA codes for them.

macOS, Windows, Linux, or headless with a web dashboard ·
[Features](https://github.com/codextde/godmode-bot/blob/HEAD/docs/FEATURES.md) ·
[Security](https://github.com/codextde/godmode-bot/blob/HEAD/SECURITY.md) ·
[Architecture](https://github.com/codextde/godmode-bot/blob/HEAD/docs/ARCHITECTURE.md) ·
[usegodmode.com](https://usegodmode.com)

looks up three pricing pages in its own Chrome window and answers with a table.

## How it works

- Every agent turn is one `claude -p` call of the official, unmodified Claude Code CLI, in the agent's own folder,
  signed in with your Claude account or an Anthropic API key. Godmode adds its tools over MCP and streams the output
  into the app.
- Each agent is a git repo: `CLAUDE.md` (instructions), `MEMORY.md`, transcripts and run logs. Every run is committed,
  so you can read, diff and undo what an agent learned. At night agents rewrite their own memory under a size limit.
- Agents browse in a Chromium that [browser-use](https://github.com/browser-use/browser-use)…
