---
repo: "ORNL/curifactory"
name: "curifactory"
description: "An experiment workflow and organization tool."
readmeQualityOk: true
url: "https://github.com/ORNL/curifactory"
homepage: "https://ornl.github.io/curifactory/stable/index.html"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 18
forks: 0
openIssues: 60
closedIssues: 68
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2021-10-04T16:26:08Z"
lastCommitAt: "2026-09-18T14:02:57Z"
lastReleaseAt: "2022-12-14T19:43:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["WarmCyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e264536e71336428cbc608760bfd3f19f6f9da1f4f1b9c26a27673a9b5f9477/ORNL/curifactory"
discussionCount: 0
---

# Curifactory

Curifactory is a library and CLI tool designed to help organize and manage
research experiments in python.

Experiment management must fulfill several tasks, including experiment orchestration,
parameterization, caching, reproducibility, reporting, and parallelization.
Existing projects such as MLFlow, MetaFlow, Luigi, and Pachyderm
support these tasks in several different ways and to various degrees.
Curifactory provides a different opinion, with a heavier focus on supporting general
research experiment workflows for individuals or small teams working primarily
in python.

You can read more about these design principles in our paper in the [SciPy 2022
proceedings](https://conference.scipy.org/proceedings/scipy2022/nathan_martindale.html).

## Features

* Adds a CLI layer on top of your codebase, a single entrypoint for running experiments
* Automatic caching of intermediate data and lazy loading of stored objects
* Jupyter notebook output for further exploration of an experiment run
* Docker container output with copy of codebase, conda environment, full experiment run cache, and jupyter run notebook
* HTML report output from each run with graphviz-rendered diagram…
