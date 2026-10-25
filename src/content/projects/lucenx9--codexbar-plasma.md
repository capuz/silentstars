---
repo: "Lucenx9/codexbar-plasma"
name: "codexbar-plasma"
description: "KDE Plasma widget for CodexBar"
readmeQualityOk: true
url: "https://github.com/Lucenx9/codexbar-plasma"
homepage: "https://store.kde.org/p/2370789/"
language: "QML"
languages: ["QML", "Python"]
languagePcts: [66, 30]
topics: ["ai-usage", "codexbar", "kde", "plasma", "plasmoid"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-25T23:37:01Z"
lastCommitAt: "2026-10-25T08:40:42Z"
lastReleaseAt: "2026-07-01T13:05:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 53
maintainers: ["Lucenx9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a19ed75a9bdcc57454edbb511ea89ada5c7e57bc65c0013ff91061dd8ff287/Lucenx9/codexbar-plasma"
fundingLinks: ["KO_FI:https://ko-fi.com/lucenx9"]
discussionCount: 1
---

# CodexBar Plasma

Track Codex, Claude, Gemini, and 90+ more AI providers from your KDE Plasma 6
panel. Quotas, reset windows, costs, local agent sessions, notifications, and
multiple accounts per provider.

[Install](#install) · [Features](#features) · [Troubleshooting](#troubleshooting) · [Development](#development)

The current popup in Breeze Dark with synthetic data. The widget follows your Plasma
theme; provider accent colors stay consistent across themes.

## Install

### Quick install from a terminal

From a terminal in your Plasma 6 desktop session, run this as your regular user,
without `sudo`. Bash must be installed; your terminal can use another shell.

```sh
curl -fsSL -m 30 --max-filesize 65536 https://raw.githubusercontent.com/Lucenx9/codexbar-plasma/main/setup.sh | bash
```

This runs a small bootstrap from this repository's `main` branch. It downloads
the complete installer before running it and keeps prompts in your terminal.
It installs the latest stable **release package** for your user, with no Git
checkout or build. It reports missing command-line dependencies before
downloading the package. The [runtime requirements](#requirements) still apply.

1. If…
