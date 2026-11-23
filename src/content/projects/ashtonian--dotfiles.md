---
repo: "ashtonian/dotfiles"
name: "dotfiles"
description: "macOS & windows dotfiles & post install scripts - better defaults, productive os, awesome tools."
readmeQualityOk: true
url: "https://github.com/ashtonian/dotfiles"
language: "Shell"
languages: ["Shell", "Go", "Python"]
languagePcts: [41, 26, 26]
topics: ["macos", "dotfiles", "zsh", "post-install", "configuration"]
stars: 13
forks: 0
openIssues: 10
closedIssues: 5
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2015-07-30T02:23:12Z"
lastCommitAt: "2026-11-23T10:18:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 58
maintainers: ["ashtonian"]
openGraphImageUrl: "https://opengraph.githubassets.com/b00eb8b56215e388e7b07f1fd2d3feb879f4a88560476ffb39fc2e1efc73b7f0/ashtonian/dotfiles"
---

# dotfiles

Personal macOS configuration: modular Zsh, per-machine features installed by
the `dotfiles` engine, Homebrew tooling, signed Git sync, app backups, and local
coding-agent services.

See [Operations](https://github.com/ashtonian/dotfiles/blob/HEAD/docs/OPERATIONS.md) for configuration, signing, backup restore,
and failure recovery; [Structure](https://github.com/ashtonian/dotfiles/blob/HEAD/STRUCTURE.md) maps the implementation. The
[software notes](https://github.com/ashtonian/dotfiles/blob/HEAD/Software.md), [installed-software snapshot](https://github.com/ashtonian/dotfiles/blob/HEAD/software_list.md),
and [Windows files](https://github.com/ashtonian/dotfiles/blob/HEAD/win10/readme.md) are historical references.

## Quick Start

On a fresh Mac, run `xcode-select --install` and finish the Command Line Tools
installation before using Git to clone the repository.

```sh
git clone https://github.com/ashtonian/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
less install.sh profiles/*.toml
~/.dotfiles/install.sh --profiles base,dev,desktop
```
