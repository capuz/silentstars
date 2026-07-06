---
repo: "jongio/dispatch"
name: "dispatch"
description: "A terminal UI for browsing and launching GitHub Copilot CLI sessions. Search,   filter, group, preview, and resume — without leaving the terminal."
readmeQualityOk: true
url: "https://github.com/jongio/dispatch"
homepage: "https://jongio.github.io/dispatch"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["copilot", "github", "dprun", "dx-idea"]
stars: 19
forks: 4
openIssues: 34
closedIssues: 119
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-03-10T04:19:28Z"
lastCommitAt: "2026-07-06T07:03:29Z"
lastReleaseAt: "2026-04-08T22:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 54
maintainers: ["jongio"]
openGraphImageUrl: "https://opengraph.githubassets.com/227b8e9bbeedb014513a7d5325089e47e4bb49a367a2dd5457e90961af4a0ee5/jongio/dispatch"
---

# Dispatch

A terminal UI for browsing and launching GitHub Copilot CLI sessions.

Dispatch reads your local Copilot CLI session store and presents every past session in a searchable, sortable, groupable TUI. Full-text search, conversation previews, directory filtering, five built-in themes, and four launch modes — all without leaving the terminal.

## Features

- **Full-text search** (`/`) — FTS5 full-text search with BM25 ranking when available, falling back to LIKE for older CLI versions. Two-tier: quick search (summaries, branches, repos, directories) returns results instantly; deep search (turns, checkpoints, files, refs) kicks in after 300ms. Searching a number (e.g. "42", "#42", "PR42") also matches session refs (PRs, issues, commits)
- **Directory filtering** (`f`) — hierarchical tree panel for toggling directory exclusion, persisted to config
- **Word filtering** (Settings panel) — comma-separated list of words to exclude sessions by content. Sessions whose name or conversation turns contain any excluded word (case-insensitive) are hidden from the list
- **Sorting** (`s` / `S`) — 5 fields (updated, folder, name, created, turns) with toggleable direction
- **Grouping…
