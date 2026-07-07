---
repo: "pocketctl/pocketctl"
name: "pocketctl"
description: "Your AI coding agents, in your pocket — monitor and manage Claude Code, Codex, and OpenCode from your phone or browser."
readmeQualityOk: true
url: "https://github.com/pocketctl/pocketctl"
language: "Go"
languages: ["Go", "TypeScript", "Vue"]
languagePcts: [43, 28, 27]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-10T15:32:13Z"
lastCommitAt: "2026-07-07T06:38:59Z"
lastReleaseAt: "2026-06-17T04:55:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["muwb", "hell0w0rld-litx"]
openGraphImageUrl: "https://opengraph.githubassets.com/573ab414605c234be5998dde20870a8f0be6478c3ca70c964e04a9a40f425412/pocketctl/pocketctl"
discussionCount: 1
---

# pocketctl

**Your AI coding agents, in your pocket.**

Monitor and manage Claude Code, Codex, and OpenCode sessions from your phone or browser.

## Features

- 🤖 **Multi-agent** — Claude Code, Codex, and OpenCode, behind one unified "zero-config discovery + live sync + cross-device continue" model. Run an agent in your terminal; the daemon discovers it and syncs it to your client where you can keep chatting. (OpenCode is a client/server agent — the daemon hosts a shared `opencode serve` and drives it over its HTTP API. To add a new agent, register a `Provider` — see [docs/adding-an-agent.md](https://github.com/pocketctl/pocketctl/blob/HEAD/docs/adding-an-agent.md).)
- 🖥️ **Real-time Monitoring** — Watch your AI coding sessions live from anywhere
- 📱 **iOS App** — Native SwiftUI app: hosts dashboard, session list/detail (backward-paginated history), new-session sheet (model & permission picker, locale-aware auto titles), agent management with one-tap upgrade, token usage analytics, scan-to-authorize web login
- 🖧 **Hosts Dashboard** — System resource monitoring (CPU / Memory / Disk) with remote daemon restart
- 📌 **Session Management** — Pin, rename, export, and delete…
