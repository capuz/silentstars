---
repo: "libretro/libretro-prboom"
name: "libretro-prboom"
description: "Port of prboom to libretro - plays Doom, Doom II, Final Doom, Heretic, Hexen and other Doom IWAD mods. Working on full ZDoom mod support (WIP)."
readmeQualityOk: true
url: "https://github.com/libretro/libretro-prboom"
language: "C"
languages: ["C", "C++"]
languagePcts: [56, 43]
stars: 75
forks: 56
openIssues: 20
closedIssues: 60
watchers: 12
contributors: 45
recentReleases: 0
createdAt: "2012-05-12T20:31:38Z"
lastCommitAt: "2026-07-18T05:44:34Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 53
maintainers: ["LibretroAdmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/21971fb5e06a50094c6706111ed8137c8148b4f96dcc64b6f4d958333d51db71/libretro/libretro-prboom"
---

# libretro-prboom

A libretro core based on the **PrBoom** Doom engine, extended with modern
demo-compatibility levels, UMAPINFO, and an extensive compatibility layer for
loading and playing **ZDoom-targeted mods** on a Boom/MBF-class engine.

It renders through an 8-bit paletted software renderer, needs no GL, and runs
anywhere libretro does — desktop, mobile, and consoles.

---

## Supported games

The core auto-detects the IWAD and configures itself for the right game:

- **Doom**, **The Ultimate Doom**, **Doom II**, **Final Doom** (TNT: Evilution,
  The Plutonia Experiment), and the shareware **doom1.wad**
- **Heretic** and **Hexen** (full game logic, not just map loading)
- **FreeDoom** (Phase 1 & 2)
- **Chex Quest** (including the ZDoom-targeted `chex3.wad`) and **HacX**
- Standalone / total-conversion IWADs that ship as Doom-format wads

You still need a valid IWAD — the engine provides the code, not the game data.

## Content formats

- **IWAD / PWAD** `.wad` files, including multi-PWAD load orders
- **PK3 / ZIP** archives (`.pk3`, `.zip`) with ZDoom folder-namespace layout
- **DeHackEd / BEX** patches (`.deh`, `.bex`), standalone or in-wad (`DEHACKED`)
- **`.lmp`** demos…
