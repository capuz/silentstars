---
repo: "elixir-cloud-aai/proTES"
name: "proTES"
description: "Proxy service for injecting middleware into GA4GH Task Execution Service (TES) API requests"
readmeQualityOk: true
url: "https://github.com/elixir-cloud-aai/proTES"
homepage: "https://protes.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ga4gh", "api-gatway", "ga4gh-tes", "elixir-europe", "elixir-on-cloud"]
stars: 10
forks: 6
openIssues: 9
closedIssues: 141
watchers: 25
contributors: 34
recentReleases: 1
createdAt: "2018-11-13T14:12:14Z"
lastCommitAt: "2026-10-31T15:59:05Z"
lastReleaseAt: "2026-10-24T13:55:56Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 69
maintainers: ["uniqueg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2792f8b90dd8a254f86dc9f4c64f87902ceac93117e32f84cea3b7c28e62d53/elixir-cloud-aai/proTES"
---

# proTES

A gateway for the [GA4GH Task Execution Service (TES)
API](https://github.com/ga4gh/task-execution-schemas) that federates your TES
instances, brought to you by [ELIXIR On-Cloud](https://elixir-on.cloud/).
Clients send their tasks to proTES as to any TES instance; proTES passes each
task through a configurable pipeline of plugins (FOCA's gateway plugins),
which pick the TES instance to run it on (or change the request), forwards it
there and tracks its state. By default, tasks go to the TES instances in
their configured order, failing over to the next; plugins (e.g., those of
foca-plugins, once published) distribute tasks randomly, for load
balancing, or to the TES instance closest to the task's input data, or
serve access control, request processing or validation, or the selection of
instances by data use restrictions and client preferences.
Run it with Docker Compose or deploy it to Kubernetes with its Helm chart.

**Read the [documentation][docs]** for the architecture, the configuration,
the API, the plugins, the deployment with the Helm chart in
[`deployment/`][deployment], operations, upgrades and development.

## Known deployments

None listed yet.

Running proTES…
