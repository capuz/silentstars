---
repo: "jihoolang/jihoo"
name: "jihoo"
description: "A systems programming language that is as fast as C and memory-safe without lifetime annotations or a garbage collector."
readmeQualityOk: true
url: "https://github.com/jihoolang/jihoo"
homepage: "https://jihoolang.github.io/jihoo/"
language: "Python"
languages: ["Python", "Lean"]
languagePcts: [56, 41]
topics: ["programming-language"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T02:31:25Z"
lastCommitAt: "2026-11-09T04:34:56Z"
lastReleaseAt: "2026-10-30T06:53:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["jihoo12"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e99d7e7b6ee423857fbca28eb013a61350613ad730dbfb7d870babc45148a95/jihoolang/jihoo"
---

# jihoo

A systems programming language that is as fast as C and memory-safe without
lifetime annotations or a garbage collector.

- **Ownership without lifetimes.** Every value has one owner. Functions
  borrow their arguments (`x: T`), borrow them to change them (`inout x: T`)
  or take them (`sink x: T`). Borrows are scoped to a function body, so the
  compiler sees all of them and needs no annotations.
- **No hidden costs.** No GC, no reference counting, no implicit copies of
  anything that owns memory: those move, and `.clone()` copies them.
- **As fast as C.** Programs compile through LLVM; on the benchmarks they
  match C compiled by clang, with bounds checks on.
- **Generics at compile time**, as in Zig: `comptime T: type` parameters,
  inferred at calls, with traits as bounds.
- **A standard library written in jihoo** (`Vec`, `String`, `Map`, `Box`,
  sorting, files, processes), with or without libc.
- **Dependent types, as an opt-in subset.** A `#![dependent_core]` module states
  contracts as types, and its proofs are checked and erased, so a proved access
  has no bounds check ([guide](https://github.com/jihoolang/jihoo/blob/HEAD/docs/language/dependent-types.md)).…
