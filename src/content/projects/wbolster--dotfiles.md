---
repo: "wbolster/dotfiles"
name: "dotfiles"
description: "Personal configuration files (dot files)"
readmeQualityOk: true
url: "https://github.com/wbolster/dotfiles"
language: "Emacs Lisp"
languages: ["Emacs Lisp", "Shell"]
languagePcts: [54, 33]
stars: 21
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2012-09-03T22:10:59Z"
lastCommitAt: "2026-07-04T23:10:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 62
maintainers: ["wbolster"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ea92a6d5359d622374114f9addcf3a7cfb200aa3347ae3631c5975e95b8eead/wbolster/dotfiles"
---

# Configuration

This is my repository of personal configuration settings for various
pieces of software. Feel free to look around.

I use this repository as follows:

- A clone (and checkout) of this repo is placed in my home directory,
  usually in `~/dotfiles/`.
- My home directory contains various symlinks to the files and
  directories in this repository, e.g. `~/.bashrc` points to
  `~/dotfiles/bash/bashrc`.
- The `update-symlinks` script installs/updates these symlinks, based
  on the configuration specified in the `symlinks.conf` file.
