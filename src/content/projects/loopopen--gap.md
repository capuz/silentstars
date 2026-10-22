---
repo: "loopopen/gap"
name: "gap"
description: "GAP is a lightweight, event-driven messaging library for Go."
readmeQualityOk: true
url: "https://github.com/loopopen/gap"
language: "Go"
languages: ["Go"]
languagePcts: [79]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-23T10:08:15Z"
lastCommitAt: "2026-10-22T08:52:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 39
maintainers: ["redochenzhen"]
openGraphImageUrl: "https://opengraph.githubassets.com/c933c3191b05f2900eb6c64c33612c660fc5574c69fd09ee1fb12ad478b9b697/loopopen/gap"
---

# gap

GAP is a lightweight, event-driven messaging library for Go. It uses the outbox pattern, so a message is written in the same database transaction as your data, then delivered once that transaction commits. It speaks RabbitMQ and Kafka today, and it can store messages in MySQL or in any database GORM already supports. More brokers and databases are part of the plan. The library is shaped so those can be added without tearing up what you already have.

## Operational Dashboard

Monitor message delivery at a glance with the built-in operational dashboard. See publishing and consumption health, success rates, in-flight work, failures, backlog age, and active runtime components from one place.

## Features

- **Outbox Pattern**: Reliable message publishing with database transactions
- **Multiple Brokers**: Support for RabbitMQ, Kafka (and extensible for others)
- **Storage Backends**: GORM integration for MySQL, PostgreSQL, etc.
- **Code Generation**: Automatic handler generation with `gapc`
- **Type Safety**: Generic-based API for type-safe message handling
- **Dependency Injection**: Built-in DI container for handlers

## Installation

GAP's broker and storage integrations are…
