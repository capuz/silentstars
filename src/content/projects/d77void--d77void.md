---
repo: "d77void/d77void"
name: "d77void"
description: "d77void iso creator"
readmeQualityOk: true
url: "https://github.com/d77void/d77void"
homepage: "https://d77void.sourceforge.io"
language: "CSS"
languages: ["CSS"]
languagePcts: [62]
stars: 15
forks: 5
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-26T18:19:53Z"
lastCommitAt: "2026-11-08T15:52:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 75
maintainers: ["claude", "dani-77"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf5a395542ac0cf5ddb9cf98836458b9b620d38464aaee8331ea32596a933267/d77void/d77void"
postedAt: "2026-07-09T20:49:35.337Z"
---

ISO creator for d77void.

---

## Overview

This repository is a fork of void-mklive, heavily modified to include skel for a huge amount of WM and DE.

It is possible to build ISOs with and without Calamares.

Builds with Calamares use the d77void logo throughout the installer and a
four-image slideshow presenting d77void, Void Linux, the available desktop
choices and the project community. The slideshow images fill the available
area and the installer window adapts to smaller screens.

Every variant identifies itself as `d77void GNU/Linux` through
`/etc/os-release`, while `ID_LIKE=void` records its Void Linux base. The file
uses the project website and the `d77void` icon installed with the image.
An XBPS `noextract` rule keeps this symlink when `base-files` is updated;
`xbps-pkgdb -a` reports it as a modified symlink, which is expected.

## Usage

Clone repository

```
git clone https://github.com/d77void/d77void
```

Clone submodules

```
git submodule update --init --checkout
```

Read carefully the INSTALL.md file to know how to use it.

Happy hacking.
