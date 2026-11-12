---
repo: "DesktopECHO/ika"
name: "ika"
description: "Android 16 Desktop/TV with GPU acceleration for x86-64 and Apple Silicon.  Ika-build creates a LineageOS VM from source and creates packages for Fedora, Debian, Arch Linux, and Windows Subsystem for Linux."
readmeQualityOk: true
url: "https://github.com/DesktopECHO/ika"
homepage: "https://github.com/DesktopECHO/ika"
language: "C++"
languages: ["C++", "C"]
languagePcts: [57, 20]
topics: ["android", "avd", "cuttlefish", "fedora", "linux", "arch", "arch-packages", "debian", "debian-packages", "fedora-packages"]
stars: 73
forks: 3
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-04-26T18:42:22Z"
lastCommitAt: "2026-11-12T05:41:05Z"
lastReleaseAt: "2026-11-09T21:19:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 43
maintainers: ["DesktopECHO", "vintoware"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1221838836/0c2d92ed-3f92-4646-b95f-ccda1bceda7d"
discussionCount: 6
---

**README**&nbsp; • &nbsp;[Download](https://github.com/DesktopECHO/ika/blob/HEAD/DOWNLOAD.md)&nbsp; • &nbsp;[Using Ika](https://github.com/DesktopECHO/ika/blob/HEAD/USAGE.md)&nbsp; • &nbsp;[Configuration](https://github.com/DesktopECHO/ika/blob/HEAD/CONFIGURATION.md)&nbsp; • &nbsp;[Graphics](https://github.com/DesktopECHO/ika/blob/HEAD/GRAPHICS.md)&nbsp; • &nbsp;[Building](https://github.com/DesktopECHO/ika/blob/HEAD/BUILDING.md)

# イカ · Ika Virtual Desktop

**Ika** _/ee-kah/_, Japanese for squid or cuttlefish, is an Android emulator origianlly made for Asahi Linux on Apple Silicon.  Later, support was added for x86-64 and Windows (via WSL).  It's LineageOS 23.2 (Android 16), built as a desktop operating
system, in a [Cuttlefish](https://source.android.com/setup/create/cuttlefish)
virtual machine.

## Features

- **Hybrid Desktop/TV ROM:** Start Android with resizable app windows and a taskbar (like GoogleBook OS), or in big-screen TV mode with Android TV's user interface.
- **GPU acceleration:** OpenGL ES 3.2 and Vulkan on the host's GPU, through
  gfxstream.
- **The console:** Android's desktop appears in windowed or fullscreen mode on your desktop.  The display follows the…
