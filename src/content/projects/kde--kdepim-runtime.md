---
repo: "KDE/kdepim-runtime"
name: "kdepim-runtime"
description: "Akonadi agents and resources"
readmeQualityOk: true
url: "https://github.com/KDE/kdepim-runtime"
homepage: "https://invent.kde.org/pim/kdepim-runtime"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 17
forks: 8
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 178
recentReleases: 0
createdAt: "2015-09-18T15:13:00Z"
lastCommitAt: "2026-11-20T07:20:42Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 67
maintainers: ["Montel", "mzilinski", "derfenix"]
openGraphImageUrl: "https://opengraph.githubassets.com/94f78be74a5470ef2dc27a9889e921d13bf847708f436036b9701c282a54717d/KDE/kdepim-runtime"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KDE PIM Runtime

This repository contains runtime components for Akonadi. This includes the resources
Akonadi uses to fetch data from various services.

## Building

```shell
cmake -B build .
cmake --build build
cmake --install build
```

To build kdepim-runtime and all required KDE dependencies, use [kdesrc-build](https://invent.kde.org/sdk/kdesrc-build).

## Getting in touch

You can reach the KDE PIM developers on in the [#kontact:kde.org](https://matrix.to/#/#kontact:kde.org)
matrix room, in the #kontact room on libera.chat or on the <kde-pim@kde.org> mailing list.
