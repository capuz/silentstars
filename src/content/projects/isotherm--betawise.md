---
repo: "isotherm/betawise"
name: "betawise"
description: "Tools to create applets for the AlphaSmart NEO / NEO2."
readmeQualityOk: true
url: "https://github.com/isotherm/betawise"
language: "Assembly"
languages: ["Assembly", "C"]
languagePcts: [49, 42]
topics: ["alphasmart"]
stars: 50
forks: 4
openIssues: 3
closedIssues: 8
watchers: 12
contributors: 3
recentReleases: 0
createdAt: "2020-06-30T20:39:04Z"
lastCommitAt: "2026-11-19T05:05:28Z"
lastReleaseAt: "2021-09-22T14:50:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 41
maintainers: ["isotherm", "SamDelorean"]
openGraphImageUrl: "https://opengraph.githubassets.com/746e81ac779428d89039938c6140bfa721b612c88c8c414ed11c15018a33d501/isotherm/betawise"
---

# BetaWise
Several custom applets for the AlphaSmart NEO / NEO2, and tools to create them.

## SmartApplet ID Block Registry

Use the [SmartApplet ID block registry](https://github.com/isotherm/betawise/blob/HEAD/applets/REGISTRY.md) to look up assignments or request a block.

## Compiling
Any `m68k-elf` gcc cross compiler should work. On Windows, I have successfully
used [MinGW GCC for M68K](https://sourceforge.net/projects/mingw-gcc-68k-elf/).

Initialize the pinned MicroPython and UCBLogo submodules before building
all applets from the repository root.

```sh
git submodule update --init applets/MicroPython/upstream applets/UCBLogo/upstream
make -j4
```

`libos3k.a` supplies 68000 integer and soft-float helpers through the
normal applet link. See the [compiler runtime notes](https://github.com/isotherm/betawise/blob/HEAD/os3k/compiler-rt/README.md)
for the source pin and arithmetic test.

OS3K applets should support two-byte alignment for their RAM and flash
bases. Firmware placement may put either base two bytes past a
four-byte boundary, even when the linker aligns offsets within an
applet image.
