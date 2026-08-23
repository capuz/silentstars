---
repo: "orsonteodoro/oiledmachine-overlay"
name: "oiledmachine-overlay"
description: "Another ebuild overlay for the Gentoo Linux operating system containing enhancements, game development, apps."
readmeQualityOk: true
url: "https://github.com/orsonteodoro/oiledmachine-overlay"
language: "HTML"
languages: ["HTML"]
languagePcts: [94]
stars: 31
forks: 8
openIssues: 10
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-01-14T02:53:49Z"
lastCommitAt: "2026-08-23T04:08:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 70
undervaluedScore: 55
maintainers: ["orsonteodoro"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec12e2085be3e1d9fffc6711d000f2973a737d0442c65ef799e1dc01215c9a67/orsonteodoro/oiledmachine-overlay"
discussionCount: 2
---

# oiledmachine-overlay

## About

This ebuild overlay contains various ebuilds for the Gentoo Linux distribution.
It focuses on appropriate security and performance, game development,
the AI boom, JS based desktop apps, and legacy hardware support.

The name of the repo comes from "a well oiled machine", running smoothly and
efficient under high memory pressure or heavy IO while maintaining overall
happiness.

## AI notice

This ebuild overlay uses AI generated code and synthetic data in the ebuilds,
patches, and documentation.

## Adding the repo

```
emerge app-eselect/eselect-repository
eselect repository add oiledmachine-overlay git https://github.com/orsonteodoro/oiledmachine-overlay.git
```

## Keep in sync by

```
emaint sync -A
```

or

```
emaint sync --repo oiledmachine-overlay
```

## Overlay bug fixes and news

Overlay bugs and fixes are addressed with the `eselect news` command, a feature
that I almost never use.  This overlay uses this system to post
**_critical bugs and fixes_** that cannot be simply fixed through automated means
but by required manual intervention.  You may read the full text by navigating
to the .txt file at:

*…
