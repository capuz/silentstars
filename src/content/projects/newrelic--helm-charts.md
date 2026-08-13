---
repo: "newrelic/helm-charts"
name: "helm-charts"
description: "Helm charts for New Relic applications"
readmeQualityOk: true
url: "https://github.com/newrelic/helm-charts"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [75]
stars: 107
forks: 247
openIssues: 48
closedIssues: 232
watchers: 20
contributors: 212
recentReleases: 0
createdAt: "2020-04-20T18:41:00Z"
lastCommitAt: "2026-08-11T13:06:08Z"
lastReleaseAt: "2020-06-03T12:53:23Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 52
maintainers: ["renovate[bot]", "dbudziwojskiNR", "kush-newrelic"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec279a8c20b94a9134f275048492e290a465d3b0830e3625ee29df619930dda2/newrelic/helm-charts"
---

# New Relic's Helm charts repository

This is the official Helm charts repository for New Relic. It is indexed at [Helm Hub][helm-hub], where you can find the list of available charts and their documentation.

* [Prerequisites](#Prerequisites)
* [Install](#Installthecharts)
* [Development](#Development)
* [Testing](#Testing)
* [Contributing](#Contributing)
* [Support](#Support)
* [License](#License)

## <a name='Prerequisites'></a>Prerequisites

* Helm CLI ([install instructions][installing-helm])
* New Relic account

## <a name='Installthecharts'></a>Install
You can have all the information about the installation in the [New Relic Documentation page for installing the Kubernetes integration
using Helm](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/)

Just as a glance of the process of installation and configuration the process involves to create a `values.yaml` that will look like this:
```yaml
global:
  licenseKey: YOUR_LICENSE_KEY
  cluster: YOUR_CLUSTER_NAME
nri-kube-events:
  enabled: true
nri-metadata-injection:
  enabled: true
nri-prometheus:
  enabled: true
newrelic-logging:
  enabled: true…
