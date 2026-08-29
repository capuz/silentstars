---
repo: "stefan-hoeck/idris2-ref1"
name: "idris2-ref1"
description: "Linear mutable References and Utilities"
readmeQualityOk: true
url: "https://github.com/stefan-hoeck/idris2-ref1"
language: "Idris"
languages: ["Idris"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-10T11:10:37Z"
lastCommitAt: "2026-08-29T10:20:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["stefan-hoeck", "Matthew-Mosior"]
openGraphImageUrl: "https://opengraph.githubassets.com/da5094b571285816152e4cf9454a1a90a809a93baa71c4755e36f28d22525743/stefan-hoeck/idris2-ref1"
---

# Linear mutable References and Utilities

Mutable state is anathema to pure functional programming.
Or is it? In this library, we explore a way to keep mutable
references and other mutable data structures
within the boundaries of pure computations, making sure they
do not leak into the outside world - and that they are properly released
before we are done. This allows us to get the raw performance - and sometimes,
convenience - of mutable state without sacrificing referential transparency.

Since we get automatic resource management with the approach
presented here, this can be used for many different kinds of (mutable)
resources the creation and manipulation of which does not have
a permanent observable effect: We can allocate (and release!) raw
C-pointers, mutable arrays, byte vectors, and hash maps; we can even setup
and tear down a full-fledged in-memory sqlite3 database without
resorting to `IO`! If we stretched the definition of what is an
"observable effect", we could even work with temporary files and
directories as long as we removed them all before we were done.
This adds quite a large subset of effectful computations to the list
of things that can be run and tested as…
