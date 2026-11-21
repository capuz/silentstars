---
repo: "RobinVivant/runout-bar"
name: "runout-bar"
description: "macOS menu bar app for Claude and Codex usage through TeamClaude: level bars, pace charts, banked resets, routing and one-click updates"
readmeQualityOk: true
url: "https://github.com/RobinVivant/runout-bar"
homepage: "https://github.com/RobinVivant/runout-bar/releases/latest"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["claude", "claude-code", "codex", "macos", "menu-bar", "menubar-app", "rate-limits", "swift", "swiftui", "teamclaude"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-17T17:17:03Z"
lastCommitAt: "2026-11-21T13:31:34Z"
lastReleaseAt: "2026-11-20T21:55:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 28
maintainers: ["RobinVivant"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1461731990/5ca42a04-3ecf-43aa-8552-63ab91d31b5b"
---

Runout Bar is a macOS menu bar app that shows Claude subscription usage from a local
[TeamClaude](https://github.com/KarpelesLab/teamclaude) proxy, Codex rate limits and Google AI
subscription quotas as colored level bars, with the time your whole Claude pool runs out, a pace
dashboard, routing controls, banked resets and one-click TeamClaude updates.

The screenshots show the made-up accounts of [demo mode](#try-it-without-an-account).

## Quickstart

You need macOS 15 or later on Apple silicon. On a Mac without
[TeamClaude](https://github.com/KarpelesLab/teamclaude), the app installs it on its first launch,
which needs Node.js 20 or later (`brew install node`); a TeamClaude you already have is used as it
is. The Codex and [Antigravity](https://antigravity.google) (`agy`) CLIs are optional.

```bash
curl -fsSL https://raw.githubusercontent.com/RobinVivant/runout-bar/main/scripts/get.sh | bash
```
