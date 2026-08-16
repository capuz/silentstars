---
repo: "azigler/dotfiles"
name: "dotfiles"
description: "Developer bliss: dotfiles, configs, keys, fonts, themes, and plugins 💠"
readmeQualityOk: true
url: "https://github.com/azigler/dotfiles"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [65, 32]
topics: ["dotfiles"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-21T07:30:46Z"
lastCommitAt: "2026-08-16T04:09:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["azigler"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b938d2e6a42a1b01df6b614c2c42c7e2662959eb0d44f01f77863d8b28bed2b/azigler/dotfiles"
---

# azigler/dotfiles

> [!NOTE]
> Developer bliss: dotfiles, configs, keys, fonts, themes, and plugins 💠

## Table of Contents

- [Background](#background)
- [Two tiers](#two-tiers)
- [Usage](#usage)
  - [Three jobs, three scripts](#three-jobs-three-scripts)
  - [Extension lists are additive](#extension-lists-are-additive)
  - [Install](#install)
  - [Add or remove dotfiles](#add-or-remove-dotfiles)
  - [Add or remove resources](#add-or-remove-resources)
  - [Uninstall](#uninstall)

## Background

This repository contains dotfiles[^1] for [azigler](https://github.com/azigler). By managing dotfiles in a centralized repository, it becomes easier to synchronize and share these configurations across different machines. This repository serves as a reference for [azigler](https://github.com/azigler)'s preferred settings and can be used as a starting point for others to customize their own dotfiles.

## Two tiers

These dotfiles are the **public tier**: program configuration only — shell,
tmux, editors, language toolchains, and the scripts that install them. Nothing
here needs an agent, and a machine that clones only this repository gets a
complete, working environment.

The **agent…
