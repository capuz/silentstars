---
repo: "Accenture/mercury"
name: "mercury"
description: "Rust port of mercury-composable for composability and active knowledge graph"
readmeQualityOk: true
url: "https://github.com/Accenture/mercury"
homepage: "https://accenture.github.io/mercury/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [68, 20]
topics: ["microservices", "event-driven", "reactive", "rest-automation", "distributed-tracing", "msgpack", "composable-architecture", "event-over-http", "knowledge-graph", "open-telemetry"]
stars: 91
forks: 40
openIssues: 0
closedIssues: 7
watchers: 20
contributors: 21
recentReleases: 10
createdAt: "2018-11-19T15:48:19Z"
lastCommitAt: "2026-08-30T00:42:21Z"
lastReleaseAt: "2026-08-02T01:39:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["acn-ericlaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb123c37d0b7d814c52e942282811b324137b5dc3242872dba19a10759e47fc0/Accenture/mercury"
---

# mercury

A **Rust port of [mercury-composable](https://github.com/Accenture/mercury-composable)** —
Accenture's event-driven, composable application platform (canonical Java implementation,
v4.8.6), carrying the same vision: build applications from small, fully-decoupled functions
wired by route name, orchestrated as configuration, and modeled as an executable knowledge
graph.

> **Status: all three layers ported and milestone-closed** across 49 verified increments;
> 206 workspace tests green, `clippy` and `fmt` clean; benchmarked (RPC ~155K ops/s @ 6µs).
> The AI-agent documentation is battle-tested — twelve consecutive fresh-agent exercises
> passed with zero documentation lookups, across both engines. See
> [`CHANGELOG.md`](https://github.com/Accenture/mercury/blob/HEAD/CHANGELOG.md) and [`docs/INCREMENTS.md`](https://github.com/Accenture/mercury/blob/HEAD/docs/INCREMENTS.md).

## The three paradigm layers

Each layer builds on the one below (foundation → UI):

1. **platform-core** — the actor-model event bus: route-addressed functions coupled only by
   route name + an immutable `EventEnvelope`, over a tokio async runtime. Plus the operable
   runtime: REST automation…
