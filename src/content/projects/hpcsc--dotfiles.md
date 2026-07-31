---
repo: "hpcsc/dotfiles"
name: "dotfiles"
description: "my personal dotfiles"
readmeQualityOk: true
url: "https://github.com/hpcsc/dotfiles"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [35, 26]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-09-09T15:10:30Z"
lastCommitAt: "2026-07-31T06:24:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 76
maintainers: ["hpcsc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a010716e1d4da1735bacb2bdf362e7dd5f119cc36f81de26a9797dc967adee81/hpcsc/dotfiles"
---

# David Nguyen's dotfiles

## Tools

- `stow`: manage symlinks in both MacOS and Ubuntu
- `homebrew-bundle`: backup and restore brew packages (MacOS only)

## Folder Structure

- `/up.sh`: entry point to setting up a new machine. This script just setup log output and delegates actual installation to install.sh
- `/install.sh`: main installation script
- `/scripts`: contains scripts used during setting up a new machine. Scripts in this folder follows convention of prepending platform in front of script names.
  E.g. `macos-brew-bundle.sh` is only applicable to MacOS, `ubuntu-fasd.sh` is only applicable to Ubuntu and `common-stow.sh` is applicable to both MacOS and Ubuntu
- `/link`: contains settings to be stowed during stow step. These settings are also organized according to platforms.
- `/tests`: contains tests written using `bats`
- `/libs`: git submodules for bats and additional libraries used during testing
- `/others`: contains additional setup/tools that are not covered in `install.sh` script and need to be setup manually. E.g. iterm settings

## Neovim

Neovim configuration lives in `/link/common/dot-config/.config/nvim/` (symlinked to `~/.config/nvim/`).

It uses…
