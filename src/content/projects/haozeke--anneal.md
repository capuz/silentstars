---
repo: "HaoZeke/anneal"
name: "anneal"
description: "A python package for simmulated annealing and quenching"
readmeQualityOk: true
url: "https://github.com/HaoZeke/anneal"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [76, 22]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2023-02-05T23:29:50Z"
lastCommitAt: "2026-08-16T04:09:23Z"
lastReleaseAt: "2026-08-01T11:39:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 82
maintainers: ["HaoZeke"]
openGraphImageUrl: "https://opengraph.githubassets.com/755e239e0b87459045a088e992a112531a6a3f87e81fb5ac36b503bf76d939ef/HaoZeke/anneal"
---

</p>

# Anneal

**Start here.** Bound-constrained global optimization with a single budget knob, or classical simulated-annealing presets you can swap without rewriting a driver.

Simulated-annealing components on the [eindir](https://github.com/HaoZeke/eindir) typed primitives. One surface, many drivers: classical presets, Bayesian pilot+mixer, generalized Langevin equation (GLE) colored noise, rank-1 additive independence, quasi-Monte Carlo (QMC) polish, device/ensemble scale. All obey the same five-component algebra (Obj / Cool / Neigh / Move / Accept) and four composition laws checked at construction.

| | |
|---|---|
| Docs | https://anneal.rgoswami.me |
| License | MIT |
| Software DOI | https://zenodo.org/doi/10.5281/zenodo.10672746 |
| Paper reproducibility | https://github.com/HaoZeke/anneal_repro — Zenodo [10.5281/zenodo.20672620](https://doi.org/10.5281/zenodo.20672620) |
| History | Continuous development since **2023-02** (see git log); multi-author `CITATION.cff` |

## Cluster search and cooperative production

`Config::recommended(n)` composes surface relocations that pay one acceptance
test for a whole excursion, Normal-Gamma Thompson allocation over move arms,
and…
