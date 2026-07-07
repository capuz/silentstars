---
repo: "dash0hq/dash0-operator"
name: "dash0-operator"
description: "Dash0 Operator for Kubernetes"
readmeQualityOk: true
url: "https://github.com/dash0hq/dash0-operator"
homepage: "https://www.dash0.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 55
forks: 14
openIssues: 0
closedIssues: 13
watchers: 2
contributors: 80
recentReleases: 0
createdAt: "2024-05-08T13:21:21Z"
lastCommitAt: "2026-07-07T06:38:42Z"
lastReleaseAt: "2024-07-03T17:17:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["dependabot[bot]", "basti1302", "p-d0"]
openGraphImageUrl: "https://opengraph.githubassets.com/1130ca07e43ec202d5394566bed2667388367360787fc0895f02c9aa02ec7b10/dash0hq/dash0-operator"
discussionCount: 1
---

# Dash0 Operator

The Dash0 Operator makes observability for Kubernetes _easy_.
Install the operator into your cluster and create a Dash0 monitoring resource to get OpenTelemetry data flowing from
your applications and infrastructure to Dash0.

The detailed documentation for the Dash0 operator is in the
[Helm chart documentation](https://github.com/dash0hq/dash0-operator/blob/HEAD/helm-chart/dash0-operator/README.md), this README file only provides a brief overview of the
operator's features.

## Description

The Dash0 operator enables gathering OpenTelemetry data from your workloads for a selection of supported
runtimes, automatic log collection and metrics.

### Distributed tracing

Auto-instrumentation if supported for the following runtimes:

* Node.js 16+, using
  [Dash0 Node.js OpenTelemetry distribution](https://github.com/dash0hq/opentelemetry-js-distribution)
* Java 8+, using the [OpenTelemetry Java agent](https://github.com/open-telemetry/opentelemetry-java-instrumentation)

For more information on how the Dash0 operator automatically traces your applications, see the
[Automatic Workload…
