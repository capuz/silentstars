---
repo: "voltux/dotfiles"
name: "dotfiles"
description: "Some of my configuration files "
readmeQualityOk: true
url: "https://github.com/voltux/dotfiles"
language: "Lua"
languages: ["Lua", "Vim Script"]
languagePcts: [39, 27]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-01-15T13:18:52Z"
lastCommitAt: "2026-10-27T09:16:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0783c31a8cb1192420ade97da804724d0b5679f3616bbca26188a959e2f9e7d5/voltux/dotfiles"
---

# Configuration files

These configuration files clearly reflect my personal taste. I try to maintain them in order to be easily reusable but they remain adapted to my personal needs.

## Prerequisites

- Zsh                             -> configuration framework: https://github.com/robbyrussell/oh-my-zsh
    - stow (easily install dotfiles) -> distro package
    - fzf (zsh, vim fuzzy find)      -> distro package or https://github.com/junegunn/fzf
    - starship (shell prompt)        -> https://starship.rs/
- Neovim                          -> plugins loaded with Lazy: https://github.com/folke/lazy.nvim
    - luajit or lua 5.1.0
    - fd (find replacement)          -> https://github.com/sharkdp/fd
    - ripgrep (grep replacement)     -> https://github.com/BurntSushi/ripgrep
    - bat (cat replacement)          -> https://github.com/sharkdp/bat
- Sway                            -> Wayland twin of the i3 config: https://swaywm.org/
    - i3status (status bar)          -> distro package, reuses ~/.config/sway/i3status.conf
    - swaylock / swayidle / swaynag  -> distro package
    - bemenu (dmenu replacement)     -> distro package
    - grim + slurp + wl-clipboard    -> distro…
