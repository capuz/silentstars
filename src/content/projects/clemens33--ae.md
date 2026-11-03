---
repo: "clemens33/ae"
name: "ae"
description: "Run Claude Code, Codex, OpenCode and other AI coding agents side by side in tmux as one fleet: they message each other by name, flag when they need you, and resume after a reboot."
readmeQualityOk: true
url: "https://github.com/clemens33/ae"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agentic-engineering", "ai-agents", "ai-coding", "claude-code", "cli", "codex", "multi-agent", "opencode", "terminal", "tmux"]
stars: 5
forks: 0
openIssues: 89
closedIssues: 211
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-14T20:32:45Z"
lastCommitAt: "2026-11-03T09:33:05Z"
lastReleaseAt: "2026-09-07T06:05:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ab9d4eee7e234387860461022af997d078863e2723cb1c594acae77ea0453a64/clemens33/ae"
---

# ae — agentic engineering

**A fleet of AI coding agents in tmux. They message each other by name, flag when they need you, and survive reboots.**

**ae** is a thin coordination layer over [tmux](https://github.com/tmux/tmux) for multi-agent work. Run Claude Code, Codex, OpenCode and other agent CLIs side by side, and ae makes them a fleet instead of a pile of tabs: each agent knows who it is and who else is in the workspace, agents reach each other by name, and the session shows you who is waiting for a human.

Works with Claude Code, Codex, OpenCode and other agent CLIs ([supported list](#requirements)). Any CLI agent runs; resume is best-effort for the ones ae has not modelled.

## Why ae

- **A team, not a pile of tabs.** Every agent is told its name and the workspace roster. Agents `send` messages, `ask` tracked questions (request id plus an exact reply command) and `review` each other's work, across sessions too.
- **You see who needs you.** Agents declare `working`, `waiting-user`, `waiting-agent`, `blocked` or `done`. The tmux status bar, `ae list --needs-attn`, `ae next` and the `ae app` terminal UI show who is waiting for a human; Telegram reaches you away from the…
