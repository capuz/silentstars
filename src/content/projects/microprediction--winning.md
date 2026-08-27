---
repo: "microprediction/winning"
name: "winning"
description: "Inference of relative ability from winning probabilities"
readmeQualityOk: true
url: "https://github.com/microprediction/winning"
language: "TeX"
languages: ["TeX", "Python"]
languagePcts: [39, 30]
stars: 50
forks: 15
openIssues: 3
closedIssues: 1
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2020-11-24T02:16:15Z"
lastCommitAt: "2026-08-27T14:32:37Z"
lastReleaseAt: "2021-11-18T21:22:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 47
maintainers: ["microprediction"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/315494203/8e589900-6e42-11eb-8bf1-b4934bcb7802"
---

# winning

*A package for dealing with races, correlated or not.*

`winning` began as the reference implementation of the lattice ability
transform (SIAM J. Financial Mathematics, 2021) and owns the whole line:
the original density-agnostic engine, the factor-correlated
generalization developed for "Scalable Share Calibration for Factor
Multinomial Probit Models", an arena of competing methods, and a
standing benchmark database.

- `winning.thurstone` — the core engine, vendored home from the
  thurstone package (now a compatibility shim). Densities on a lattice,
  winner-of-many, dead heats, and the ability transform, for **any**
  base distribution.
- `winning.factor` — the correlated extension: all-share forward pass,
  share calibration, Jacobian-vector products, and factor fitting. One
  general race, `race_probabilities`, takes the distribution and the
  factor rank as parameters; factor probit, the classic independent
  transform, Luce/softmax, and correlated softmax are named special
  cases, and custom standardized bases plug in as callables. The
  Gaussian specialization keeps its dedicated tail-exact kernel.
- `winning.methods` — every contestant behind one interface:…
