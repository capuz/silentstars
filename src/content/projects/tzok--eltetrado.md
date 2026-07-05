---
repo: "tzok/eltetrado"
name: "eltetrado"
description: "A Python application to find and classify tetrads and quadruplexes in DNA/RNA 3D structures"
readmeQualityOk: true
url: "https://github.com/tzok/eltetrado"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["quadruplexes", "rna", "dna", "nucleic-acids", "bioinformatics", "visualization"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-04-12T15:08:36Z"
lastCommitAt: "2026-07-05T20:58:53Z"
lastReleaseAt: "2022-08-25T14:21:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 64
maintainers: ["dependabot[bot]", "tzok"]
openGraphImageUrl: "https://opengraph.githubassets.com/29c41d1aab51065f05d0aba936cae79f385669f7054c37506bdcb3dac5a7b9be/tzok/eltetrado"
---

# Project description

This is an application to analyze base pairing patterns of DNA/RNA 3D
structures to find and classify tetrads and quadruplexes. ElTetrado
assigns tetrads to one of the ONZ classes (O, N, Z) alongside with the
directionality of the tetrad (+/-) determined by the bonds between bases
and their non-canonical interactions. The interactions follow
Leontis/Westhof classification (Leontis *et al.* 2001). Watson-Crick (W)
edge of first base in the tetrad structure exposed to the Hoogsteen (H)
edge of the next nucleobase from the same tetrad sets the tetrad
directionality, clockwise (+) or anticlockwise (-). For more details,
please refer to Zok *et al.* (2020) and Popenda *et al.* (2020)

# Installation

This project uses [uv](https://docs.astral.sh/uv/) for dependency
management.

To install the package, run:

``` bash
uv sync --locked
```

# Dependencies

The project is written in Python 3.12+ and requires
[mmcif](https://pypi.org/project/mmcif/),
[orjson](https://github.com/ijl/orjson), [NumPy](https://numpy.org/) and
[rnapolis](https://github.com/tzok/rnapolis-py).

Visualization is created by `R` 3.6+ script which uses
[R4RNA](https://www.e-rna.org/r-chie/) (Lai…
