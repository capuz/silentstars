---
repo: "klarkc/dotfiles"
name: "dotfiles"
description: "Optioned Linux for a dev environment"
readmeQualityOk: true
url: "https://github.com/klarkc/dotfiles"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-27T21:50:17Z"
lastCommitAt: "2026-11-11T11:20:37Z"
lastReleaseAt: "2026-01-08T16:35:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 68
maintainers: ["klarkc"]
openGraphImageUrl: "https://opengraph.githubassets.com/27a17631449d33ef038f2e806cca7fbaebafc1a9fec955344e9be1481622c60d/klarkc/dotfiles"
---

# Dotfiles

> **Active target (2026-11-11): NixOS only, all changes on `main`.**
> Arch Linux/NVIDIA instructions below are retired historical material, not
> a supported installation recipe. User-specific packages, XMonad, Brave,
> Enpass, shell and services must be expressed declaratively in Nix here,
> while system/GCE/XRDP infrastructure lives in `klarkc/os`.
> Do not run legacy `pacman`, `yay`, default NVIDIA profile or broad `make`
> targets on the GCE workstation. Existing functionality requires an audited
> NixOS migration before any legacy Arch block is deleted.

Optioned Linux for a dev environment

```bash
git clone --no-checkout https://github.com/klarkc/dotfiles
mv dotfiles/.git ~
rm -r dotfiles
```

⚠ Next command will replace current home files with repo files (backup first!)

```bash
git checkout main
```

## Features

- [Lemurs](https://github.com/coastalwhite/lemurs) Window Manager
- [Pipewire](https://pipewire.org) Sound Server
- [Alacritty](https://github.com/alacritty/alacritty) with ligatures + [Tmux](https://github.com/tmux/tmux) + [vim](https://github.com/vim/vim)
- [Vim Language Server Protocol](https://github.com/prabirshrestha/vim-lsp) + [Automatic…
