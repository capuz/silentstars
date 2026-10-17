---
repo: "NathanielInman/dotfiles"
name: "dotfiles"
description: "Dotfiles for neovim, zsh, hyprland, arch linux and more"
readmeQualityOk: true
url: "https://github.com/NathanielInman/dotfiles"
homepage: "http://nathanielinman.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
topics: ["vim", "zsh", "dotfiles", "tmux", "eslint", "archlinux", "neovim", "pragmatapro", "nordtheme", "nushell"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2015-12-17T02:49:05Z"
lastCommitAt: "2026-10-17T08:00:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 72
maintainers: ["NathanielInman"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cf2a4fd2b2a360801cf4cd3aef16bd000d9866ea934e02f2a1b15f28257236f/NathanielInman/dotfiles"
---

# Dot-Files

This contains all of my dot files and step-by-step instructions on how to build an Arch distribution similar to mine. Most configurations are detailed with comments. All dot files are purposefully compact with little ricing.

## Installation

Aside from referencing the configuration files directly, you can use stow to automatically install any one or multiple of the configurations in this repository. This repository uses [GNU Stow](https://www.gnu.org/software/stow/) for managing symlinks.

```bash
# Packages are 'installed' by merely symlinking the files to their destinations
sudo pacman -S stow

# Clone the repository
git clone https://github.com/NathanielInman/dotfiles.git ~/Sites/dot-files
cd ~/Sites/dot-files

# List available packages
./install.sh -l

# Install all packages
./install.sh -a

# Install specific packages
./install.sh nvim zsh starship

# Uninstall a package
./install.sh -u nvim

# Restow after pulling updates
./install.sh -r nvim
```

### Available Packages

| Package    | Description                                   |
| ---------- | --------------------------------------------- |
| `biome`    | Global Biome formatter/linter config          |
|…
