---
repo: "tinic/png2amiga"
name: "png2amiga"
description: "PNG/JPEG to Commodore Amiga graphics converter — OCS/AGA bitplane, HAM6/HAM8, EHB, copper palettes, 64 dithering modes and much more"
readmeQualityOk: true
url: "https://github.com/tinic/png2amiga"
homepage: "https://png2amiga.app"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["aga", "amiga", "bitplane", "commodore", "copper", "demoscene", "dithering", "ecs", "iff", "ilbm"]
stars: 9
forks: 1
openIssues: 6
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-07T04:29:07Z"
lastCommitAt: "2026-10-17T07:59:02Z"
lastReleaseAt: "2026-04-23T01:26:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 50
maintainers: ["tinic"]
openGraphImageUrl: "https://opengraph.githubassets.com/da88ac98cf527aed78c80a50bf48f77d0466991a97b2dd2d04f41213e79fb556/tinic/png2amiga"
---

# png2amiga

**Open-source** PNG/JPEG/WebP → Commodore Amiga, Atari ST/STE,
IBM PC (CGA / EGA / VGA), Commodore 64, Sega Genesis, and SNES Mode 7
image converter. Supports OCS/AGA bitplane, HAM6/HAM8, EHB, and
**sliced-HAM (SHAM) via copper palettes** with perceptual OKLab color
matching. Writes IFF ILBM, Degas `.PI1`/`.PI2`/`.PI3`, C64 `.prg` /
`.koa` / `.hir`, Genesis SGDK headers, SNES tile/tilemap `.bin`, C
headers, raw bitplanes, and standalone AmigaOS viewer `.cpp` source.
The bundled `build-amiga.sh` wrapper runs the included
`m68k-amiga-elf-gcc` + `exe2adf` toolchain to turn the `.cpp` into a
runnable `.exe` and bootable `.adf`. DOS-mode `.c` output compiles
with `ia16-elf-gcc` into a 16-bit real-mode viewer.

**[Try it in your browser at png2amiga.app](https://www.png2amiga.app)** —
live preview via WebAssembly, server-side compile to Amiga executables.

Aimed at retro-platform asset pipelines (Amiga / Atari / IBM PC
demoscene, hobby AmigaOS games, MS-DOS coding). All color operations
use [OKLab](https://bottosson.github.io/posts/oklab/) perceptual color
space. Sister project to [png2c64](https://github.com/tinic/png2c64).

## Features

**Amiga modes**: Lores / Hires (+…
