---
repo: "av1155/.dotfiles"
name: ".dotfiles"
description: "My dynamic and universal .dotfiles currently for Linux (Arch and Debian), macOS, WSL."
readmeQualityOk: true
url: "https://github.com/av1155/.dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [76, 22]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-11T02:55:11Z"
lastCommitAt: "2026-09-18T13:06:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 50
maintainers: ["av1155"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ce69c2fe7368dce841cd6e1e382dd9a5cefb22897370a4481608362a4553b30/av1155/.dotfiles"
---

# .dotfiles

> Cross-platform developer environment for macOS, Arch Linux, Debian, and WSL—featuring automated setup, modular configuration management, and zero-friction onboarding.

## Quick Start

```bash
git clone git@github.com:av1155/.dotfiles.git ~/.dotfiles
cd ~/.dotfiles
./install.sh
exec zsh
```

## Why These Dotfiles?

- **Portable**: Works across macOS (Intel/Apple Silicon), Arch Linux, Debian, WSL, and Raspberry Pi
- **Safe & Idempotent**: Automatically backs up conflicts, can be run multiple times safely
- **Zero Configuration**: Automated detection and installation of tools based on your platform
- **Modular**: Managed with GNU Stow—easy to add, remove, or customize individual packages while only version-controlling the paths you choose
- **Fast**: Optimized shell startup with lazy-loading and caching (1-2s faster than default configs)
- **Robust**: Error-resistant with network checks, retry protection, and graceful degradation

## Table of Contents

- [.dotfiles](#dotfiles)
    - [Quick Start](#quick-start)
    - [Why These Dotfiles?](#why-these-dotfiles)
    - [Table of Contents](#table-of-contents)
    - [Features](#features)
    - [Installation](#installation)…
