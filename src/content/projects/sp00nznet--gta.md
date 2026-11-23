---
repo: "sp00nznet/gta"
name: "gta"
description: "Static recompilation of the original Grand Theft Auto (1997), GTA London 1969/1961, and Grand Theft Auto 2 (1999) for modern Windows (x86-64)"
readmeQualityOk: true
url: "https://github.com/sp00nznet/gta"
language: "C"
languages: ["C"]
languagePcts: [92]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T07:15:41Z"
lastCommitAt: "2026-11-23T10:31:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 23
maintainers: ["sp00nznet"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fac6d0d2110b562df4beeee86407ba27b5cbaec7a5f502817effc3172cc3498/sp00nznet/gta"
---

# Grand Theft Auto -- Static Recompilation

A static recompilation of the original **Grand Theft Auto** (1997) by DMA Design,
targeting modern Windows. No emulation: the original x86 machine code is lifted
to compilable C, linked against modern replacements for the legacy APIs, and
compiled into a native executable.

Built on the [pcrecomp](https://github.com/sp00nznet/pcrecomp) toolchain, with
no commercial tools: pcrecomp's own disassembler finds the functions and its
lifter writes the C.

It plays. You walk the streets of Liberty City, take a car and drive it.

*Every pixel comes from the game's own code: the recompiled renderer drawing
into a DirectDraw flipping chain the port builds out of its own COM vtables.
Captured from that surface, not from the screen.*

## Getting Started

You need **your own copy** of the game. This repository never includes game
files, and nothing from the game is downloaded for you.
