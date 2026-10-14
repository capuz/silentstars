---
repo: "epilande/ccmux"
name: "ccmux"
description: "🔮 Run all your AI coding agents in tmux: jump to the one that needs you, spawn them into worktrees, and hand work between them"
readmeQualityOk: true
url: "https://github.com/epilande/ccmux"
homepage: "https://ccmux.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "bun", "claude", "claude-code", "cli", "codex", "cursor", "developer-tools", "opencode", "session-manager"]
stars: 224
forks: 37
openIssues: 9
closedIssues: 76
watchers: 5
contributors: 16
recentReleases: 6
createdAt: "2026-07-06T11:19:25Z"
lastCommitAt: "2026-10-14T08:58:28Z"
lastReleaseAt: "2026-08-21T11:26:56Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 34
maintainers: ["epilande", "LiadOz", "ParthGanatra"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290950360/3c12252e-8bb0-4fd8-933d-3e03bdda68da"
fundingLinks: ["GITHUB:https://github.com/epilande", "BUY_ME_A_COFFEE:https://buymeacoffee.com/epilande"]
---

## ❓ Why?

When running multiple AI coding agent sessions across tmux panes, it's hard to keep track of which session is idle, which is waiting for permission, and which pane to switch to. `ccmux` solves this with a background daemon that monitors session activity and an interactive TUI that shows live session states at a glance.

It works with your existing tmux workflow. You don't change how you launch or run your agents; ccmux discovers what's already running in your panes, so as long as you're in tmux with a supported agent, it just works.

**Built-in support for:** Claude Code, Codex, Cursor, OpenCode, Pi, Antigravity, Copilot, Gemini CLI, plus [custom agent definitions](#-custom-agents) via config.

## ✨ Features

- 🎯 **Live Session States**: Every agent tracked as idle, working, or waiting (permission / plan approval / question), flagged the moment one needs you
- 🧩 **Multi-Agent**: Claude Code, Codex, Cursor, OpenCode, Pi, Antigravity, Copilot, Gemini CLI, plus custom agents via config
- 🔄 **Real-Time**: Background daemon streams state changes instantly over SSE, no polling, no refresh
- 👁️ **Live Preview**: Split-pane view of the selected session's pane content
- ⚡…
