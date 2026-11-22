---
repo: "maxipavlovic/agent-eye"
name: "agent-eye"
description: "Find, sort and resume your coding-agent sessions: local index, terminal picker and board"
readmeQualityOk: true
url: "https://github.com/maxipavlovic/agent-eye"
homepage: "https://maxipavlovic.github.io/agent-eye/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["claude-code", "cli", "codex", "coding-agents", "rust"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-11-10T09:21:21Z"
lastCommitAt: "2026-11-22T11:51:07Z"
lastReleaseAt: "2026-11-12T19:52:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 60
maintainers: ["maxipavlovic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1452446469/070ccbcd-e1ca-4eb0-8e62-8ceaeb762532"
---

A local index, a terminal picker and an optional pixel-art board. macOS and Linux.

## Why

Coding agents forget, and they leave things behind. Claude Code deletes transcripts after 30 days, you lose track of which session did what, nothing tells you which one is waiting on you, and finished work leaves servers running and commits on no remote. agent-eye keeps an index of every session on your machine, puts you back in one with one key, and shows what is left to finish.

## Features

## Install

```sh
brew install maxipavlovic/tap/agent-eye   # or: cargo install agent-eye
agent-eye install                         # --dry-run shows what it changes
```

No Homebrew or Rust? Take the installer script from the [latest release](https://github.com/maxipavlovic/agent-eye/releases/latest). `agent-eye install` sets up the hooks, the background service and the `eye` command. Upgrade the way you installed (`brew upgrade agent-eye`, `cargo install agent-eye`, or the script again); the background service moves to the new version by itself. Run `agent-eye install` once after an upgrade to bring the `/eye` skills up to date.
