---
repo: "opendatahub-io/notebooks"
name: "notebooks"
description: "Notebook images for ODH"
readmeQualityOk: true
url: "https://github.com/opendatahub-io/notebooks"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["kubeflow", "odh", "gpu", "jupyter", "kubernetes", "nvidia"]
stars: 32
forks: 146
openIssues: 569
closedIssues: 342
watchers: 8
contributors: 123
recentReleases: 0
createdAt: "2022-09-06T12:51:19Z"
lastCommitAt: "2026-07-22T06:11:16Z"
lastReleaseAt: "2023-09-22T16:12:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 60
maintainers: ["atheo89", "ide-developer", "openshift-merge-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c52f64ef34bdfec7e51ed43c393b257bfac213909746c40ac2692874b2cb1ea5/opendatahub-io/notebooks"
---

# OpenDataHub Notebooks

Welcome to the OpenDataHub Notebooks repository! This repository provides a collection of notebooks tailored for data analysis, machine learning, research and coding within the OpenDataHub ecosystem. Designed to streamline data science workflows, these notebooks offer an integrated environment equipped with the latest tools and libraries. These notebooks were created to be used with OpenDataHub ecosystem with the ODH Notebook Controller as the launcher.

These workbenches are available at: [quay.io/repository/opendatahub/workbench-images](https://quay.io/repository/opendatahub/workbench-images)

## Getting Started
For a deeper understanding of the architecture underlying this repository, please explore our wiki page [Wiki](https://github.com/opendatahub-io/notebooks/wiki/Workbenches)

### Prerequisites
Make sure the following tools are installed in your environment:
 - podman/docker
 - python 3.14
 - [uv](https://docs.astral.sh/uv/)
 - make (on macOS: `brew install make` and add `/opt/homebrew/opt/make/libexec/gnubin` to `PATH`)
 - curl
 - git, git-lfs (for `*.vsix` files)

### Installation
Clone this repository to your local machine:

```shell
git clone…
