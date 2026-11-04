---
repo: "mensfeld/pgmq-ruby"
name: "pgmq-ruby"
description: "Postgres Message Queue (PGMQ) Ruby and Rails Client Library "
readmeQualityOk: true
url: "https://github.com/mensfeld/pgmq-ruby"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 37
forks: 1
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-11-01T18:46:01Z"
lastCommitAt: "2026-11-04T13:05:31Z"
lastReleaseAt: "2026-10-25T17:40:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["mensfeld", "coipond-renovate[bot]", "coipond-coder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05075a482f9ca9bbb62f66b0c28f6b1afc8ced0dc3d90257d10530ecb5943888/mensfeld/pgmq-ruby"
---

# PGMQ-Ruby

**Ruby client for [PGMQ](https://github.com/pgmq/pgmq) - PostgreSQL Message Queue**

## What is PGMQ-Ruby?

PGMQ-Ruby is a Ruby client for PGMQ (PostgreSQL Message Queue). It provides direct access to all PGMQ operations with a clean, minimal API - similar to how [rdkafka-ruby](https://github.com/karafka/rdkafka-ruby) relates to Kafka.

**Think of it as:**

- **Like AWS SQS** - but running entirely in PostgreSQL with no external dependencies
- **Like Sidekiq/Resque** - but without Redis, using PostgreSQL for both data and queues
- **Like rdkafka-ruby** - a thin, efficient wrapper around the underlying system (PGMQ SQL functions)

> **Architecture Note**: This library follows the rdkafka-ruby/Karafka pattern - `pgmq-ruby` is the low-level foundation, while higher-level features (job processing, Rails integration, retry strategies, middleware) will live in `pgmq-framework` (similar to how Karafka builds on rdkafka-ruby). Like rdkafka-ruby's simple consumer, `pgmq-ruby` ships a minimal single-threaded [`PGMQ::Consumer`](#consumer) loop for one or more queues.

## Table of Contents

- [PGMQ Feature Support](#pgmq-feature-support)
- [Requirements](#requirements)
-…
