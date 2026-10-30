---
repo: "VUP-Linux/vup"
name: "vup"
description: "VUP + Vuru: A Package manager & User Repo for Void Linux"
readmeQualityOk: true
url: "https://github.com/VUP-Linux/vup"
homepage: "https://voiduserpackages.org/"
language: "Shell"
languages: ["Shell", "Odin"]
languagePcts: [66, 21]
topics: ["package-manager", "user", "void-linux", "void-packages"]
stars: 52
forks: 7
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-11T04:53:09Z"
lastCommitAt: "2026-10-30T10:22:45Z"
lastReleaseAt: "2026-01-12T04:59:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 45
maintainers: ["AmarBego", "forkfoundinkitchenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f548f1f29b1d1fe19a25c1cb7c15b88910e90ebafd152852c196e8d985a18e8/VUP-Linux/vup"
discussionCount: 0
---

# VUP – Void User Packages

Community package repository for Void Linux, with prebuilt `.xbps` packages and
optional local builds from VUP templates.

**vuru** is a package manager for VUP, similar to paru/yay for the AUR. Written in [Odin](https://odin-lang.org).

See the [Vuru README](https://github.com/VUP-Linux/vup/blob/HEAD/vuru/README.md) for build instructions, configuration,
install modes, and dependency behavior.

## Install

```bash
sudo xbps-install -R https://github.com/VUP-Linux/vup/releases/download/core-x86_64-current -S vuru
```

Launch Vuru once as your regular user to choose whether VUP packages should be
built locally or installed from the prebuilt repositories:

```bash
vuru
```

Press `y` to make local builds the default, or press Enter to use prebuilt
packages. Vuru saves the choice in `~/.config/vuru/config.conf`.

## Quick Start

```bash
vuru search cstow          # search VUP and official repositories
vuru install cstow         # install using the saved default
vuru query cstow           # show package information
vuru remove cstow          # remove a package
vuru update                # update installed packages
```

Run `vuru --help` for the complete…
