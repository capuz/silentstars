---
repo: "lazynop/lazyenv"
name: "lazyenv"
description: "TUI for managing .env files"
readmeQualityOk: true
url: "https://github.com/lazynop/lazyenv"
homepage: "https://lazynop.dev/lazyenv/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["bubble-tea", "cli", "developer-tools", "dotenv", "env", "environment-variables", "go", "golang", "terminal", "tui"]
stars: 65
forks: 1
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T15:45:35Z"
lastCommitAt: "2026-10-11T10:14:10Z"
lastReleaseAt: "2026-04-11T11:44:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 38
maintainers: ["lazynop", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/49d4ff2f4c6d41f01c6509604ab7a1eb71db46180f3b544231453b5f912cb495/lazynop/lazyenv"
---

# lazyenv

TUI for managing `.env` files — written in Go with [Bubble Tea](https://github.com/charmbracelet/bubbletea).

Browse, compare, edit and validate environment variables from your terminal.

**[Documentation](https://lazynop.github.io/lazyenv/)** | **[Releases](https://github.com/lazynop/lazyenv/releases)**

## Features

- Two-panel layout with file list and variables, inline editing
- File management: create, duplicate, rename, delete, and generate templates — all without leaving the TUI
- Side-by-side diff between two files with bidirectional copy
- Completeness matrix showing which variables exist across files
- Change tracking: new, modified, deleted, duplicate, empty, placeholder
- Secret masking, gitignore check, automatic backup — all [configurable](https://lazynop.github.io/lazyenv/configuration/)
- Clipboard support (OSC 52), search, sort, prefix-based grouping, and on-disk reorder
- Round-trip fidelity: saves preserve comments, blank lines, quoting
- TOML configuration: layout, colors, file patterns, behaviors
- Mouse support: click to select, scroll wheel to navigate (disable with `--no-mouse`)
- 56 built-in color themes with interactive preview (`--themes`)

##…
