---
repo: "newrelic/k8s-agents-operator"
name: "k8s-agents-operator"
description: "This project auto-instruments containerized workloads in Kubernetes with New Relic agents."
readmeQualityOk: true
url: "https://github.com/newrelic/k8s-agents-operator"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 13
forks: 22
openIssues: 4
closedIssues: 25
watchers: 12
contributors: 44
recentReleases: 0
createdAt: "2024-04-23T13:29:34Z"
lastCommitAt: "2026-08-10T12:19:47Z"
lastReleaseAt: "2024-06-17T12:07:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 73
maintainers: ["renovate[bot]", "NewRelic-K8s-Agents-Bot", "dbudziwojskiNR"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f27b38f5a81da45aa6c65b27a629e92fd8c595b1a514d1f9ab1633cb0bcb0fa/newrelic/k8s-agents-operator"
---

# K8s Agents Operator [](https://codecov.io/gh/newrelic/k8s-agents-operator)

This project auto-instruments containerized workloads in Kubernetes with New Relic agents.

## Table Of Contents

- [Installation](#installation)
- [Instrumentation](https://github.com/newrelic/k8s-agents-operator/blob/HEAD/instrumentation.md)
- [Development](#development)
- [Compatibility](#compatibility)
- [Support](#support)
- [Contribute](#contribute)
- [License](#license)

## Installation

For instructions on how to install the Helm chart, read the [chart's README](https://github.com/newrelic/k8s-agents-operator/blob/HEAD/charts/k8s-agents-operator/README.md)

## Development

We use Minikube and Tilt to spawn a local environment that it will reload after any changes inside the charts or the integration code.

Make sure you have these tools or install them:

* [Install minikube](https://minikube.sigs.k8s.io/docs/start/)
* [Install Tilt](https://docs.tilt.dev/install.html)
* [Install Helm](https://helm.sh/docs/intro/install/)

Start the local environment:

```bash
ctlptl create registry ctlptl-registry --port=5005
ctlptl create cluster minikube --registry=ctlptl-registry
tilt up
```
## Compatibility
*…
