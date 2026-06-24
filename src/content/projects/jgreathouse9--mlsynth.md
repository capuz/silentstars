---
repo: "jgreathouse9/mlsynth"
name: "mlsynth"
description: "This is the repository for the Python library mlsynth"
url: "https://github.com/jgreathouse9/mlsynth"
homepage: "https://mlsynth.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 59
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2024-04-26T14:54:10Z"
lastCommitAt: "2026-06-24T23:38:59Z"
lastReleaseAt: "2026-06-20T13:38:35Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 52
maintainers: ["claude", "actions-user", "jgreathouse9"]
openGraphImageUrl: "https://opengraph.githubassets.com/6575fd640bec3add57d12a6f6b77c22fbdc0963e704f2903b2bfad00e7c07793/jgreathouse9/mlsynth"
---

# `mlsynth`

`mlsynth` is a Python framework for synthetic control causal inference and
synthetic-control-based experimental design. It bundles 46 modern estimators
under a single typed `Config` / `.fit()` / typed-results interface, so swapping
between, say, Forward DiD, TASC, and SPCD is a one-line change.

[Documentation](https://mlsynth.readthedocs.io/) ·
[Which estimator should I use? (decision tree)](https://mlsynth.readthedocs.io/en/latest/choose.html)

---

## Install

```bash
pip install -U git+https://github.com/jgreathouse9/mlsynth.git
```

`mlsynth` supports Python 3.9 and later. The base install pulls in every core
dependency and runs every estimator except two that lean on heavier, specialised
backends. Those two backends are packaged as optional *extras*, so you only
install the weight you actually use:

| Extra | Adds | Needed for |
| --- | --- | --- |
| `design` | `pyscipopt` (the SCIP mixed-integer solver) | the experimental-design estimators `SYNDES` and `MAREX`, whose market-selection step is a MIQP |
| `bayes` | `numpyro` (JAX-based MCMC) | `SPOTSYNTH`'s Bayesian synthetic-control mode |
| `all` | both of the above | the full feature set |

Request an extra…
