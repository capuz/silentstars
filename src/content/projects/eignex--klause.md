---
repo: "Eignex/klause"
name: "klause"
description: "Kotlin solver for Boolean and integer constraint problems. Finds and samples satisfying solutions, picks the best under a weighted objective, and exports to CNF for external SAT engines."
readmeQualityOk: true
url: "https://github.com/Eignex/klause"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 8
closedIssues: 332
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-05T12:15:14Z"
lastCommitAt: "2026-07-30T06:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["rasros"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ef89e955caad62e49560af0eedd4cea9b31857bc631b73134f205bee6476342/Eignex/klause"
---

<picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner-white.svg">
      <source media="(prefers-color-scheme: light)"
        srcset="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner.svg">
        src="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner.svg"
        style="max-width: 100%; width: 22em;">
    </picture>
  </a>
</p>

# Klause

Klause is a hybrid solver for booleans, finite domain integers and linear
reals.

It features a modular CDCL backtrack solver with:
 - Constraint programming propagators (alldifferent, circuit, and the usual
   suspects).
 - A boolean-only fast path for SAT and pseudo-Boolean problems.
 - A linear programming solver for relaxations and continuous variables.

Klause can read and solve problems in a wide range of input formats:
MiniZinc, XCSP3, SMT-LIB (QF_LIRA), MPS, OPB, and DIMACS. The CLI is
available both as a native binary and on JVM through KMP (kotlin
multi-platform).

You can also use it as a kotlin/java library with a nice DSL. There are
wrappers to encode non-linear floats…
