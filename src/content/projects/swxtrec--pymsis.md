---
repo: "SWxTREC/pymsis"
name: "pymsis"
description: "Python interface to the NRLMSIS codes for calculating atmospheric densities and constituents at satellite altitudes"
url: "https://github.com/SWxTREC/pymsis"
homepage: "https://swxtrec.github.io/pymsis/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["atmosphere-model", "msis", "python", "satellite"]
stars: 38
forks: 8
openIssues: 2
closedIssues: 24
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-09-23T23:03:36Z"
lastCommitAt: "2026-06-28T03:11:24Z"
lastReleaseAt: "2025-07-31T02:45:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 73
undervaluedScore: 35
maintainers: ["greglucas", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/298114805/06f70700-0333-11eb-8410-dc046d41ba16"
---

# pymsis: A python wrapper of the NRLMSIS model

Pymsis is a minimal and fast Python wrapper of the NRLMSIS models (MSISE-00, MSIS2.0, MSIS2.1).
The [MSIS model](https://www.nrl.navy.mil/Our-Work/Areas-of-Research/Space-Science/) is
developed by the Naval Research Laboratory. For quick access to the model data without any code,
there is a web viewer that uses pymsis: <https://swx-trec.com/msis>

## Quickstart

- [Documentation](https://swxtrec.github.io/pymsis/)
- [API Reference](https://swxtrec.github.io/pymsis/reference/index.html): Details about the various options and configurations available in the functions.
- [Examples](https://swxtrec.github.io/pymsis/examples/index.html): Demo for how to access and plot the data.
- [Web viewer](https://swx-trec.com/msis): An interactive website using pymsis through cloud-based serverless functions.

**A few short lines of code to get started quickly with pymsis.**

1. Create a range of dates during the 2003 Halloween storm.
2. Run the model at the desired location (lon, lat) (0, 0) and 400 km altitude.
3. Plot the results to see how the mass density increased at 400 km altitude during this storm.

```python
import numpy as np
import…
