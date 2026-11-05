---
repo: "avwohl/cpmdroid"
name: "cpmdroid"
description: "A Z80/CP/M emulator for Android phones and tablets. It emulates the RomWBW HBIOS interface and a VT100 terminal, so CP/M programs such as Zork and WordStar run without changes."
readmeQualityOk: true
url: "https://github.com/avwohl/cpmdroid"
homepage: "https://github.com/avwohl/cpmdroid"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [88]
topics: ["android", "cpm", "emulator", "kotlin", "retro-computing", "romwbw", "z80"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-10T23:20:43Z"
lastCommitAt: "2026-11-05T00:21:41Z"
lastReleaseAt: "2026-01-16T17:35:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 58
maintainers: ["avwohl"]
openGraphImageUrl: "https://opengraph.githubassets.com/45a3101ba34cf4d94f0ef0615fb64b37652cb5641a6556dc539d3ad353eaa96c/avwohl/cpmdroid"
---

# CPMDroid - CP/M Emulator for Android

A Z80/CP/M emulator for Android phones and tablets, built on the
[RomWBW](https://github.com/wwarthen/RomWBW) HBIOS platform.

## Features

- **Z80 emulation** with the RomWBW HBIOS interface
- **ANSI/VT100 terminal with VT52** - cursor motion, a scrolling region,
  save/restore, insert and delete, 16-colour SGR foreground and background,
  per-cell bold, underline, blink and reverse, and scrollback
- **Four disk slots**, hd1k format - a single 8 MB slice, or a multi-slice
  combo image
- **Nothing bundled** - the ROM and every disk image come from the interface-v0
  catalog in [romwbw_disks](https://github.com/avwohl/romwbw_disks), each
  download checked against the size and SHA-256 that catalog publishes
- **Hardware keyboard support** - Bluetooth and USB
- **Control strip** - Ctrl, Esc, Tab, Copy and Paste buttons for touch input
- **Help system** - seven topics shipped in the APK as a floor, refreshed from
  the catalog index when there is a network and cached after that
- **R8/W8 file transfer** - move files between Android and CP/M, with an in-app
  Imports/Exports browser, save-as and share out, and a picker in. CPMDroid is
  also a…
