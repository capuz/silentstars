---
repo: "Duan-JM/dotfiles"
name: "dotfiles"
description: "Collection for my dotfiles"
originalDescription: "Collection for my dotfiles"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Duan-JM/dotfiles"
language: "Python"
languages: ["Python", "Shell", "Lua"]
languagePcts: [46, 27, 20]
stars: 10
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-05-21T07:00:27Z"
lastCommitAt: "2026-07-15T05:54:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 63
maintainers: ["Duan-JM"]
openGraphImageUrl: "https://opengraph.githubassets.com/52bbc42c07298a0b2a00b57689c8ed05cd5e44d2b679f2ed0577e7dd89a35bfa/Duan-JM/dotfiles"
---

# dotfiles

Personal development environment configuration, mainly for macOS, also includes installation scripts for Neovim, Tmux, and Zsh on Linux.

The repository contains terminal, editor, Shell, macOS software lists, AI tool configurations, and a standalone buildable `code-cli` container environment. It is recommended to install as needed, rather than executing all scripts at once.

## Quick Start

```bash
git clone https://github.com/Duan-JM/dotfiles.git
cd dotfiles
```

Install common configurations:

```bash
make vim_install
make tmux_install
make zsh_install
```

The installation scripts may install dependencies via Homebrew or APT and modify configurations in the Home directory. Please read the corresponding directory instructions before executing:

- [Neovim](https://github.com/Duan-JM/dotfiles/blob/HEAD/vim/README.md)
- [Tmux](https://github.com/Duan-JM/dotfiles/blob/HEAD/tmux/README.md)
- [Zsh](https://github.com/Duan-JM/dotfiles/blob/HEAD/zsh/README.md)
- [Kitty](https://github.com/Duan-JM/dotfiles/blob/HEAD/kitty/README.md)

## Directory

| Path | Content |
| --- | --- |
| [`vim/`](https://github.com/Duan-JM/dotfiles/blob/HEAD/vim/) | Neovim configuration based on…
