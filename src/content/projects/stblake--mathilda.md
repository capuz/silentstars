---
repo: "stblake/mathilda"
name: "mathilda"
description: "A small Mathematica-like computer algebra system in C."
url: "https://github.com/stblake/mathilda"
homepage: "https://stblake.github.io/mathilda/"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["algebra", "calculus", "mathematica", "mathematics"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-02T03:22:40Z"
lastCommitAt: "2026-06-25T01:39:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 61
maintainers: ["stblake", "violetzheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/14656c5dfc7e556755c6ab8e06a46398bb5c607ea8ba7aad7b40b21e2796dec5/stblake/mathilda"
---

# Mathilda

Mathilda is an AI Agent-generated computer algebra system (CAS) heavily inspired by the core architecture and evaluation semantics of Mathematica (the Wolfram Language). Written entirely in C99, it implements a recursive expression model, structural pattern matching with backtracking, rewriting rules, and an extensive library of built-in mathematical functions. 

Today Mathilda spans roughly **159,000 lines of C99** across **176 source modules**, exposing **~365 built-in functions** organized into **19 functional categories** — from arbitrary-precision arithmetic and symbolic calculus to polynomial factorization, dense linear algebra, and integer factorization.

## 🌟 Key Features

**Evaluation engine**
* **Infinite evaluation semantics:** expressions are repeatedly evaluated top-down until a fixed point is reached.
* **Attribute-driven evaluator:** a small generic core consults per-symbol bitflags (`HoldFirst`/`HoldAll`, `Flat`, `Orderless`, `Listable`, `OneIdentity`, `Protected`, …) to decide how to process each call.

**Pattern matching & rules**
* **First-class pattern matching:** `Blank` (`_`), `BlankSequence` (`__`), `BlankNullSequence` (`___`), named bindings…
