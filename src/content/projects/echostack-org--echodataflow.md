---
repo: "echostack-org/echodataflow"
name: "echodataflow"
description: "Orchestrated echosounder data processing workflow"
readmeQualityOk: true
url: "https://github.com/echostack-org/echodataflow"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dask", "prefect", "python"]
stars: 7
forks: 5
openIssues: 15
closedIssues: 82
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2022-01-21T18:28:44Z"
lastCommitAt: "2026-08-10T05:05:14Z"
lastReleaseAt: "2024-05-03T21:15:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 59
maintainers: ["leewujung", "ctuguinay"]
openGraphImageUrl: "https://opengraph.githubassets.com/5548fa01ed3db1f9ca15a52700093a86c5f97f49e7ba29501bca00821de6a785/echostack-org/echodataflow"
---

# Echodataflow: Streamlined Data Pipeline Orchestration

Echodataflow streamlines echosounder data processing by combining [Prefect](https://www.prefect.io/)-based pipeline orchestration, YAML configuration, and [Echopype](https://github.com/echostack-org/echopype) into a modular tool for defining, configuring, and executing workflows.

**Note:** Echodataflow v.0.1.x have been deprecated. We will release v0.2.0 soon!

## Installation

1. Set up a computing environment using Conda:
   ```bash
   conda create --name echodataflow -c conda-forge python=3.12
   conda activate echodataflow
   ```

2. If you would like to run Echodataflow as an installed package, 
   install it from the repo like below:
   ```bash
   pip install https://github.com/echostack-org/echodataflow.git  # install from repo
   ```
   This installs the `echodataflow-deploy` command, which can be run from any directory.
   If you instead would like to install Echodataflow to develop it,
   clone the repo and install it like below:
   ```bash
   git clone https://github.com/echostack-org/echodataflow.git  # clone the repo
   pip install -e ".[test,lint,docs]"  # install in editable mode with dev tools
   ```

3. Pip…
