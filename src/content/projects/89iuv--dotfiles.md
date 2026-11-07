---
repo: "89iuv/dotfiles"
name: "dotfiles"
description: "Valentin's dotfiles"
readmeQualityOk: true
url: "https://github.com/89iuv/dotfiles"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [62, 38]
stars: 50
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-07-22T13:06:59Z"
lastCommitAt: "2026-11-07T10:36:01Z"
lastReleaseAt: "2026-02-11T19:42:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 49
maintainers: ["89iuv"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8671c3c57946c925c13e0f5177f8630917c3401de108eba0c90e1bdfb4b236e/89iuv/dotfiles"
---

# Dotfiles

- [Dotfiles](#dotfiles)
  - [Environment](#environment)
  - [Repo](#repo)
  - [System](#system)
  - [Tools](#tools)
  - [Coding](#coding)
  - [Containers](#containers)
  - [Ai](#ai)
  - [Wsl](#wsl)
  - [Clean Up](#clean-up)

## Environment

- Install Fedora in WSL: [Fedora WSL Documentation](https://docs.fedoraproject.org/en-US/cloud/wsl/)
- Install Nvidia Container Toolkit: [Nvidia Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- Install Nerd Fonts: [Nerdfonts Download](https://www.nerdfonts.com/font-downloads)
- Install Jetbrains Mono Font: [Jetbrains Mono Font Download](https://www.jetbrains.com/lp/mono/)
- Install Catppuccin Theme: [Catppuccin Terminal Ports](https://catppuccin.com/ports/?q=terminal)

## Repo

```sh
# install git
sudo dnf install -y git

# clone repo
git clone --recurse-submodules https://github.com/89iuv/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
```

## System

```sh
# update installed packages and repositories
sudo dnf -y update

# install development tools: git, c compiler, make, etc
sudo dnf -y group install c-development development-tools

# install dependencies
sudo dnf -y install…
