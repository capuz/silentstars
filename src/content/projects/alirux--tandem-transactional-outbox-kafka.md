---
repo: "alirux/tandem-transactional-outbox-kafka"
name: "tandem-transactional-outbox-kafka"
description: "Reliable, strictly-ordered event delivery from PostgreSQL to Kafka: the Transactional Outbox Pattern as a Java library, with Spring Boot autoconfiguration. No CDC, no Kafka Connect. CloudEvents, per-aggregate ordering, replay, and an Admin API with a Go CLI."
readmeQualityOk: true
url: "https://github.com/alirux/tandem-transactional-outbox-kafka"
homepage: "https://tandem.codingful.com/"
language: "Java"
languages: ["Java"]
languagePcts: [88]
topics: ["apache-kafka", "at-least-once", "cloudevents", "distributed-systems", "event-driven", "event-driven-architecture", "java", "kafka", "message-ordering", "microservices"]
stars: 8
forks: 10
openIssues: 8
closedIssues: 6
watchers: 0
contributors: 8
recentReleases: 8
createdAt: "2026-07-01T06:29:08Z"
lastCommitAt: "2026-10-11T10:16:06Z"
lastReleaseAt: "2026-08-21T20:22:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 83
undervaluedScore: 71
maintainers: ["alirux", "github-actions[bot]", "Ororura"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1285786625/74f6d50b-a6fc-4c72-bb68-d37de1747498"
---

# Tandem

**Reliable, strictly-ordered event delivery from your database to Apache Kafka — no CDC, no Kafka Connect, no two-phase commit.**

**[tandem.codingful.com](https://tandem.codingful.com)**

## What is Tandem?

Tandem is a Java library that implements the **Transactional Outbox Pattern**. You insert an
event into an `outbox` table **inside the same transaction** that mutates your domain — so the
write is atomic by your database's ACID guarantees, with no dual-write and no distributed
transaction. A separate **relay** then polls the outbox and publishes to Kafka, at-least-once,
preserving per-aggregate ordering.

*A live, interactive version of this same flow — pause, step back/forward through each stage — is
available at [tandem.codingful.com/how-it-works](https://tandem.codingful.com/how-it-works/).*

It targets the gap between a **hand-rolled outbox** (correct, but every subtle trap is yours to
get right) and **Debezium/CDC** (powerful, but a separate distributed system to operate):
no extra infrastructure — just your relational database and Kafka — with the correctness traps
already handled.

## Why Tandem?

The classic **double write** — write to the DB, then publish…
