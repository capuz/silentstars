---
repo: "asdf8601/dotfiles"
name: "dotfiles"
description: "My configuration files."
readmeQualityOk: true
url: "https://github.com/asdf8601/dotfiles"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [67, 20]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-04-25T06:53:19Z"
lastCommitAt: "2026-10-22T08:52:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 71
maintainers: ["asdf8601"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb37a30b991ae2d43b4b879cec3b57e32d35e11d61f8e0b42737da96785a2f1a/asdf8601/dotfiles"
---

# dotfiles

Managed by `stow`.

```bash
brew install stow
# or
sudo apt install stow
```

## Installation

```bash
git clone --recurse-submodules git@github.com:asdf8601/dotfiles.git ~/.dotfiles
```

## Ubuntu

```bash
make ubuntu
```

> **Pending:** the 2026-10-22 changes (direnv, libsecret secrets) were never run
> on Ubuntu. Follow [`ubuntu/TODO.md`](https://github.com/asdf8601/dotfiles/blob/HEAD/ubuntu/TODO.md) before `make ubuntu`.

## macOS

```bash
make macos
```
