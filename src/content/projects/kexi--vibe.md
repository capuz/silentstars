---
repo: "kexi/vibe"
name: "vibe"
description: "Super fast Git worktree management tool with Copy-on-Write optimization"
readmeQualityOk: true
url: "https://github.com/kexi/vibe"
homepage: "https://vibe.kexi.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
topics: ["cli", "developer-tools", "git", "worktree", "rust"]
stars: 29
forks: 4
openIssues: 1
closedIssues: 71
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-27T23:31:03Z"
lastCommitAt: "2026-08-16T04:08:23Z"
lastReleaseAt: "2026-01-08T13:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 50
maintainers: ["kexi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a2502d9da3fb91db648907412c88d1dbf01028d9a9c037b863e16de6a0c874a/kexi/vibe"
fundingLinks: ["GITHUB:https://github.com/kexi"]
discussionCount: 0
---

# vibe

A super fast CLI tool for easy Git Worktree management.

[日本語](https://github.com/kexi/vibe/blob/HEAD/README.ja.md) | [简体中文](https://github.com/kexi/vibe/blob/HEAD/README.zh.md)

## Documentation

📚 Full documentation is available at [vibe.kexi.dev](https://vibe.kexi.dev)

## Usage

| Command                            | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| `vibe start <branch> [options]`    | Create a worktree with a new or existing branch (idempotent)                      |
| `vibe scratch [options]`           | Create a worktree with an auto-generated `scratch/<timestamp>` branch             |
| `vibe jump <branch> [options]`     | Jump to an existing worktree by branch name (supports partial and fuzzy matching) |
| `vibe rename <new-name> [options]` | Rename the current worktree's branch and directory                                |
| `vibe clean [options]`             | Delete current worktree and return to main (prompts if uncommitted changes exist) |
| `vibe home`                        | Return…
