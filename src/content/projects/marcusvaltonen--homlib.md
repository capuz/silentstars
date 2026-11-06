---
repo: "marcusvaltonen/HomLib"
name: "HomLib"
description: "Homography Library - C++ implementation of state-of-the-art methods with python bindings"
readmeQualityOk: true
url: "https://github.com/marcusvaltonen/HomLib"
homepage: "https://homlib.readthedocs.io"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 15
forks: 2
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2020-10-11T19:00:49Z"
lastCommitAt: "2026-11-06T11:23:46Z"
lastReleaseAt: "2026-11-03T21:18:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 71
undervaluedScore: 52
maintainers: ["marcusvaltonen", "f-dy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff2ebe47ddf3e9c7b8f64cd5ed773af0b614a747b87f91b339d11261a4e8d19f/marcusvaltonen/HomLib"
---

# HomLib

C++ library for computing homographies with support in Python.

## Quick start

```python
import numpy as np
import homlib

# Estimate homography with one-sided radial distortion
solver = homlib.Wadenback3DV2026OneSided()
poses = solver.estimate(x, y)  # returns list[PoseData]

# Robust estimation with LOMSAC
lomsac = homlib.LOMSAC(solver, squared_inlier_threshold=0.005)
estimate, stats = lomsac.estimate(x_noisy, y_noisy)
```

If built with SupeRANSAC support:

```python
sa = homlib.SupeRANSAC(solver, inlier_threshold=0.07)
estimate, stats = sa.estimate(x_noisy, y_noisy)
```

## Solvers
This repository contains the following solvers for computing homographies with
simultaneous radial distortion correction and/or incorporating IMU data.

We further support affine-covariant and orientation-covariant solvers, requiring
fewer correspondences than their point-based counterparts by leveraging the geometric
information of the corresponding descriptors.

| Authors (year)                           | #Corrs | Minimal            | Radial distortion coeff. | IMU data           | General homography | Descriptor |
| ---------------------------------------- | ------ |…
