---
repo: "FraunhoferIWES/foxes"
name: "foxes"
description: "Farm Optimization and eXtended yield Evaluation Software"
readmeQualityOk: true
url: "https://github.com/FraunhoferIWES/foxes"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 41
forks: 10
openIssues: 2
closedIssues: 22
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-04-28T05:02:11Z"
lastCommitAt: "2026-09-04T08:10:13Z"
lastReleaseAt: "2022-11-15T14:23:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 57
maintainers: ["SchmJo", "janwenske-ship-it", "VolLuk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/486452507/9ebd2ca0-e49c-4f19-a14b-b1c5f9aedc4d"
discussionCount: 7
---

# Welcome to foxes

## Overview

The software `foxes` is a modular wind farm simulation and wake modelling toolbox which is based on engineering wake models. It has many applications, for example

- Wind farm optimization, e.g. layout optimization or wake steering,
- Wind farm post-construction analysis,
- Wake model studies, comparison and validation,
- Wind farm simulations invoking complex model chains.

The fast performance of `foxes` is owed to vectorization and parallelization,
and it is intended to be used for large wind farms and large timeseries inflow data.
The parallelization on local or remote clusters is supported, based on
[mpi4py](https://mpi4py.readthedocs.io/en/stable/) or
[dask.distributed](https://distributed.dask.org/en/stable/).
The wind farm
optimization capabilities invoke the [foxes-opt](https://github.com/FraunhoferIWES/foxes-opt) package which
as well supports vectorization and parallelization.

`foxes` is build upon many years of experience with wake model code development at IWES, starting with the C++ based in-house code _flapFOAM_ (2011-2019) and the Python based direct predecessor _flappy_ (2019-2022).

Documentation:…
