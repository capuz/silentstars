---
repo: "kael-wanderer/BugText"
name: "BugText"
description: "A light weight MD reader with rich features"
readmeQualityOk: true
url: "https://github.com/kael-wanderer/BugText"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-21T05:36:07Z"
lastCommitAt: "2026-11-15T11:23:30Z"
lastReleaseAt: "2026-07-02T09:05:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["kael-wanderer"]
openGraphImageUrl: "https://opengraph.githubassets.com/39181c346e4a34d875ffaa93a7667d170de70cc8476727002b54685cad8fa830/kael-wanderer/BugText"
---

# BugText

A fast, lightweight markdown editor built with Tauri 2 + Rust and a plain-TypeScript
frontend. BugText is an IDE-style workspace for markdown: a file explorer, split
windows, a command palette, rich preview (mermaid, math, raw HTML), a built-in AI
panel, a PDF reader, and document export.

**License:** MIT · **Identifier:** `com.kael.bugtext`

> Clean-room, independent project. Written from scratch; not derived from any
> GPL-licensed editor.

## Features

- **Editor** — CodeMirror 6 with markdown highlighting, soft-wrap, line numbers, and
  per-document undo. Markdown tabs include a formatting toolbar; standalone HTML
  tabs use proper HTML syntax highlighting. Live preview has a 300 ms debounce.
- **Workspace shell** — activity bar, toggleable file explorer with full CRUD
  (create, rename, duplicate, delete-to-trash, reveal in Finder), and resizable panels.
- **Native multi-window** — create independent macOS windows from View or the Dock;
  each has its own tabs, Explorer workspace, AI panel, and optional Main/Sub split.
- **Main/Sub split** — each native window can show Main and Sub document panes with
  independent tabs and type-aware view modes.
- **Tabs** —…
