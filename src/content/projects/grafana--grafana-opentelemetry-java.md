---
repo: "grafana/grafana-opentelemetry-java"
name: "grafana-opentelemetry-java"
description: "Grafana OpenTelemetry distribution for Java"
readmeQualityOk: true
url: "https://github.com/grafana/grafana-opentelemetry-java"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 75
forks: 14
openIssues: 4
closedIssues: 15
watchers: 107
contributors: 15
recentReleases: 0
createdAt: "2023-05-11T20:11:42Z"
lastCommitAt: "2026-10-19T09:14:04Z"
lastReleaseAt: "2024-05-27T14:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_watch"]
healthScore: 95
undervaluedScore: 41
maintainers: ["renovate-sh-app[bot]", "zeitlinger", "martincostello"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f9e261a4ddcd09f04d8a8b6ab21a5dd9676fdb6a6a8427b0cdf90cc9232daeb/grafana/grafana-opentelemetry-java"
discussionCount: 2
---

# Grafana OpenTelemetry Distribution for Java

## About

Grafana Distribution of [OpenTelemetry Instrumentation for Java] -
optimized for [Grafana Cloud Application Observability].

This project provides a Java agent JAR that can be attached to any Java 8+ application and dynamically
injects bytecode to capture telemetry from a number of popular libraries and frameworks.

Why use this distribution instead of [OpenTelemetry Instrumentation for Java] (upstream) directly?

- **Easy to get started**: This distribution is optimized for [Grafana Cloud Application Observability] -
  you can get started with just a few environment variables.
- **Fully Compatible**: This distribution is fully compatible with upstream -
  you can use all configuration options of upstream.
- **Optimized for Application Observability and Alloy**: No need to tweak any configuration settings
  if you use the latest version of Alloy.
- **Fast Bugfixes**: We can fix bugs faster without waiting for the next release of
  upstream.
- **Cost Optimized**: You can save costs by sending only the metrics that are actually used by the dashboards in
  [Grafana Cloud Application Observability]
  ([opt-in docs]).

> **Open…
