---
repo: "vivek-x-jha/dotfiles"
name: "dotfiles"
description: "Configuration Folder for Daily Development"
url: "https://github.com/vivek-x-jha/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 6
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-28T02:33:17Z"
lastCommitAt: "2026-06-25T01:39:13Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 83
maintainers: ["vivek-x-jha", "VooooooBoooooo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1881c2c3eef675f9bee8fc899f1e6defc47183e7337b70ddb295502b407e60f/vivek-x-jha/dotfiles"
---

# Dotfiles

Personal macOS and Linux workstation configuration centered on a fast terminal workflow, XDG-aware paths, Neovim, tmux, WezTerm, Rust-based CLI tools, and 1Password-backed secrets.

[`bootstrap.sh`](./bootstrap.sh) is the setup contract. [`AGENTS.md`](./AGENTS.md) is the operational guide for coding agents and maintainers.

## ✨ Highlights

- 🚀 One bootstrap entry point for packages, symlinks, shell setup, editor tooling, and OS defaults
- 🗂️ XDG-first layout for config, cache, data, and state
- 🐚 Zsh-first interactive shell with Bash parity where practical
- 🔎 fzf, ripgrep, fd, bat, eza, zoxide, and Atuin wired into daily navigation
- 🧠 Neovim managed with native `vim.pack`, `bob`, LSPs, formatters, and custom SourDiesel theming
- 🖥️ WezTerm, tmux, Hammerspoon, and macOS Terminal profiles for terminal workflows
- 🔐 Optional 1Password CLI, shell plugin, Git signing, SSH agent, and Atuin sync setup
- 🧪 Dry-run support before setup changes touch the machine

## 📚 Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Bootstrap Flow](#bootstrap-flow)
- [Repository Layout](#repository-layout)
- [XDG Config Model](#xdg-config-model)
- [Tooling…
