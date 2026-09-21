---
repo: "debezium/debezium-platform"
name: "debezium-platform"
description: "An opinionated data-centric view of Debezium components. Please log issues at https://github.com/debezium/dbz/issues."
readmeQualityOk: true
url: "https://github.com/debezium/debezium-platform"
homepage: "https://debezium.io/"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [53, 45]
topics: ["cdc", "change-data-capture", "data-pipelines", "data-platform", "database", "debezium", "event-streaming", "hacktoberfest"]
stars: 54
forks: 37
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 34
recentReleases: 0
createdAt: "2024-11-20T14:37:06Z"
lastCommitAt: "2026-09-21T09:13:45Z"
lastReleaseAt: "2025-06-26T07:52:40Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 56
maintainers: ["mfvitale", "dependabot[bot]", "indraraj"]
openGraphImageUrl: "https://opengraph.githubassets.com/a74ba3f016064791ecbee81fa4d025214309d08e6b5a89900d6661751bebb664/debezium/debezium-platform"
fundingLinks: ["GITHUB:https://github.com/commonhaus", "OPEN_COLLECTIVE:https://opencollective.com/debezium", "CUSTOM:https://opencollective.com/commonhaus-foundation"]
---

# Debezium Management Platform 

Debezium Management Platform (Debezium Orchestra) aims to provide means to simplify the deployment of 
Debezium to various environments in highly opinionated manner. The goal is not to provide 
total control over environment specific configuration. To achieve this goal the platform uses
a data-centric view on Debezium components.

**Disclaimer**: This project is still in early development stage and should not be used in production.

## Platform Architecture
The platform is composed of the following main components:

1. Conductor: The back-end component which provides a set of APIs to orchestrate and control Debezium deployments.
2. Stage: The front-end component which provides a user interface to interact with the Conductor.
3. Monitoring: Built-in pipeline monitoring powered by OpenTelemetry and Prometheus. Debezium Server instances export metrics via OpenTelemetry to an OTel Collector, which exposes them to Prometheus.

### Conductor Architecture
The conductor component itself is composed of several subcomponents:

1. API Server: The main entry point for the platform. It provides a set of APIs to interact with the platform.
2. Watcher: Component…
