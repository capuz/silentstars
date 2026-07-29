---
repo: "patchlevel/event-sourcing-admin-bundle"
name: "event-sourcing-admin-bundle"
description: "This bundle provides a simple admin interface for the patchlevel/event-sourcing-bundle."
readmeQualityOk: true
url: "https://github.com/patchlevel/event-sourcing-admin-bundle"
homepage: "https://patchlevel.dev"
language: "Twig"
languages: ["Twig", "PHP", "CSS"]
languagePcts: [44, 31, 21]
stars: 8
forks: 2
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-01-25T17:07:18Z"
lastCommitAt: "2026-07-29T01:18:44Z"
lastReleaseAt: "2026-02-25T11:50:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 75
maintainers: ["renovate[bot]", "DanielBadura", "DavidBadura"]
openGraphImageUrl: "https://opengraph.githubassets.com/8507ab66ba8324a9a9bccb2e38570b15a53e79a593b55ff0bbc354d0a27c2466/patchlevel/event-sourcing-admin-bundle"
---

> [!WARNING]
> This repository was renamed. You should go to https://github.com/patchlevel/event-sourcing-dashboard-bundle

# Event-Sourcing-Admin-Bundle

"A dashboard to inspect your events, time travel through your aggregates and manage your subscriptions."

## Features

* Browse the raw event [store](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/store) and filter by aggregate, id, stream or event
* [Inspect](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/inspection) a single aggregate: its events, serialized state, snapshot and a full state dump
* Time travel through an aggregate to see its state at any [playhead](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/inspection)
* List all registered [events](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/events) together with their listeners and subscribers
* View and control [subscriptions](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/subscriptions): boot, run, pause, reactivate, rebuild or remove
* [Customize](https://patchlevel.dev/docs/event-sourcing-admin-bundle/latest/events) how events are rendered with the `#[Inspect]` attribute
* and much…
