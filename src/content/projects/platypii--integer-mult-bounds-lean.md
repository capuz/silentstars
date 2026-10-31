---
repo: "platypii/integer-mult-bounds-lean"
name: "integer-mult-bounds-lean"
description: "Lean 4 formalization (work in progress) of O(n log n · log^(-ε) n) integer multiplication on a multitape Turing machine"
readmeQualityOk: true
url: "https://github.com/platypii/integer-mult-bounds-lean"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 28
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T06:46:09Z"
lastCommitAt: "2026-10-31T07:46:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["platypii"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5341a869ee144512209b317f94a5551e695946337caf40ca098b39cfdc15895/platypii/integer-mult-bounds-lean"
---

# Integer multiplication in Lean

**Integer multiplication below `n log n` is proved in Lean on Mathlib's finite Turing machines.**

## Main result

`IntegerMultBounds.MathlibTM2.statement` is unconditional: one fixed
`Turing.FinTM2` machine multiplies every pair of natural numbers, with standard
binary input/output encodings, in worst-case time `O(n (log n)^(1-kappa))`.
The construction proves the positive saving
`kappa = 4222422970/2^46` (about `2^-14.02`), exposed by `MathlibTM2.mulInTime`, where `n` is the
total encoded input length. See [the completed plan](https://github.com/platypii/integer-mult-bounds-lean/blob/HEAD/plan/C-mathlib-end-to-end.md).

The running multiplier combines linear direct CRT routing with compact controls
and full-width chunks above the root `⌈d/2⌉`. It uses rounded synthetic layers on the T16 node (73 slots, 14336 data
roles, 1,041,408 children, so `log_73 (F/NW) < 999/1000`). Its bit interchange uses
PR97 stage 2: the opposite-bank compiler on design-B frames, variable-rank children,
stopped recursion over atoms, and the F L F wrapper on the generic machine in
`MathlibTM2/M8`. The atom exponent is `1/1000`; the resulting ordinary bit exponent
is `tau…
