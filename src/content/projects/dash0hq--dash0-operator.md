---
repo: "dash0hq/dash0-operator"
name: "dash0-operator"
description: "Dash0 Operator for Kubernetes"
url: "https://github.com/dash0hq/dash0-operator"
homepage: "https://www.dash0.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 56
forks: 14
openIssues: 0
closedIssues: 13
watchers: 2
contributors: 74
recentReleases: 0
createdAt: "2024-05-08T13:21:21Z"
lastCommitAt: "2026-06-30T06:50:39Z"
lastReleaseAt: "2024-07-03T17:17:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["dependabot[bot]", "basti1302", "p-d0"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec4b2bef4454b5aaeca6742ac928055daad4f9ecb589a662fe95381b25ff58eb/dash0hq/dash0-operator"
discussionCount: 1
---

# Dash0 Operator

The Dash0 Operator makes observability for Kubernetes _easy_.
Install the operator into your cluster and create a Dash0 monitoring resource to get OpenTelemetry data flowing from
your applications and infrastructure to Dash0.

The detailed documentation for the Dash0 operator is in the
[Helm chart documentation](helm-chart/dash0-operator/README.md), this README file only provides a brief overview of the
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
[Automatic Workload Instrumentation](https://artifacthub.io/packages/helm/dash0-operator/dash0-operator#automatic-workload-instrumentation)
section of the…
