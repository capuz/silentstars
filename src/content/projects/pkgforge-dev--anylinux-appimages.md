---
repo: "pkgforge-dev/Anylinux-AppImages"
name: "Anylinux-AppImages"
description: "AppImages That Truly Work On Any Linux System (Even musl-libc and non-FHS systems)"
url: "https://github.com/pkgforge-dev/Anylinux-AppImages"
homepage: "https://pkgforge-dev.github.io/Anylinux-AppImages/"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 201
forks: 30
openIssues: 53
closedIssues: 188
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2024-11-23T04:36:20Z"
lastCommitAt: "2026-06-27T06:22:18Z"
lastReleaseAt: "2025-10-17T07:37:08Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 42
maintainers: ["Samueru-sama", "github-actions[bot]", "Link4Electronics"]
openGraphImageUrl: "https://opengraph.githubassets.com/3328f4735fb787df07bc4ce76957b4e1990fd0cc76673213ab8d3abc18db702d/pkgforge-dev/Anylinux-AppImages"
discussionCount: 6
---

---
layout: default
title: Home
permalink: /
---

## **Anylinux AppImages**

Designed to run seamlessly on any Linux distribution, including very very old distributions and musl-based ones. Our AppImages bundle all the needed dependencies and do not depend on host libraries to work, unlike most other AppImages, **all while being significantly smaller thanks to [DwarFS](https://github.com/mhx/dwarfs) and [optimized packages](https://github.com/pkgforge-dev/archlinux-pkgs-debloated)**.

Most of the AppImages are made with [sharun](https://github.com/pkgforge-dev/Anylinux-sharun). We also use an alternative better [runtime](https://github.com/VHSgunzo/uruntime).

The uruntime [automatically falls back to using namespaces](https://github.com/VHSgunzo/uruntime?tab=readme-ov-file#built-in-configuration) if FUSE is not available at all, and if namespaces are not possible it falls back to extract and run, so we **truly have 0 requirements:**

| Format | Requirements |
| --- | --- |
| Traditional AppImages (made by linuxdeploy or similar tools) | **Hard dependency on glibc** (rarely works on distros older than 4 years), also has a soft dependency on **FUSE** since the user has to manually…
