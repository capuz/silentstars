---
repo: "lincc-frameworks/lightcurvelynx"
name: "lightcurvelynx"
description: "A Fast and Nimble Package for Time Domain Astronomy"
readmeQualityOk: true
url: "https://github.com/lincc-frameworks/lightcurvelynx"
homepage: "https://lightcurvelynx.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 36
forks: 10
openIssues: 11
closedIssues: 167
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2024-05-07T18:02:09Z"
lastCommitAt: "2026-10-21T20:00:50Z"
lastReleaseAt: "2025-09-30T01:02:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["jeremykubica", "hmperk18", "guillochon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4bf1b1328abe54bbddc663e64858d24749d64e9503a344369306a769448c43c/lincc-frameworks/lightcurvelynx"
---

# LightCurveLynx

A Fast and Nimble Package for Time Domain Astronomy

## Introduction

Realistic light curve simulations are essential to many time-domain problems. 
Simulations are needed to evaluate observing strategy, characterize biases, 
and test pipelines. LightCurveLynx aims to provide a flexible, scalable, and user-friendly
time-domain simulation software with realistic effects and survey strategies.

The software package consists of multiple stages:
1. A flexible framework for consistently sampling model parameters (and hyperparameters),
2. Realistic models of time varying phenomena (such as supernovae and AGNs),
3. Effect models (such as dust extinction), and
4. Survey characteristics (such as cadence, filters, and noise).

For an overview of the package, we recommend starting with [introduction notebook](https://lightcurvelynx.readthedocs.io/en/latest/notebooks/introduction.html).

## Installation

Install from PyPI or conda-forge:

```
pip install lightcurvelynx
```

```
conda install conda-forge::lightcurvelynx
```

Since LightCurveLynx relies on a large number of existing packages, not all of the packages
are installed in the default configuration. You can install…
