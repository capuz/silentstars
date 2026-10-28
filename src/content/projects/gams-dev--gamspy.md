---
repo: "GAMS-dev/gamspy"
name: "gamspy"
description: "Fast algebraic modeling and mathematical optimization in Python"
readmeQualityOk: true
url: "https://github.com/GAMS-dev/gamspy"
homepage: "https://gamspy.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["linear-programming", "machine-learning", "mathematical-programming", "modeling-language", "nonlinear-programming", "optimization", "python", "quadratic-programming", "gams"]
stars: 136
forks: 12
openIssues: 1
closedIssues: 21
watchers: 8
contributors: 25
recentReleases: 0
createdAt: "2023-09-29T12:57:01Z"
lastCommitAt: "2026-10-28T09:57:41Z"
lastReleaseAt: "2025-09-17T12:21:59Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 46
maintainers: ["mabdullahsoyturk", "hbusul", "mbussieck"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc3a933c0714a8df59847314df7aed59626feb9e2219b10d942a38effdc8c9fc/GAMS-dev/gamspy"
---

-----------------

# GAMSPy: Mathematical optimization in Python

GAMSPy is an open-source Python package for building and solving mathematical optimization models. Its algebraic, indexed API supports linear, mixed-integer, nonlinear, quadratically constrained, and complementarity models while fitting naturally into Python data and analytics workflows.

## Installation

```sh
pip install gamspy
```

GAMSPy requires Python 3.11 or newer. Installation includes the local execution runtime and a set of default solvers, so you do not need to install GAMS separately to run the example below. The included demo license is sufficient for this small model.

## Your first model

This production-mix model chooses how many desks and chairs to make to maximize profit within 40 available labor hours:

```python
import gamspy as gp

m = gp.Container()

products = gp.Set(m, records=["desk", "chair"])
profit = gp.Parameter(
    m,
    domain=products,
    records=[("desk", 100), ("chair", 40)],
    description="profit per unit",
)
hours = gp.Parameter(
    m,
    domain=products,
    records=[("desk", 4), ("chair", 1)],
    description="labor hours per unit",
)
production = gp.Variable(
    m,…
