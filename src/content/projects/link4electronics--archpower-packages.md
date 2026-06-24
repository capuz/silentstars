---
repo: "Link4Electronics/archpower-packages"
name: "archpower-packages"
description: "Packages for ArchPOWER"
url: "https://github.com/Link4Electronics/archpower-packages"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-12T20:38:46Z"
lastCommitAt: "2026-06-24T06:39:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 19
maintainers: ["Link4Electronics"]
openGraphImageUrl: "https://opengraph.githubassets.com/222a6bd3cfc97f3cadf744c1cf86d77f99a0783984b68a9b9c2bb2b88ce05e6f/Link4Electronics/archpower-packages"
---

# archpower-packages
Packages for ArchPOWER

* PowerPC 64-bit big-endian ELFv2 platform
* PowerPC 64-bit little-endian ELFv2 platform (didn't test most of them since don't have a PPC64LE system)
* PowerPC 32-bit platform
* PowerPC 32-bit with AltiVec (G4 only, a repo named `altivec` for packages compiled with -mcpu=7400 -mabi=altivec)
* PowerPC 32-bit with SMP (Wii U espresso, although I don't own a Wii U so have no idea if the packages will work)

Compiled some packages against `[testing]`

## Usage
Adding to pacman.conf (will arrange signature later)
```
[extrappc-any]
SigLevel = Never
Server = https://raw.githubusercontent.com/Link4Electronics/archpower-packages/main/extrappc/any

[extrappc]
SigLevel = Never
Server = https://raw.githubusercontent.com/Link4Electronics/archpower-packages/main/extrappc/$arch
```

`sudo pacman -Syu`

How to manually install:

`sudo pacman -U <package-name>.zst`

lua-filesystem requires to use luarocks to install

`sudo luarocks install <package-name>.rock`

[Mirror](https://archive.org/details/linuxppc64compiled) containing large compiled packages due 100MB microsoft github size limit for free accounts

Command to update repo: repo-add…
