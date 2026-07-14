---
repo: "cih9088/dotfiles"
name: "dotfiles"
description: "personal dotfiles"
readmeQualityOk: true
url: "https://github.com/cih9088/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [65]
topics: ["dotfiles"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-08-25T06:55:42Z"
lastCommitAt: "2026-07-14T05:53:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 39
maintainers: ["cih9088"]
openGraphImageUrl: "https://opengraph.githubassets.com/14a102c3184690a98de386aa08cb5732d4c12e68c0a5174579873bbce26123e4/cih9088/dotfiles"
---

# dotfiles
tested on macOS, Ubuntu, and Redhat.

## Get this repository

```bash
# clone the repository
$ cd ~
$ git clone --recursive https://github.com/cih9088/dotfiles.git ~/dotfiles

# or pull in case you have cloned it already
$ cd ~/dotfiles
$ git pull
$ git submodule update --init --recursive

# make sure that you have following commands `make`, `git`, `sudo`
$ command -V make git sudo

# install them if not exist
# debian
$ apt update && apt install -y make git sudo
# redhat
$ dnf install -y make git sudo
```

## Prerequisites
The following list would be installed in your system. You need privilege (`sudo`).
No need if you have them on your system.
```bash
$ cd ~/dotfiles
$ ./bin/dots test-prerequisites      # Verify which commands are installed
$ ./bin/dots install prerequisites   # Install prerequisites (previlege is needed)
```

## Environement Variables
- `GH_ACCESS`: give maximum of 5,000 rate limits to github REST API \
ex) `GH_ACCESS=client_id:client_secret dots [...]`
- `PREFIX`: change path to install locally (default: `$HOME/.local`) \
ex) `PREFIX=/path/to/install dots [...]`

## `dots` command

- **systemwide**: others could execute those commands (need…
