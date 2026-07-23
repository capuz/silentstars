---
repo: "fhemberger/dotfiles"
name: "dotfiles"
description: "Dotfiles for macOS, Arch Linux, Ubuntu and my Synology NAS"
readmeQualityOk: true
url: "https://github.com/fhemberger/dotfiles"
language: "Go Template"
languages: ["Go Template", "Shell", "Lua"]
languagePcts: [45, 28, 20]
topics: ["dotfiles", "macos", "archlinux", "ubuntu", "synology", "ricing"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2011-09-20T08:12:26Z"
lastCommitAt: "2026-07-23T06:14:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 60
undervaluedScore: 35
maintainers: ["fhemberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a48f30dc6ab2a065661ba55ffaac610093c8333b19d027956737ca0bc99dbb9/fhemberger/dotfiles"
---

# My dotfiles

Complete setup for macOS, Arch Linux, Debian/Ubuntu, Android (Termux) and Synology NAS.

Installs useful binaries (`bat`, `colordiff`, `curl`, `fzf`, `git-delta`, `htop`, `gdu`, …), the [Starship](https://starship.rs) prompt and `zsh` as default shell.

## Installation

Prerequisites:
- `curl`
- `git`
- [`chezmoi`](https://www.chezmoi.io/), [Download](https://github.com/twpayne/chezmoi/releases)

```bash
# Create config directory
mkdir -p ~/.config/chezmoi/

# Download and render config file template
curl -sS https://raw.githubusercontent.com/fhemberger/dotfiles/main/.chezmoi.yaml.tmpl \
  | chezmoi execute-template -o ~/.config/chezmoi/chezmoi.yaml

# Edit ~/.config/chezmoi/chezmoi.yaml, then
chezmoi init --apply https://github.com/fhemberger/dotfiles.git
```

## What gets installed?

### General

- **Shell:** [zsh](https://github.com/zsh-users/zsh)  
- **Archive management:** `unp`, `unrar`, `unzip`, `zip`
- **Tools:**  `bat`, `colordiff`, `curl`, `direnv`, `dnsutils`, `fd`, `fzf`, `git-delta`, `htop`, `jq`, `nano`, `gdu`, `nmap`, `rsync`, `tmux`, `ufw`, 
`wget`

### macOS

- **Terminal emulator:** [iTerm2](https://iterm2.com/)
- Installs…
