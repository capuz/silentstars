---
repo: "keithadler/rh-trim"
name: "rh-trim"
description: "Checking, mapping and shrinking the claimed Lean proof of the Riemann Hypothesis: independent kernels, its structure measured from Lean's export, and the smallest version that still checks."
readmeQualityOk: true
url: "https://github.com/keithadler/rh-trim"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["formal-verification", "lean4", "mathlib", "riemann-hypothesis"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-20T21:58:17Z"
lastCommitAt: "2026-11-23T10:18:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["keithadler"]
openGraphImageUrl: "https://opengraph.githubassets.com/e38cfce37ca11c1e67988a0975743e8018cfd2f60de0058a6ef24ba0bae3135c/keithadler/rh-trim"
---

# rh-trim

### Checking, mapping and shrinking the claimed Lean proof of the Riemann Hypothesis

-accepts-1f6f43)

**[Live status](https://github.com/keithadler/rh-trim/blob/HEAD/BUILD-STATUS.md)** · **[The smallest proof](https://github.com/keithadler/rh-trim/blob/HEAD/docs/MINIFY.md)** · **[Build it yourself](https://github.com/keithadler/rh-trim/blob/HEAD/docs/BUILD-ORIGINAL.md)** · **[Proof map](https://github.com/keithadler/rh-trim/blob/HEAD/docs/PROOF-MAP.md)**

**The smallest proof, live** · round 63 · 🔁 REPAIRING · updated 10:18 UTC Nov 23

## In plain English

On 2026-11-20 Levent Alpöge announced a proof of the Riemann Hypothesis, found working with Claude and published
as a computer-checkable proof in the Lean language ([announcement](https://alpo.ge/remark.pdf)). It is enormous:
**175,188 files and 17.4 million lines**, about 7 times the size of Lean's entire math library, with a single docstring
in all of it.

We built it, asked several independent checking programs to verify it, measured what it is made of, and are cutting it
down to the smallest version that still checks. Here is what we know so far.
