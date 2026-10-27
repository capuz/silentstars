---
repo: "brazilofmux/fort370"
name: "fort370"
description: "A FORTRAN 77 compiler for MVS 3.8j, measured against FORTRAN H"
readmeQualityOk: true
url: "https://github.com/brazilofmux/fort370"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [45, 43]
stars: 6
forks: 1
openIssues: 3
closedIssues: 34
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T16:46:28Z"
lastCommitAt: "2026-10-27T12:39:10Z"
lastReleaseAt: "2026-10-15T17:18:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 64
maintainers: ["brazilofmux"]
openGraphImageUrl: "https://opengraph.githubassets.com/926d4eaec43c1aac6f5a5bf2736ac6b9aa1e49e63e64768d28b03cd80d71decf/brazilofmux/fort370"
---

# fort370

A FORTRAN 77 compiler for MVS 3.8j, intended to run on MVS 3.8j itself and
emit S/370 assembler for the system's own IFOX00 and IEWL. The front end
and the optimizer are copied from slow32-public; the S/370 back end is
new, and its first version is here. This repository started with a
measurement, because the bar was already known.

## The bar

Optimizing compilers began with Fortran. On MVS 3.8j the language is
Fortran IV, through FORTRAN G, WATFIV and FORTRAN H. H is the optimizing
compiler whose techniques were published by Lowry and Medlock in 1969, and
compilers have used them ever since. A FORTRAN 77 compiler for this system
is worth having only if it brings the 1978 language without giving up what
H delivers.

[`docs/FORTRAN-H.md`](https://github.com/brazilofmux/fort370/blob/HEAD/docs/FORTRAN-H.md) measures what H delivers. Seven
kernels, including LINPACK 100 and three Livermore loops, were run at
OPT=0, 1 and 2. At OPT=2, H's inner loops are as short as they can be
without unrolling. The remaining room is in nested-loop addressing,
unrolling and calls, and it is worth perhaps 10 to 35%, not multiples.

## The plan

- **Front end:** the FORTRAN 77 compiler in…
