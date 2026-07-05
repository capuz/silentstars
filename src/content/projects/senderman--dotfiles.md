---
repo: "Senderman/dotfiles"
name: "dotfiles"
description: "My personal dotfiles and configs for different software"
readmeQualityOk: true
url: "https://github.com/Senderman/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [69, 23]
topics: ["linux", "dotfiles", "dotfiles-linux"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-06-08T20:40:43Z"
lastCommitAt: "2026-07-05T20:54:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 71
maintainers: ["Senderman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/375139670/a6e447c2-b1a7-4926-9f0a-55f07786e380"
---

# dotfiles
My personal dotfiles and configs for different software

## Installation
This repo is designed to be used with [GNU Stow](https://www.gnu.org/software/stow/).

To learn how to manage dotfiles using stow, read https://alexpearce.me/2016/02/managing-dotfiles-with-stow.

But here's quick start:

```
cd ~ # you should clone the repo to the $HOME directory because this is how stow works
git clone https://github.com/Senderman/dotfiles.git
cd dotfiles
stow openbox
```
This will symlink `~/dotfiles/openbox/*` to `$HOME` . Since you probably have `~/.config` directory, you will get `~/.config/openbox` directory which is symlink to `~/dotfiles/openbox/.config/openbox`:
```
~ $ readlink .config/openbox
  ../dotfiles/openbox/.config/openbox
```

if you want to uninstall symlink, run `stow -D waybar`

You're welcome to fork this repo, edit the dotfiles and add your own and create PR :)

## Move your config files to the dotfiles repository

This repository contains a script called [stowlink](https://github.com/Senderman/dotfiles/blob/HEAD/scripts/.local/scripts/stowlink) which can help you to move your configuration files to the dotfiles repository in one command.

E.g. if you want…
