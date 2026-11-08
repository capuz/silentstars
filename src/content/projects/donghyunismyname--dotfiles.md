---
repo: "donghyunismyname/dotfiles"
name: "dotfiles"
description: "An attempt to create my own dotfiles"
readmeQualityOk: true
url: "https://github.com/donghyunismyname/dotfiles"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [70]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-03-20T16:40:54Z"
lastCommitAt: "2026-11-08T14:10:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 82
maintainers: ["donghyunismyname"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0bfd4ed4e0093826ed63b10cb101963e3b9f16446035273584ba9360f2c4bf2/donghyunismyname/dotfiles"
---

# dotfiles

Personal dotfiles for `zsh`, `vim`, `tmux`, and modern CLI tools.

`zsh`, `vim`, and `tmux` combine together to create an awesome
development environment.

(no, modern GUI-based AI-assisted editors are better)

(terminal utilities are still useful, though...)

## Quick Start

```sh
sh install.sh           # runs the three scripts below in order
```

Or run them individually:

```sh
sh install-tools.sh   # CLI tools (uses Homebrew)
sh install-shell.sh   # zsh, plugins
sh install-configs.sh # Link vim, tmux, yazi, zshenv, agents.slice (Linux); stub ~/.zshrc and ~/.gitconfig
```

On Windows, see [windows/README.md](https://github.com/donghyunismyname/dotfiles/blob/HEAD/windows/README.md).

## Fonts

Install a [Nerd Font](https://www.nerdfonts.com/font-downloads) on your **local machine** (where your terminal app runs), not on remote servers.

| Font | Download | Homebrew (macOS) |
| ---- | -------- | ---------------- |
| DroidSansM Nerd Font (recommended) | [DroidSansMono.zip](https://github.com/ryanoasis/nerd-fonts/releases/latest/download/DroidSansMono.zip) | `brew install --cask font-droid-sans-mono-nerd-font` |
| D2Coding Nerd Font (Korean) |…
