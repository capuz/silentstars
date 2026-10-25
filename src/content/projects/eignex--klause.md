---
repo: "Eignex/klause"
name: "klause"
description: "Hybrid solver for unbounded SMT/MILP and finite-domain CSP."
readmeQualityOk: true
url: "https://github.com/Eignex/klause"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 10
forks: 0
openIssues: 15
closedIssues: 973
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-05-05T12:15:14Z"
lastCommitAt: "2026-10-25T09:00:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 100
undervaluedScore: 48
maintainers: ["rasros"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6fec68036b22384a61f476a8172c175dafbcdfc79fa246d5c1b22e81470e031/Eignex/klause"
---

srcset="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner-white.svg">
        srcset="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner.svg">
        src="https://raw.githubusercontent.com/Eignex/.github/refs/heads/main/profile/banner.svg"
        style="max-width: 100%; width: 22em;">

# Klause

Klause is a constraint solver written in Kotlin Multiplatform. It solves satisfaction and optimization problems over Booleans, integers and reals: SAT and MaxSAT, constraint programming, mixed integer linear programming, and SMT arithmetic. Use it as a library through the Kotlin DSL, or run the CLI on the JVM or as a native executable.

## What it is for

Klause is built for applications that ask many questions of the same model, not only for one-shot solving. A model is compiled once and then queried repeatedly inside a Kotlin or JVM process:

- Solve again under different assumptions, keeping learned and heuristic state between queries.
- Enumerate solutions without repetition, or draw diverse samples across the feasible region.
- Count solutions exactly or approximately, with proven lower and upper bounds.
- Check a proposed…
