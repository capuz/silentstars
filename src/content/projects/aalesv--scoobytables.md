---
repo: "aalesv/ScoobyTables"
name: "ScoobyTables"
description: "Automatic Subaru Denso ROM table markup using machine learning"
readmeQualityOk: true
url: "https://github.com/aalesv/ScoobyTables"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-28T06:52:36Z"
lastCommitAt: "2026-11-25T13:21:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 35
maintainers: ["aalesv"]
openGraphImageUrl: "https://opengraph.githubassets.com/e373da76de3080ab9e472481779c86e6e6f2f0b7e9a8b185f62b27354b8ccf36/aalesv/ScoobyTables"
---

# ScoobyTables

This software is designed for automatic Subaru Denso ROM table markup using machine learning. Currently, only the k-nearest neighbors algorithm is supported because it has distance metrics that can effectively eliminate false positives.

### What's new

#### Version 2026.1125

No new features - refactored to support pandas 3 library.

### Version 2024.0325

Added '--neighbors' and '--random-state' CLI parameters. Edited help and verbose messages.

#### Version 2024.0311

Improved generated ScoobyRom XML definition file compatibility with ScoobyTables. Now table names are capitalized. Added script that adds suffixes `_A`, `_B` etc or `_1`, `_2` etc to same table names. It could be used after predicted definitions cleanup.

#### Version 2024.0302

Implemented support of CSV definitions format

Added definitions file format autodetect (in predict mode)

#### Version 2024.0228

Implemented support of ScoobyRom XML definitions format

## What ROMs are supported

For now, only Subaru Denso ROMs (and maybe other ROMs that have the same table format) are supported. It includes SH7055, SH7058, and SH72531.
