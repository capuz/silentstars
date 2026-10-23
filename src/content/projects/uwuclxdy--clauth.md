---
repo: "uwuclxdy/clauth"
name: "clauth"
description: "Claude Code multi-account manager, usage monitor (CLI, TUI & cross-account delegation via MCP)"
readmeQualityOk: true
url: "https://github.com/uwuclxdy/clauth"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["claude-code", "vibecoded", "account-switcher", "cli", "oauth", "ratatui", "account-manager", "anthropic", "claude", "rate-limits"]
stars: 260
forks: 39
openIssues: 34
closedIssues: 45
watchers: 1
contributors: 18
recentReleases: 0
createdAt: "2026-04-28T12:20:42Z"
lastCommitAt: "2026-10-23T10:55:49Z"
lastReleaseAt: "2026-05-19T13:11:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 90
undervaluedScore: 24
maintainers: ["uwuclxdy", "stex", "gezerui888"]
openGraphImageUrl: "https://opengraph.githubassets.com/ece2e547ee47a5960e91fe5c23c3fd656bdc231f898180e9c030e5ef20d9b3fd/uwuclxdy/clauth"
---

**Juggle every Claude Code account from one terminal: switch in a keypress, track live 5h / 7d usage, auto-switch before a limit stops you, even hand a task to another account from inside Claude.**

Most account tools do one half. clauth pairs instant **switching between multiple Claude Code accounts** with a live **usage monitor**, then wires the two together so a fallback chain moves you off an exhausted account before Claude Code ever blocks. Works with Claude Pro, Max, Team, Enterprise OAuth accounts or any custom API endpoint. Linux, macOS, Windows.

> Font is kinda off on the recording, I promise it looks better than this.

## Features

- 🔄 **Switch** accounts in one keypress or `clauth <name>`: OAuth (Pro / Max / Team / Enterprise) or a custom API endpoint, plan tier detected for you
- 📊 **Monitor** live 5h / 7d rate-limit bars, a global token dashboard with API-equivalent cost, plus a live Claude status-incident feed
- 🤖 **Auto-switch** down a fallback chain the moment an account hits its limit, with weekly-window and spend-ceiling gates so a long run never stalls and never surprises you with a bill. Opted-in accounts queue their auto-start, opening 5h windows `5h /…
