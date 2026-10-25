---
repo: "ELY-Open-Source/ELYTerminal"
name: "ELYTerminal"
description: "A terminal on GPUI and Ely components"
readmeQualityOk: true
url: "https://github.com/ELY-Open-Source/ELYTerminal"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 171
forks: 11
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-10-20T00:23:23Z"
lastCommitAt: "2026-10-25T08:40:00Z"
lastReleaseAt: "2026-10-25T06:10:51Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 34
maintainers: ["Raiden-MeixElysia", "yaoyao368345", "totorowldox"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f7ad4b19eb2e5d391964c2d83706de85f20ec4f6f8a6d219c40493c6951e416/ELY-Open-Source/ELYTerminal"
---

# ELYTerminal

A terminal for macOS, Windows and Linux, in Rust on GPUI and Ely components. Sessions sit on the left, the terminal in the middle, Git or Files on the right. Every setting has a control in the settings window.

## Install

A [release on GitHub](https://github.com/ELY-Open-Source/ELYTerminal/releases) carries builds for each platform.

- macOS 11 or later, Apple silicon: open `ELYTerminal-VERSION.dmg` and drag ELYTerminal into Applications. The app is signed with Developer ID and notarized.
- Windows 10 or later, x86_64: unzip `ELYTerminal-VERSION-windows-x86_64.zip` and run `elyterminal.exe`. It is unsigned; if SmartScreen stops it, press More info, then Run anyway.
- Linux, x86_64: choose a package below.

### Linux

Replace `VERSION` with the release's version. Linux builds need glibc 2.35 or
later, an X11 or Wayland desktop and working graphics drivers. Native packages
install the runtime libraries, desktop entry and icon through the package manager.
The formats below can be built with `scripts/linux-packages.sh`. Use the assets
actually listed for your selected release; packaging CI artifacts are separate
downloads.

On Ubuntu 22.04, Ubuntu 24.04 or Debian 12:…
