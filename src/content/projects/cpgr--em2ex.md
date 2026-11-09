---
repo: "cpgr/em2ex"
name: "em2ex"
description: "Converts reservoir models to Exodus II format"
readmeQualityOk: true
url: "https://github.com/cpgr/em2ex"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 5
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-05-07T06:21:35Z"
lastCommitAt: "2026-11-09T00:53:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 49
maintainers: ["cpgr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ced603785182fa2320f7dbf05ae536dff43cbf6c65e7b1a8c6b77b59113991ea/cpgr/em2ex"
---

# One-step conversion from reservoir Earth models to Exodus II format

`em2ex` is a python program that converts a reservoir model to an Exodus II file that can then be used in
a simulation tool (such as [MOOSE](http://www.mooseframework.org)) or viewed in a visualisation tool (such as [Paraview](https://www.paraview.org)).

[*Johansen formation*](https://www.sintef.no/projectweb/matmora/downloads/johansen/) *converted to Exodus format from Eclipse dataset*

Currently, `em2ex` supports two reservoir modelling formats:

- Eclipse (ASCII files)
- Leapfrog Geothermal (CSV files)

## Setup

`em2ex` is a pure python program that does not depend on any external libraries (but does require a few common python packages), so can run on any system with a working python installation.

### Clone repository

`em2ex` can be installed by cloning this repository from GitHub using
```bash
git clone git@github.com:cpgr/em2ex.git
```
or
```bash
git clone https://github.com/cpgr/em2ex.git
```
This will add a folder `em2ex` containing the code.

### Required python packages

The following python packages are required to run `em2ex`

- numpy
- pandas
- netCDF4

The first two are typically already…
