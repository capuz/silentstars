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
openIssues: 69
closedIssues: 277
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-14T20:32:45Z"
lastCommitAt: "2026-11-21T13:27:41Z"
lastReleaseAt: "2026-09-07T06:05:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 72
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/741b85fc0941ec7b73051a1a0bd883041e66eccce6a3fdf09ccdb20e80cf591e/clemens33/ae"
---

# ae — agentic engineering

**A fleet of AI coding agents in tmux. They message each other by name, flag when they need you, and survive reboots.**

**ae** is a thin coordination layer over [tmux](https://github.com/tmux/tmux) for multi-agent work. Run Claude Code, Codex, OpenCode and other agent CLIs side by side, and ae makes them a fleet instead of a pile of tabs: each agent knows who it is and who else is in the workspace, agents reach each other by name, and the session shows you who is waiting for a human.

Works with Claude Code, Codex, OpenCode and other agent CLIs ([supported list](#requirements)). Any CLI agent runs; resume is best-effort for the ones ae has not modelled.
