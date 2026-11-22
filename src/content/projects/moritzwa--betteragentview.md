---
repo: "moritzWa/BetterAgentView"
name: "BetterAgentView"
description: "All your coding agents. One terminal. Claude Code, Codex, OpenCode, Cursor, Pi and 13 more."
readmeQualityOk: true
url: "https://github.com/moritzWa/BetterAgentView"
homepage: "https://betteragentview.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agents", "claude-code", "codex", "coding-agents", "opencode", "rust", "terminal", "tui"]
stars: 10
forks: 2
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-01T22:05:25Z"
lastCommitAt: "2026-11-22T02:08:55Z"
lastReleaseAt: "2026-11-22T01:14:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 49
maintainers: ["moritzWa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e36d0b9ead287ef13a04dc511eb2e4a0ccfc2f648de69d106f4a9fba9ac9d57/moritzWa/BetterAgentView"
---

**All your coding agents. One terminal.**<br>
See which one needs you. Jump in, jump back out. Works with 18 coding
harnesses and plain shell jobs.

## Install

```console
curl -fsSL https://raw.githubusercontent.com/moritzWa/betteragentview/main/install.sh | bash
```

```powershell
irm https://raw.githubusercontent.com/moritzWa/betteragentview/main/install.ps1 | iex
```

```console
cargo install --locked --git https://github.com/moritzWa/betteragentview
```

Run `betteragentview`, or the shorter `av` command the installer adds. The old
`agentview` command, configuration paths and environment variables still work.
Type a task,
press `Tab` to pick a harness and `Shift+Tab` to pick a model. `Shift+Tab` also
works from the session list before you type.
`Ctrl+B` keeps the model and switches who serves it, for example OpenCode's
`anthropic/claude-opus-5-5` and `cursor/claude-opus-5-5`; the model you pick is
remembered across restarts.
