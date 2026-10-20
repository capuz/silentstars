---
repo: "primeapple/dotfiles"
name: "dotfiles"
description: "My personal dotfiles"
readmeQualityOk: true
url: "https://github.com/primeapple/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [53, 24]
topics: ["yadm", "dotfiles", "arch", "fish", "macos", "neovim", "nix"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-07-08T11:26:08Z"
lastCommitAt: "2026-10-20T08:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 70
maintainers: ["primeapple"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c2b23eaa02c12deb0ebd5f981e237b3de98d40403105f1dca743461e5081edf/primeapple/dotfiles"
---

# Dotfiles
This Repository contains my dotfiles as well as scripts to manage the installation and configuration of various applications.

It is managed by [YADM](https://yadm.io/).

Used for the following systems systems:
* MacOS
* [Arch Linux](https://archlinux.org/)
* [Debian](https://www.debian.org/)

## Prerequisites
### MacOS
- Install [Homebrew](https://brew.sh/)

## Installation
To install the Dotfiles, install `yadm` with your package manager (apt/pacman/brew) and run:
```shell
yadm clone --no-bootstrap https://github.com/primeapple/dotfiles
```

Check that there are no local diffs:

```shell
yadm -c core.pager='' diff
# if there are changes, inspect them, then run
yadm checkout "$HOME"
```

Set the corresponding classes of the machine, if needed:
```shell
# if the machine run on nvidia gpu and needs graphical user interface
yadm config --add local.class nvidia
# if the machine is interactively used
yadm config --add local.class workstation
```

Now run the bootstrap script:
```shell
yadm bootstrap
```

You may now need to do some more things:
```shell
yadm decrypt
```

## Follow Up

### MacOS
- Use this Keyboard Layout: https://github.com/carjorvaz/macos-us-altgr-intl…
