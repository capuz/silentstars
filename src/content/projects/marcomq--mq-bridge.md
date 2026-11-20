---
repo: "marcomq/mq-bridge"
name: "mq-bridge"
description: "Async Rust library to route messages between Kafka, NATS, MQTT, AMQP, databases and HTTP, with Python and Node bindings"
readmeQualityOk: true
url: "https://github.com/marcomq/mq-bridge"
homepage: "https://marcomq.github.io/mq-bridge/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["etl", "kafka", "mcp", "nats", "postgresql", "redpanda-connect-pipelines", "amqp", "cdc", "node", "python"]
stars: 29
forks: 1
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-13T17:32:56Z"
lastCommitAt: "2026-11-20T12:01:30Z"
lastReleaseAt: "2026-03-15T22:39:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 55
maintainers: ["marcomq", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115854989/54508f03-9829-4273-ad67-2877642a8f88"
discussionCount: 6
---

🖥️ <a href="apps/mq-bridge-app">mq-bridge-app</a> ·
📊 <a href="apps/mq-bridge-app/benches/etl/README.md">ETL benchmarks</a> ·
🏗️ <a href="docs/ARCHITECTURE.md">Architecture</a> ·
⚙️ <a href="docs/CONFIGURATION.md">Config</a> ·
📚 <a href="docs/REFERENCE.md">Middleware &amp; endpoint reference</a>

       alt="mqb copy: a CSV file to S3 as zstd-compressed Parquet, a filtered Postgres table to NATS, and a ClickHouse table to Kafka — 1,000,000 rows each, one command per line" width="900">

## What is mq-bridge?

`mq-bridge` is an asynchronous Rust library that moves messages and data between systems: Kafka, NATS, RabbitMQ, MQTT, MongoDB, PostgreSQL/MySQL/SQLite, Postgres CDC, ClickHouse, Redis Streams, HTTP, WebSocket, gRPC, ZeroMQ, AWS SQS/SNS, IBM MQ, cloud object storage, files, and in-memory channels. Every endpoint sits behind the same batch-shaped `receive_batch` / `send_batch` traits, so any source can feed any sink.
