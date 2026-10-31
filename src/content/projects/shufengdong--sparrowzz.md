---
repo: "shufengdong/sparrowzz"
name: "sparrowzz"
description: "sgool.zju.edu.cn"
readmeQualityOk: true
url: "https://github.com/shufengdong/sparrowzz"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [40, 31]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2018-10-05T03:14:20Z"
lastCommitAt: "2026-10-31T09:54:00Z"
lastReleaseAt: "2026-01-05T10:25:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 63
maintainers: ["shufengdong", "Dirreke"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ebd57a6aa545ad42a6ccdf8530a864c200bcefafe1ec839edfe436dc9be8011/shufengdong/sparrowzz"
---

# SOLVER-EMBEDDED Model Examples

This repository provides small model/example suites for an external solver, organized by model type:

- [leq/](https://github.com/shufengdong/sparrowzz/blob/HEAD/leq/): linear equation systems (Ax = b) examples
- [neq/](https://github.com/shufengdong/sparrowzz/blob/HEAD/neq/): nonlinear equation systems f(x)=0 examples
- [nlp/](https://github.com/shufengdong/sparrowzz/blob/HEAD/nlp/): nonlinear programming (NLP) examples (includes AC-OPF benchmarks)
- [milp/](https://github.com/shufengdong/sparrowzz/blob/HEAD/milp/): mixed-integer linear programming (MILP) examples

Each folder contains paired `*.model` / `*.solution` files:

- `*.model` is the input model text consumed by the solver
- `*.solution` is the reference (ground-truth) result for validation

## Distribution simulation with tensoreval

- [dss/](https://github.com/shufengdong/sparrowzz/blob/HEAD/dss/) contains the public RSS distribution-system examples and the complete `tensoreval`
  documentation for power flow, QSTS, harmonics, short circuit, state estimation, Monte Carlo,
  restoration, protection, fault location, DSS conversion, and bounded RMS/phasor transient studies.
- Start with…
