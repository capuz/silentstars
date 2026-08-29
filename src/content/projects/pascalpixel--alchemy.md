---
repo: "PascalPixel/alchemy"
name: "alchemy"
description: "An automated, clean-room decompilation of Golden Sun, preserving the GBA classic as readable code and assets."
readmeQualityOk: true
url: "https://github.com/PascalPixel/alchemy"
language: "Assembly"
languages: ["Assembly", "C"]
languagePcts: [57, 31]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-17T16:49:43Z"
lastCommitAt: "2026-08-29T17:27:01Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 37
maintainers: ["PascalPixel", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e39749ac7c968be38c17f250b14b81d1145488b266f48182676e9b19293b93/PascalPixel/alchemy"
---

</p>

<h1 align="center">Alchemy</h1>

Alchemy is an unofficial clean-room reconstruction of _Golden Sun_ and
_Golden Sun: The Lost Age_ for the Game Boy Advance. It preserves all six
Japanese and European-language editions of each game from the original
cartridges, with Japanese as the canonical source base and the English
_Golden Sun_ release as the first complete derived build target.

## Status: 52% DONE

## Details

Alchemy rebuilds the games from readable source code, retained assembly, and
named assets while checking the result byte for byte against an approved
cartridge image. The historical editions remain independent from the future
`games/alchemy/` reintegration, so new work cannot weaken their preservation
evidence.

The repository contains one shared source tree per game rather than a copy for
every language. `make targets` checks all twelve edition routes; `make verify`
is the authoritative full-ROM gate for the current `gs1-en` target. Progress
is measured by reconstructed bytes, and retained assembly counts as finished
only when its permanent need is documented and its output is byte-identical.

This is a preservation and decompilation project—not a remake, ROM…
