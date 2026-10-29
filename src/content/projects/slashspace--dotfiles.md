---
repo: "slashspace/dotfiles"
name: "dotfiles"
description: "dotfiles macos ghostty neovim tmux sketchybar aerospace stow zsh terminal theme-engine"
readmeQualityOk: true
url: "https://github.com/slashspace/dotfiles"
homepage: "https://slashspace.github.io/dotfiles/"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [39, 28]
topics: ["aerospace", "dotfiles", "ghostty", "nvim", "sheldon", "sketchybar", "starship", "stow", "tmux", "zsh"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-30T13:55:21Z"
lastCommitAt: "2026-10-29T05:49:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 37
maintainers: ["dingyi214"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2fe1cbe9ee1deaa6b2a9acd6a83db1b21b5deb1ac593aa73a26d7c1e3915290/slashspace/dotfiles"
---

# dotfiles

macOS dotfiles. Each top-level directory is a [GNU Stow](https://www.gnu.org/software/stow/) package, and the paths inside it match `$HOME`.

[中文](https://github.com/slashspace/dotfiles/blob/HEAD/README.zh-CN.md)

## Structure

```text
dotfiles/
├── install.sh
├── Brewfile
├── zsh/            ~/.zshrc, ~/.zprofile
├── git/            ~/.gitconfig
├── sheldon/        ~/.config/sheldon
├── nvim/           ~/.config/nvim
├── starship/       ~/.config/starship
├── herdr/          ~/.config/herdr
├── opencode/       ~/.config/opencode
├── ghostty/        ~/.config/ghostty
├── aerospace/      ~/.config/aerospace
├── karabiner/      ~/.config/karabiner
├── sketchybar/     ~/.config/sketchybar
├── borders/        ~/.config/borders
├── zed/            ~/.config/zed
├── fastfetch/      ~/.config/fastfetch
├── atuin/          ~/.config/atuin
├── cliamp/         ~/.config/cliamp
└── mactop/         ~/.mactop
```

## Install

```bash
git clone <repo-url> ~/dotfiles
chmod +x ~/dotfiles/install.sh
/bin/bash ~/dotfiles/install.sh
exec zsh
```

`install.sh` installs Xcode Command Line Tools and Homebrew if needed, runs `brew bundle`, locks Sheldon plugins, stows every package, and…
