---
repo: "nsmith-/vibegraph"
name: "vibegraph"
description: "A Monte Carlo event generator written in Rust"
readmeQualityOk: true
url: "https://github.com/nsmith-/vibegraph"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-18T23:09:18Z"
lastCommitAt: "2026-11-24T01:27:14Z"
lastReleaseAt: "2026-10-16T15:23:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 44
maintainers: ["nsmith-"]
openGraphImageUrl: "https://opengraph.githubassets.com/638cf8a47858b1750de9fc927541af3fcefe843ae5fb0d1a4010bc1ad3fb9b30/nsmith-/vibegraph"
---

# vibegraph

       alt="A European badger in a tie-dye t-shirt and wooden headphones, listening to a cassette player on a mossy forest floor at sunset." />

A **leading-order (LO) tree-level Monte Carlo event generator** written in Rust,
following the same pipeline as
[MadGraph5\_aMC@NLO](https://arxiv.org/abs/1405.0301) and validated against it at
the strictest level each stage permits:
- couplings agree with MadGraph's own evaluation to 1e-13;
- the αs running, helicity survivor sets and colour tags are bit-exact;
- per-point |M|² agrees to ≤ 1e-12 relative;
- cross sections and event samples agree statistically with MadGraph reference
  runs frozen in the repository, apart from the documented
  [differences from MadGraph](#differences-from-madgraph).

Reaching 0.1% on σ takes about half of MadEvent's CPU time on x86 and under a
third on an Apple M3 Max, and EFT reweighting runs about 200–1000× faster than
MadGraph's reweight module ([Performance](#performance)).
