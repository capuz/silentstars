---
repo: "mikoto2000/devcontainer.vim"
name: "devcontainer.vim"
description: "The Vim/NeoVim edition of VSCode Dev Container. It aims to enable Dev Container development with Vim by simply adding a supplementary configuration file alongside the devcontainer.json created for VSCode."
originalDescription: "VSCode Dev Container の Vim/NeoVim 版。  VSCode 向けに作成された devcontainer.json とは別に、後付け設定ファイルを追加するだけで Vim による Dev Container 開発が可能になることを目指しています。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/mikoto2000/devcontainer.vim"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["devcontainer", "vim", "neovim"]
stars: 94
forks: 4
openIssues: 0
closedIssues: 71
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-16T17:10:17Z"
lastCommitAt: "2026-11-07T22:52:41Z"
lastReleaseAt: "2024-06-08T13:32:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["mikoto2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/08afa5556fd9147f26333c6d16784b57e468fe5d876ed61e6c7eb9b67455e7d1/mikoto2000/devcontainer.vim"
---

**Japanese** / [English](https://github.com/mikoto2000/devcontainer.vim/blob/HEAD/README_en.md)

# devcontainer.vim

A tool for development in containers using Vim. (The Vim edition of VSCode Dev Container)

This tool adds Vim Dev Container development settings to a `devcontainer.json` created for VSCode, and launches the development environment.

## Getting Started

- [Working inside Vim in a container with devcontainer.vim (Let's build an environment from scratch) - mikoto2000's diary](https://mikoto2000.blogspot.com/2024/10/devcontainervim-vim.html)
- [Go programming with devcontainer.vim and codex cli! - YouTube](https://www.youtube.com/watch?v=grFA12Mwsy0)
- [Java programming with devcontainer.vim and Claude Code! - YouTube](https://www.youtube.com/watch?v=d5m9DaqNhLA)
- [?'Eh! Set up a Go environment in 1 minute!?' devcontainer.vim 'Yep, I can do that!' - YouTube](https://www.youtube.com/shorts/v0h6AfRIyvs)

## Features:

- Launches a development container, transfers Vim/NeoVim and tmux into it, and starts Vim inside tmux
    - For a project without `devcontainer.json`, launches a development container in one shot
        - Arguments passed to docker can be customized
    -…
