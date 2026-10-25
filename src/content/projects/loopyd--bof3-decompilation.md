---
repo: "loopyd/bof3-decompilation"
name: "bof3-decompilation"
description: "Reverse engineering and decompilation of Breath of Fire III."
readmeQualityOk: true
url: "https://github.com/loopyd/bof3-decompilation"
language: "Python"
languages: ["Python", "Rust", "C"]
languagePcts: [46, 27, 26]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-31T18:23:01Z"
lastCommitAt: "2026-10-25T08:39:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 54
maintainers: ["loopyd"]
openGraphImageUrl: "https://opengraph.githubassets.com/8019c3e8ab2081cc67be2edad07acaf001f969f434f25dc0818f6aa592fe9dfc/loopyd/bof3-decompilation"
---

# Breath of Fire III decompilation

This project reconstructs the PlayStation version of *Breath of Fire III* as
readable C code. The goal is to rebuild the game's code and data so they match
the original game byte for byte, while documenting how the game works.

The work targets the US release. It covers the main executable and the modules
the game loads while running, including code for battles, menus, world areas,
audio and other systems. Reconstruction is ongoing.

## How it works

The original game binaries are the reference. We recover C89 source, compile it
with GCC 2.7.2-PSX and maspsx, and compare the result with the original bytes.
Emulator observations and analysis of the original code help establish what
each function does and which names and types are justified.

The game loads separate modules into memory, sometimes reusing the same
addresses. Each function therefore belongs to a specific game image as well as
an address. The [matching guide](https://github.com/loopyd/bof3-decompilation/blob/HEAD/docs/agents/matching.md) explains how to work on
a function and verify it against the right image.

## What you'll find

- Recovered game source in…
