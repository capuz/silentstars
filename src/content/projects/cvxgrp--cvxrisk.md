---
repo: "cvxgrp/cvxrisk"
name: "cvxrisk"
description: "Portfolio risk management via convex optimization — interchangeable risk models behind one abstract interface, solved directly with Clarabel"
readmeQualityOk: true
url: "https://github.com/cvxgrp/cvxrisk"
homepage: "https://www.cvxgrp.org/cvxrisk"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["barra", "cvar", "optimization", "risk"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 57
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2023-05-20T04:03:59Z"
lastCommitAt: "2026-09-19T02:48:27Z"
lastReleaseAt: "2024-10-27T06:37:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["tschm", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/62c5d96a8cdd1c2194f12dce7f1ade596d70f0ad3754e29f3789a229bb143447/cvxgrp/cvxrisk"
---

# [cvxrisk](https://www.cvxgrp.org/cvxrisk/): Convex Optimization for Portfolio Risk Management

## 📋 Overview

cvxrisk is a Python library for portfolio risk management using convex optimization.
It provides a flexible framework for implementing various risk models and solves
optimization problems directly with the [Clarabel](https://github.com/oxfordcontrol/Clarabel.rs)
conic solver — no cvxpy required.

The library is built around an abstract `Model` class that standardizes
the interface for different risk models, making it easy to swap between
them in your optimization problems.

## 🚀 Installation

Install from source (PyPI releases are currently paused; the package on
PyPI predates the direct-Clarabel rewrite and has a different API):

```bash
git clone https://github.com/cvxgrp/cvxrisk.git
cd cvxrisk
make install

# For experimenting with the notebooks (after cloning)
make marimo
```

## 🔧 Quick Start

cvxrisk makes it easy to formulate and solve portfolio optimization problems:

```python
import numpy as np
from cvx.risk.sample import SampleCovariance
from cvx.risk.portfolio import minrisk_problem
from cvx.core import Variable

# Create a risk model
riskmodel =…
