---
repo: "paulscherrerinstitute/scicat-ci"
name: "scicat-ci"
description: "CI related information to deploy SciCat"
readmeQualityOk: true
url: "https://github.com/paulscherrerinstitute/scicat-ci"
language: "Python"
languages: ["Python"]
languagePcts: [52]
stars: 5
forks: 2
openIssues: 8
closedIssues: 6
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2022-02-16T12:34:00Z"
lastCommitAt: "2026-07-09T20:44:18Z"
lastReleaseAt: "2022-05-05T13:06:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 70
maintainers: ["renovate[bot]", "minottic", "sbliven"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb901f1804a96def5263ba7baf503f15f21caeafbf15e5c74718580e5ef6789a/paulscherrerinstitute/scicat-ci"
---

# scicat-ci
CI related information to deploy SciCat at PSI.

For a simpler configuration for running and developing the SciCat core components, see
the [SciCat Live](https://github.com/SciCatProject/scicatlive) project.

# Local environment

To develop locally, please use the [SciCat Live](https://github.com/SciCatProject/scicatlive) project.

# Deployment behaviour
The CI is responsible for deploying the SciCat components in the k8s clusters (one for `development`, another for `qa` and `production`), based on some rules.

The whole pipeline relies on the existence of three deployment environments: `development` (where changes are developed), `qa` (beta testing environment) and `production` (stable environment). The components are deployed on one of two clusters depending on the environment. The `development` environment is deployed on the `development` cluster, while the `qa` and `production` environment are deployed on the `qaprod` cluster and are installed under the `scicat-{env}` namespace on the corresponding cluster. For the three GitHub CI triggers, `pull_request` to `main`, `push` to `main` and `release`, the CI extracts the environment based on the trigger (follows),…
