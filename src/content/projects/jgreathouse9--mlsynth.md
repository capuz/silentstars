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
openIssues: 45
closedIssues: 59
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-04-26T14:54:10Z"
lastCommitAt: "2026-10-03T22:03:22Z"
lastReleaseAt: "2026-06-20T13:38:35Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 51
maintainers: ["jgreathouse9", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d42b37573c52e8efcc031d834ebafa20cd039af2de526580e6cd37cfd49ad8/jgreathouse9/mlsynth"
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
