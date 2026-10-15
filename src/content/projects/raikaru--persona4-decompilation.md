---
repo: "Raikaru/Persona4-Decompilation"
name: "Persona4-Decompilation"
description: "Matching decompilation of Shin Megami Tensei: Persona 4 for PlayStation 2"
readmeQualityOk: true
url: "https://github.com/Raikaru/Persona4-Decompilation"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["atlus", "decompilation", "mips", "persona-4", "playstation-2", "ps2", "reverse-engineering", "mwcc"]
stars: 40
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T23:25:37Z"
lastCommitAt: "2026-10-15T08:31:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 33
maintainers: ["Raikaru"]
openGraphImageUrl: "https://opengraph.githubassets.com/260d7a8f9665c5f74d58ad23ad4de1f5ea9278398a6fec3d21136b73994e3a3e/Raikaru/Persona4-Decompilation"
---

# Shin Megami Tensei: Persona 4

A work-in-progress matching decompilation of *Shin Megami Tensei: Persona 4*
for the PlayStation 2 (USA v1.00, `SLUS_217.82`). The goal is readable C that
compiles to the original machine code. Unfinished functions still use retail
assembly so the build can reproduce the executable while recovery continues.

This is not a PC port. You need your own disc image and compiler toolchain;
the repository does not include the game executable or disc assets.

## Quickstart

Requirements:

- Python 3.10+, Git and Make.
- GNU MIPS binutils with R5900 support: `mipsel-linux-gnu-as`,
  `mipsel-linux-gnu-ld` and `mipsel-linux-gnu-objcopy`. The
  [decompals build](https://github.com/decompals/binutils-mips-ps2-decompals)
  supports the target.
- MWCCPS2 3.0.1 build 210 for game code and build 119 for RenderWare.
  On Linux, run the Windows compilers through
  [wibo](https://github.com/decompals/wibo).
- ee-gcc 2.96 for the configured GCC units.
- A Persona 4 USA disc image matching the [Redump record](http://redump.org/disc/5576/).

```sh
git clone https://github.com/Raikaru/Persona4-Decompilation.git
cd Persona4-Decompilation
python -m pip install -r…
