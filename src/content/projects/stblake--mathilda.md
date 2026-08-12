---
repo: "stblake/mathilda"
name: "mathilda"
description: "A small, highly efficient computer algebra system in written in C99."
readmeQualityOk: true
url: "https://github.com/stblake/mathilda"
homepage: "https://stblake.github.io/mathilda/"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["algebra", "calculus", "mathematica", "mathematics"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 15
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-02T03:22:40Z"
lastCommitAt: "2026-08-12T05:15:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["stblake", "msollami"]
openGraphImageUrl: "https://opengraph.githubassets.com/13177662811bd1e3b7d0d25058f81394a51ed1aef749fe793750a8bc80da6250/stblake/mathilda"
---

# Mathilda

Mathilda is a small, open source computer algebra system (CAS) heavily inspired by the core architecture and evaluation semantics of Mathematica. Written entirely in C99 and its own language, it implements a recursive expression model, structural pattern matching with backtracking, rewriting rules, and an extensive library of built-in mathematical functions. 

Today Mathilda spans roughly **294,000 lines of C99** across **433 source modules**, exposing **~695 built-in functions** organized into **32 functional categories** — from arbitrary-precision arithmetic and symbolic calculus to polynomial factorization, dense linear algebra, integer factorization, and interactive 2D/3D graphics.

## 🌟 Key Features

**Evaluation engine**
* **Infinite evaluation semantics:** expressions are repeatedly evaluated top-down until a fixed point is reached.
* **Attribute-driven evaluator:** a small generic core consults per-symbol bitflags (`HoldFirst`/`HoldAll`, `Flat`, `Orderless`, `Listable`, `OneIdentity`, `Protected`, …) to decide how to process each call.

**Pattern matching & rules**
* **First-class pattern matching:** `Blank` (`_`), `BlankSequence` (`__`), `BlankNullSequence`…
