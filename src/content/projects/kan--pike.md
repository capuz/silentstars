---
repo: "kan/pike"
name: "pike"
description: "Light weight Agent Development Environment"
originalDescription: "Light weight Agent Development Environment"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/kan/pike"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Vue"]
languagePcts: [43, 29, 24]
stars: 11
forks: 1
openIssues: 3
closedIssues: 288
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-23T14:58:18Z"
lastCommitAt: "2026-11-02T17:56:31Z"
lastReleaseAt: "2026-04-02T13:50:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["kan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/657cc61e82d199180e5e8b2e5fcac1a319db3b14decc5c8e3729a239a8a1c8fc/kan/pike"
---

# Pike

**A lightweight development environment specialized for "AI agents × terminal".** It aims to be a substitute for VS Code for developers who work mainly in the terminal.

Built with Tauri v2 (Rust + Vue / TypeScript). It primarily targets Windows. The macOS (Apple Silicon) build is also signed, notarized, and distributed, and auto-update works the same way. On macOS, you can develop using the host's login shell. Only Windows-specific features (WSL, jump lists, administrator terminal, window background transparency) are not supported.

## Main features

- **Multi-terminal**: xterm.js + PTY (WSL / cmd / PowerShell / PowerShell 7 / Git Bash; login shell on macOS), shell selection from the taskbar and tray menu
- **AI agents**: Designed for running Claude Code / Codex / Copilot CLI / opencode directly in the terminal. Launch buttons shown only for installed agents, resuming past sessions, inserting prompt templates, and notifications when an agent is waiting for input
- **Agent status**: Check account, usage rate, token usage, and cost for each agent in use. Follows multiple accounts (`CLAUDE_CONFIG_DIR`) and can receive the actual account from Claude Code hooks
- **AI…
