---
repo: "Twingate/kubernetes-operator"
name: "kubernetes-operator"
description: "Twingate Kubernetes Operator allows configuring Twingate using Kubernetes assets - OSS"
readmeQualityOk: true
url: "https://github.com/Twingate/kubernetes-operator"
homepage: "https://www.twingate.com"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["kubernetes", "kubernetes-operator", "python", "twingate", "gitops", "helm"]
stars: 56
forks: 11
openIssues: 3
closedIssues: 104
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2023-10-20T18:02:56Z"
lastCommitAt: "2026-10-27T09:17:09Z"
lastReleaseAt: "2024-03-12T00:06:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["dependabot[bot]", "minhtule", "ekampf"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8e851e84597a837a9df1cfafa97e1ff600a00eb85892e4529a2d7d0fd4deb1c/Twingate/kubernetes-operator"
---

# Twingate Kubernetes Operator

The Twingate Kubernetes Controller is a custom controller designed to automate
and manage Twingate resources within a Kubernetes environment. It provides
seamless integration between your Kubernetes clusters and the Twingate Zero
Trust Network.

[Wiki][1]  |  [Getting Started][2]  |  [API Reference][3]

[1]: https://github.com/Twingate/kubernetes-operator/wiki
[2]: https://github.com/Twingate/kubernetes-operator/wiki/Getting-Started
[3]: https://github.com/Twingate/kubernetes-operator/wiki/API-Reference

## Prerequisites

- Kubernetes cluster (1.16+)
- Twingate account and resources (Gateways, Networks, Applications, etc.)
- Twingate account setup with a `Remote Network` for the Kubernetes cluster and
 connectors deployed (see [this Helm chart](https://github.com/Twingate/helm-charts)
 if required)
- Twingate API token with `Read/Write/Provision` permissions - this can be generated in the Twingate Admin Console

## Installation

### Helm via OCI (recommended)

The operator's helm chart is published to the following OCI repository:
`oci://ghcr.io/twingate/helmcharts/twingate-operator`

Follow these steps to install the operator:…
