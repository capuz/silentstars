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
recentReleases: 1
createdAt: "2025-11-12T20:38:46Z"
lastCommitAt: "2026-06-25T06:40:28Z"
lastReleaseAt: "2026-06-24T23:01:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["Link4Electronics"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bfa50906b950edbdb28947e8401f904dfb80f23acdc5676af462532751e8e5d/Link4Electronics/archpower-packages"
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
