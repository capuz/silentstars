---
repo: "artagnon/bonak"
name: "bonak"
description: "🧊 An indexed construction of semi-simplicial and semi-cubical sets"
readmeQualityOk: true
url: "https://github.com/artagnon/bonak"
homepage: "https://artagnon.github.io/bonak/docs"
language: "Rocq Prover"
languages: ["Rocq Prover", "TeX"]
languagePcts: [61, 36]
topics: ["cubical-type-theory", "research-project", "paper", "formalization", "coq", "homotopy-type-theory"]
stars: 31
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2019-08-15T15:40:39Z"
lastCommitAt: "2026-09-27T09:27:16Z"
lastReleaseAt: "2022-06-24T18:32:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 64
maintainers: ["artagnon", "olympichek", "herbelin"]
openGraphImageUrl: "https://opengraph.githubassets.com/76a2fb9e7bfcb2b6442509164c4060619e0013fc87df6623cfb2c0f318257ede/artagnon/bonak"
---

# Bonak 

Bonak is an active hobby-research project around formalizing simplicial and cubical sets in [Rocq](https://rocq-prover.org) as a particular case of iterated parametricity translation. The project started when Hugo met Ram in late 2019, and they continue to meet online weekly to continue this line of research.

The name _bonak_ comes from an imaginary monster in Daisy Johnson's novel [Everything Under](https://thebookerprizes.com/the-booker-library/books/everything-under), which was shortlisted for the Booker Prize in 2018. It happens to be an exciting read, and Ram had read the book at around the time this project started.

Some features of this project:

1. We do not make use of [HoTT](https://github.com/HoTT/HoTT), or any fancy libraries for that matter. Bonak is written is vanilla Rocq, making use of the core standard library. In particular, we make use of [SProp](https://rocq-prover.org/doc/master/refman/addendum/sprop.html) for definitional proof irrelevance.
2. Bonak has led to many bugs being filed and fixed in core Rocq. It pushes the boundaries of proof assistant technology, and can serve as a benchmark against which to improve core Rocq features. Rocq 9.0 is…
