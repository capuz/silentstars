---
repo: "bishalr0y/dotfiles"
name: "dotfiles"
description: "My dots ☕️ (always WIP)"
readmeQualityOk: true
url: "https://github.com/bishalr0y/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Lua"]
languagePcts: [75, 20]
topics: ["dotfiles", "nvim", "herdr"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-28T15:25:35Z"
lastCommitAt: "2026-07-22T06:10:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 61
maintainers: ["bishalr0y"]
openGraphImageUrl: "https://opengraph.githubassets.com/b98c9764ccedb59f1e7faf6987a38541447acd1cb7f265cf398f35f64cb92611/bishalr0y/dotfiles"
---

# My dotfiles

This directory contains the dotfiles for my system, managed with [GNU Stow](https://www.gnu.org/software/stow/).

## Structure

```
.
├── home/          # Stow package — contents mirror $HOME layout
│   ├── .config/   #   → ~/.config/
│   ├── .pi/       #   → ~/.pi/
│   ├── .tmux.conf #   → ~/.tmux.conf
│   └── .zshrc     #   → ~/.zshrc
├── Brewfile       # Homebrew bundle (stays at repo root)
├── README.md
└── .gitignore
```

## Requirements

- **Git** — `brew install git`
- **GNU Stow** — `brew install stow`
- **TPM** (Tmux Plugin Manager):
  ```
  git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
  ```

## Installation

Clone the repo into `$HOME`:

```
git clone git@github.com:bishalr0y/dotfiles.git ~/dotfiles
```

Create symlinks with GNU Stow (the `home` package maps to `$HOME`):

```
cd ~/dotfiles
stow home
```

## Homebrew

Install packages from the Brewfile:

```
brew bundle --file ~/dotfiles/Brewfile
```

Or from the repo directory:

```
cd ~/dotfiles && brew bundle
```
