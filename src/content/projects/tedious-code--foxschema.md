---
repo: "tedious-code/foxSchema"
name: "foxSchema"
description: "FoxSchema — database schema diff & migration tool (monorepo: web, desktop, cli + core/shared)."
readmeQualityOk: true
url: "https://github.com/tedious-code/foxSchema"
homepage: "https://foxschema.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["claude", "claude-ai", "clickhouse", "database-comparison", "database-management", "db2", "mysql", "oracle", "postgres", "schema-sync"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-06-23T22:08:50Z"
lastCommitAt: "2026-10-25T22:11:54Z"
lastReleaseAt: "2026-10-02T15:03:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["huyplb", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1278528972/9e65d6d4-6381-4c67-b67d-15c589473930"
discussionCount: 1
---

# Fox Schema

## 0.3.X COMMING SOON, NEED TO DO MORE MANUALLY TEST *

**Compare schemas · generate migrations · run SQL — across 14 SQL dialects.**

Install once, then open the local web UI (`foxschema`) for **Compare**, the
**SQL Editor**, **Utils**, **Snapshots**, and optional **Workflow**. Self-host with Docker when you need a server.

[foxschema.com](https://foxschema.com) · [Install](https://github.com/tedious-code/foxSchema/blob/HEAD/docs/install.md) · [User guide](https://github.com/tedious-code/foxSchema/blob/HEAD/docs/user-guide.md) · [Workflow](https://github.com/tedious-code/foxSchema/blob/HEAD/docs/workflow.md) · [Docs](https://github.com/tedious-code/foxSchema/blob/HEAD/docs/README.md) · [Contributing](https://github.com/tedious-code/foxSchema/blob/HEAD/CONTRIBUTING.md)

## Install

Requires **Node.js ≥ 22.5** (npm / Homebrew). Docker needs no Node.

```bash
# npm — macOS, Windows, Linux (arm64 + x64)
npm install -g foxschema

# Homebrew — macOS (formula in this repo; Homebrew 6+ needs trust once)
brew tap tedious-code/foxschema https://github.com/tedious-code/foxschema
brew trust tedious-code/foxschema
brew install foxschema

# Docker — servers (linux/amd64, includes…
