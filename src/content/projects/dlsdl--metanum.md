---
repo: "dlsdl/metanum"
name: "metanum"
description: "A javascript library that handles numbers as large as f_ε₀(9e15)"
readmeQualityOk: true
url: "https://github.com/dlsdl/metanum"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 9
forks: 1
openIssues: 1
closedIssues: 12
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-02-01T15:56:12Z"
lastCommitAt: "2026-09-25T08:57:58Z"
lastReleaseAt: "2026-09-16T02:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 29
maintainers: ["dlsdl"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d4652b21939eb9751e3980ab88206b7d1e982e2bafdbee7f2540736521d5c71/dlsdl/metanum"
---

# MetaNum

- MetaNum v2.0 by dlsdl

A huge number library holding up to X↑↑X&9e15.

This reaches level f<sub>ε₀</sub>, which is the limit of well-defined expressions in BEAF, hence the name.

MetaNum provides a robust implementation of hierarchical number representation based on ordinal arithmetic. It can handle numbers far beyond standard JavaScript Number limits, using a sophisticated multi-dimensional array structure to represent ordinal numbers up to ε₀ (ω^ω^ω^……with ω floors). Internally, each MetaNum instance is represented as:

- **sign**: 1 (positive), -1 (negative), 2 (reciprocal positive), -2 (reciprocal negative)
- **array**: 2-dimensional array `[[r0, r1, r2, ...,rn], [acount, a1, a2, ...,ax], [bcount, b1, b2, ...,by], ...,[mcount, m1, m2, ...,mz]]` where the first row holds the base value and finite hyper-operation exponents and subsequent rows hold ordinal terms, ordinal terms are sorted by levels from small to big
- **layer**: Non-negative integer representing the ω exponent tower height of hyperoperation level(ω^ω^……(ω polynomial) with layer ω^'s)

Using extended arrow operations(see #Mathematical Background), a metanum number can be represented as…
