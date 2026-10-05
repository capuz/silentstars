---
repo: "z0mbix/dotfiles"
name: "dotfiles"
description: "*NIX dot files"
readmeQualityOk: true
url: "https://github.com/z0mbix/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [58, 20]
topics: ["dotfiles"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2011-01-17T17:37:41Z"
lastCommitAt: "2026-10-05T10:46:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 35
maintainers: ["z0mbix"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a3ef7b44cfc6764851ce04ae450b3ac735ce93f4487b870d2d5fde39907930b/z0mbix/dotfiles"
---

# dotfiles

## Install chezmoi

#### Mac

```shell
$ brew install fish chezmoi git neovim ghostty
$ vim /etc/shells # add /opt/homebrew/bin/fish
$ chsh -s /opt/homebrew/bin/fish
```

Quit Terminal, and open Ghostty:

```shell
$ chezmoi init --apply z0mbix
```

#### Linux

```shell
$ sudo apt install fish git neovim
$ BINDIR=~/bin sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply z0mbix
$ sudo chsh -s /usr/bin/fish
```

#### FreeBSD

```shell
$ sudo pkg install chezmoi fish git neovim
$ sudo chsh -s /usr/local/bin/fish
$ chezmoi init --apply z0mbix
```

## Update

```shell
$ chezmoi diff
$ chezmoi apply --verbose
$ chezmoi apply --dry-run
```

## Import home-directory changes

Run these from the chezmoi source directory:

```shell
./scripts/show-modified
./scripts/show-modified --diff
./scripts/import-modified --dry-run
./scripts/import-modified
git diff
```

The diff shows rendered source → home, so added lines are home-directory
changes. Import makes home the source of truth for differing managed regular
files, including when both copies were edited. It does not apply to home or
stage or commit changes. Templates are reported and skipped: merge their edits
manually with…
