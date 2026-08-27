---
repo: "leanprover/SampCert"
name: "SampCert"
description: "SampCert : Verified Differential Privacy"
readmeQualityOk: true
url: "https://github.com/leanprover/SampCert"
homepage: "https://leanprover.github.io/SampCert/"
language: "Lean"
languages: ["Lean"]
languagePcts: [94]
stars: 104
forks: 21
openIssues: 4
closedIssues: 8
watchers: 13
contributors: 15
recentReleases: 0
createdAt: "2024-01-27T20:52:34Z"
lastCommitAt: "2026-08-27T14:28:13Z"
lastReleaseAt: "2026-04-09T15:33:44Z"
status: "thriving"
tags: []
healthScore: 66
undervaluedScore: 26
maintainers: ["markusdemedeiros", "kim-em", "robsimmons"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb04e2767b5c542c41c8508ae017df7628e3f7898dd914ca2c08a373992058f2/leanprover/SampCert"
---

# SampCert

A verified implementation using [Lean](https://github.com/leanprover/lean4) and [Mathlib](https://github.com/leanprover-community/mathlib4) of randomized algorithms including [the discrete Gaussian sampler for differential privacy](https://arxiv.org/abs/2004.00010), key results in [zero concentrated differential privacy](https://arxiv.org/abs/1605.02065), and [some verified (unbounded) private queries](https://arxiv.org/pdf/1909.01917).

SampCert is deployed and used in the [AWS Clean Rooms Differential Privacy service](https://docs.aws.amazon.com/clean-rooms/latest/userguide/differential-privacy.html#dp-overview). SampCert proves deep properties about some of its randomized algorithm and makes heavy use of Mathlib. For example, we use theorems such as [the Poisson summation formula](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Analysis/Fourier/PoissonSummation.html#Real.tsum_eq_tsum_fourierIntegral_of_rpow_decay).

The principal developer of SampCert is [Jean-Baptiste Tristan](https://jtristan.github.io/). It is also developed by [Markus de Medeiros](https://www.markusde.ca/). 

Other people have contributed important ideas or tools for deployment…
