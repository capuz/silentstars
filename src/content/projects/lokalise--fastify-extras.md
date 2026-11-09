---
repo: "lokalise/fastify-extras"
name: "fastify-extras"
description: "Reusable plugins for fastify"
readmeQualityOk: true
url: "https://github.com/lokalise/fastify-extras"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["lokalise-nextgen"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 16
contributors: 18
recentReleases: 8
createdAt: "2022-11-27T13:19:49Z"
lastCommitAt: "2026-11-09T11:58:45Z"
lastReleaseAt: "2026-11-05T15:06:19Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "release_machine"]
healthScore: 98
undervaluedScore: 69
maintainers: ["dependabot[bot]", "github-actions[bot]", "CarlosGamero"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc7770ccb43ab5ff10db98ef44ab4fdb70a0610951750394143092eadbb64d8/lokalise/fastify-extras"
---

# fastify-extras 🧩

Reusable plugins for Fastify.

- [Dependency Management](#dependency-management)
- [Plugins](#plugins)

  - [RequestContext Provider Plugin](#requestcontext-provider-plugin)
  - [Public Healthcheck Plugin](#public-healthcheck-plugin)
  - [Common Healthcheck Plugin](#common-healthcheck-plugin)
  - [Common Sync Healthcheck Plugin](#common-sync-healthcheck-plugin)
  - [Split IO Plugin](#split-io-plugin)
  - [BugSnag Plugin](#bugsnag-plugin)
  - [Metrics Plugin](#metrics-plugin)
  - [Bull MQ Metrics Plugin](#bullmq-metrics-plugin)
  - [OpenTelemetry Transaction Manager Plugin](#opentelemetry-transaction-manager-plugin)
  - [Datadog Transaction Manager Plugin](#datadog-transaction-manager-plugin)
  - [UnhandledException Plugin](#unhandledexception-plugin)
  - [API Documentation Plugin](#api-documentation-plugin)
  - [API Visibility Plugin](#api-visibility-plugin)

## Dependency Management

The following needs to be taken into consideration when adding new runtime dependency for the `fastify-extras` package:

- If dependency is an implementation detail, and end consumer is not expected to import and use the dependency directly, it should be a `dependency`;
- If…
