---
repo: "factcast/factcast"
name: "factcast"
description: "Simple EventStore based on PostgreSQL "
readmeQualityOk: true
url: "https://github.com/factcast/factcast"
homepage: "https://docs.factcast.org"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["eventsourcing", "cqrs", "eventdrivenarchitecture", "hacktoberfest"]
stars: 48
forks: 22
openIssues: 26
closedIssues: 1183
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2019-06-21T18:56:02Z"
lastCommitAt: "2026-11-07T22:51:00Z"
lastReleaseAt: "2022-03-12T16:40:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["uweschaefer", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea0c092e7fbc54fe26a02c34f4557bd6e8dd186b7de619ed6b5dae44ae9144fd/factcast/factcast"
discussionCount: 1
---

# FactCast

#### is a 'good enough' event store using PostgreSQL for persistence, and offers remoting via GRPC.

**This project is not yet ready for primetime**

It is not yet released, the API may change, the documentation is incomplete.

Status](https://github.com/factcast/factcast/actions/workflows/maven.yaml/badge.svg?branch=main)](https://github.com/factcast/factcast/actions)

... under active development.

## The Problem at hand

In a micro-service world, teams choose their own tools of trade. This is a very important benefit of using Microservices in the first place, and you do not want to mess with this principle. However, where Subsystems communicate with each other (most likely crossing those team borders) you need some common ground. Event Sourcing is a great pattern here (as well as within those subsystems) because of the decoupling effect of its use.

So, what is needed is some technical solution, that everyone can easily agree on, because it forces as little technical dependencies on the clients as possible.
GRPC and similar technological choices provide this solution as well as streaming, so we have all we need. Oh and one thing: Whatever solution we choose to store…
