---
repo: "segin/w16"
name: "w16"
description: "Clean-room, public domain reimplementation of Windows 3.1"
readmeQualityOk: true
url: "https://github.com/segin/w16"
language: "C"
languages: ["C"]
languagePcts: [72]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-11-09T01:50:17Z"
lastCommitAt: "2026-11-26T22:58:19Z"
lastReleaseAt: "2026-11-22T17:40:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["segin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9059b997f9ce2484d8191920c23ede1ee031fded7752c90f367265a75569d8e/segin/w16"
---

# w16 

`w16` is a clean-room reimplementation of Microsoft's Windows 3.1 operating system environment created with Claude. 

## Building

See [BUILDING.md](https://github.com/segin/w16/blob/HEAD/BUILDING.md) for details. 

Short info: Use Linux. Put OpenWatcom in `/opt/watcom`. Run `make`.

## Running

Once built, w16 will have the system tree in `build/w16`. Copy this `w16` to an appropriate DOS system's drive root (e.g. `C:\`), `CD` into the `\W16` directory, and run `WIN`. The `/S` and `/3` flags will give you Standard Mode and 386 Enhanced mode, respectively.
