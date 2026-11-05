---
repo: "avwohl/z80cpmw"
name: "z80cpmw"
description: "A Z80/CP/M emulator for Windows. It emulates the RomWBW HBIOS interface in native Windows code, shows a VT100 terminal with scrollback, and boots CP/M or ZSDOS from disk images."
readmeQualityOk: true
url: "https://github.com/avwohl/z80cpmw"
homepage: "https://github.com/avwohl/z80cpmw"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["cpm", "emulator", "retro-computing", "romwbw", "windows", "z80"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2025-12-16T13:19:57Z"
lastCommitAt: "2026-11-05T00:21:39Z"
lastReleaseAt: "2026-09-13T23:54:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bef0e848733138c9f08620631a72c1d3e5bb8fdbfff1792276fb2168b28be423/avwohl/z80cpmw"
---

# z80cpmw

Z80 CP/M emulator for Windows. A native Windows port of the RomWBW/HBIOS
emulator.

## Download

- **Signed sideload build:** take the `.msix` from
  [the latest release](https://github.com/avwohl/z80cpmw/releases/latest).
  Download and double-click; the Azure Trusted Signing certificate chains to a
  Microsoft public root, so no developer mode and no certificate import are
  needed. (The link names no file on purpose: every package carries its version
  in its name, so there is no stable filename for
  `releases/latest/download/` to resolve.)
- **Microsoft Store:** search for **Z80CPM**. Microsoft signs it and it updates
  itself, which makes it the easiest way in.
- The two packages carry different publishers, so the sideload build installs
  **side-by-side** with a Store install rather than replacing it, and it updates
  in place over any earlier beta. Uninstall whichever you do not want.
- All releases: [github.com/avwohl/z80cpmw/releases](https://github.com/avwohl/z80cpmw/releases)
- What changed in each version: [CHANGELOG.md](https://github.com/avwohl/z80cpmw/blob/HEAD/CHANGELOG.md)

**Neither package ships a ROM or a disk image**, so **the first run needs a…
