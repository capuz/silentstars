---
repo: "microprediction/winning"
name: "winning"
description: "Inference of relative ability from winning probabilities"
readmeQualityOk: true
url: "https://github.com/microprediction/winning"
language: "TeX"
languages: ["TeX", "Python"]
languagePcts: [38, 31]
stars: 50
forks: 15
openIssues: 3
closedIssues: 1
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2020-11-24T02:16:15Z"
lastCommitAt: "2026-08-30T09:24:36Z"
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

**Documentation, live demos, and the papers: [winning.microprediction.org](https://winning.microprediction.org)** —
watch the lattice race [beat GHK and Mendell–Elston on wall
time](https://winning.microprediction.org/converge.html) in your
browser, then read how it works.

One race, five covariance grammars, two calls. `race_probabilities`
prices every contestant of a correlated Gaussian (or Gumbel/softmax)
race in one shared-field pass; `abilities_from_race` inverts observed
probabilities back to abilities. Both accept the same covariance
descriptions: factor sugar (`V=`, `D=`), any grammar `structure=`
(independent, factor, blocks, nested, tree), or a dense `cov=` that is
fitted to the grammar on the way in.

- `winning.factor` — the engine: all-share forward pass, inversion,
  exact Jacobians and tie densities, covariance fitting
  (`fit_covariance`), constrained polish.
- `winning.probit` — the same machine in the probit literature's
  max-wins, utilities-and-shares conventions.
- `winning.classic` — the original SIAM-paper lattice ability
  transform (racing vocabulary: dividends, state prices, dead heats);…
