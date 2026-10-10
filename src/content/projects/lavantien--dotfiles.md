---
repo: "lavantien/dotfiles"
name: "dotfiles"
description: "Dotfiles for Linux and Windows: Neovim, WezTerm, zsh, PowerShell, git hooks, Claude Code and OpenCode config, plus deploy, update, healthcheck, backup, restore, and uninstall scripts."
readmeQualityOk: true
url: "https://github.com/lavantien/dotfiles"
language: "Typst"
languages: ["Typst"]
languagePcts: [95]
topics: ["dotfiles", "linux", "neovim", "windows", "zsh", "opencode", "claude-code", "git-hooks", "mcp", "powershell"]
stars: 35
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2023-06-02T20:56:02Z"
lastCommitAt: "2026-10-10T10:04:49Z"
lastReleaseAt: "2026-01-01T20:37:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["lavantien"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75423f88af4b6307e034549c25db8a1e23ba91934934c17f19b7d475e9b7d28/lavantien/dotfiles"
---

# dotfiles

The repo deploys an engineering environment for Linux and Windows: Neovim, WezTerm, zsh, and PowerShell configs, git hooks, Claude Code and OpenCode settings, the maintenance scripts, and a typst books corpus used for offline grounding. The supported platforms are Ubuntu 26.04 and newer plus Windows 11 with PowerShell 7. Bootstrap and deploy are idempotent, rerunning them converges the machine.

> what's the progress? what's in flight? what's remaining?
>
> the opening books corpus contain chapters that might be useful to our endeavor. now let fan out subagents and start the development loop according to the prime directives and principles

## Contents

- [Core features](#core-features)
- [Quick start](#quick-start)
- [Repo layout](#repo-layout)
- [Available commands](#available-commands)
- [Books corpus](#books-corpus)
- [Tools matrix](#tools-matrix)
- [Hooks and config merging](#hooks-and-config-merging)
- [Neovim](#neovim)
- [Release process](#release-process)
- [Changelog](#changelog)
- [License](#license)

## Core features

The editor stack pairs Neovim 0.13+ with WezTerm. Neovim uses the builtin vim.pack manager with a committed lockfile, LSP and Treesitter…
