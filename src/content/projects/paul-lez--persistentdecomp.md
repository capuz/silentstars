---
repo: "Paul-Lez/PersistentDecomp"
name: "PersistentDecomp"
description: "Formalizing the Structure Theorem for Persistence Modules"
readmeQualityOk: true
url: "https://github.com/Paul-Lez/PersistentDecomp"
language: "Lean"
languages: ["Lean", "TeX"]
languagePcts: [71, 24]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-08-19T15:56:43Z"
lastCommitAt: "2026-10-17T07:59:51Z"
lastReleaseAt: "2025-06-30T11:19:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 43
maintainers: ["YaelDillies"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca6dc16566688259978a04c2057d81001a5a1d39ef74e4809d5fa30a1366e33/Paul-Lez/PersistentDecomp"
---

# Decomposition of Persistence Modules

The objective of this repository is to formalise the statement of the barcode decomposition theorem of persistence modules into the Lean proof assistant.

Formalisation is the process by which mathematical definitions, theorems and results are typed into a computer proof assistant - a program which knows the axioms of mathematics and is capable of checking the validity of proofs. Lean is one such program, and an extensive amount of mathematics has already been formalised into it.

## Source

The main source for our work is the paper "Decomposition of Persistence Modules" authored by Professors Magnus Bakke Botnan and William Crawley-Boevey and published in 2019. This paper is available [here](https://arxiv.org/pdf/1811.08946).

The main result we currently aim to prove is Theorem 1.1: *Any pointwise finite-dimensional persistence module (over a small category) is a direct sum of indecomposable modules with local endomorphism ring*. This theorem is an improvement over Professor William Crawley-Boevey's [2015 result](https://arxiv.org/abs/1210.0819), which held for persistence modules over a totally ordered indexing set. This was itself a…
