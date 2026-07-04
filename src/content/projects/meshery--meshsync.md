---
repo: "meshery/meshsync"
name: "meshsync"
description: "MeshSync one of a family of custom controllers within Meshery Operator."
readmeQualityOk: true
url: "https://github.com/meshery/meshsync"
homepage: "https://meshery.io"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["kubernetes-operator", "meshery", "meshery-operator", "cloud-native-management", "hacktoberfest", "cncf", "golang", "kubernetes", "cloud-native", "infrastructure-as-code"]
stars: 84
forks: 92
openIssues: 13
closedIssues: 83
watchers: 8
contributors: 136
recentReleases: 0
createdAt: "2020-12-15T17:32:44Z"
lastCommitAt: "2026-07-04T23:14:21Z"
lastReleaseAt: "2021-03-01T18:10:44Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 58
maintainers: ["leecalcote", "n2h9", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/321741350/ab0a1800-6742-11eb-864c-16daa43cb02e"
discussionCount: 1
---

<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/meshery-logo-light-text-side.svg">
 <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/meshery-logo-dark-text-side.svg">
alt="Meshery Logo" width="70%" /></picture></a><br /><br /></p>

</p>

# MeshSync

MeshSync is Meshery's event-driven, continuous discovery and synchronization engine. It ensures that the configuration and operational state of Kubernetes (and any supported Meshery platform) are known to Meshery Server. When deployed into a Kubernetes cluster, MeshSync runs as a custom controller under the control of [Meshery Operator](https://docs.meshery.io/concepts/architecture/operator) and publishes resource changes over Meshery Broker (NATS).

MeshSync runs in one of two modes: **nats** (default - publishes Kubernetes resource events to NATS) and **file** (writes deduplicated cluster snapshots to disk, with no NATS or CRD dependency). Run `meshsync --help` for input parameters.

## Documentation

All MeshSync documentation lives in [Meshery…
