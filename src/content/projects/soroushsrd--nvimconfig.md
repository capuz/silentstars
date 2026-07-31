---
repo: "Soroushsrd/NvimConfig"
name: "NvimConfig"
description: "Simple nvim config. Mostly written for C++ and Rust using Kickstart"
readmeQualityOk: true
url: "https://github.com/Soroushsrd/NvimConfig"
language: "Vim Script"
languages: ["Vim Script", "Lua"]
languagePcts: [73, 27]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 137
recentReleases: 0
createdAt: "2025-01-17T13:47:03Z"
lastCommitAt: "2026-07-31T06:30:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 45
maintainers: ["Soroushsrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/61bc8ab4cb7369ab0876125304024c43696f3a7751dab711c811c64b322f77af/Soroushsrd/NvimConfig"
---

# kickstart.nvim

## Introduction

A starting point for Neovim that is:

* Small
* Single-file
* Completely Documented

**NOT** a Neovim distribution, but instead a starting point for your configuration.

## Installation

### Install Neovim

Kickstart.nvim targets *only* the latest
['stable'](https://github.com/neovim/neovim/releases/tag/stable) and latest
['nightly'](https://github.com/neovim/neovim/releases/tag/nightly) of Neovim.
If you are experiencing issues, please make sure you have the latest versions.

### Install External Dependencies

External Requirements:
- Basic utils: `git`, `make`, `unzip`, C Compiler (`gcc`)
- [ripgrep](https://github.com/BurntSushi/ripgrep#installation)
- Clipboard tool (xclip/xsel/win32yank or other depending on platform)
- A [Nerd Font](https://www.nerdfonts.com/): optional, provides various icons
  - if you have it set `vim.g.have_nerd_font` in `init.lua` to true
- Language Setup:
  - If you want to write Typescript, you need `npm`
  - If you want to write Golang, you will need `go`
  - etc.

> **NOTE**
> See [Install Recipes](#Install-Recipes) for additional Windows and Linux specific notes
> and quick install snippets

### Install Kickstart…
