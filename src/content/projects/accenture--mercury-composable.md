---
repo: "Accenture/mercury-composable"
name: "mercury-composable"
description: "Reference implementation toolkit for writing composable applications"
readmeQualityOk: true
url: "https://github.com/Accenture/mercury-composable"
homepage: "https://accenture.github.io/mercury-composable/"
language: "Java"
languages: ["Java"]
languagePcts: [80]
topics: ["event-driven-architecture", "kafka", "non-blocking", "reactive", "composable-architecture", "event-choreography", "virtual-threads", "event-script", "rest-automation", "workflows"]
stars: 31
forks: 17
openIssues: 0
closedIssues: 13
watchers: 4
contributors: 20
recentReleases: 10
createdAt: "2023-06-19T17:15:40Z"
lastCommitAt: "2026-08-30T00:42:33Z"
lastReleaseAt: "2026-07-13T18:10:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 73
maintainers: ["acn-ericlaw", "whyu", "JiahaoAccenture"]
openGraphImageUrl: "https://opengraph.githubassets.com/777300b355bb7efb2e2c266d4ae7beb017635e0f3d49633b49ce753058984580/Accenture/mercury-composable"
---

# Mercury Composable

A Java framework for building composable, event-driven applications from self-contained functions wired together by YAML-configured event flows.

> **New here?** [**Getting Started**](https://accenture.github.io/mercury-composable/guides/getting-started/) runs a working app in five minutes. **Building with an AI agent?** Start with the [**AI Developer Guide**](https://accenture.github.io/mercury-composable/guides/ai-developer-guide/).

> **Prefer Rust?** Mercury is also available as an official **Rust implementation** — the same
> three layers and the same YAML flow syntax (flow files port unchanged), faithfully following
> this project's behavior: [github.com/Accenture/mercury](https://github.com/Accenture/mercury)
> · [documentation](https://accenture.github.io/mercury/).

## What is Mercury Composable?

An application is assembled from **independent functions** — plain Java classes with no knowledge of one another — that communicate only through **events**. The flows that sequence them live in **YAML**, so orchestration is configuration, not code. Everything runs on Java 21 **virtual threads**, so straightforward blocking code performs like reactive, and…
