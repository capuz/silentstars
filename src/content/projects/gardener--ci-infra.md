---
repo: "gardener/ci-infra"
name: "ci-infra"
description: "Test infrastructure for the Gardener project."
readmeQualityOk: true
url: "https://github.com/gardener/ci-infra"
homepage: "https://prow.gardener.cloud"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 6
forks: 72
openIssues: 2
closedIssues: 36
watchers: 4
contributors: 74
recentReleases: 0
createdAt: "2021-11-25T14:31:40Z"
lastCommitAt: "2026-09-23T08:46:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 91
maintainers: ["gardener-ci-robot", "LucaBernstein", "StarMiner99"]
openGraphImageUrl: "https://opengraph.githubassets.com/2592ba933e7017309b58974d603920114ea1bed62c8a1564d98e3ead8abbb4dd/gardener/ci-infra"
---

# ci-infra

This repository contains configuration files for the testing and automation needs of the Gardener project.

## CI Job Management

Gardener uses a [`prow`](https://github.com/kubernetes/test-infra/blob/master/prow) instance at [prow.gardener.cloud](https://prow.gardener.cloud) to handle CI and automation for parts of the project.
Everyone can participate in a self-service PR-based workflow, where changes are automatically deployed after they have been reviewed and merged.
All job configs are located in [`config/jobs`](https://github.com/gardener/ci-infra/blob/HEAD/config/jobs).

### TestGrid
The results of prow jobs can be visualized in TestGrid in dashboards at [testgrid.k8s.io/gardener](https://testgrid.k8s.io/gardener). We don't run our own TestGrid installation, but include our dashboards into the TestGrid installation of Kubernetes.

We configured dashboards for each of our repositories where we run tests with prow. You find them at [config/testgrids/config.yaml](https://github.com/gardener/ci-infra/blob/HEAD/config/testgrids/config.yaml).

When the desired dashboard is defined, you can add your prow job to a dashboard annotating them like in the example below.…
