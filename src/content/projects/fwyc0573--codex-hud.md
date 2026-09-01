---
repo: "fwyc0573/codex-hud"
name: "codex-hud"
description: "Real-time statusline HUD for OpenAI Codex CLI - Monitor sessions, context usage, git status, and tool activity"
readmeQualityOk: true
url: "https://github.com/fwyc0573/codex-hud"
language: "JavaScript"
languages: ["JavaScript", "Shell", "TypeScript"]
languagePcts: [38, 28, 25]
stars: 80
forks: 17
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2026-01-16T02:44:34Z"
lastCommitAt: "2026-09-01T08:49:15Z"
lastReleaseAt: "2026-08-15T06:41:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 41
maintainers: ["fwyc0573", "WinningBean", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e17552465d3881685540c84c05dd4751e29b418f420c3dcbc9b525f89411905/fwyc0573/codex-hud"
---

</p>

# Codex HUD

Real-time statusline HUD for [OpenAI Codex CLI](https://github.com/openai/codex). Lightweight, zero-config, works inside tmux.

> Inspired by [claude-hud](https://github.com/jarrodwatts/claude-hud) for Claude Code.

## News

- **[2026-09-01]** Suppported Codex CLI version >=  0.410.0; Optimized the I/O competition of Codex SQLite and fixed the blocking issue during the start up phase. The `codex` and `cx` commands have been isolated, and users can now start native codex CLI through `codex`.
- **[2026-08-15]** Added automatic detection of OpenAI upstream "capacity exceeded" blocks, with automatic "continue" handling. See `cx-continue/README.md` for usage.
- **[2026-07-20]** Released the first stable version, v1.0, with full support for macOS and Linux.

## Why Codex HUD?

**Q: Codex CLI already works. Why do I need a HUD?**

Because you're flying blind without one. Codex HUD gives you a persistent dashboard at the bottom of your terminal:

- **tmux** — natively run Codex CLI in an optimized tmux with zero setup (scroll up and down to review the conversation history)
- **Auto-continue** — automatically detect OpenAI "capacity exceeded" blocks and resume the task…
