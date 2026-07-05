---
repo: "fulsomenko/kanban"
name: "kanban"
description: "Terminal based project management solution"
readmeQualityOk: true
url: "https://github.com/fulsomenko/kanban"
homepage: "https://kanban.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["kanban", "productivity", "project", "project-management", "projects", "ratatui", "rust", "task-management", "task-manager", "terminal"]
stars: 137
forks: 9
openIssues: 3
closedIssues: 3
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2025-10-10T02:33:46Z"
lastCommitAt: "2026-07-05T20:54:52Z"
lastReleaseAt: "2025-11-17T23:57:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 34
maintainers: ["fulsomenko", "github-actions[bot]", "amanda-amy-frost"]
openGraphImageUrl: "https://opengraph.githubassets.com/58684fdf57b6af518ebfb520f4abecf4f3a95b33678b87f23a44a8d678c7aa45/fulsomenko/kanban"
---

# Kanban

**Keyboard-first kanban for the terminal.**

*Inspired by [lazygit](https://github.com/jesseduffield/lazygit) · Built on [ratatui](https://ratatui.rs)*

---

## Why Kanban?

- **Zero latency** — pure keyboard flow — hjkl, never reach for the mouse
- **Your data is a file on your disk** — private, offline, always yours
- **Git-native** — generate branch names and `git checkout` commands from any card
- **LLM-native** — full MCP server (44 tools) works with Claude Code, Cursor, and any MCP client
- **Offline-first** — works anywhere; JSON and SQLite backends, atomic writes, live conflict detection

---

## Quick Start

### TUI

```bash
kanban                  # launch in-memory; pick or skip a file from the startup dialog
kanban boards.json      # open or create a JSON board file
kanban boards.sqlite    # open or create a SQLite board file
```

Press `?` at any time to see context-sensitive help.

### CLI

```bash
export KANBAN_FILE=boards.json   # or pass the path as the first argument

kanban board create --name "My Project"
kanban board list
kanban card create --board "My Project" --column TODO --title "Fix the bug" --priority high
kanban card list --board "My Project"…
