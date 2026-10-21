---
repo: "jsiek/denotational_semantics"
name: "denotational_semantics"
description: "Denotational semantics based on graph and filter models"
readmeQualityOk: true
url: "https://github.com/jsiek/denotational_semantics"
language: "Agda"
languages: ["Agda", "TeX"]
languagePcts: [58, 39]
stars: 25
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2018-05-26T18:03:19Z"
lastCommitAt: "2026-10-21T23:37:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 62
maintainers: ["jsiek"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8edd4ef2b0eca00fe4774d05a85a0f26d46d2f5b43d1e4f66745c9d44a1e200/jsiek/denotational_semantics"
---

# denotational_semantics
Denotational semantics based on graph and filter models

## The closure-conversion compiler

`agda/All.agda` gathers a compiler from ISWIM to X86ᵀ, a typed assembly
language, with closure conversion and intrinsically typed intermediate
languages, and its
correctness proofs, in five styles (denotational: graph model; CEK
machine + simulation, after CompCert; clocked interpreter + value
relations, after CakeML; reduction semantics + simulation, by
substitution; and the graph model with errors), with the adequacy of the
two graph models for the machines:

    ISWIM --simplify--> ISWIM --cast insertion--> ISWIMᵀ --CC: enclose--> Clos2ᵀ
          --CC: optimize--> Clos2ᵀ --CC: concretize--> Clos3ᵀ --CC: delay--> Clos4ᵀ
          --CC: globalize--> Clos5ᵀ --rco--> Monᵀ --lift locals--> Impᵀ
          --explicate control--> CFGᵀ --select instructions--> X86ᵀ

(The passes marked "CC:" are the closure-conversion passes; the
languages marked ᵀ are intrinsically typed.)

The source, ISWIM, is untyped. Cast insertion, after *Essentials of
Compilation*, ch. 9, makes every check of the kind of a value explicit,
as a `project` from the type `Any` of tagged values; in the…
