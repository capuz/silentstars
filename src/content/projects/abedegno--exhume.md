---
repo: "abedegno/Exhume"
name: "Exhume"
description: "Toolkit and Claude Code skills for byte-matching decompilation of old DOS games, from the Ultima Underworld II decompilation"
readmeQualityOk: true
url: "https://github.com/abedegno/Exhume"
language: "Python"
languages: ["Python", "C"]
languagePcts: [59, 35]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T06:13:46Z"
lastCommitAt: "2026-10-14T08:58:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["abedegno"]
openGraphImageUrl: "https://opengraph.githubassets.com/68d4e18e07ed2100e054e8a4028a88e7a3c9c6cbdecd7587723d34a801e31fd2/abedegno/Exhume"
---

# Exhume

Exhume is a toolkit and a set of Claude Code skills for byte-matching decompilation of old DOS programs: writing C and assembly source that the original compiler, assembler and linker turn back into the same executable, byte for byte.

It is for retro game preservation: people who want a game's source back in a form that provably is the game, as the starting point for study, fixes and ports. It was extracted from the decompilation of Ultima Underworld II (DOS, 1993), its first case study, made in the repository UW2Decomp and now the `uw2/` folder of [Underworld Exhumed](https://github.com/abedegno/underworld-exhumed): all of that game's code rebuilt from source with Borland's 1990 tools, linked into an EXE byte-identical to the original, that runs, and that shows a source change on screen; and then, from the same sources, a native port (built for macOS, Linux and Windows, and verified on the first two) that replays sessions recorded in DOS with the same game state and screen at every checkpoint (docs/case-study-uw2.md).

Underworld Exhumed holds both Ultima Underworld games, UW1 in `uw1/` and UW2 in `uw2/`, each with its full history from the repositories UW1Decomp and…
