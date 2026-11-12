---
repo: "proteustoolkit/proteus"
name: "proteus"
description: "A computational methods and simulation toolkit"
readmeQualityOk: true
url: "https://github.com/proteustoolkit/proteus"
homepage: "http://proteustoolkit.org"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [50, 28]
topics: ["code-mil", "python", "c-plus-plus", "c", "simulation-toolkit", "proteus"]
stars: 97
forks: 59
openIssues: 103
closedIssues: 229
watchers: 20
contributors: 56
recentReleases: 0
createdAt: "2011-08-15T21:28:25Z"
lastCommitAt: "2026-11-12T11:41:07Z"
lastReleaseAt: "2017-11-04T01:59:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 50
maintainers: ["cekees", "abarua-ce", "nathawani"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2a62e7f36514dd424a349eb32afb761b3f438558b5bf652ed9a1c3bc0dd0b5c/proteustoolkit/proteus"
---

# Proteus: Computational Methods and Simulation Toolkit [](https://github.com/proteustoolkit/proteus/actions/workflows/sdist.yml) [](https://zenodo.org/badge/latestdoi/2212385)

Proteus (https://proteustoolkit.org) is a Python package for
rapidly developing computer models and numerical methods.

# Installation

## conda / mamba

```bash
mamba install proteus -c conda-forge
```

## conda / mamba for proteus development

For a development installation, you want to install Proteus's dependencies and compile Proteus from source. Two dependency files are provided, differing only in which MPI implementation they use -- see "Choosing between OpenMPI and MPICH" below. If in doubt, use the OpenMPI one:

```bash
mamba env create -f environment-openmpi-dev.yml # or environment-mpich-dev.yml; environment-dev-up.yml to try unpinned dependencies
mamba activate proteus-dev-openmpi              # or proteus-dev-mpich
# --no-build-isolation: without it pip builds in a throwaway environment and
# re-fetches build dependencies from PyPI, so proteus's extensions compile
# against PyPI numpy's headers while linking this env's numpy at runtime
# (visible as…
