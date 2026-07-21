---
repo: "giantswarm/dashboards"
name: "dashboards"
description: "All our dashboards for Grafana"
readmeQualityOk: true
url: "https://github.com/giantswarm/dashboards"
language: "Shell"
languages: ["Shell", "Jsonnet"]
languagePcts: [49, 32]
stars: 26
forks: 0
openIssues: 1
closedIssues: 0
watchers: 9
contributors: 79
recentReleases: 0
createdAt: "2020-07-08T14:13:40Z"
lastCommitAt: "2026-07-21T06:12:51Z"
lastReleaseAt: "2021-09-06T13:38:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 45
maintainers: ["renovate[bot]", "TheoBrigitte", "taylorbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/135e3ca89f9fca06c3a68881e066c5dfdd3a8323419da6d25e33a870582bd3a8/giantswarm/dashboards"
---

# Dashboards

This project currently contains Giant Swarm public dashboards.

The goal of this repository is to have both public and Grafana Cloud dashboards defined in one place.

## Management cluster's dashboards

The dashboards located under `helm/dashboards` are the dashboards hosted on each management cluster's grafana.
The "public" ones are accessible by the customer, and the "private" ones are only accessible by Giant Swarm employees.

### Sub-charts

Dashboards are organized into **capability-based sub-charts**, each containing dashboards owned by the responsible team:

- [`helm/dashboards/charts/observability`](https://github.com/giantswarm/dashboards/blob/HEAD/helm/dashboards/charts/observability) - Observability (Team Atlas)
- [`helm/dashboards/charts/kubernetes`](https://github.com/giantswarm/dashboards/blob/HEAD/helm/dashboards/charts/kubernetes) - Kubernetes (Team Tenet)
- [`helm/dashboards/charts/cloud`](https://github.com/giantswarm/dashboards/blob/HEAD/helm/dashboards/charts/cloud) - Cloud (Team Phoenix)
- [`helm/dashboards/charts/security`](https://github.com/giantswarm/dashboards/blob/HEAD/helm/dashboards/charts/security) - Security (Team Shield)
-…
