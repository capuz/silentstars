---
repo: "loopyd/bof3-decompilation"
name: "bof3-decompilation"
description: "Reverse engineering and decompilation of Breath of Fire III."
readmeQualityOk: true
url: "https://github.com/loopyd/bof3-decompilation"
language: "Python"
languages: ["Python", "C", "Rust"]
languagePcts: [40, 30, 25]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-31T18:23:01Z"
lastCommitAt: "2026-11-06T13:19:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["loopyd"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4b5d6396ab95a776dfa802c1b68e905b3e99dc2219a8417f1c11ca873a89b0/loopyd/bof3-decompilation"
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
