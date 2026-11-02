---
repo: "libretro/parallel-n64"
name: "parallel-n64"
description: "Optimized/rewritten Nintendo 64 emulator made specifically for Libretro. Originally based on Mupen64 Plus."
readmeQualityOk: true
url: "https://github.com/libretro/parallel-n64"
language: "C"
languages: ["C", "C++"]
languagePcts: [57, 37]
stars: 412
forks: 156
openIssues: 179
closedIssues: 281
watchers: 43
contributors: 92
recentReleases: 0
createdAt: "2013-06-03T01:11:25Z"
lastCommitAt: "2026-11-02T13:34:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 36
maintainers: ["LibretroAdmin", "cscd98", "pstef"]
openGraphImageUrl: "https://opengraph.githubassets.com/a878abef48f1e79254f55f6dc76b98fef9cdb4db05140e90c0e53b57891a4727/libretro/parallel-n64"
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
