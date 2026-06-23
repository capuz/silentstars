---
repo: "dosu-ai/dosu-cli"
name: "dosu-cli"
description: "🔁 The Dosu CLI Utility"
url: "https://github.com/dosu-ai/dosu-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 12
recentReleases: 1
createdAt: "2025-12-01T22:08:41Z"
lastCommitAt: "2026-06-23T23:18:30Z"
lastReleaseAt: "2026-03-30T08:25:10Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 66
maintainers: ["semantic-release-bot", "dohooo", "devstein"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cb45324b01c6c33423580384f7b888cc8e71b3c2ff1ac40ac0cac9acebb408e/dosu-ai/dosu-cli"
---

# dosu-cli

> Connect [Dosu](https://dosu.dev) to your AI coding tools. `dosu` authenticates you, picks a Dosu deployment, and wires the Dosu MCP server into Claude Code, Cursor, Codex, and more — plus commands to drive the Dosu platform from your terminal.

## Quick Start

```bash
npx @dosu/cli setup
```

The interactive wizard authenticates you via browser OAuth, lets you pick a Dosu deployment (or OSS / public-library mode), mints an API key, detects which AI tools you have installed, and writes the Dosu MCP server entry into each one's config. Restart your AI tool and Dosu is available.

Run `dosu` with no arguments any time to open the interactive menu.

## Installation

### npx / npm (Recommended)

Requires Node.js 18+.

```bash
npx @dosu/cli setup
```

Or install globally:

```bash
npm install -g @dosu/cli
dosu setup
```

### curl / install (macOS / Linux)

Downloads and installs the latest stable release binary.

```bash
curl -fsSL https://raw.githubusercontent.com/dosu-ai/dosu-cli/main/install.sh | sh
```

To install a specific release tag:

```bash
DOSU_INSTALL_VERSION=v0.2.0-rc1 curl -fsSL https://raw.githubusercontent.com/dosu-ai/dosu-cli/main/install.sh | sh
```

###…
