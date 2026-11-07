---
repo: "mitos-editor/mitos"
name: "mitos"
description: "Mitos is a fast and minimal modal text editor."
readmeQualityOk: true
url: "https://github.com/mitos-editor/mitos"
homepage: "https://mitos.computer"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["editor"]
stars: 402
forks: 20
openIssues: 11
closedIssues: 45
watchers: 5
contributors: 75
recentReleases: 4
createdAt: "2026-08-26T21:23:31Z"
lastCommitAt: "2026-11-07T13:56:10Z"
lastReleaseAt: "2026-10-30T20:53:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 29
maintainers: ["matoous", "dependabot[bot]", "clumsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea823c0d614bb176b27438e38da1f1b55f560cbc43ec50f348af23879d9dbdfc/mitos-editor/mitos"
discussionCount: 20
---

# Mitos

Mitos is a modern, batteries-included, modal text editor written in Rust. It is a fork of [Helix](https://github.com/helix-editor/helix) and continues its selection-first editing model with multi-select, built-in language server support, and tree-sitter-powered syntax awareness.

## Why Fork Helix?

Helix built a strong foundation. Mitos is a chance to build on it at a faster pace, experiment with new features and different approaches to the architecture, and see where it can take us. For now, expect less stability and occasional breaking changes. Nevertheless, the end goal is similar - fast, robust, and extensible editor for all your needs.

## Features

- Selection-first modal editing
- Multiple selections
- Built-in language server and debug adapter support
- Incremental syntax highlighting and code editing via tree-sitter
- A terminal UI built with Ratatui

## Installation

On Linux and macOS:

```sh
curl -fsSL https://mitos.computer/install.sh | sh
```

On Windows, run in PowerShell:

```powershell
& ([scriptblock]::Create((Invoke-RestMethod https://mitos.computer/install.ps1)))
```

The installers select your platform, verify the download, and install the executable…
