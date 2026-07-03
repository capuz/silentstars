---
repo: "YaelDillies/apap"
name: "apap"
description: "Formalisation of the Kelley-Meka bound on Roth numbers"
url: "https://github.com/YaelDillies/apap"
homepage: "https://yaeldillies.github.io/apap/"
language: "Lean"
languages: ["Lean"]
languagePcts: [83]
topics: ["additive-combinatorics", "lean4", "combinatorics"]
stars: 27
forks: 10
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2023-03-15T09:31:38Z"
lastCommitAt: "2026-07-03T12:21:20Z"
lastReleaseAt: "2025-06-30T09:30:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 61
maintainers: ["YaelDillies", "dannyply", "sqrt-of-2"]
openGraphImageUrl: "https://opengraph.githubassets.com/05563a66e84fcd0c087bd4db91ff6ba5c044efa49e5a7902d9cbce7b2461af59/YaelDillies/apap"
---

# Arithmetic Progressions - Almost Periodicity

The purpose of this repository is to *digitise* some mathematical definitions, theorem statements
and theorem proofs. Digitisation, or formalisation, is a process where the source material,
typically a mathematical textbook or a pdf file or website or video, is transformed into definitions
in a target system consisting of a computer implementation of a logical theory (such as set theory
or type theory).

## The source

The definitions, theorems and proofs in this repository are taken from the exposition of Bloom and
Sisask on the Kelley-Meka bound on Roth numbers [2302.07211](https://arxiv.org/abs/2302.07211).

The main result is that there is some constant `c > 0` such that, if `A ⊆ {1, ..., N}` contains no
non-trivial arithmetic progression of length 3, then `|A| ≤ N/exp(c * (log n)^(1/12)))` for some
constant `c > 0`. This is an amazing improvement over previous bounds, which were all of the form
`N/(log n)^c` for some constant `c`.

## The target

The formal system which we are using as a target system is Lean's dependent type theory. Lean is a
project being developed at AWS and Microsoft Research by Leonardo de Moura and his…
