---
repo: "bioexcel/biobb_workflows"
name: "biobb_workflows"
description: "Global repository for all the BioExcel Building Blocks Workflows"
readmeQualityOk: true
url: "https://github.com/bioexcel/biobb_workflows"
homepage: "https://mmb.irbbarcelona.org/biobb-wfs"
language: "Common Workflow Language"
languages: ["Common Workflow Language", "Shell", "Nextflow"]
languagePcts: [36, 25, 20]
stars: 9
forks: 4
openIssues: 0
closedIssues: 2
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2022-03-14T07:41:58Z"
lastCommitAt: "2026-11-24T13:36:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 76
maintainers: ["gbayarri", "RubenChM", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15ab80a2f65853fd1fa4799ca5e83a163459f35a40792581ac09a99ec593280d/bioexcel/biobb_workflows"
---

# BioExcel Building Blocks Workflows

Welcome to the global repository for all the **BioExcel Building Blocks Workflows**. In this repository, there are all the versions for each workflow manager:

* Common Workflow Language (CWL)
* Galaxy
* Jupyter Notebooks
* Pure Python
* Docker
* Apache Airflow
* Nextflow

## Installation

Please note that all the Jupyter Notebook versions are loaded as submodules as all of them have their own repository, so the process of cloning this project is slightly different than the common one:

```console
git clone --recursive https://github.com/bioexcel/biobb_workflows.git
cd biobb_workflows
git submodule update --init --recursive
```

After cloning, to update to the latest Jupyter Notebook release, just execute:

```console
git submodule update --remote
```
