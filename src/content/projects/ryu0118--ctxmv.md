---
repo: "Ryu0118/ctxmv"
name: "ctxmv"
description: "🏠 A CLI tool to migrate sessions between AI coding agents"
readmeQualityOk: true
url: "https://github.com/Ryu0118/ctxmv"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 40
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-14T18:01:04Z"
lastCommitAt: "2026-07-20T06:37:11Z"
lastReleaseAt: "2026-06-27T23:53:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 24
maintainers: ["Ryu0118", "github-actions[bot]", "jaydensmith"]
openGraphImageUrl: "https://opengraph.githubassets.com/26a7944b593139cc4171b5c00d09aedffc51291f5412723ac190b9d1f8f442a4/Ryu0118/ctxmv"
---

# ctxmv - A CLI tool to migrate conversation sessions between AI coding agents.

✨ **You no longer need to suffer through rate limits: when one coding agent hits its limit, migrate the session to another and keep going.**

| Claude Code | Codex | Cursor |
|:-:|:-:|:-:|
|  |  |  |

## Features

- 🔀 Migrate sessions between any pair of agents (resume-compatible)
- 📋 List sessions across all agents in a unified table
- 💬 Show conversation messages with role-colored output

### Supports

- Claude Code
- Codex
- Cursor (CLI agent via `cursor-agent`, not the GUI app)

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/Ryu0118/ctxmv/main/install.sh | bash
```

To update, run the same command. It skips the download if already up-to-date.

```bash
# Install a specific version
curl -fsSL https://raw.githubusercontent.com/Ryu0118/ctxmv/main/install.sh | VERSION=0.1.0 bash

# Force reinstall
curl -fsSL https://raw.githubusercontent.com/Ryu0118/ctxmv/main/install.sh | FORCE=1 bash
```

### Other methods

#### Nest ([mtj0928/nest](https://github.com/mtj0928/nest))

```bash
nest install Ryu0118/ctxmv
```

#### Mise ([jdx/mise](https://github.com/jdx/mise))

```bash
mise use -g…
