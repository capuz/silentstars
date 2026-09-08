---
repo: "dayvster/zenkai"
name: "zenkai"
description: "Just a simple app launcher written in zig with libqt6zig"
readmeQualityOk: true
url: "https://github.com/dayvster/zenkai"
homepage: "https://zenkai-launcher.netlify.app/"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["qt", "qt6", "zig"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-15T21:16:22Z"
lastCommitAt: "2026-09-08T08:16:02Z"
lastReleaseAt: "2026-06-24T17:51:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 47
maintainers: ["dayvster"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0dedce06d36da52eac3d23d1523a21d7f045a1cea7af87da0efcafa9a0f0594/dayvster/zenkai"
---

</p>

# zenkai

A fast app launcher for Linux. Written in Zig with Qt6.

Scans your .desktop files from the usual places, shows you everything in a searchable list, and lets you filter through it as you type with fuzzy matching. Built because apparently 50 other launchers weren't enough.

Thanks to [rcalixte](https://github.com/rcalixte) for [libqt6zig](https://github.com/rcalixte/libqt6zig), the Zig bindings this project is built on.

## Preview
</p>

- [Requirements](#requirements)
- [Building](#building)
- [Using](#using)
- [Examples](#examples)
- [Plugins](#plugins)

## Requirements

- **Zig 0.16.0** - the compiler and build system. Download from [ziglang.org/download](https://ziglang.org/download/) or use your distro's package manager if it has a recent enough version.
- **Qt 6.8.2 development libraries** (Core, Gui, Widgets) - the GUI toolkit. Install `qt6-base-dev` or equivalent for your distro.
- **GCC or Clang** - used by Zig to link C++ code (Qt is written in C++).
- **libstdc++ or libc++** - the C++ standard library, comes with your compiler.
- **pkg-config** - helps the build system find Qt headers and libraries.

Zig fetches the following automatically when you run…
