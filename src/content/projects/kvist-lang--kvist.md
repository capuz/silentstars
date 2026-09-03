---
repo: "kvist-lang/kvist"
name: "kvist"
description: "A native, statically typed Lisp with a REPL that compiles to Odin."
readmeQualityOk: true
url: "https://github.com/kvist-lang/kvist"
language: "Odin"
languages: ["Odin"]
languagePcts: [85]
topics: ["clojure", "compiler", "functional-programming", "lisp", "live-coding", "macros", "manual-memory-management", "metaprogramming", "native-code", "odin"]
stars: 44
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-14T13:10:28Z"
lastCommitAt: "2026-09-03T08:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/dde9a0a77629c9cd2132bea3e7910a9493d075d01a94033bbf2078e20585d739/kvist-lang/kvist"
---

</div>

# Kvist

A practical Lisp for native software that compiles to Odin.

[Website](https://kvist-lang.org/) · [Documentation](https://kvist-lang.org/docs/)

Kvist combines Clojure-inspired syntax, source macros, data-oriented
programming, and interactive development with Odin's native, statically typed
execution model. It explores what a Lisp can look like when concrete
representation, predictable costs, direct interoperability, and explicit
memory are foundational properties.

Different programs can lean on different parts of that combination. Kvist can
be used as a Lisp-shaped way to write ordinary native software, as a platform
for macros and DSLs, as an interactive environment for native code, or for
applications that mix concrete types with flexible data-oriented subsystems.

Ordinary values have Odin-like representation and ownership. Values are
statically typed, allocation and mutation remain explicit, and generated
programs require no VM or garbage collector. Kvist lowers to readable Odin,
imports Odin packages directly, and allows Kvist and Odin source files to
coexist in the same package.

When data-oriented programming is a better fit, `Data` provides EDN in…
