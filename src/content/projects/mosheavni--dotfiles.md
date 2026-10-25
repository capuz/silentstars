---
repo: "mosheavni/dotfiles"
name: "dotfiles"
description: "😎"
readmeQualityOk: true
url: "https://github.com/mosheavni/dotfiles"
homepage: "https://avni.us"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [80, 20]
topics: ["awesome"]
stars: 21
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2019-03-05T20:44:43Z"
lastCommitAt: "2026-10-25T08:40:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 64
maintainers: ["mosheavni"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ee0b95a8b67231b893836f446ec7801049623e8666160c8dc008ee6fe80d315/mosheavni/dotfiles"
---

# Moshe Avni's DotFiles

## Table of Contents

- [Usage](#usage)
- [Usage (just NVIM)](#usage-just-nvim)
- [Additional stuff](#additional-stuff)
- [Vimium (Chrome)](#vimium-chrome)
- [GitHub notifications on macOS](#github-notifications-on-macos)
- [Troubleshooting](#troubleshooting)
  - [Remove TreeSitter parsers](#remove-treesitter-parsers)

> Repository layout and file-placement conventions are documented in
> [CLAUDE.md](https://github.com/mosheavni/dotfiles/blob/HEAD/CLAUDE.md) (Architecture ▸ Stow Package Structure).

## Usage

### (also, how to bootstrap a brand new Mac laptop)

0. Install xcode-select (for basically everything…)

   ```bash
   xcode-select --install
   ```

1. Install [Homebrew](https://brew.sh/)

   ```bash
   /bin/bash -c \
     "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   eval "$(/opt/homebrew/bin/brew shellenv)" # to make brew available before we load `~/.zshrc` that has "$PATH"
   brew update
   brew install git stow
   ```

2. Clone this repository:

   ```bash
   [[ -d ~/Repos ]] || mkdir ~/Repos
   cd ~ && git clone git@github.com:mosheavni/dotfiles.git .dotfiles && cd .dotfiles
   ```

3. Install…
