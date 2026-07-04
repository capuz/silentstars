---
repo: "youhide/hideDot"
name: "hideDot"
description: "🚀 A blazing fast dotfiles manager in Go - Manage your dotfiles, symlinks, and system configuration with a simple YAML config. Features home directory expansion, git repo cloning, and shell command execution."
readmeQualityOk: true
url: "https://github.com/youhide/hideDot"
homepage: "https://youhide.github.io/hideDot/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["dotfile-manager", "dotfiles", "dotfiles-linux", "dotfiles-macos", "dotfiles-manager"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-02-10T02:33:18Z"
lastCommitAt: "2026-07-04T22:51:38Z"
lastReleaseAt: "2026-07-04T22:53:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 65
undervaluedScore: 52
maintainers: ["youhide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/930070278/832ab8d6-e157-400b-a7b4-da1ddb2761a6"
fundingLinks: ["GITHUB:https://github.com/youhide"]
discussionCount: 0
---

# hideDot
A blazing fast dotFiles manager written in Go. Easily manage your dotfiles, symlinks, and system configuration with a simple YAML config.

## Features

- 🚀 Fast symlink management with subcommands
- 🏠 Home directory path expansion (`~/`)
- 🔄 Git repository cloning
- 🛠️ Shell command execution
- 🔍 Duplicate symlink detection
- 🧪 Dry-run mode
- 🔙 **Automatic backups** before overwriting files
- ↩️ **Unlink & restore** symlinks with backup restoration
- 📋 **Status command** to check symlink health
- 🏷️ **Profiles** for different machines/environments
- 📝 **Templates** with variables (hostname, OS, etc.)
- 🪝 **Hooks** for pre/post operations

## Installation

```bash
brew tap youhide/homebrew-youhide
brew install hidedot
```

## Usage

### Basic Commands

```bash
# Scaffold a starter config in the current directory
hidedot init

# Adopt an existing file: move it into the dotfiles dir and symlink it back
hidedot adopt ~/.zshrc

# Create symlinks (default command)
hidedot
hidedot link

# Check status of all symlinks
hidedot status

# Remove symlinks
hidedot unlink

# Remove symlinks and restore backups
hidedot unlink --restore

# Manage backups
hidedot backup create…
