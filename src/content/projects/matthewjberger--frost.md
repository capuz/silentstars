---
repo: "matthewjberger/frost"
name: "frost"
description: "❄️  A data-oriented systems language with Odin-style syntax. Memory safety without a garbage collector or lifetimes, linear resources, generational handles, and a compiler written in itself."
readmeQualityOk: true
url: "https://github.com/matthewjberger/frost"
homepage: "http://matthewberger.dev/frost/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-05-28T04:20:54Z"
lastCommitAt: "2026-08-13T05:18:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 75
maintainers: ["matthewjberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/586478196941cf90d0e5c27b8c98ada99e9c83462ddff8cfcdf154d72ef46308/matthewjberger/frost"
---

</p>

# Frost

**A data-oriented systems language that is memory-safe with no garbage collector and no lifetimes, and compiles itself.**

A Frost program is plain data and free functions that transform it. Every allocation is one the program asked for. It compiles to native code through Cranelift or to portable C, and the compiler is written in Frost.

Frost is under construction. It compiles itself and everything shown below runs,
but the surface still changes between commits and there is no tagged release, so
anything written against it today may need editing tomorrow.

## The language in one program

A dungeon crawl: a turn loop, a torch that has to be put out, and most of the
language doing one job.

```frost
// A dungeon crawl. Every top-level declaration is `name :: value`, and a file's
// exports are one `export` line.
import "io.frost"

ROOMS :: 3

// A tagged enum. A variant carries a payload where it has one to carry.
Move :: enum { Look, Go { to: i64 }, Swing, Rest }

Monster :: struct { name: str, hp: i64, bite: i64 }

Hero :: struct { hp: i64, blade: i64, room: i64 }

// A `linear` value is consumed exactly once on every path out, counted when the
// program is built,…
