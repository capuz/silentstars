---
repo: "linglib-community/linglib"
name: "linglib"
description: "A Lean 4 library for formal linguistics."
readmeQualityOk: true
url: "https://github.com/linglib-community/linglib"
homepage: "https://linglib.io"
language: "Lean"
languages: ["Lean"]
languagePcts: [95]
topics: ["lean", "linguistics", "mathlib"]
stars: 30
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-01-23T22:57:58Z"
lastCommitAt: "2026-10-29T05:49:38Z"
lastReleaseAt: "2026-10-17T14:14:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["hawkrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74d54772966010fa2ab6188d30f8671452a232f943570d0c0f00c0841f6f68a/linglib-community/linglib"
---

A Lean 4 library for formal linguistics across semantics, syntax, pragmatics, morphology, phonology, and processing.

> ⚠️ Among other things, this repository is an experiment in "AI for Linguistics" using recent advances in proof assistants and autoformalization. If you find any inaccuracies or errors, please [open an issue](https://github.com/linglib-community/linglib/issues)! 

## Overview

Linglib aims to provide for linguistic theory what mathlib provides for mathematics: a machine-verified library where theories can be formalized against shared definitions and tested against a shared body of data. 

- **Make theories fully explicit.** In practice, theoretical proposals involve some amount of hand-waving, leaving gaps between what is claimed and what actually follows from the definitions. Lean checks predictions as theorems and if the consequences don't follow, the code doesn't compile. 

- **Detect breakage.** Because every study imports a shared library, tweaking your semantics for (say) attitude verbs tells you exactly which downstream results about conditionals, questions, or implicature still go through, and which were silently sensitive to this choices. This is like a…
