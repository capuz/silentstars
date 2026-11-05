---
repo: "avwohl/ioscpm"
name: "ioscpm"
description: "A Z80/CP/M emulator for iOS and macOS. It emulates the RomWBW HBIOS interface, runs CP/M 2.2 and CP/M 3, and downloads disk images from the RomWBW project."
readmeQualityOk: true
url: "https://github.com/avwohl/ioscpm"
homepage: "https://github.com/avwohl/ioscpm"
language: "Swift"
languages: ["Swift"]
languagePcts: [82]
topics: ["cpm", "emulator", "ios", "macos", "retro-computing", "romwbw", "swift", "z80"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-12-10T16:37:59Z"
lastCommitAt: "2026-11-05T00:21:35Z"
lastReleaseAt: "2026-09-01T17:47:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/455702a13cc8d12d10867637dac8b9f081836ad6515045bac8be3b4d7ffc00a1/avwohl/ioscpm"
---

# iOSCPM - CP/M Emulator for iOS and macOS

A Z80/CP/M emulator for iPhone, iPad and Mac, built on the
[RomWBW](https://github.com/wwarthen/RomWBW) HBIOS platform. It ships on the App
Store as **Z80CPM**; `iOSCPM` is the name of this repository and the Xcode
target. Those three are what this repository builds for. The single App Store
record also offers the app on Apple Vision (visionOS 1.0+), where what installs
is the unmodified iPad app - no xrOS slice is built here and none has been run.
See `KNOWN_PROBLEMS.md`, "The Store offers this app on visionOS".

## Features

- **Z80 emulation** with the RomWBW HBIOS interface, for an authentic CP/M
- **VT100/ANSI and VT52 terminal** with escape sequence support (runs Zork,
  WordStar, Turbo Pascal)
- **Terminal scrollback** - off, or 500 to 10000 lines; drag the screen,
  two-finger trackpad drag or mouse wheel, or Shift+PageUp/PageDown and
  Ctrl+Home/End on a hardware keyboard
- **Configurable key map** - WordStar, VT100/ANSI and VT52 profiles for the
  navigation keys, or per-key custom bindings
- **Multiple disks** - up to 4 units in hd1k format, 8 MB slices
- **No ROM and no disk image is bundled.** Both are downloaded on demand…
