---
repo: "sofa-framework/PerformanceRegression"
name: "PerformanceRegression"
description: "Plugin containing script to run performance regression tests and display them"
readmeQualityOk: true
url: "https://github.com/sofa-framework/PerformanceRegression"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [76, 24]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-02-21T09:03:52Z"
lastCommitAt: "2026-10-29T14:07:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 74
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6149c1c5a6b8b9e0e28f136a7072bffa3718773518eb419d4b2bfd771af4c2f/sofa-framework/PerformanceRegression"
---

# Performance regression testing for SOFA

This repository is meant for testing computatioin speed of SOFA Framework. It is constituted of two parts :
1. Scripts to generate computation statistics
2. Script to display the results in a dashboard

The repository serves also as an archive because all te generated results are saved in the folder `old_results` by the action

This plugin has been built to work on Ubuntu, but it might work properly on other OS, it just hasn't been tested.

## Use the action

This script is meant to be launched on a physical self-hosted runner to make sure the running conditions are reproducible. To launch the statistic generation, a workflow-dispatch is available.
Inputs are simple:
1. Sofa branch name (master by default)
2. Commit id (empty by default) --> if none given the tip of the branch is taken

The action is meant to work only with master and releases branches.
The action will then perform the statistic geenration and push them on the repository.

## Use on your own computer

### Statistics generation

#### Dependencies
If you want to run the statistic generation on your own computer, those are the dependencies :
- **SOFA:** Dependencies to build…
