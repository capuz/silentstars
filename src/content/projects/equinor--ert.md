---
repo: "equinor/ert"
name: "ert"
description: "ERT - Ensemble based Reservoir Tool - is designed for running ensembles of dynamical models such as reservoir models, in order to do sensitivity analysis and data assimilation. ERT supports data assimilation using the Ensemble Smoother (ES) and Ensemble Smoother with Multiple Data Assimilation (ES-MDA)."
readmeQualityOk: true
url: "https://github.com/equinor/ert"
homepage: "https://ert.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "simulation", "scientific"]
stars: 161
forks: 139
openIssues: 349
closedIssues: 4763
watchers: 13
contributors: 101
recentReleases: 0
createdAt: "2017-04-24T11:32:08Z"
lastCommitAt: "2026-09-02T08:03:31Z"
lastReleaseAt: "2018-06-05T11:09:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["berland", "akustn", "andreas-el"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/89232721/4ba9a47e-4a48-48dd-8850-85261deba62e"
discussionCount: 17
---

<h1 align="center">
</h1>

ert - Ensemble based Reservoir Tool - is designed for running
ensembles of dynamical models such as reservoir models,
in order to do sensitivity analysis and data assimilation.
ert supports data assimilation using the Ensemble Smoother (ES) and
Ensemble Smoother with Multiple Data Assimilation (ES-MDA).

## Installation

```sh
pip install ert
ert --help
```

or, for the latest development version:

```sh
pip install git+https://github.com/equinor/ert.git@main
ert --help
```

For examples and help with configuration, see the [ert Documentation](https://ert.readthedocs.io/en/latest/getting_started/configuration/poly_new/guide.html#configuration-guide).

# EVEREST™

<h1 align="center">
</h1>

The primary goal of the EVEREST tool is to find *optimal* well
planning and production strategies by utilizing an ensemble of
reservoir models (e.g., an ensemble of geologically-consistent models).
This will enable robust decisions about drilling schedule and well
placement, in order to achieve results of significant practical value.

```sh
pip install ert[everest]
```

## Developing

We use uv to have one synchronized development environment for all packages.
See…
