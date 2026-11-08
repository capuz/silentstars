---
repo: "luizomf/dotfiles"
name: "dotfiles"
description: "Otávio Miranda's dotfiles. Almost my entire dev environment lives in this repository."
readmeQualityOk: true
url: "https://github.com/luizomf/dotfiles"
homepage: "https://www.youtube.com/@otaviomiranda"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [53, 29]
topics: ["bash", "dotfiles", "ghostty", "homebrew", "linux", "macos", "neovim", "nvim", "scripts", "tmux"]
stars: 53
forks: 13
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-13T23:34:18Z"
lastCommitAt: "2026-11-08T10:41:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 58
maintainers: ["luizomf"]
openGraphImageUrl: "https://opengraph.githubassets.com/78267a14b3733acd9ff61b5119724d089bb3d09edc9c0970231ef6ca4f42779f/luizomf/dotfiles"
fundingLinks: ["GITHUB:https://github.com/luizomf"]
---

# dotfiles

These are my personal dotfiles. They install the exact environment I use every
day, and they are intentionally opinionated.

Since I use both Mac and Linux, most things here need to work on both.

See [`docs/`](https://github.com/luizomf/dotfiles/blob/HEAD/docs/) for technical and maintenance documentation.

I have tested clean installations on:

- Ubuntu 24.04 and 26.04 on ARM;
- macOS Sequoia and macOS 26 on Apple Silicon;
- Omarchy on ARM64 (disposable VM, including a repeat installation).

I also use them daily on Fedora Asahi Remix 44 (ARM64), but Fedora has not been
tested from a clean installation yet. Traditional Fedora and plain Arch are
accepted; plain Arch and x86_64 Omarchy have not had clean-install tests. Debian
is also accepted (Debian 13 ARM64 packages checked, full install not yet
tested). Alpine has a native `apk` path (Alpine 3.24 ARM64 components tested;
full installer and repeat full install not yet verified). LFS has a native-first
Homebrew path; see its [base requirements](https://github.com/luizomf/dotfiles/blob/HEAD/docs/installation.md#lfs). Atomic or
OSTree variants and other Linux distributions are rejected by the installer.

Package…
