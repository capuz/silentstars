---
repo: "korrel8r/korrel8r"
name: "korrel8r"
description: "Correlation of observability signals."
readmeQualityOk: true
url: "https://github.com/korrel8r/korrel8r"
homepage: "https://korrel8r.github.io/korrel8r/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["alerts", "correlation", "kubernetes", "logging", "metrics", "observability", "4bb"]
stars: 165
forks: 22
openIssues: 5
closedIssues: 130
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2022-09-01T21:57:08Z"
lastCommitAt: "2026-11-05T14:05:35Z"
lastReleaseAt: "2025-12-01T15:07:05Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 45
maintainers: ["alanconway", "dependabot[bot]", "simonpasquier"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fea1d889e9d1626fc695e382ac7f2312f8f6f17ef1c30373904ce13c951b2f/korrel8r/korrel8r"
discussionCount: 1
---

# Korrel8r

- **[User Guide](https://korrel8r.github.io/korrel8r)** - Complete installation, usage, and reference guide
- **[GitHub Issues](https://github.com/korrel8r/korrel8r/issues)** - Report bugs or request features
- **[Contributing](https://github.com/korrel8r/korrel8r/blob/HEAD/CONTRIBUTING.md)** - Contributing and development

## What is Korrel8r?

Korrel8r is a rule-based correlation engine for Kubernetes clusters.

It connects cluster resources and observability signals — logs, metrics, alerts, traces, network flows — into a graph of related data.
It searches multiple back-ends with different APIs and query languages automatically.
Given any starting point — an alert, a pod, a deployment — it finds related data across multiple signal stores,
such as Prometheus, Loki, Tempo, and the Kubernetes API.

Neighborhood Search
: Find everything reachable within N steps.
  _"Show me everything related to this pod"_ — returns owning deployments, logs, metrics, network flows, and more.

Goal Search
: Find paths to a specific type of data.
  _"Find all logs related to this alert"_ — korrel8r connects the alert to deployments, deployments to pods, pods to logs.

### Use cases…
