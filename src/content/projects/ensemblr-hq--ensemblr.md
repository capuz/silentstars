---
repo: "ensemblr-hq/ensemblr"
name: "ensemblr"
description: "Desktop orchestrator for Pi and Claude Code. Every stream of work gets its own git worktree, and an agent can drive the app itself — spawn sub-agents, delegate, integrate."
readmeQualityOk: true
url: "https://github.com/ensemblr-hq/ensemblr"
homepage: "https://www.ensemblr.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "claude-code", "coding-agents", "electron", "git-worktree", "macos", "mcp", "multi-agent", "orchestrator", "pi-agent"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-04T12:34:52Z"
lastCommitAt: "2026-10-03T09:21:51Z"
lastReleaseAt: "2026-08-20T16:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 56
maintainers: ["psoldunov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/df7a4e1504f72089ffaed01d65859f09c9fdb0cd489064bc649dc8b665aea0bd/ensemblr-hq/ensemblr"
---

</p>

# Ensemblr™

**A desktop orchestrator for multi-agent coding work, driving the Pi CLI or the Claude Code CLI — whichever
you already run.**

This is the Ensemblr monorepo. The app itself — what it does, how to install it, and its documentation — lives
in [`apps/desktop/`](https://github.com/ensemblr-hq/ensemblr/blob/HEAD/apps/desktop). Start with its [README](https://github.com/ensemblr-hq/ensemblr/blob/HEAD/apps/desktop/README.md).

## Install

- **macOS** (Apple silicon or Intel): `brew install --cask ensemblr-hq/tap/ensemblr`, or download the `.dmg`
  from the [latest release](https://github.com/ensemblr-hq/ensemblr/releases/latest).
- **Linux** (x86-64): `curl -fsSL https://www.ensemblr.dev/install.sh | sh`, or take the `.AppImage` from the
  [latest release](https://github.com/ensemblr-hq/ensemblr/releases/latest).
- **NixOS**: `nix run github:ensemblr-hq/ensemblr`.

The [install guide](https://github.com/ensemblr-hq/ensemblr/blob/HEAD/apps/desktop/docs/guide/01-install.md) covers requirements, channels, and building from
source.

## Repository layout

| Path | What lives there |
| --- | --- |
|…
