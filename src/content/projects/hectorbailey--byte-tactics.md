---
repo: "HectorBailey/byte-tactics"
name: "byte-tactics"
description: "TA: Byte Tactics, a matching decompilation of Total Annihilation"
readmeQualityOk: true
url: "https://github.com/HectorBailey/byte-tactics"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 47
forks: 12
openIssues: 39
closedIssues: 3226
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-26T22:05:21Z"
lastCommitAt: "2026-10-21T17:31:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["giveen", "CubeB"]
openGraphImageUrl: "https://opengraph.githubassets.com/38c4a58d4c135d00e4f3ca19a77159a2a1ba73153d25c2805098b641e6937b93/HectorBailey/byte-tactics"
---

---

## What is this?

**TA: Byte Tactics** is a *matching decompilation* of Total Annihilation
(Cavedog, 1997). The C++ in `src/` is written to compile, with the original
Visual C++ 5.0 compiler, into machine code that is **byte-for-byte identical**
to the game's own `TotalA.exe`. No approximations: if a function is marked
matched, the compiler's output and Cavedog's output are the same bytes.

The matching is complete: all 3,267 game functions match, and the whole exe
builds from source to the shipped bytes. The work now is making that source
easy to read ([next steps](#next-steps)).

> **No game files and no Microsoft software are included.** You bring your own
> copy of Total Annihilation; the setup script fetches the compiler for you.

## Progress

**100.00% of Cavedog's code matched** (850,853 of 850,853 bytes)

`[########################################]`

| | Functions | Bytes |
| --- | ---: | ---: |
| Matched byte-for-byte | 3,267 | 850,853 |
| Attempted, not yet matching | 0 | 0 |
| Not attempted yet | 0 | 0 |

### By function size

The size bands are the `size:` labels on the issues.

| Size | Functions matched | Bytes matched | Bytes left | |
| --- | ---: | ---: | ---:…
