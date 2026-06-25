---
repo: "libretro/parallel-n64"
name: "parallel-n64"
description: "Optimized/rewritten Nintendo 64 emulator made specifically for Libretro. Originally based on Mupen64 Plus."
url: "https://github.com/libretro/parallel-n64"
language: "C"
languages: ["C", "C++"]
languagePcts: [61, 33]
stars: 395
forks: 144
openIssues: 226
closedIssues: 229
watchers: 43
contributors: 87
recentReleases: 0
createdAt: "2013-06-03T01:11:25Z"
lastCommitAt: "2026-06-25T02:06:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 35
maintainers: ["LibretroAdmin", "orbisai0security"]
openGraphImageUrl: "https://opengraph.githubassets.com/17c8dc043f2d791635672dbfc5bd463eb87555edd9800e63f74bfdae3497228e/libretro/parallel-n64"
---

# ParallelN64 (Parallel Launcher Edition)

A fork of [ParallelN64](https://git.libretro.com/libretro/parallel-n64) that adds the GLideN64 graphics plugin and some additional settings and features. Designed to be used with Parallel Launcher.

# Credits

The original ParallelN64 can be found here: https://git.libretro.com/libretro/parallel-n64  

Contributors for the modifications specific to this fork:
 * [Matt Pharoah](https://gitlab.com/mpharoah)
   * Black border fix for ParaLLEl
   * Config to enable/disable unaligned DMA support
   * 16:10 (SteamDeck) widescreen support for GLideN64
   * Support for IS Viewer logging
   * Support for changing the time on the RTC
   * Support for storing the RTC state in savestates
 * [Wiseguy](https://gitlab.com/Mr-Wiseguy)
    * Raw gamecube controller support
 * [Aglab2](https://gitlab.com/aglab2)
    * MoltenVK (MacOS) support for ParaLLEl
    * Black border fix for NTSC roms in GLideN64
    * GLideN64 modifications for supporting old SM64 romhacks
    * Support for detecting save types based on EverDrive headers
    * Support for ROMs larger than 64 MiB
    * Native ARM support for MacOS
 * [devwizard](https://gitlab.com/devwizard64)
    *…
