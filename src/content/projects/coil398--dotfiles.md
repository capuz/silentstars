---
repo: "coil398/dotfiles"
name: "dotfiles"
description: "my best dotfiles."
originalDescription: "my best dotfiles."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/coil398/dotfiles"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [54, 40]
stars: 8
forks: 0
openIssues: 0
closedIssues: 40
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-11-04T13:30:31Z"
lastCommitAt: "2026-10-02T09:59:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 74
maintainers: ["coil398", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/829abdc24b6fdd2958f3e3e5be5a2c5c54d66712ed0bd97f6ee9257f8de0f9f5/coil398/dotfiles"
---

# dotfiles

Personal dotfiles repository. Compatible with macOS / Linux (Ubuntu) / WSL. Designed primarily for use with GitHub Codespaces.

## Quick Start

```sh
# New machine
curl -fsSL https://raw.githubusercontent.com/coil398/dotfiles/master/etc/init.sh | sh

# Codespaces (install.sh runs automatically)
bash install.sh

# Symbolic link re-deployment only
sh etc/link.sh
```

## Features

- **Modern tool replacements** — `eza`(ls), `bat`(cat), `procs`(ps), `rg`(grep), `zoxide`(cd), `fzf`
- **Neovim** — lazy.nvim + LSP (Mason) + Telescope + Treesitter + Copilot
- **tmux** — Automatic session save/restore (continuum + resurrect), fzf integration, VS Code Dark theme
- **Terminal** — WezTerm / Alacritty compatible, Cica + Nerd Font
- **Idempotent setup** — Safe to run multiple times with `has()` checks
- **Multi-architecture** — Docker image compatible with both amd64 / arm64
- **AI Coding Agent integration** — PIR² workflow for Claude Code / Codex / OpenCode, shared skills

## Repository structure

```
dotfiles/
├── .zshrc                  # Main zsh configuration (PATH, completion, prompt, tmux auto-launch)
├── .zsh_alias              # Aliases (modern tool replacements)
├──…
