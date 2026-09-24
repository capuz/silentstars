---
repo: "thanos-community/thanos-operator"
name: "thanos-operator"
description: "Operator to manage Thanos installations! (alpha APIs)"
readmeQualityOk: true
url: "https://github.com/thanos-community/thanos-operator"
homepage: "https://thanos-operator.dev"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["kubernetes", "observability", "operator", "prometheus", "prometheus-operator", "thanos", "cncf", "go", "metrics", "monitoring"]
stars: 68
forks: 15
openIssues: 4
closedIssues: 31
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2024-03-21T19:49:30Z"
lastCommitAt: "2026-09-24T08:41:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 53
maintainers: ["philipgough", "saswatamcode", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd46c4cc8847ba9332044be33532756b636bafb227d839f36d89a08b2482572e/thanos-community/thanos-operator"
---

# Thanos Operator

> [!NOTE]
>
> This operator is still a work in progress so APIs are in alpha state.

## Overview

The Thanos Operator provides Kubernetes native deployment and management of Thanos components. The purpose of this project is to simplify and automate the configuration of a Thanos based monitoring stack that would work across different topologies and deployment modes.

The Thanos operator includes, but is not limited to, the following features:

* **Kubernetes Custom Resources**: For Thanos Receive, Thanos Ruler, Thanos Store Gateway, Thanos Compactor and Thanos Querier. For Thanos Sidecar, please use [Prometheus CRD](https://prometheus-operator.dev/docs/api-reference/api/#monitoring.coreos.com/v1.Prometheus) from Prometheus-Operator.

* **Simplified Deployment Configuration**: Configure fundamental and advanced topologies wth simplified CRDs that can be composed into architecture of your choice.

* **Extensability with multi-cluster technologies**: Shares Thanos' philosophy of operating in multi-cluster environments. Provides extensible configuration so that you can easily manage Thanos installation with other multi-cluster technologies/initiatives like custom…
