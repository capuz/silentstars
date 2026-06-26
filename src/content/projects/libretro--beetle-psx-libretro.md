---
repo: "libretro/beetle-psx-libretro"
name: "beetle-psx-libretro"
description: "Standalone port/fork of Mednafen PSX to the Libretro API."
url: "https://github.com/libretro/beetle-psx-libretro"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 342
forks: 150
openIssues: 234
closedIssues: 384
watchers: 38
contributors: 105
recentReleases: 0
createdAt: "2014-12-03T10:32:06Z"
lastCommitAt: "2026-06-26T23:39:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 37
maintainers: ["LibretroAdmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/894efd7fd585fada571a9d4aa560e6603c67ede0c72bb296b0e1887384f55e12/libretro/beetle-psx-libretro"
---

# Beetle PSX libretro

Beetle PSX is a port/fork of Mednafen's PSX module to the libretro API. It can be compiled in C++98 mode, excluding the Vulkan renderer, which is written in C++11 for the time being. Beetle PSX currently runs on Linux, OSX and Windows.

Notable additions in this fork are:
* PBP and CHD file format support, developed by Zapeth;
* Software renderer internal resolution upscaling, implemented by simias;
* An OpenGL 3.3 renderer, developed by simias;
* A Vulkan renderer, developed by TinyTiger;
* PGXP perspective correct texturing and subpixel precision, developed by iCatButler;
* OpenBIOS, allowing the emulator to be used without a BIOS file;
* HD texture replacement caching overhaul (Vulkan renderer), see [HD_TEXTURE_CACHE.md](HD_TEXTURE_CACHE.md);

## HD texture replacement caching

This fork overhauls the Vulkan renderer's HD texture replacement pipeline so packs stay smooth on demanding content — particularly multi-palette animated sprites like Alucard in *Castlevania: Symphony of the Night*. It adds a three-tier, decode-once cache (VRAM images → RAM pixels → disk, LRU-evicted), binds cached textures in the same frame they're drawn to eliminate per-frame…
