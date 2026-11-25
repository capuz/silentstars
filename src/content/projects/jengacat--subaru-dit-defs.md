---
repo: "Jengacat/subaru-dit-defs"
name: "subaru-dit-defs"
description: "Experimental Subaru DIT ECU Definitions Derived from ECU RE Efforts"
readmeQualityOk: true
url: "https://github.com/Jengacat/subaru-dit-defs"
language: "PowerShell"
languages: ["PowerShell", "Python"]
languagePcts: [51, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-11-03T05:38:38Z"
lastCommitAt: "2026-11-25T03:13:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["Jengacat"]
openGraphImageUrl: "https://opengraph.githubassets.com/8872dd8ed6dc79c4dfd39751eb3a8a4d1edd3102822922a46ea452ae4264ecd1/Jengacat/subaru-dit-defs"
---

# subaru-dit-defs

RomRaider and EcuFlash definitions, logging tools and a tuning guide for Subaru's Direct-Injected Turbocharged engine ECU's- encompassing the FA20DIT, FB16DIT, and FA24DIT engine platforms. The list of supported ROM's, and which files each car uses, is below.

The definitions were built from scratch from my own analysis of stock ROMs. No existing community definition was
used as a source, so table names, scalings and descriptions are my own. Every table carries a plain-English summary
and a description of what the ECU does with it.

Across the supported ROMs, each definition averages roughly **1,200 entries**: about 1,000 maps and curves and
about 140 single values and switches. On top of that, each has a table for every trouble code (about 225), with its enable and fail-safe settings. The exact count for
each ROM is in the [lists below](#supported-roms).
