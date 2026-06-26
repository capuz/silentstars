---
repo: "izumin5210/dotfiles"
name: "dotfiles"
description: "dotfiles for macOS and Codespaces"
url: "https://github.com/izumin5210/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [61, 25]
topics: ["dotfiles", "tmux", "zsh", "neovim"]
stars: 22
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2013-12-22T09:10:11Z"
lastCommitAt: "2026-06-26T21:31:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 61
maintainers: ["renovate[bot]", "izumin5210"]
openGraphImageUrl: "https://opengraph.githubassets.com/4caf5af4dd8334bde1813b85d16c89e8a714e11fcf20a99da4a91340d188ce9f/izumin5210/dotfiles"
---

# izumin5210's dotfiles

![GitHub License](https://img.shields.io/github/license/izumin5210/dotfiles)

</div>

## Supported OS

- macOS
  - manage packages with Nix [Home Manager](https://github.com/nix-community/home-manager)
  - manage system preferences with [nix-darwin](https://github.com/lnl7/nix-darwin)
  - manage macOS apps with [Homebrew Cask](https://github.com/Homebrew/homebrew-cask) and [mas-cli](https://github.com/mas-cli/mas)
- GitHub Codespaces (Ubuntu)
  - manage tools with [aqua](https://aquaproj.github.io/)

## Installation

### macOS

1. Install [Homebrew](https://brew.sh/)
2. Install Nix with [`nix-installer`](https://github.com/DeterminateSystems/nix-installer)
3. Run following commands

```sh
git clone https://github.com/izumin5210/dotfiles ~/src/github.com/izumin5210/dotfiles
cd ~/src/github.com/izumin5210/dotfiles
./bin/apply-configurations
./bin/deploy-config-files
```
