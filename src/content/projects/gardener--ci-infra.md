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
forks: 73
openIssues: 2
closedIssues: 37
watchers: 4
contributors: 74
recentReleases: 0
createdAt: "2021-11-25T14:31:40Z"
lastCommitAt: "2026-10-21T08:48:44Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 91
maintainers: ["gardener-prow-autobumper[bot]", "renovate[bot]", "gardener-ci-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc60505e561b957dbb5d3a582528ad8a12efb964f41c3bb906416fd6b5cb9f97/gardener/ci-infra"
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
