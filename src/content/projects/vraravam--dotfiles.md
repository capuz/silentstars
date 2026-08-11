---
repo: "vraravam/dotfiles"
name: "dotfiles"
description: "Dotfiles and install script. This is hooked upto the fresh install script gist."
readmeQualityOk: true
url: "https://github.com/vraravam/dotfiles"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [47, 41]
stars: 84
forks: 68
openIssues: 0
closedIssues: 1
watchers: 14
contributors: 3
recentReleases: 0
createdAt: "2024-05-16T13:20:53Z"
lastCommitAt: "2026-08-11T04:50:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 51
maintainers: ["vraravam"]
openGraphImageUrl: "https://opengraph.githubassets.com/f857241675749ad68fa7b734c33d38746f09faa9c8628b8c1fca0c93028a90e4/vraravam/dotfiles"
---

# 🚀 macos backup and restore strategy

> **Automated macOS backup and restore strategy for techies**

A comprehensive, idempotent backup and restore strategy that configures your mac for modern software development. Supports both **Intel** and **Apple Silicon** macs with automatic architecture detection.

The script is **idempotent** — every step checks whether its work is already done before executing, so you can safely re-run after a partial failure without undoing completed steps. Each skipped step logs the reason, so you can see at a glance what was already in place.

All of the folder structures and the setup/backup operations are governed by the environment variables [defined here](https://github.com/vraravam/dotfiles/blob/HEAD/files/--HOME--/.shellrc). Please read the explanation of each variable in the same and edit appropriately.

# ✨ Features

- 🔍 **Auto-detects architecture** - supports both Intel x86_64 and Apple Silicon arm64
- 🔄 **Idempotent** — safe to run multiple times
- 📝 **Comprehensive logging** — shows all logs with colors for ease of debugging and checking status
- 🛡️ **Safe** — retains your pre-existing configs instead of overwriting them

# 📋 What…
