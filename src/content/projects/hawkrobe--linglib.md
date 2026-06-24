---
repo: "hawkrobe/linglib"
name: "linglib"
description: "A Lean 4 library for formal linguistics."
url: "https://github.com/hawkrobe/linglib"
homepage: "https://linglib.io"
language: "Lean"
languages: ["Lean"]
languagePcts: [97]
topics: ["formal", "lean", "linguistics", "mathlib"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-23T22:57:58Z"
lastCommitAt: "2026-06-24T00:25:43Z"
lastReleaseAt: "2026-06-15T22:15:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["hawkrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0975c69efc062d3f25f59391729923bbe0abfa000ba2aee8dda492af7cdf80d/hawkrobe/linglib"
---

# Linglib

A Lean 4 library for formal linguistics — semantics, syntax, pragmatics, morphology, phonology, and processing.

> ⚠️ This is an experiment in "AI for Linguistics" using recent advances in proof assistants. Spotted an inaccuracy? [Open an issue](https://github.com/hawkrobe/linglib/issues) — we'd love to hear about it.

## Why

Decades of progress in formal linguistics live in prose scattered across hundreds of papers. Linglib is an attempt to gather the machinery in one place so a proof assistant can do the bookkeeping:

- **Detect breakage.** If you change your semantics for attitude verbs, Lean tells you exactly which downstream theorems about conditionals, questions, or pragmatic inference no longer follow. No more discovering an inconsistency from a reviewer.

- **Check predictions.** Theories are often stated in notation ambiguous enough to hide gaps between what is claimed and what actually follows from the definitions. Lean won't let a proof go through unless the prediction genuinely follows from the theory.

- **Compare theories.** When two theories both claim to handle the same data, we can formally characterize where they agree and where they diverge rather…
