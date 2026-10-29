---
repo: "finsberg/fenicsx-beat"
name: "fenicsx-beat"
description: "Cardiac Electrophysiology solver in FEniCSx"
readmeQualityOk: true
url: "https://github.com/finsberg/fenicsx-beat"
homepage: "https://finsberg.github.io/fenicsx-beat/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["cardiac", "ecg", "electrophysiology", "fenicsx", "finite-element-analysis", "monodomain-model"]
stars: 15
forks: 5
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2024-04-09T08:12:48Z"
lastCommitAt: "2026-10-29T14:07:17Z"
lastReleaseAt: "2026-08-11T13:50:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 75
maintainers: ["finsberg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51bf89933cf8cdef3eaebe1c44ad49abc7cdb2a3109e0a154806dd0c2706e197/finsberg/fenicsx-beat"
---

# fenicsx-beat
Cardiac electrophysiology research uses computational modeling to study heart rhythm disorders and test therapies.

This tool, fenicsx-beat, is a cardiac electrophysiology simulator built specifically for the FEniCSx platform. It provides a dedicated and easy-to-use tool for researchers already using [FEniCSx](https://fenicsproject.org) to perform simulations based on the Monodomain model.

- Source code: https://github.com/finsberg/fenicsx-beat
- Documentation: https://finsberg.github.io/fenicsx-beat

## Install
You can install the library with `pip`
```
python3 -m pip install fenicsx-beat
```
or with `conda`
```
conda install -c conda-forge fenicsx-beat
```
Note that installing with `pip` requires [FEniCSx already installed](https://fenicsproject.org/download/)

Also that to run most of the examples you will need to install additional dependencies which can be done using the command
```
python3 -m pip install fenicsx-beat[demos]
```

## Getting started

The following minimal example demonstrates simulating the Monodomain model on a unit square domain using a modified FitzHugh-Nagumo model

```python
import shutil

import matplotlib.pyplot as plt
import numpy as np…
