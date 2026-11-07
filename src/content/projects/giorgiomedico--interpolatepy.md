---
repo: "GiorgioMedico/InterpolatePy"
name: "InterpolatePy"
description: "🚀 InterpolatePy: A fast and precise Python library for production-ready trajectory planning, offering 20+ algorithms for C² continuous splines, jerk-limited S-curves, and quaternion interpolation for robotics, animation, and scientific computing."
readmeQualityOk: true
url: "https://github.com/GiorgioMedico/InterpolatePy"
homepage: "https://giorgiomedico.github.io/InterpolatePy/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [63, 37]
topics: ["curve", "doubles", "interpolation", "interpolation-methods", "interpolation-polynomial", "spline", "spline-approximation", "spline-curve", "spline-interpolation", "trapezoidal"]
stars: 26
forks: 4
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2025-03-07T15:03:35Z"
lastCommitAt: "2026-11-07T16:12:36Z"
lastReleaseAt: "2026-09-04T07:19:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 67
maintainers: ["GiorgioMedico", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0101e1bc1ff3a0d21679d30d404d0ee80b4e48546445b7cc4781f2510167de/GiorgioMedico/InterpolatePy"
fundingLinks: ["KO_FI:https://ko-fi.com/giorgio23"]
discussionCount: 2
---

# InterpolatePy

InterpolatePy is a trajectory-planning and interpolation library for robotics,
animation, and scientific computing. It includes scalar splines, B-spline curve
tools, bounded motion profiles, quaternion interpolation, and 3D path utilities.

The package has a NumPy/SciPy implementation and an optional C++20 backend. Use
the public names exported by `interpolatepy`; they select the available backend
at import time.

## Installation

```bash
python -m pip install InterpolatePy
```

InterpolatePy 3.3.2 requires Python 3.11 or newer, NumPy 1.26 or newer,
and SciPy 1.11 or newer. Install plotting support when needed:

```bash
python -m pip install "InterpolatePy[plot]"
```

## Quick start

```python
import numpy as np

from interpolatepy import CubicSpline
from interpolatepy import DoubleSTrajectory
from interpolatepy import StateParams
from interpolatepy import TrajectoryBounds

# A clamped cubic spline: v0 and vn are endpoint velocities.
spline = CubicSpline(
    [0.0, 1.0, 2.0, 3.0],
    [0.0, 1.5, -0.5, 2.0],
    v0=0.0,
    vn=0.0,
)
times = np.linspace(0.0, 3.0, 100)
positions = spline.evaluate(times)
velocities = spline.evaluate_velocity(times)

# A jerk-limited…
