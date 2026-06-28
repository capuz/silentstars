---
repo: "mocyuto/zgt"
name: "zgt"
description: "A simple CLI tool for parallel git worktree development"
url: "https://github.com/mocyuto/zgt"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cli", "git", "worktree", "golang"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-05T08:44:54Z"
lastCommitAt: "2026-06-28T01:36:15Z"
lastReleaseAt: "2026-02-14T00:37:43Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 46
maintainers: ["mocyuto", "mocyuto-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c30bb0d96a1936a1b6ba08b791c72e76f41044ac29c3dbbaa9b26e640157983a/mocyuto/zgt"
---

# zgt (formerly `git-wt`)

English | [日本語](./README_ja.md)

A CLI tool that extends `git worktree add` by automatically copying ignored configuration files (like `.env`) to the new directory.

## Overview

- [Migration Guide (from `git-wt`)](./MIGRATION.md)

Git's `worktree` feature is powerful,
but files ignored by `.gitignore` (such as `.env` or local configs) are not included in the newly created worktree. `zgt` automates the process of copying these files, allowing you to start development and testing immediately.

## Features

- **Standard Wrapper**: Works as a wrapper for `git worktree add`.
- **Auto-Discovery**: Automatically identifies and copies "ignored files" specified in `.gitignore`.
- **Structural Integrity**: Maintains directory structure during copy (e.g., config files inside `node_modules`).
- **Flexible Interface**: Powered by the Cobra framework for robust flag handling.
- **Path Automation**: Automatically generates worktree paths based on branch names (`{project}-{branch}`) adjacent to the repository root. Use `--path` for custom locations, `--base` to specify a base branch, and `--from-default` to force using the default branch as base.
- **Lifecycle…
