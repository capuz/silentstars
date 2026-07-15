---
repo: "haathie/pgmb"
name: "pgmb"
description: "Postgres message broker, with a type-safe typescript client with built-in webhook & SSE support."
readmeQualityOk: true
url: "https://github.com/haathie/pgmb"
language: "TypeScript"
languages: ["TypeScript", "PLpgSQL"]
languagePcts: [52, 46]
topics: ["amqp", "message-broker", "message-bus", "message-queue", "pgmq", "pgq", "postgres", "queue", "sse", "webhooks"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-10T05:25:45Z"
lastCommitAt: "2026-07-15T05:54:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 46
maintainers: ["adiwajshing", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32b2513956dafe3a723d6f366fc8c49ea5630d083677445292eafb76fef4983a/haathie/pgmb"
---

# PGMB - Postgres Message Broker

A heavyweight message broker & event log built on top of PostgreSQL. PGMB tries to do most of the computational work in Postgres itself, and leaves the IO work to the Javscript runtime. PGMB guarantees **at-least-once** delivery of messages & mostly ordered delivery.

Using this package you can implement:
1. Queue and exchange like behaviour seen in AMQP systems (RabbitMQ, ActiveMQ, etc.) with retries & reliable message delivery.
2. Batch publish messages.
3. Automatic insert, update, delete events for any table.
4. HTTP SSE (Server Sent Events) for an arbitrary Postgres query, with resumption support via the standard `Last-Event-ID` header.
5. Webhooks for events, again based on arbitrary Postgres queries, with retry logic.

## Benchmarks

Here are benchmarks of PGMB, PGMQ and AMQP. The benchmarks were run on an EC2 server managed by AWS EKS. Each database being allocated `2 cores` and `4GB` of RAM with network mounted EBS volumes. The full details of the benchmarks can be found [here](https://github.com/haathie/pgmb/blob/HEAD/docs/k8s-benchmark.md).

| Test | PGMB | PGMQ (delete on ack) | AMQP (RabbitMQ) |
| :--- | ---: | ---: | ---: |
| msgs…
