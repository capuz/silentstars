---
repo: "tsukuboshi/dotfiles"
name: "dotfiles"
description: "Configuration files for Mac"
originalDescription: "Mac用の設定ファイル"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/tsukuboshi/dotfiles"
homepage: "https://zenn.dev/tsukuboshi/articles/6e82aef942d9af"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
topics: ["bash", "dotfiles", "macos"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-04-16T11:43:53Z"
lastCommitAt: "2026-09-19T08:13:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 58
maintainers: ["tsukuboshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd2e80d72939c2135f14687827c9d2b11d85d6f76691901e35bc40fb11cd0509/tsukuboshi/dotfiles"
---

# dotfiles

## Overview

This repository contains scripts to set macOS.

## Required

- [macOS](https://www.apple.com/jp/macos/)

## Install

1. Download installation materials.

```shell
git clone https://github.com/tsukuboshi/dotfiles
```

1. Move to target repository.

```shell
cd dotfiles
```

1. Build macOS from Makefile.

```shell
make
```

1. Additional setup required:

- Editor: Follow instructions in `editor/README.md`
- GenAI Agent: Follow instructions in `genai/README.md`
- Launcher: Follow instructions in `launcher/README.md`
- Runtime Management: Follow instructions in `runtime/README.md`
- SleepWatcher: Follow instructions in `sleepwatcher/README.md`

## Repository Structure

- `common/`: Setup scripts
- `editor/`: Editor configurations
- `genai/`: GenAI Agent configurations
- `launcher/`: Launcher configurations
- `runtime/`: Programming Language Runtime Management configurations
- `sleepwatcher/`: Sleep mode configurations

## References

- [Mac Environment Setup with dotfiles (Revised)](https://zenn.dev/tsukuboshi/articles/6e82aef942d9af)
- [Mac Environment Setup with dotfiles \| DevelopersIO](https://dev.classmethod.jp/articles/joined-mac-dotfiles-customize/)
