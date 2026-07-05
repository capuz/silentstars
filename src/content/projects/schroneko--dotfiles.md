---
repo: "schroneko/dotfiles"
name: "dotfiles"
description: "My dotfiles managed by chezmoi"
originalDescription: "My dotfiles managed by chezmoi"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/schroneko/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [87]
stars: 34
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-20T11:40:39Z"
lastCommitAt: "2026-07-05T06:33:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 37
maintainers: ["schroneko"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5210fa3b97b297f1905019b13bf99ce84c81d5c50199719a840acdfbfbefc8f/schroneko/dotfiles"
---

# dotfiles

Personal dotfiles managed by GNU Stow (compatible with macOS / Linux)

The current actual location is `~/ghq/github.com/schroneko/dotfiles`, and `~/.zshrc` and `~/.config/...` are symbolic links to that location. The Homebrew and capacity-controlled `ghq` repo list is regularly synchronized between macOS systems using this repo as the source of truth.

The only thing to do first on a new Mac is one thing.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/schroneko/dotfiles/main/setup.sh)"
```

If you start the coding agent on a new Mac, just running this will be sufficient.

## Setup

### One-liner (for a new machine)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/schroneko/dotfiles/main/setup.sh)"
```

### Manual Setup

```bash
ghq get git@github.com:schroneko/dotfiles.git

cd ~/ghq/github.com/schroneko/dotfiles
git config core.hooksPath .githooks
git config pull.autostash true
stow --no-folding --target="$HOME" .

./scripts/macos-defaults.sh
./scripts/dotfiles-sync.sh
```

`./scripts/brew-bundle-sync.sh` synchronizes the split Brewfile as correct, and Homebrew packages not in the Brewfile are automatically removed. Use…
