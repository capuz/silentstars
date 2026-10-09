---
repo: "nodal-tools/polar-high"
name: "polar-high"
description: "Polars-backed LP/MIP eDSL on top of HiGHS — a generic optimization-modelling kernel."
readmeQualityOk: true
url: "https://github.com/nodal-tools/polar-high"
homepage: "https://nodal-tools.fi/polar-high/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-04T10:48:18Z"
lastCommitAt: "2026-10-09T10:50:20Z"
lastReleaseAt: "2026-05-26T13:25:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 17
maintainers: ["jkiviluo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0f9c47be97b72fbab572633e049d5b36fc94bd0fc4c585161bb959876b75e37/nodal-tools/polar-high"
---

# polar-high

A Python library for building and solving large linear and
mixed-integer optimisation programs, i.e. domain specific language
(DSL) for algebraic modelling. Variables and parameters are
[polars](https://pola.rs/) DataFrames, expressions are joined and
grouped lazily, and the matrix is assembled directly through
[HiGHS](https://highs.dev/) — or exported as MPS for any other LP/MIP
solver. The kernel is intentionally domain-free: it has no opinions
about energy systems, supply chains, or any specific application.

## Install

```bash
pip install polar-high
```

Requires Python 3.11+. HiGHS ships in `highspy`, no separate install.

## Quickstart

A tiny dispatch LP — wind + coal over three hours, minimise cost
subject to capacity and per-hour demand.

```python
import polars as pl

from polar_high import Param, Problem, Sum

p = Problem()

# Index sets — declared once, reused below
unit_index = pl.DataFrame({"unit": ["wind", "coal"]})
time_index = pl.DataFrame({"hour": [1, 2, 3]})
composite_index = unit_index.join(time_index, how="cross")

# Decision variable v_production[unit, hour] >= 0
v_production = p.add_var(
    "v_production",
    dims=("unit", "hour"),…
