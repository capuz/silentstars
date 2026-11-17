---
repo: "jupyter-xeus/xeus-sqlite"
name: "xeus-sqlite"
description: "Jupyter kernel for SQLite"
readmeQualityOk: true
url: "https://github.com/jupyter-xeus/xeus-sqlite"
language: "C++"
languages: ["C++", "CMake"]
languagePcts: [61, 37]
stars: 172
forks: 27
openIssues: 18
closedIssues: 35
watchers: 5
contributors: 25
recentReleases: 0
createdAt: "2020-03-11T11:24:36Z"
lastCommitAt: "2026-11-17T12:13:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 23
maintainers: ["JohanMabille"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a6a6d007a24711f964f3f34ba740d4225498f8dd37e6e600450278d0cf0bdf4/jupyter-xeus/xeus-sqlite"
---

# xeus-sqlite

`xeus-sqlite` is a Jupyter kernel for SQL based on the native implementation of the Jupyter protocol [xeus](https://github.com/jupyter-xeus/xeus).

`xeus-sqlite` now supports [vega](https://vega.github.io/) visualizations thanks to [xvega](https://github.com/jupyter-xeus/xvega).

## Usage

Launch the Jupyter notebook with `jupyter notebook` or Jupyter lab with `jupyter lab` and launch a new SQL notebook by selecting the **xsqlite** kernel.

## Installation

xeus-sqlite has been packaged for the mamba (or conda) package manager on the **Linux** and **OS X** platforms. At the moment, we are not providing packages for the **Windows** platform.

To ensure that the installation works, it is preferable to install xeus-sqlite in a fresh environment.

To ensure that the installation works, it is preferable to install `xeus` in a fresh environment. It is also needed to use
a [miniforge](https://github.com/conda-forge/miniforge#mambaforge) or [miniconda](https://conda.io/miniconda.html) installation because with the full [anaconda](https://www.anaconda.com/)
you may have a conflict.

The safest usage is to create an environment named xeus-sqlite

```
mamba create -n…
