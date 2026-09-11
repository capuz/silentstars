---
repo: "hawkrobe/linglib"
name: "linglib"
description: "A Lean 4 library for formal linguistics."
readmeQualityOk: true
url: "https://github.com/hawkrobe/linglib"
homepage: "https://linglib.io"
language: "Lean"
languages: ["Lean"]
languagePcts: [96]
topics: ["lean", "linguistics", "mathlib"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-01-23T22:57:58Z"
lastCommitAt: "2026-09-11T08:15:15Z"
lastReleaseAt: "2026-08-01T16:23:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["hawkrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/91fdf2d213cf078b30fbbddfd83c6a02c0f3c6077f77d250ed8c94d011843827/hawkrobe/linglib"
---

</p>

A Lean 4 library for formal linguistics — semantics, syntax, pragmatics, morphology, phonology, and processing.

> ⚠️ Among other things, this repository is an experiment in "AI for Linguistics" using recent advances in proof assistants. If you find any inaccuracies or errors, please [open an issue](https://github.com/hawkrobe/linglib/issues)! 

## Overview

Decades of progress in linguistics live in prose scattered across hundreds of papers. Here are a few benefits of using Lean to formalize in a shared library:

- **Detect breakage.** If you tweak semantics for (say) attitude verbs, Lean can tell you exactly which downstream theorems about conditionals, questions, or pragmatic inference no longer follow. 

- **Check predictions.** Theories are often stated in notation ambiguous enough to hide gaps between what is claimed and what actually follows from the definitions. 

- **Compare theories.** When two theories both claim to handle the same data, we can formally characterize where they agree and where they diverge rather than arguing past each other with different formalisms.

## Building

```bash
lake exe cache get  # Get mathlib cache
lake build
```

## Using Linglib in…
