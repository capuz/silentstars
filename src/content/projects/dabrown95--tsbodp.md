---
repo: "DaBrown95/tsbodp"
name: "tsbodp"
description: "Matching decompilation of The Sims: Bustin' Out for Game Boy Advance."
readmeQualityOk: true
url: "https://github.com/DaBrown95/tsbodp"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-12T17:08:15Z"
lastCommitAt: "2026-11-26T15:23:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 46
maintainers: ["DaBrown95"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5f337836ac98a8a49e12adb03582f59f1b0134ccc64ced161667f5639caf32b/DaBrown95/tsbodp"
---

# The Sims: Bustin' Out

A matching decompilation of *The Sims: Bustin' Out* for the Game Boy Advance.

The game shipped as a compiled ROM, with no source code. This project
rewrites its code as C that, fed through the same kind of compiler the
developers used, produces exactly the same machine code, down to the last
byte. "Matching" is the bar: if a single byte differs, the function does not
count. That makes the C a faithful, checkable record of how the game works.

One set of sources builds two releases of the game:

- **`rev0`**: the multilingual USA/Europe release.
- **`rev1`**: a later USA revision with a handful of bug fixes.

This is an **AI-driven experiment** to see what coding agents can do.
Almost all code, analysis and tooling are AI-generated.

## Status

Both ROMs rebuild byte for byte. Every routine we have found has a matching
source, apart from one in `rev0`, explained
[below](#the-case-of-the-missing-store).

| | `rev0` USA/Europe | `rev1` USA revision 1 |
| --- | ---: | ---: |
| Matching C functions | 2,559 | 2,560 |
| Bytes of code from C | 322,324 | 322,576 |
| Known routines still without C | 1 (124 bytes) | none |
| Whole ROM identical | yes | yes |
