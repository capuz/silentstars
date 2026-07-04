---
repo: "azigler/dotfiles"
name: "dotfiles"
description: "Developer bliss: dotfiles, configs, keys, fonts, themes, and plugins 💠"
readmeQualityOk: true
url: "https://github.com/azigler/dotfiles"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [57, 27]
topics: ["dotfiles"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-21T07:30:46Z"
lastCommitAt: "2026-07-04T22:53:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 68
maintainers: ["azigler"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec408d93ec449257ee3c7434adfcadbfa5fac4b7ea6498486f00566b0b65c29c/azigler/dotfiles"
---

# azigler/dotfiles

> [!NOTE]
> Developer bliss: dotfiles, configs, keys, fonts, themes, and plugins 💠

## Table of Contents

- [Background](#background)
- [Usage](#usage)
  - [Install](#install)
  - [Add or remove dotfiles](#add-or-remove-dotfiles)
  - [Add or remove resources](#add-or-remove-resources)
  - [Uninstall](#uninstall)

## Background

This repository contains dotfiles[^1] for [azigler](https://github.com/azigler). By managing dotfiles in a centralized repository, it becomes easier to synchronize and share these configurations across different machines. This repository serves as a reference for [azigler](https://github.com/azigler)'s preferred settings and can be used as a starting point for others to customize their own dotfiles.

## Usage

> [!WARNING]
>
> - The `sync.sh` script will create backups in the `$SCRIPT_DIR/.backup` folder before attempting to create a symlink, but it is recommended to create your own backups before executing `sync.sh`.
> - The `sync.sh` script will move your `$HOME/.ssh/config` file to `$HOME/.ssh/local`, which is included in the `$SCRIPT_DIR/ssh/config` file synchronized from this repository.
> - The `download.sh` script will create a…
