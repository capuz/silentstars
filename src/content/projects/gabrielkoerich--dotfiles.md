---
repo: "gabrielkoerich/dotfiles"
name: "dotfiles"
description: "Gabriel's config files (zsh, tmux, git, etc) + backups, brew installs, coding agents and macOS setup."
readmeQualityOk: true
url: "https://github.com/gabrielkoerich/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [75]
topics: ["dotfiles", "zsh", "mackup", "homebrew", "tmux", "brew"]
stars: 8
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-07-07T05:25:30Z"
lastCommitAt: "2026-11-19T11:56:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 71
maintainers: ["gabrielkoerich"]
openGraphImageUrl: "https://opengraph.githubassets.com/46df0ed33766cb70446489fb6a1cf73c583e03c3b64d231282650a377120d287/gabrielkoerich/dotfiles"
---

# Gabriel's dotfiles

Dotfiles, mac setup, apps & backups configs.

**Warning:** If you want to give these dotfiles a try, you should first fork this repository, review the code, and remove things you don’t want or need. This config uses [zsh](http://www.zsh.org), [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) and [tmux](https://github.com/tmux/tmux), if you don't want to use any of those, check [Brew install file](https://github.com/gabrielkoerich/dotfiles/blob/HEAD/bin/install/brew).

## Dependencies
 - [Just command runner](https://github.com/casey/just)
 - [Brew](https://brew.sh) (mac setup)

## Dotfiles Sync

Check [`home`](https://github.com/gabrielkoerich/dotfiles/blob/HEAD/home) directory to check everything that is rsynced to `~` directory.

If you want to skip parts of this setup, selectively run install targets and remove unneeded config files before `just sync`.

## Instructions

Read [all](https://github.com/gabrielkoerich/dotfiles/blob/HEAD/bin/install/) scripts *before* executing them.
