---
repo: "Maxsky5/openducktor"
name: "openducktor"
description: "Open-source Agentic Development Environment for orchestrating coding agents through task-based, multi-agent development workflows."
readmeQualityOk: true
url: "https://github.com/Maxsky5/openducktor"
homepage: "https://openducktor.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ade", "ai-agents", "claude-code", "codex", "opencode"]
stars: 41
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-14T16:52:04Z"
lastCommitAt: "2026-10-24T08:09:05Z"
lastReleaseAt: "2026-07-09T22:14:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Maxsky5", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d6b17a3f42c04ad556a1b442ed97f8e37950abd943f9f616241a128cf4b099c/Maxsky5/openducktor"
---

# OpenDucktor

OpenDucktor is an Agentic Development Environment built around tasks, repositories, and local agent runtimes.

It uses a workspace-scoped SQLite task store as the task source of truth, orchestrates Specification, Planner, Builder, and QA sessions, and keeps documents, approvals, and delivery state attached to each task instead of scattered across chat threads.

## Install OpenDucktor

### Desktop app

macOS arm64, macOS x64, or Linux x64:

```sh
curl -fsSL https://raw.githubusercontent.com/Maxsky5/openducktor/main/install.sh | sh
```

Windows x64 (PowerShell):

```powershell
irm https://raw.githubusercontent.com/Maxsky5/openducktor/main/install.ps1 | iex
```

Homebrew on macOS:

```sh
brew install --cask Maxsky5/openducktor/openducktor
```

### Web runner

The web runner opens OpenDucktor in your browser on macOS, Linux, or Windows. It needs Node.js 24.14 or later.

```sh
npx @openducktor/web
```

See the [installation guide](https://github.com/Maxsky5/openducktor/blob/HEAD/docs/installation.md) for requirements, more install options, and update steps.

## User Prerequisites

OpenDucktor runs on macOS, Windows, and Linux.

- `git`
- `opencode`, `codex`, or `claude`…
