---
repo: "ebkn/dotfiles"
name: "dotfiles"
description: "ebkn's dotfiles"
readmeQualityOk: true
url: "https://github.com/ebkn/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
topics: ["dotfiles", "vim", "tmux", "zsh"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2017-07-07T07:30:09Z"
lastCommitAt: "2026-09-08T07:17:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 68
maintainers: ["ebkn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d66a9a95db3baee3a74641e538cf8076a3cd752a66b289d5d4499a4fb4170b45/ebkn/dotfiles"
---

# ebkn's dotfiles

Personal dotfiles for macOS, Linux, and Windows.

## Install

```sh
# macOS
zsh <(curl -fsSL -H 'Accept: application/vnd.github.raw' https://api.github.com/repos/ebkn/dotfiles/contents/bin/init/bootstrap-macos.sh)
```

```sh
# Ubuntu
bash <(curl -fsSL -H 'Accept: application/vnd.github.raw' https://api.github.com/repos/ebkn/dotfiles/contents/bin/init/bootstrap-ubuntu.sh)
```

```sh
# WSL2 (CLI environment inside WSL)
bash <(curl -fsSL -H 'Accept: application/vnd.github.raw' https://api.github.com/repos/ebkn/dotfiles/contents/bin/init/bootstrap-wsl.sh)
```

```powershell
# Windows (GUI apps via winget — run in PowerShell on the Windows host)
powershell.exe -ExecutionPolicy Bypass -File ~/dotfiles/bin/init/windows.ps1
```

## What's included

- **Zsh** — modular config in `zsh/`, plugins via [Zinit](https://github.com/zdharma-continuum/zinit)
- **Neovim** — plugins via [lazy.nvim](https://github.com/folke/lazy.nvim), config in `vim/`
- **Tmux / WezTerm** — terminal multiplexer and emulator configs
- **Homebrew** — dependency lists split by category in `brewfiles/`
- **Git / Cursor / Claude Code** — editor and tool settings

## SSH agent on WSL

WSL reuses the…
