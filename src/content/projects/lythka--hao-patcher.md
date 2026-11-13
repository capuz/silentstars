---
repo: "lythka/hao-patcher"
name: "hao-patcher"
description: "Golden Gate (macOS 27) image builder for MacBookPro9,2"
readmeQualityOk: true
url: "https://github.com/lythka/hao-patcher"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-11-10T21:06:13Z"
lastCommitAt: "2026-11-13T18:35:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["lythka"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0ce0c4acd78cf9b1fc8108dafd11a89ebc5d469f0ec30c6486ba009849af7de/lythka/hao-patcher"
---

# hao-patcher

hao-patcher builds disk images of **macOS 27 (Golden Gate) for Intel x86_64 Macs**. The current build is
macOS 27.2.1 (26B131).

macOS 27 does not support Intel Macs, so the image is built in layers: Golden Gate's own System and Data, the Intel
kernel extensions, drivers and boot files macOS 26 (Tahoe) still ships, legacy hardware support from OpenCore Legacy
Patcher, a set of compatibility fixes, and [hao-runtime](https://github.com/lythka/hao-runtime), which runs Golden
Gate's ARM-only programs on the Intel CPU.

[Gallery](https://github.com/lythka/hao-patcher/blob/HEAD/docs/gallery.md) · [Progress](https://github.com/lythka/hao-patcher/blob/HEAD/docs/progress.md) · [Building](https://github.com/lythka/hao-patcher/blob/HEAD/docs/building.md) ·
[Buy me a coffee](https://buymeacoffee.com/lythka)

## Status

Experimental. Developed and tested on a 2012 13-inch MacBook Pro (MacBookPro9,2: Ivy Bridge, Intel HD 4000); other
Intel Macs are untested. Tested with macOS 27.2.1 (26B131); "next image" means built, not yet tested on hardware.

| Area | State | Notes |
|---|---|---|
| Startup and Setup | Works | Screen on about 45 s after the kernel starts; Setup, account…
