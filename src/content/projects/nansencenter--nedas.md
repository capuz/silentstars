---
repo: "nansencenter/NEDAS"
name: "NEDAS"
description: "NERSC Ensemble Data Assimilation System"
readmeQualityOk: true
url: "https://github.com/nansencenter/NEDAS"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 19
forks: 10
openIssues: 0
closedIssues: 13
watchers: 8
contributors: 12
recentReleases: 3
createdAt: "2022-04-24T13:26:39Z"
lastCommitAt: "2026-09-02T08:02:23Z"
lastReleaseAt: "2026-08-17T18:26:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 74
maintainers: ["myying"]
openGraphImageUrl: "https://opengraph.githubassets.com/53ec9ef746484aeb3d911a80c8dfab79f6549b1eb16087a392a288aca3efeb5c/nansencenter/NEDAS"
---

The Next-generation Ensemble Data Assimilation System (NEDAS) is a lightweight, modular Python platform
designed for rapid prototyping and testing of data assimilation (DA) algorithms in geophysical models.
Leveraging [mpi4py](https://mpi4py.readthedocs.io/en/stable/), [numpy](https://numpy.org/),
and [numba](https://numba.pydata.org/),
NEDAS ensures scalability and computational efficiency for high-dimensional systems.
Thanks to the rich Python ecosystem for machine learning, NEDAS provides a platform for early-stage development of novel DA methods.
Moreover, NEDAS offers a collection of state-of-the-art DA algorithms for benchmarking,
including the serial assimilation approaches (similar to [DART](https://github.com/NCAR/DART)) and
batch assimilation approaches (similar to the LETKF in [PDAF](https://pdaf.awi.de/trac/wiki)).

[NEDAS documentaion is available online](https://nedas.readthedocs.io/en/latest/)

[A series of tutorial notebooks are also available](https://github.com/myying/NEDAS_tutorials)

### Installing NEDAS

NEDAS is available through this Github repository. To install the latest version at `[install path]`:

```
cd [install path]
git clone…
