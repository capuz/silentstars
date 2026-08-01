---
repo: "ash-project/reactor"
name: "reactor"
description: "Reactor is a dynamic, concurrent, dependency resolving saga orchestrator."
readmeQualityOk: true
url: "https://github.com/ash-project/reactor"
homepage: "https://ash-hq.org/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["concurrency", "elixir", "graph", "saga"]
stars: 196
forks: 27
openIssues: 1
closedIssues: 33
watchers: 5
contributors: 14
recentReleases: 2
createdAt: "2023-04-18T22:23:45Z"
lastCommitAt: "2026-08-01T06:07:53Z"
lastReleaseAt: "2026-07-26T05:25:10Z"
status: "thriving"
tags: ["funded"]
healthScore: 92
undervaluedScore: 39
maintainers: ["jimsynz", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83ab3d134d6c6c599e3be8d58581ce46785a3cd1765ce490364494744d413203/ash-project/reactor"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/ash-framework"]
---

# Reactor

Reactor is a dynamic, concurrent, dependency resolving saga orchestrator.

Woah. That's a lot. Let's break it down:

- **Saga orchestrator** A [saga][saga pattern] is a way of providing
  transaction-like semantics across multiple distinct resources.
- **Dependency resolving** reactor allows you to describe the dependencies
  between your saga steps using _arguments_ which are converted into a
  [DAG][dag] and used to compute execution order.
- **Concurrent** unless otherwise specified reactor will run as many steps as
  possible concurrently whilst taking into account the results of the dependency
  resolution.
- **Dynamic** whilst you can define a reactor statically using our awesome DSL,
  you can also build workflows dynamically - and even add steps while the
  reactor is running.

[saga pattern](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)

## Sponsors

Thanks to [Alembic Pty Ltd](https://alembic.com.au/) for sponsoring a portion of
this project's development.

## Installation

Reactor contains an igniter installer, so if you have igniter installed already you can run `mix igniter.install reactor` to add Reactor to your…
