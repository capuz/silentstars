---
repo: "bapatchirag/revision"
name: "revision"
description: "Lazygit for SVN - a fast, keyboard-driven TUI for SVN"
readmeQualityOk: true
url: "https://github.com/bapatchirag/revision"
homepage: "https://bapatchirag.github.io/revision/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["lazygit", "svn", "tui", "go", "golang", "subversion", "terminal-ui", "bubbletea", "charm", "charmbracelet"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 84
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-22T07:20:32Z"
lastCommitAt: "2026-10-29T05:51:49Z"
lastReleaseAt: "2026-08-14T07:30:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["bapatchirag", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1308511746/977f670e-bccf-42f7-9cb9-6ff69cb7c358"
---

A lazygit-style terminal UI for Subversion (SVN). `revision` gives you a fast, keyboard-driven interface over the `svn` command line — review changes, stage with changelists, commit, update, and browse history without leaving your terminal.

## Why

SVN's command line is powerful but verbose for day-to-day work. `revision` wraps it in a focused TUI — inspired by [lazygit](https://github.com/jesseduffield/lazygit) — so common tasks are a keystroke away. It shells out to your existing `svn` binary, so it respects your working copy, credentials, and configuration.

## Features

- **lazygit-style layout** — Status, Files, Log and Shelf panels down the left, a Main detail view beside them, and the `svn` command log beneath; switch with the number keys or `Tab`
- **Changed files as a collapsible directory tree**, grouped under their folders, with the visible count in the panel footer — and a move drawn as a move, its destination marked `+` and each half naming the other
- **Colour-coded diffs** that follow your selection — read one side by side with `s`, save it to a file with `w`, or highlight a directory for the combined diff of everything beneath it
- **Staging** built on a native…
