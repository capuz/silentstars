---
repo: "chriskearney/siliconforest"
name: "siliconforest"
description: "Darwin/XNU for Apple silicon: boots natively on an M1 MacBook Pro, with a GPU desktop and Mac app support"
readmeQualityOk: true
url: "https://github.com/chriskearney/siliconforest"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [37, 28]
topics: ["apple-silicon", "asahi-linux", "darwin", "m1", "operating-system", "puredarwin", "wayland", "xnu"]
stars: 278
forks: 12
openIssues: 43
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-10-18T16:45:13Z"
lastCommitAt: "2026-11-20T15:50:40Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 19
maintainers: ["chriskearney"]
openGraphImageUrl: "https://opengraph.githubassets.com/8984af5cd29aa45d8774ebe82280dd902b322cf7f9e1afdff39ff91c781a7928/chriskearney/siliconforest"
---

> **Early, one machine, not released.** SiliconForest runs on a single 13-inch M1 MacBook Pro.
> There is no installer or image for anyone else yet. Details under [Status](#status) and
> [Safety](#safety).

## What is this?

SiliconForest is an open-source operating system built on **Darwin**: Apple's open-source XNU
kernel with an open userland, the same foundation macOS stands on. It is a fork of
[PureDarwin](https://github.com/PureDarwin/PureDarwin), brought up on Apple silicon with
drivers ported from the [Asahi Linux](https://asahilinux.org) project, GPU acceleration
through Mesa, and the Chonkstep desktop.

Because it is Darwin, it can run software built for the Mac. Today that means exactly three
applications, all as unmodified binaries on reimplemented open-source frameworks:
**Mozilla's Firefox**, and **Apple's Terminal** and **Activity Monitor** from the author's own
copies of macOS. It is not general Mac app compatibility, and nothing of Apple's is in this
repository ([what that means](#software)).
