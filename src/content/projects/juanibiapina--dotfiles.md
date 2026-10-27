---
repo: "juanibiapina/dotfiles"
name: "dotfiles"
description: "Keyboard-first dotfiles for terminal-centric development with tmux, Neovim, and coding agents."
readmeQualityOk: true
url: "https://github.com/juanibiapina/dotfiles"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [37, 31]
topics: ["neovim", "tmux", "dotfiles", "zsh", "nix", "nixos", "nixos-configuration"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2012-08-09T13:48:31Z"
lastCommitAt: "2026-10-27T12:40:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 60
maintainers: ["juanibiapina"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96207959a8493be2b39dc1c068739dcaa0c716b781e1d20343967b51b6cf3c/juanibiapina/dotfiles"
discussionCount: 0
---

# Juan's Dotfiles

## About

Keyboard-first dotfiles for terminal-centric development with tmux, Neovim, and coding agents.

## Software

- OS: MacOS, [NixOS](https://nixos.org/)
- WM: [AeroSpace](https://github.com/nikitabobko/AeroSpace)
- Shell: [zsh](https://wiki.archlinux.org/title/Zsh)
- Terminal: [Ghostty](https://ghostty.org/)
- Editor: [neovim](https://neovim.io/)
- Browser: [Firefox](https://www.mozilla.org/en-US/firefox/developer/)

## Directory Structure

- cli: Contains `dev`, a CLI tool for running scripts using [sub](https://github.com/juanibiapina/sub)
- dotfiles: Files that are symlinked to the home directory when running 'make'. The first level directory is the name of the software (for separating files for specific programs) and inside this directory files should match the target directory structure in the home directory.
- nix: Nix configuration for all hosts, including home manager.

## Hosts

- `mini`: NixOS mini machine
- `macm1`: macOS machine with M1 Pro chip
- `mb5p`: macOS work machine (GitButler) with M5 Pro chip

## Neovim

The `nvim-server` command defined in `nix/packages/nvim.nix` starts a neovim instance listening to a socket in…
