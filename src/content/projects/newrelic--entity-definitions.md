---
repo: "newrelic/entity-definitions"
name: "entity-definitions"
description: "The definition files contained in this repository are mappings between the telemetry attributes NewRelic ingests, and the entities users can interact with. If you have telemetry from any source that is not supported out of the box, you can propose a mapping for it by opening a PR."
readmeQualityOk: true
url: "https://github.com/newrelic/entity-definitions"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 85
forks: 430
openIssues: 4
closedIssues: 20
watchers: 9
contributors: 388
recentReleases: 0
createdAt: "2020-11-30T14:13:36Z"
lastCommitAt: "2026-09-18T08:26:45Z"
lastReleaseAt: "2021-02-24T14:26:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 55
maintainers: ["muruganishekar", "faltimiras", "shashank-reddy-nr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1483401fa43cc8c7f73b93afce147dceeef71b0b6e68ca9ff98747660a0dd2c/newrelic/entity-definitions"
---

# Entity Definitions

This repository holds all the entity types that exist in New Relic and their configurations.

By proposing changes to this repository you can achieve the following:
- Create a new entity type
- Generate entities from a new source of data (telemetry, logs, etc)
- Change how an entity is represented in different experiences via golden metrics ( [New Relic Lookout](https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-lookout-monitor-your-estate-glance/), [workloads](https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/workloads/workloads-isolate-resolve-incidents-faster/), etc) and summary metrics ([entity explorer](https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/))
- Modify the summary of an entity type
- Modify the lifecycle of an entity and make them `alertable` (see [Lifecycle](https://github.com/newrelic/entity-definitions/blob/HEAD/docs/entities/lifecycle.md) for more information about this attribute)

## Changelog

All notable changes are defined in the [releases…
