---
repo: "pld-linux-org/pld-new-rescue"
name: "pld-new-rescue"
description: "The 'new 'PLD Rescue' image'"
readmeQualityOk: true
url: "https://github.com/pld-linux-org/pld-new-rescue"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 24]
stars: 20
forks: 5
openIssues: 2
closedIssues: 10
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2013-11-03T15:45:08Z"
lastCommitAt: "2026-09-20T08:44:22Z"
lastReleaseAt: "2021-02-24T07:46:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 61
maintainers: ["arekm", "janekr"]
openGraphImageUrl: "https://opengraph.githubassets.com/fccb1293cfaa2d1b42b0438a35457f77c43e6f2dc3860788288d363c16c5fe23/pld-linux-org/pld-new-rescue"
---

PLD New Rescue
==============

https://github.com/pld-linux-org/pld-new-rescue

Bootable disk image with 'live' [PLD Linux](http://www.pld-linux.org/) system
aimed especially for system rescue and maintenance.

This project is inspired by the original [PLD Rescue CD](http://rescuecd.pld-linux.org/)

This is still work in progress.

List of packages included in image should be available with the binary releases.

### About this version

This is the 'th-current' branch of the PLD New Rescue, based on most current
PLD Linux Th packages. Due to the dynamic nature of PLD Th and its package
repositories, what builds and works today may fail to build or work tomorrow.
But the software is more up to date.

For reproducible results use code from one of the snapshot branches (like 'th-2018').

Goals
-----

* The image should be compatible with modern computers. This means 64-bit and
  EFI support. (got it!)

* The image should be compatible with old computers. This means 32-bit support
  and low memory requirements. (got it!)

* It should be as easy to boot it from a USB disk as from a CD (got it!)

* Setting up a network boot (PXE, including EFI PXE) should be easy too.

* Everyone…
