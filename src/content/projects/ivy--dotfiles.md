---
repo: "ivy/dotfiles"
name: "dotfiles"
description: "Agent-managed developer environment. I describe what I want, they do the rest."
readmeQualityOk: true
url: "https://github.com/ivy/dotfiles"
homepage: "https://github.com/ivy/dotfiles"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [66, 20]
topics: ["chezmoi", "dotfiles", "neovim", "zsh", "claude-code", "mise", "tmux"]
stars: 15
forks: 0
openIssues: 97
closedIssues: 82
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-15T05:08:18Z"
lastCommitAt: "2026-11-09T03:30:46Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 89
undervaluedScore: 62
maintainers: ["ivy-s-renovate-bot[bot]", "ivy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead1d9e7a9a76e043e82ec946c0c94ff11c130df358459831c7e6f58b27a7f87/ivy/dotfiles"
---

# Dotfiles

A personal developer environment managed by coding agents. I provide intent and taste; agents handle the rest — installation, configuration, updates, and repairs.

Built on [Chezmoi](https://www.chezmoi.io/) for dotfile management, [Mise](https://mise.jdx.dev/) for toolchain management, [Renovate](https://docs.renovatebot.com/) for automated dependency updates, and [Claude Code](https://docs.anthropic.com/en/docs/claude-code) for everything else.

## Stack

| Layer | Tool | What's going on |
|-------|------|-----------------|
| Terminal | [Ghostty](https://github.com/ivy/dotfiles/blob/HEAD/home/dot_config/ghostty/) | FiraCode Nerd Font, Catppuccin theme, split/tab keybindings |
| Shell | [zsh](https://github.com/ivy/dotfiles/blob/HEAD/home/dot_zshrc.tmpl) | Oh My Zsh, vi keybindings, atuin history, syntax highlighting, 1Password credential injection |
| Multiplexer | [tmux](https://github.com/ivy/dotfiles/blob/HEAD/home/dot_tmux.conf.local) | gpakosz/.tmux framework, vim-tmux-navigator, vi copy mode |
| Editor | [Neovim](https://github.com/ivy/dotfiles/blob/HEAD/home/dot_config/nvim/) | LazyVim distribution, Catppuccin, 30+ plugins, Claude Code integration |
| Tools |…
