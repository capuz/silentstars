---
repo: "riii111/sabiql"
name: "sabiql"
description: "A fast PostgreSQL TUI written in Rust. driver-less, vim-first, with ER diagrams. No database drivers, no setup, just psql"
url: "https://github.com/riii111/sabiql"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["postgresql", "ratatui", "tui", "rust"]
stars: 203
forks: 9
openIssues: 4
closedIssues: 87
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-27T05:01:13Z"
lastCommitAt: "2026-06-28T03:10:47Z"
lastReleaseAt: "2026-02-23T15:42:41Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 28
maintainers: ["riii111", "dependabot[bot]", "Kirilla39"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec5f0302862807878139ab29cba2f2c578cd2a06b699f16065f9706e99715d8b/riii111/sabiql"
fundingLinks: ["GITHUB:https://github.com/riii111"]
discussionCount: 0
---

# sabiql

A fast, driver-less TUI to browse, query, and edit PostgreSQL databases — no drivers, no setup, just `psql`.

## Concept

> Vim-first · Safe by design · Oil-and-vinegar UI · Fast and lightweight

sabiql wraps your existing `psql` CLI. No Rust database drivers, no connection pools, no extra dependencies. Point it at your database and get a full-featured TUI. Your `psql` config, `.pgpass`, SSL setup all just work.

Inspired by [oil.nvim](https://github.com/stevearc/oil.nvim)'s "oil and vinegar" philosophy: UI elements appear only when needed, never occupying your screen permanently. Vim-native keybindings (`j/k`, `dd`, `/`) let you navigate and edit without leaving your muscle memory.

Destructive operations are guarded. Inline edits and row deletions always show a preview modal before touching your data. Read-only mode (`Ctrl+R`) goes further — block all writes at the PostgreSQL session level with a single keystroke.

Built in Rust for minimal memory footprint and near-zero idle CPU. A full-featured alternative to GUI tools like DBeaver or DataGrip, without ever leaving the terminal.

## Features

### Core

- **Read-Only Mode** (`Ctrl+R`) — Toggle safe-browse mode; writes…
