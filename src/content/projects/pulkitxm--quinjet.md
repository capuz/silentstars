---
repo: "pulkitxm/quinjet"
name: "quinjet"
description: "Fast, live, keyboard-first Git source control for the terminal: syntax-highlighted diffs, commit history, staging, branches, and real-time refresh in Rust"
readmeQualityOk: true
url: "https://github.com/pulkitxm/quinjet"
homepage: "https://quinjet.pulkit.page"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["developer-tools", "git", "ratatui", "rust", "source-control", "terminal", "tui"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-13T08:11:25Z"
lastCommitAt: "2026-11-17T12:18:55Z"
lastReleaseAt: "2026-08-16T17:50:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 52
maintainers: ["pulkitxm", "pukbot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/818898b312fa3b75279166cadef682bc0045e32051c0602920ef7b039f3cca6f/pulkitxm/quinjet"
discussionCount: 0
---

# Quinjet

A fast, live, keyboard-first Git source-control interface for the terminal, written in Rust!

Quinjet discovers the containing Git repository from any nested directory, watches it for changes, and combines a VS Code-inspired changes list with syntax-highlighted diffs and commit history. Navigation and rendering remain independent from Git subprocess latency.

## Features

- One command layer behind user-visible Git and GitHub operations in both faces, excluding terminal-only presentation state
- Non-interactive `--json` output and a `--watch` flag that streams one document per read
- Live working-tree, index, conflict, branch, and ahead/behind refresh
- Scrollable staged, unstaged, untracked, renamed, deleted, and conflict groups
- Visible, clickable per-file and per-group stage/unstage actions with immediate authoritative refresh
- Per-file and multi-file revert and removal, from a row, a checkbox selection, or the changes dropdown, always behind a confirmation
- Syntax highlighting for TypeScript/TSX, Rust, Python, Go, JavaScript, and hundreds of other formats
- Themed Font Awesome Brands and Devicons file logos for common languages, ecosystems, documents, media, and…
