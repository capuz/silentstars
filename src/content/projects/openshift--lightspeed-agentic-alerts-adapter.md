---
repo: "openshift/lightspeed-agentic-alerts-adapter"
name: "lightspeed-agentic-alerts-adapter"
description: "Alerts adapter for OpenShift Agentic Lightspeed"
readmeQualityOk: true
url: "https://github.com/openshift/lightspeed-agentic-alerts-adapter"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 11
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 364
recentReleases: 0
createdAt: "2026-05-07T14:07:21Z"
lastCommitAt: "2026-10-13T10:57:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 56
maintainers: ["openshift-merge-bot[bot]", "red-hat-konflux[bot]", "tremes"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5eb508778487a232d0d5c2dd5e9d1c50f5005907fb687feabe585057539751/openshift/lightspeed-agentic-alerts-adapter"
---

# Lightspeed Agentic Alerts Adapter

A component that bridges OpenShift cluster alerts into the [Lightspeed Agentic](https://github.com/openshift/lightspeed-agentic-operator) system. It polls the in-cluster AlertManager API for firing alerts and creates `AgenticRun` custom resources (`agentic.openshift.io/v1alpha1`) to trigger automated analysis and remediation workflows.

## Quick start

### Prerequisites

- Go 1.26+
- Access to an OpenShift cluster (for deployment)
- [golangci-lint](https://golangci-lint.run/) (for linting)

### Build

```sh
make build        # outputs ./bin/alerts-adapter
```

### Test

```sh
make test         # run all tests
make coverage     # generate HTML coverage report
make lint         # run golangci-lint
```

### Run locally

```sh
make run
```

### Container

```sh
make container-build IMAGE_NAME=quay.io/your-org/lightspeed-agentic-alerts-adapter
make container-push  IMAGE_NAME=quay.io/your-org/lightspeed-agentic-alerts-adapter
```

`container-push` depends on `container-build` — it builds and pushes in one step. `IMAGE_TAG` defaults to `latest`.

### Deploy to OpenShift

```sh
kubectl apply -f manifests/
```

The adapter runs as a single-replica…
