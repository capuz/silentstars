---
repo: "colonyops/hive"
name: "hive"
description: "CLI/TUI for managing multiple AI agent sessions in isolated git environments with real-time status monitoring, task tracking, and inter-agent messaging."
readmeQualityOk: true
url: "https://github.com/colonyops/hive"
homepage: "https://colonyops.github.io/hive/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 25]
topics: ["ai", "ai-agents", "bubbletea", "developer-tools", "go", "tmux", "tui"]
stars: 39
forks: 6
openIssues: 47
closedIssues: 163
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-04T02:45:45Z"
lastCommitAt: "2026-10-26T03:02:37Z"
lastReleaseAt: "2026-01-28T20:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 53
maintainers: ["hay-kot", "renovate[bot]", "rdubrock"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d052c8dea670433901bf585b88e75f69d55db47b46b284081dc6980458c92e8/colonyops/hive"
---

# hive

**The command center for your AI colony**

Manage multiple AI agent sessions in isolated git environments with real-time status monitoring.

[Documentation](https://hivedesktop.com/cli/) | [Getting Started](https://hivedesktop.com/cli/getting-started/) | [Configuration](https://hivedesktop.com/cli/configuration/) | [Contributing](#contributing)

---

This repository holds two programs on one session engine:

- **hive**, the CLI/TUI documented below (`cmd/hive`).
- **Hive Desktop**, a desktop app with an inbox that collects pull requests, issues, and alerts into feeds, a Code area for the same sessions, and agent chat workspaces (`cmd/desktop`). Download it and read its docs at [hivedesktop.com](https://hivedesktop.com/desktop/getting-started/).

## Installation

```bash
brew install tmux
brew install colonyops/tap/hive
```

Or install directly with Go:

```bash
go install github.com/colonyops/hive@latest
```

Pre-built binaries are also available on the [GitHub Releases](https://github.com/colonyops/hive/releases) page.

## Overview

Hive manages isolated git sessions for running AI agents in parallel. Instead of manually managing git worktrees or directories, hive handles…
