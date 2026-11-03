---
repo: "bamos/dotfiles"
name: "dotfiles"
description: "♥ Linux, xmonad, emacs, vim, zsh, tmux"
readmeQualityOk: true
url: "https://github.com/bamos/dotfiles"
language: "Shell"
languages: ["Shell", "Emacs Lisp"]
languagePcts: [59, 24]
stars: 239
forks: 17
openIssues: 0
closedIssues: 21
watchers: 9
contributors: 1
recentReleases: 0
createdAt: "2012-08-02T04:50:21Z"
lastCommitAt: "2026-11-03T19:05:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 23
maintainers: ["bamos"]
openGraphImageUrl: "https://opengraph.githubassets.com/765e01e2efb38f0413a26ac473a1499e5e930743fcc8e8e4440c0ea01966fbca/bamos/dotfiles"
---

# Installation

This repo uses git submodules. The simplest setup is:

```sh
git clone --recursive https://github.com/bamos/dotfiles.git
cd dotfiles
./bootstrap.sh
```

If you already cloned without submodules (or switched protocols), run:

```sh
git submodule sync --recursive
git submodule update --init --recursive
```

`bootstrap.sh` creates the symlinks in your home directory and bootstraps
additional programs.
