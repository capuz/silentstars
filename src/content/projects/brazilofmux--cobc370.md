---
repo: "brazilofmux/cobc370"
name: "cobc370"
description: "A COBOL-74 compiler for MVS 3.8j, emitting S/370 assembler. Native VSAM support, which IBM's ANS COBOL does not have."
readmeQualityOk: true
url: "https://github.com/brazilofmux/cobc370"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-27T03:38:10Z"
lastCommitAt: "2026-08-28T15:31:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["brazilofmux"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8652e077f7cb01ef08646b14be871157e676a4a8688f4a11646188934b04c44/brazilofmux/cobc370"
---

# cobc370

A COBOL-74 compiler for MVS 3.8j. It runs on the host, reads COBOL, and emits
S/370 assembler for the guest to assemble and link.

The reason it exists is VSAM. **IBM's ANS COBOL, the compiler MVS 3.8j actually
ships, cannot open a VSAM file at all** -- a program on that system reaches VSAM
only through a hand-written assembler shim. `cobc370` supports all three
organizations natively, and every VSAM test in this repository is checked
against such a shim to prove it behaves the same.

It is not a general-purpose COBOL compiler and does not try to be. It targets
COBOL-74 and earlier, because that is the language MVS 3.8j programs are written
in.

## State

Verified by compiling a real production workload: **18 COBOL programs making up
a 37-step monthly general-ledger batch run, reproduced byte-for-byte against the
output of IBM's own compiler.** The corpus those came from is 30 programs, and
all 30 compile. Generated modules are roughly half the size of
ANS COBOL's for the same source.

45 regression tests, all green.

| area | supported |
|---|---|
| data | DISPLAY, COMP, COMP-3, edited pictures, REDEFINES, OCCURS, INDEXED BY, 88 levels, qualification, CURRENT-DATE |
|…
