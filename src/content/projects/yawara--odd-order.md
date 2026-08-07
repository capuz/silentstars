---
repo: "yawara/odd-order"
name: "odd-order"
description: "The Feit–Thompson odd order theorem in Lean 4, with the finite group theory library it required — Hall, Fitting, Frobenius groups, transfer, ZJ, Dade isometry, coherence"
readmeQualityOk: true
url: "https://github.com/yawara/odd-order"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
topics: ["feit-thompson-theorem", "finite-groups", "formal-verification", "lean4", "mathlib", "odd-order-theorem"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-20T17:52:47Z"
lastCommitAt: "2026-08-07T05:16:53Z"
lastReleaseAt: "2026-08-04T03:02:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["yawara"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57f9d45b08180562d5e7e20216e187e52188662091acb9c96017de6164e1512/yawara/odd-order"
---

# odd-order

English | [日本語](https://github.com/yawara/odd-order/blob/HEAD/README.ja.md)

A complete formalization of the **Feit–Thompson Odd Order Theorem** in **Lean 4 + mathlib** — *every finite group of odd order is solvable* — together with the finite group theory it is built on.

```lean
theorem feitThompson {G : Type*} [Group G] [Finite G] (hodd : Odd (Nat.card G)) :
    IsSolvable G
```

## Status

**The Odd Order Theorem is proved and axiom-clean** (2026-07-15):

```
#print axioms OddOrder.feitThompson
-- 'OddOrder.feitThompson' depends on axioms: [propext, Classical.choice, Quot.sound]
```

No `sorryAx`, no project-specific axioms — only Lean's three standard ones.

The project is now in its second phase: **formalizing the three source textbooks in full**, not merely
the path through them that the Odd Order Theorem needs.

> ✅ **The Lean sources (`OddOrder/`) are `sorry`-free as of 2026-08-07.** The last one to go was the
> `Q₈` case of the Brauer–Suzuki theorem — cited by the sources, proved in none of them. Closing it
> meant building modular character theory from scratch (`p`-modular systems, Brauer characters,
> blocks, defect groups, Brauer's three main theorems),…
