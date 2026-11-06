---
repo: "ismasan/sourced"
name: "sourced"
description: "Event Sourcing / CQRS toolkit for Ruby. Eventual consistency and concurrency built-in."
readmeQualityOk: true
url: "https://github.com/ismasan/sourced"
homepage: "https://ismasan.github.io/sourced/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["cqrs", "event-driven", "eventsourcing", "services"]
stars: 51
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2018-11-01T13:24:09Z"
lastCommitAt: "2026-11-06T01:00:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 51
maintainers: ["ismasan"]
openGraphImageUrl: "https://opengraph.githubassets.com/81543bf5644eddcb0ae5d2429e4e7ec377c694e71569977093dd6abbed8a610f/ismasan/sourced"
---

# Sourced — Stream-less Event Sourcing

Sourced is a Ruby library for aggregateless, stream-less event sourcing. Events go into a flat, globally-ordered log. Consistency context is assembled dynamically by querying relevant facts via key-value pairs extracted from event payloads, rather than being pre-assigned to fixed streams.

## Core Concepts

- **No streams or aggregates** — all messages share a single append-only log with auto-increment positions.
- **Partitioning by attributes** — reactors declare which payload attributes define their consistency boundary (e.g. `partition_by :course_id`). The store uses these to build query conditions and claim work.
- **Decide → Evolve → React** — reactors handle commands, evolve context from history, and react to events.
- **Optimistic concurrency** — reads return a `ConsistencyGuard` that detects conflicting writes at append time.

A student enrols in a course from a form, a projector keeps the course roster, and an automation notifies the student:

```mermaid
eventmodeling

tf 01 ui EnrolmentForm [[EnrolmentForm]]
tf 02 cmd EnrolStudent [[EnrolStudent]]
tf 03 evt StudentEnrolled [[StudentEnrolled]]
tf 04 rmo CourseRoster [[CourseRoster]]…
