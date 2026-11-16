---
repo: "Longado/shifu"
name: "shifu"
description: "A macOS workspace for your coding agents. Live status, split terminals, and sessions that keep running."
originalDescription: "A macOS workspace for your coding agents. Live status, split terminals, and sessions that keep running."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Longado/shifu"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [41, 23]
topics: ["ai-agents", "coding-agents", "claude-code", "codex", "developer-tools", "llm-agents", "shell", "tauri", "terminal", "tmux"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-23T05:31:31Z"
lastCommitAt: "2026-11-16T04:22:33Z"
lastReleaseAt: "2026-11-14T04:36:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 39
maintainers: ["Longado"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d0d3c67ae3f83c68f4b32001aad4ec255d8291782e66bcf3f6dc18906c67f2/Longado/shifu"
---

Once you have many agents, you don't have to switch between terminals one by one: Shifu lines up the sessions that need your attention together.

**Each vendor's terminal is kept as-is** · **keeps running after the window is closed** · **tasks and layouts are saved locally**

## What it is

Shifu puts Claude Code, Codex, Kimi, CodeBuddy and Antigravity into a single macOS window. The left side organizes sessions by project and task, showing who is running, who is waiting for approval, and who is waiting for your reply; the right side is each agent's own terminal, where you can drag tabs and split them left/right or up/down.

Sessions are managed by a separate tmux server; the desktop app only handles display and operation. Closing or reopening the window does not end the agents; when you return, tasks and split layouts are restored. The command line can also be used on its own. See the [architecture notes](https://github.com/Longado/shifu/blob/HEAD/docs/ARCHITECTURE.md) for the design.

> **Early version.** Currently mainly used on Apple Silicon Macs. You can download the Apple Silicon pre-release package or build from source; the app is not yet notarized. By default Shifu…
