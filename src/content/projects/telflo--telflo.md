---
repo: "telflo/telflo"
name: "telflo"
description: "Telflo: build, test and roll out OpenTelemetry Collector configurations"
readmeQualityOk: true
url: "https://github.com/telflo/telflo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["configuration-management", "fleet-management", "helm", "kubernetes", "observability", "opamp", "opentelemetry", "opentelemetry-collector", "otel", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-11-18T13:27:06Z"
lastCommitAt: "2026-11-27T16:25:34Z"
lastReleaseAt: "2026-11-26T01:24:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 36
maintainers: ["ngagejason"]
openGraphImageUrl: "https://opengraph.githubassets.com/49ae08e2939e37031fdcbddf6eb6fd0b75ad74dc2da48ed32e4f6f98d1d70a96/telflo/telflo"
---

Telflo is a self-hosted web app designed to be used with the open source
[telflo/opamp-server](https://github.com/telflo/opamp-server/) to enable
the management of your OpenTelemetry Collectors. It includes a visual
editor, a YAML editor, configuration validation and testing, fleet
management and a CLI, with no limit on how many collectors you manage.
The AI assistant and the MCP server offered at telflo.com are not part
of it.

Telflo runs as a handful of containers around one PostgreSQL, behind one
gateway, with Docker Compose on one machine or with Helm on Kubernetes.

To run Telflo, use a release: the
[latest release](https://github.com/telflo/telflo/releases/latest) has
its Compose install, its images and its Helm chart. `main` is under active
development and may be ahead of the latest release.

> **Status: before 1.0.** A minor release may still change a setting, the
> Compose install or the Helm chart in ways that need you to act. Each
> release's notes on GitHub say what changed and what to do.
