---
repo: "laurigates/dotfiles"
name: "dotfiles"
description: "My personal dotfiles made public to inspire and/or confuse others."
readmeQualityOk: true
url: "https://github.com/laurigates/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [39]
topics: ["chezmoi", "dotfiles", "managed-by-opentofu"]
stars: 10
forks: 0
openIssues: 5
closedIssues: 77
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-06-30T04:49:01Z"
lastCommitAt: "2026-07-19T06:10:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 71
maintainers: ["laurigates"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc9a87d63e2afbc94beda1e88a268d92aee729e42167481a97166b4e44a993bd/laurigates/dotfiles"
---

# My Dotfiles

## Overview

This repository contains my personal dotfiles, managed using [chezmoi](https://www.chezmoi.io/). It sets up my development environment, including configurations for Zsh, Neovim, Git, and various development tools. Tool versions are managed using [mise-en-place](https://mise.jdx.dev/).

## Installation

1.  **Install chezmoi:** Follow the instructions on the [chezmoi installation guide](https://www.chezmoi.io/install/).
2.  **Initialize chezmoi with this repository:**
    ```bash
    chezmoi init https://github.com/laurigates/dotfiles.git
    ```
3.  **Review the changes:** Check which files chezmoi plans to create or modify.
    ```bash
    chezmoi diff
    ```
4.  **Apply the changes:**
    ```bash
    chezmoi apply -v
    ```

## Tool Management with mise-en-place

This setup uses [mise-en-place](https://mise.jdx.dev/) (formerly `rtx`) to manage development tool versions (like Node.js, Python, Go, etc.).

- Tool versions are defined in the `.config/mise/config.toml` file (managed by chezmoi).
- After cloning or updating the dotfiles, run `mise install` in your shell to install the specified tool versions.
- `mise` automatically activates the correct…
