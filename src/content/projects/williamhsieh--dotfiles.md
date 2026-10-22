---
repo: "WilliamHsieh/dotfiles"
name: "dotfiles"
description: "Personal dotfiles setup with nix and home-manager."
readmeQualityOk: true
url: "https://github.com/WilliamHsieh/dotfiles"
language: "Lua"
languages: ["Lua", "Nix"]
languagePcts: [55, 23]
topics: ["dotfiles", "neovim", "nvim", "tmux", "zsh", "home-manager", "nix", "nix-darwin", "nixos"]
stars: 17
forks: 3
openIssues: 19
closedIssues: 17
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2017-09-04T15:18:53Z"
lastCommitAt: "2026-10-22T08:52:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 46
maintainers: ["WilliamHsieh", "dependabot[bot]", "GenYuLi"]
openGraphImageUrl: "https://opengraph.githubassets.com/68c6256f09af303dc964471e1aa1e6a54e2ce305e5859e4dc891476da5239046/WilliamHsieh/dotfiles"
---

# dotfiles

These are my configuration for `neovim`, `zsh`, and `tmux` using [nix](https://nixos.org/manual/nix/stable/) and [home-manager](https://github.com/nix-community/home-manager).

## Getting Started

1. install [nix](https://nixos.org/download.html) with the recommended installer provided by [`determinate systems`](https://determinate.systems/)

```bash
curl -fsSL https://install.determinate.systems/nix | sh -s -- install --prefer-upstream-nix
```

2. clone this repo and apply the selected profile

```bash
# only required if git is not present
nix-shell -p git

git clone http://github.com/williamhsieh/dotfiles
./dotfiles/setup.py --bootstrap # show available flags with `--help`
```

3. (optional) download [nerd fonts](https://www.nerdfonts.com/) for the terminal emulator, if home profile is selected

## Feedback

Comments and suggestions are [welcome](https://github.com/WilliamHsieh/dotfiles/issues)!

## About me

- [William Hsieh](https://github.com/williamhsieh/)
- [YouTube](https://www.youtube.com/playlist?list=PL9_ICC0aO5tjEbqj4ivBFsafBx8Rw74fg): Vim tutorial

## Acknowledgements

Inspiration and code were taken from many sources, including:

- [Maxin…
