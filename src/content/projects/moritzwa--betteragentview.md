---
repo: "moritzWa/BetterAgentView"
name: "BetterAgentView"
description: "All your coding agents. One terminal. Claude Code, Codex, OpenCode, Cursor, Pi and 13 more."
readmeQualityOk: true
url: "https://github.com/moritzWa/BetterAgentView"
homepage: "https://betteragentview.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["agents", "claude-code", "codex", "coding-agents", "opencode", "rust", "terminal", "tui"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-01T22:05:25Z"
lastCommitAt: "2026-11-26T23:31:06Z"
lastReleaseAt: "2026-11-22T01:14:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["moritzWa"]
openGraphImageUrl: "https://opengraph.githubassets.com/71e83d6a3036e22388cc2593856f112c143c0d41b90b250b8c7b286ad4e4a9ef/moritzWa/BetterAgentView"
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

Run `bav`, the shorthand for `betteragentview`. The old `av` and `agentview`
commands, configuration paths and environment variables still work.
First launch guides you through choosing a harness and signing in, with OpenCode
recommended and your existing installations detected. Run `bav setup` to reopen it.
Type a task,
press `Tab` to pick a harness and `Shift+Tab` to pick a model. `Shift+Tab` also
works from the session list before you type.
`Ctrl+B` keeps the model and switches who serves it, for example OpenCode's
`anthropic/claude-opus-5-5` and `cursor/claude-opus-5-5`; the model you pick is
remembered across restarts.
