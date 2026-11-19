---
repo: "rancher/compliance-operator"
name: "compliance-operator"
description: "The official Rancher operator for automated Kubernetes security compliance scanning and reporting."
readmeQualityOk: true
url: "https://github.com/rancher/compliance-operator"
homepage: "https://ranchermanager.docs.rancher.com/integrations-in-rancher/compliance-scans"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 7
forks: 12
openIssues: 9
closedIssues: 6
watchers: 0
contributors: 28
recentReleases: 0
createdAt: "2025-06-12T09:51:49Z"
lastCommitAt: "2026-11-19T05:07:22Z"
lastReleaseAt: "2025-10-28T10:22:03Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 88
maintainers: ["swastik959", "renovate-rancher[bot]", "Teja78906"]
openGraphImageUrl: "https://opengraph.githubassets.com/de1f9de0e102054bd72045196918917b2b6c6289e151e387a5730bf33472dce9/rancher/compliance-operator"
---

# compliance-operator [](https://scorecard.dev/viewer/?uri=github.com/rancher/compliance-operator)

The compliance-operator enables running Compliance security scans on a Kubernetes cluster and generate compliance reports that can be downloaded.
Benchmarks tests and the execution logic lives on [rancher/security-scan].
The `rancher/security-scan` image is also used as the [Sonobuoy](https://github.com/vmware-tanzu/sonobuoy) worker image, so the `rancher/mirrored-sonobuoy-sonobuoy` image is no longer used.

## Building

`make`

## Running
1. Install the custom resource definitions:
- `kubectl apply -f charts/rancher-compliance-crd/templates/`
2. Install the operator
`./bin/compliance-operator`

## Branches and Releases
### General information
The current branch strategy for `rancher/compliance-operator` is laid out below:
