---
repo: "hypernewbie/phi"
name: "phi"
description: "Φ phi — a terminal multiplexer and browser-based control center for AI coding assistants (OpenCode, Claude Code, Antigravity, Pi Coder)."
readmeQualityOk: true
url: "https://github.com/hypernewbie/phi"
language: "JavaScript"
languages: ["JavaScript", "Go", "TypeScript"]
languagePcts: [36, 29, 26]
topics: ["ai", "antigravity", "claude-code", "coding-assistant", "developer-tools", "golang", "multiplexer", "opencode", "pty", "terminal"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-31T09:37:34Z"
lastCommitAt: "2026-10-26T03:03:28Z"
lastReleaseAt: "2026-07-11T03:36:28Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 48
maintainers: ["hypernewbie", "n0madsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/afb9b0cf3188c66b51749856825e45f97fca90b2a676a72fa1684a1f61315fdd/hypernewbie/phi"
---

# Φ phi

**A terminal multiplexer and browser-based control center for AI coding assistants.**

Phi gives you a single web UI to run, monitor, and switch between multiple AI coding agents — [OpenCode](https://opencode.ai), [Claude Code](https://claude.com/claude-code), [Antigravity](https://antigravity.google) (Agy), and [Pi Coder](https://github.com/badlogic/pi-mono) — each running in a real PTY, alongside a live git diff of your work. Think of it as mission control for AI coders.

## Features

- **One UI, many agents** — spawn and tab between OpenCode, Claude Code, Antigravity, Pi Coder, and plain shell sessions, all in the browser.
- **Real terminals** — each session is a genuine PTY rendered with [xterm.js](https://xtermjs.org) (WebGL with canvas fallback), so the agent TUIs render exactly as they would in your terminal.
- **Session resume** — Phi reads each tool's on-disk history (OpenCode's SQLite DB, Claude Code's project JSONL, Antigravity's conversation files, Pi's session files) and lets you reattach to a past conversation with one click.
- **Detach & survive** — closing a browser tab detaches the PTY but keeps the process alive for a 30-minute grace period. Reopen the…
