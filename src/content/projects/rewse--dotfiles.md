---
repo: "rewse/dotfiles"
name: "dotfiles"
description: "Personal dotfile management system using chezmoi"
readmeQualityOk: true
url: "https://github.com/rewse/dotfiles"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [69]
topics: ["chezmoi", "dotfiles", "vimrc", "zshrc", "skills", "rules", "steering"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-11-18T09:28:27Z"
lastCommitAt: "2026-08-24T04:20:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 71
maintainers: ["rewse"]
openGraphImageUrl: "https://opengraph.githubassets.com/a07a3261b906768fdc5e219085858181587eac9021cbd0bd9eece496d3580466/rewse/dotfiles"
---

# Dotfiles

Personal dotfiles management system using chezmoi. Centrally manage shell configurations, editor settings, Git configurations, and more across multiple machines (macOS and Linux).

## Features

- **Cross-platform support**: Compatible with both macOS and Linux
- **Template-based**: Manage machine-specific configurations with conditional branching
- **Secure secrets management**: Safely manage API keys and credentials through 1Password integration

## Setup

### Installation on a New Machine

#### macOS (Homebrew)

```bash
# Install chezmoi
brew install chezmoi

# Initialize and apply dotfiles
chezmoi init --apply <your-github-username>
```

#### macOS (without Homebrew) or Linux

```bash
# Install chezmoi and initialize/apply dotfiles
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply <your-github-username>
```

Or, install chezmoi only:

```bash
sh -c "$(curl -fsLS get.chezmoi.io)"
```

Install to a specific directory (e.g., `/usr/local/bin`):

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- -b /usr/local/bin
```

### If You Already Have chezmoi

```bash
chezmoi init <your-github-username>
chezmoi apply
```

## Usage

### Daily Operations

```bash
# Add a file…
