---
repo: "Lynder063/rac1-decomp"
name: "rac1-decomp"
description: "Matching decompilation of Ratchet & Clank (2002, PS2)"
readmeQualityOk: true
url: "https://github.com/Lynder063/rac1-decomp"
homepage: "https://decomp.dev/Lynder063/rac1-decomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [78, 21]
stars: 18
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-08T21:25:35Z"
lastCommitAt: "2026-09-28T10:06:05Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["Lynder063", "Veradictus"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1374450c51aee6b1e65d10c97c5ed6266c4f78b0ce86e4741263c56e0614809/Lynder063/rac1-decomp"
---

# Ratchet & Clank Decompilation

A work-in-progress **matching decompilation** of *Ratchet & Clank* (Insomniac
Games, 2002) for the PlayStation 2. The goal is C/C++ source that, built with
the original toolchain, produces a byte-identical copy of the retail executable.

The project runs in two phases:

1. **Match.** Write source that compiles to exactly the retail machine code.
   This is what proves a function has been understood: the compiler judges
   the result, not a read-through.
2. **Make it readable.** Refactor matched code toward idiomatic C++ with real
   names, types and structure. The matching build acts as the regression test
   for every cleanup.

## Progress

Progress is tracked on [decomp.dev](https://decomp.dev/Lynder063/rac1-decomp).

| Version | Region | Game ID | Code | Functions |
|---|---|---|---|---|
| v2.00 | PAL (En, Fr, De, Es, It) | `SCES_509.16` | [](https://decomp.dev/Lynder063/rac1-decomp) | [](https://decomp.dev/Lynder063/rac1-decomp) |

| Category | Progress | Contents |
|---|---|---|
| Game | [](https://decomp.dev/Lynder063/rac1-decomp/SCES_509.16?category=game) | Game and SDK code (`src/core/`, `src/game/`) |
| libgcc |…
