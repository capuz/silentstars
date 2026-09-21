---
repo: "jgreathouse9/mlsynth"
name: "mlsynth"
description: "This is the repository for the Python library mlsynth"
readmeQualityOk: true
url: "https://github.com/jgreathouse9/mlsynth"
homepage: "https://mlsynth.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["causal-inference", "econometrics", "synthetic-control", "synthetic-control-method"]
stars: 61
forks: 8
openIssues: 22
closedIssues: 50
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-04-26T14:54:10Z"
lastCommitAt: "2026-09-21T09:15:00Z"
lastReleaseAt: "2026-06-20T13:38:35Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 52
maintainers: ["jgreathouse9", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a2e1ca266937bd357c59b66e42048e53b82ab2e01fb27ca7a79c42d26f4174a/jgreathouse9/mlsynth"
---

# `mlsynth`

`mlsynth` is a Python framework for synthetic control causal inference and
synthetic-control-based experimental design. It bundles 46 modern estimators
under a single typed `Config` / `.fit()` / typed-results interface, so swapping
between, say, Forward DiD, TASC, and SPCD is a one-line change.

[Documentation](https://mlsynth.readthedocs.io/) ·
[Which estimator should I use? (decision tree)](https://mlsynth.readthedocs.io/en/latest/choose.html) ·
[Validation — proven against the original code](https://mlsynth.readthedocs.io/en/latest/validation.html)

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
| `bayes` | `numpyro` (JAX-based MCMC) | `SPOTSYNTH`'s…
