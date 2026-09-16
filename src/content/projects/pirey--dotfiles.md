---
repo: "pirey/dotfiles"
name: "dotfiles"
description: "My personal computer configuration files"
readmeQualityOk: true
url: "https://github.com/pirey/dotfiles"
language: "Lua"
languages: ["Lua", "Emacs Lisp"]
languagePcts: [53, 23]
topics: ["dotfiles", "nixos", "nixos-config", "nixos-configuration"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2015-12-15T05:53:23Z"
lastCommitAt: "2026-09-16T08:47:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 56
maintainers: ["pirey"]
openGraphImageUrl: "https://opengraph.githubassets.com/971701ba379bbf9a0e75ba38efa1c03526ee7c74d828c6d96a102abfa5d3fa58/pirey/dotfiles"
---

# Dotfiles

This is my personal computer configuration files.

## File Structure

```
.
├── etc/              # System-wide configs (e.g., keyd)
├── home/             # User configs (~)
│   ├── .config/
│   │   ├── nvim/     # Neovim configuration
│   │   └── ...
│   ├── .zshrc
│   ├── .gitconfig
│   └── ...
├── notes/            # OS-specific setup guides (fedora, macos, nixos, windows)
│   ├── fedora/
│   ├── macos/
│   ├── nixos/
│   ├── windows/
│   └── ...
├── scripts/          # Utility scripts
└── README.md
```

## Overview

CLI:

- zsh/oh-my-zsh
- nvim
- tmux
- fzf
- ripgrep
- fd
- zoxide
- starship.rs

Terminal:

- Kitty
- Alacritty

Preferred Fonts:

- IBM Plex Mono / Lilex
- Ioskeley Mono
- Hermit

Keyboard map:

- keyd (Linux)
- karabiner elements (MacOS)
- auto hot key (Windows)

## Configuration

The following command will create symlinks to the configuration files in the home directory.

- Install GNU [stow](https://www.gnu.org/software/stow/)
- `stow --adopt -t ~ home`

It may overwrite dotfiles because of the `--adopt` flag, review and adjust changes as necessary.

Also, it will only create symlinks for config under user home directory, so we need to create…
