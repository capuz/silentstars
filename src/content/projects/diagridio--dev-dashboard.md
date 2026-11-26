---
repo: "diagridio/dev-dashboard"
name: "dev-dashboard"
description: "Local dashboard for Dapr developers: live view of apps, sidecars, workflows, actors, pub/sub and logs from dapr run, .NET Aspire, Docker Compose or Testcontainers, plus guided builders for Dapr component and resiliency YAML."
readmeQualityOk: true
url: "https://github.com/diagridio/dev-dashboard"
homepage: "https://docs.diagrid.io/develop/local-development/dev-dashboard/"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [53, 44]
topics: ["cloud-native", "dapr", "microservices", "workflow", "actors", "aspire-dotnet", "dashboard", "developer-tools", "devtools", "golang"]
stars: 17
forks: 3
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-25T08:56:44Z"
lastCommitAt: "2026-11-26T15:22:27Z"
lastReleaseAt: "2026-07-13T19:06:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 46
maintainers: ["marcduiker", "dependabot[bot]", "sicoyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d7fd200e553afb060bfe4ad29d6800ac47465e1118d504fe1def5eac351a79/diagridio/dev-dashboard"
---

# Diagrid Dapr Dev Dashboard

A free local dashboard for Dapr developers: see the sidecars, Dapr Workflow executions, actors
and components running on your machine, and author component and resiliency YAML.

From [Diagrid](https://www.diagrid.io), built on [Dapr](https://dapr.io). See the
[Diagrid docs](https://docs.diagrid.io) for more on building with Dapr and Dapr Workflow.

## Goal

The Diagrid Dapr Dev Dashboard is a companion for local Dapr development. It inspects the
apps you start with `dapr run` / `dapr run -f`, Aspire, Docker Compose, or Dapr
Testcontainers (e.g. Spring Boot apps run with `mvn spring-boot:test-run` and
`dapr-spring-boot-starter-test`), and surfaces everything about them — sidecars, workflows,
actors, subscriptions, components, resiliency policies, HTTP endpoints, configurations, and
logs.
