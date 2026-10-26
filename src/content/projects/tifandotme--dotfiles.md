---
repo: "tifandotme/dotfiles"
name: "dotfiles"
description: "~/.*"
readmeQualityOk: true
url: "https://github.com/tifandotme/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [47]
topics: ["dotfiles", "ghostty", "linux", "macos", "vim", "aerospace", "lazygit", "osx", "sketchybar", "yazi"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-02-26T08:41:13Z"
lastCommitAt: "2026-10-26T18:06:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 71
maintainers: ["tifandotme"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf03ff55a152639c8900ebe52233850612b4dda5dba8063e59a4db1a13f49204/tifandotme/dotfiles"
---

# ~/.\*

A chezmoi-managed setup for exactly two machines:

- a main macOS machine
- an Ubuntu VPS named `box`

## Shells

macOS and `box` use Zsh for interactive sessions. `box` keeps Bash installed for scripts and recovery. `.profile` owns shared exported environment, and `.zshrc` loads `~/.config/shell/interactive.sh` for aliases and functions. User-invoked workflows live in `~/.config/mise/tasks/`; run them with `mise run`, for example `mise run cert:check example.com` or `mise run box-agents:status`. `~/.local/bin` remains on `PATH` for installed CLI tools.

Starship supplies the prompt. Zsh uses native completion, vi editing, `zsh-autosuggestions`, and `zsh-syntax-highlighting`. Atuin owns Ctrl-R in Zsh and syncs encrypted history to the self-hosted service on `box`; autosuggestions try Atuin's local history, then completion. Tab offers mise task names and declared argument choices. Fzf keeps Ctrl-T and Alt-C, and zoxide provides `cd` and `cdi`.

After the Atuin server is deployed, register on the first machine with `atuin register -u <username> -e <email>`, then save the generated key from `atuin key` in a password manager. On the second machine, run `atuin login -u…
