---
repo: "cvxgrp/cvxball"
name: "cvxball"
description: "Fast computation of the smallest enclosing sphere"
url: "https://github.com/cvxgrp/cvxball"
homepage: "http://www.cvxgrp.org/cvxball/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 9
forks: 0
openIssues: 1
closedIssues: 24
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2025-01-14T07:54:42Z"
lastCommitAt: "2026-06-26T06:48:03Z"
lastReleaseAt: "2025-01-29T10:08:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 75
maintainers: ["renovate[bot]", "tschm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f687565c8534b0a9399b585343d796a26b2957e450706240501eaf9d51a040d2/cvxgrp/cvxball"
---

# 🔵 [cvxball](https://www.cvxgrp.org/cvxball)

## 📋 Overview

We compute the smallest enclosing circle/ball for a set of points.

```python
import numpy as np
from cvxball.solver import min_circle_cvx

# create a numpy array where each row corresponds to a point
points = np.array([[2.0, 4.0], [0, 0], [2.5, 2.0]])

# compute the circle, pick any solver supporting conic constraints
radius, centre = min_circle_cvx(points, solver="CLARABEL")

```

## 🧮 Background

We are solving the convex optimization problem:

$$
\min_r \quad r
$$

subject to the constraint that for each point $p_i$, the Euclidean
distance from $p_i$ to the center of the circle is less than or
equal to the radius $r$:

$$
\| p_i - \text{center} \| \leq r, \quad \forall i = 1, 2, \dots, n
$$

Where:

- $p_i$ are the points in $\mathbb{R}^d$.
- $\text{center}$ is the center of the circle we are trying to find.
- $r$ is the radius of the circle.

The goal is to minimize the radius $r$ such that all points
lie inside or on the boundary of the circle.

---

### 📊 Interpretation as a Min/Max Problem

The constraint $\| p_i - \text{center} \| \leq r$ implies that
the radius $r$ must be at least as large as the maximum…
