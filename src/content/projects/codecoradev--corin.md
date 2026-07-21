---
repo: "codecoradev/corin"
name: "corin"
description: "Codecora Corin — Desktop knowledge workstation. Tauri 2 + Svelte 5 + Rust + Uteke."
readmeQualityOk: true
url: "https://github.com/codecoradev/corin"
homepage: "https://codecora.dev"
language: "Svelte"
languages: ["Svelte", "Rust"]
languagePcts: [45, 44]
topics: ["desktop-app", "knowledge-management", "rust", "svelte", "tauri", "codecora", "uteke", "ai", "catppuccin", "d3"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 50
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-21T10:38:57Z"
lastCommitAt: "2026-07-21T06:11:54Z"
lastReleaseAt: "2026-07-20T09:50:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["ajianaz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/35d64696486a0137225e4e2acf7167fcc09dda3b8a63f03b705548b0daccca84/codecoradev/corin"
discussionCount: 0
---

# Corin

> Corin — Codecora Desktop Knowledge Workstation.

Local-first desktop app for managing memories, knowledge graphs, rooms, and documents. Connects to [Uteke](https://github.com/codecoradev/uteke) via HTTP for semantic search, auto-linking, and graph visualization.

## Stack

| Layer | Tech |
|-------|------|
| **Desktop shell** | [Tauri 2](https://tauri.app/) |
| **Frontend** | [Svelte 5](https://svelte.dev/) + Tailwind CSS |
| **Backend** | Rust |
| **Memory engine** | [Uteke](https://github.com/codecoradev/uteke) (HTTP API via `uteke-serve`) |
| **Local storage** | SQLite (app settings, connection configs only) |
| **Graph** | Canvas force-directed |
| **Search** | Semantic (via Uteke) + FTS5 |
| **Editor** | [CodeMirror 6](https://codemirror.net/) (documents) |

## Features

### Core (v0.1.0)

- [x] Memory CRUD (create, read, update, delete)
- [x] Namespace isolation
- [x] Semantic search (via Uteke)
- [x] Knowledge graph visualization (force-directed canvas)
- [x] Room system (multi-memory shared workspace)
- [x] Dark theme (Catppuccin Mocha)

### Knowledge Engine (v0.2.0)

- [x] Document engine — wiki-style viewer with tree nav, CodeMirror 6 editor, search, CRUD
-…
