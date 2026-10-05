---
repo: "coralogix/coralogix-operator"
name: "coralogix-operator"
description: "Coralogix Operator for integration with Kubernetes clusters."
readmeQualityOk: true
url: "https://github.com/coralogix/coralogix-operator"
homepage: "https://coralogix.com"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["coralogix", "kubernetes", "operator", "logging", "alerting", "metrics", "prometheus", "observability"]
stars: 10
forks: 9
openIssues: 4
closedIssues: 39
watchers: 5
contributors: 28
recentReleases: 0
createdAt: "2020-07-09T00:35:43Z"
lastCommitAt: "2026-10-05T10:47:06Z"
lastReleaseAt: "2023-08-04T14:54:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 83
maintainers: ["assafad1", "markshleifer-coralogix", "cazorla19"]
openGraphImageUrl: "https://opengraph.githubassets.com/823a542dc93aa1b330ebd5f4970365506ae3ffb7d7ee7250f7a70452537e9471/coralogix/coralogix-operator"
---

# Coralogix Operator

## Overview
The Coralogix Operator provides Kubernetes-native deployment and management for Coralogix, designed to simplify and automate the configuration of Coralogix APIs through Kubernetes [Custom Resource Definitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) and controllers.

The operator provides the following capabilities:

- **CRDs and controllers:** Easily deploy and manage various Coralogix features using custom resources, which are automatically reconciled by the operator. For a complete list of available CRDs and their details, refer to the [API documentation](https://github.com/coralogix/coralogix-operator/tree/main/docs/api.md). For examples of custom resources, refer to the [samples directory](https://github.com/coralogix/coralogix-operator/tree/main/config/samples).
- **[Prometheus Operator](https://prometheus-operator.dev/) integration:** The Operator leverages PrometheusRule CRD, to simplify the transition to Coralogix Alerts by utilizing existing monitoring configurations. For more details on this integration, refer to the [Prometheus Integration…
