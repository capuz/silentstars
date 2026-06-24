---
repo: "pkgforge-dev/Anylinux-AppImages"
name: "Anylinux-AppImages"
description: "AppImages That Truly Work On Any Linux System (Even musl-libc and non-FHS systems)"
url: "https://github.com/pkgforge-dev/Anylinux-AppImages"
homepage: "https://pkgforge-dev.github.io/Anylinux-AppImages/"
language: "Shell"
languages: ["Shell"]
languagePcts: [85]
stars: 199
forks: 29
openIssues: 53
closedIssues: 188
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2024-11-23T04:36:20Z"
lastCommitAt: "2026-06-24T06:39:27Z"
lastReleaseAt: "2025-10-17T07:37:08Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 42
maintainers: ["Samueru-sama", "github-actions[bot]", "Link4Electronics"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed20c193cbe2f51d175f09be3bce61f108e7d63c117136adda2b158d32d6e3bf/pkgforge-dev/Anylinux-AppImages"
discussionCount: 6
---

---
layout: default
title: Home
permalink: /
---

## **Anylinux AppImages**

![Downloads](https://img.shields.io/endpoint?url=https://cdn.jsdelivr.net/gh/pkgforge-dev/Anylinux-AppImages@main/.github/badge.json)

Designed to run seamlessly on any Linux distribution, including very very old distributions and musl-based ones. Our AppImages bundle all the needed dependencies and do not depend on host libraries to work, unlike most other AppImages, **all while being significantly smaller thanks to [DwarFS](https://github.com/mhx/dwarfs) and [optimized packages](https://github.com/pkgforge-dev/archlinux-pkgs-debloated)**.

Most of the AppImages are made with [sharun](https://github.com/VHSgunzo/sharun). We also use an alternative better [runtime](https://github.com/VHSgunzo/uruntime).

The uruntime [automatically falls back to using namespaces](https://github.com/VHSgunzo/uruntime?tab=readme-ov-file#built-in-configuration) if FUSE is not available at all, and if namespaces are not possible it falls back to extract and run, so we **truly have 0 requirements:**

| Format | Requirements |
| --- | --- |
| Traditional AppImages (made by linuxdeploy or similar tools) | **Hard dependency on…
