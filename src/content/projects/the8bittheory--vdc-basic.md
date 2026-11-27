---
repo: "The8BitTheory/vdc-basic"
name: "vdc-basic"
description: "A Basic v7 extension for working with VDC memory and registers"
readmeQualityOk: true
url: "https://github.com/The8BitTheory/vdc-basic"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [56, 28]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-01T13:52:53Z"
lastCommitAt: "2026-11-27T16:26:15Z"
lastReleaseAt: "2025-05-23T13:19:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 56
maintainers: ["The8BitTheory"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc4bb285a916e372953f3edd9710ef607b47d18b67b8b8426f8859ccdcf4c39b/The8BitTheory/vdc-basic"
---

# VDC-BASIC

A BASIC 7.0 extension for the Commodore 128 that opens up the 80-column chip (VDC 8563/8568). It adds 28 instructions and 2 functions for reading and writing VDC registers and video RAM, for filling, copying and blitting inside video RAM at the speed of the chip, and (v3) for unpacking run-length coded pictures from CPU RAM into video RAM (`RXV`) and for drawing lines, rectangles and boxes in bitmap (1 bit per pixel) and chunky (4 bits per pixel) pictures (`VDM`, `VDL`, `VDR`, `VDB`).

Current version: **v3** (in development), file `vdcbasic3.bin`, load address `$1C00`. BASIC programs start at `$4001`; the boot loader `boot/boot.bas` (on disk as `BOOT`) sets this up, loads and installs VDC-BASIC:

```
RUN "BOOT"
```

The guide, its listings and the reference describe v3. Every listing of the guide starts with a line that checks that `BOOT` has run (`IF PEEK(46)<>64 …`); `docs/listings/mkdisk.sh` builds a disk image with `BOOT`, `VDCBASIC3`, all listings (tokenised for `$4001`) and their data files.
