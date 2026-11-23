---
repo: "andete/zerobas"
name: "zerobas"
description: "Clean-room MSX1 Basic + Disk Rom"
readmeQualityOk: true
url: "https://github.com/andete/zerobas"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [68, 30]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-19T09:16:24Z"
lastCommitAt: "2026-11-23T13:26:41Z"
lastReleaseAt: "2026-10-13T19:06:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["andete"]
openGraphImageUrl: "https://opengraph.githubassets.com/78ed497322a7f241d6ba033e2a9ec3ca1fb51f4aa1490a9b9d287e2ffb6aa23a/andete/zerobas"
---

# zerobas

**zerobas** is a **clean-room reimplementation of MSX1 system software** — the BASIC
interpreter, the cassette layer, and the disk interface — derived only from published
interfaces and this project's own black-box observation of real machines, never from
disassembly of the original ROMs. The components mirror the hardware they replace:
[`basic/`](https://github.com/andete/zerobas/blob/HEAD/basic/) (the interpreter, built into a C-BIOS main-ROM image) with its
sub-ROM [`sub/`](https://github.com/andete/zerobas/blob/HEAD/sub/), [`tape/`](https://github.com/andete/zerobas/blob/HEAD/tape/) (the cassette BIOS layer), and
[`disk/`](https://github.com/andete/zerobas/blob/HEAD/disk/) (a disk-interface ROM with its own Disk BASIC and file layer).

It has **two co-equal goals**: producing the clean-room *implementations*, and —
because the same discipline makes the resulting facts publishable — producing
**clean-provenance documentation** of how these systems actually work, especially
where good documentation does not yet exist (see [`MISSION.md`](https://github.com/andete/zerobas/blob/HEAD/MISSION.md)).
