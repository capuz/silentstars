---
repo: "rabbitmq/rabbitmqadmin-ng"
name: "rabbitmqadmin-ng"
description: "A command line tool for RabbitMQ that uses the HTTP API"
readmeQualityOk: true
url: "https://github.com/rabbitmq/rabbitmqadmin-ng"
homepage: "https://www.rabbitmq.com/docs/management-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "http", "rabbitmq"]
stars: 52
forks: 8
openIssues: 3
closedIssues: 44
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2023-06-05T16:56:24Z"
lastCommitAt: "2026-08-20T04:09:47Z"
lastReleaseAt: "2025-01-28T16:00:50Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 56
maintainers: ["michaelklishin", "dependabot[bot]", "elo-magnier-7s"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ab87cf9c1071fe75c9515f958704d2b5e5974ac00f3fdcc23a58d6b2736619b/rabbitmq/rabbitmqadmin-ng"
discussionCount: 13
---

# rabbitmqadmin v2: a Modern Command Line Client for the [RabbitMQ HTTP API](https://www.rabbitmq.com/docs/http-api-reference)

`rabbitmqadmin` v2 is a major revision of `rabbitmqadmin`, one of the [RabbitMQ CLI tools](https://www.rabbitmq.com/docs/cli)
that target the [HTTP API](https://www.rabbitmq.com/docs/http-api-reference).

If you are migrating from the original `rabbitqadmin`, please see [Breaking or Potentially Breaking Changes](#breaking-or-potentially-breaking-changes)
to learn about the breaking changes in the command line interface.

The general "shape and feel" of the interface is still very similar to `rabbitmqadmin` v1. However, this generation
is significantly more powerful, in particular, when it comes to [Blue-Green Deployment upgrades and migrations](https://www.rabbitmq.com/blog/2025/07/29/latest-benefits-of-rmq-and-migrating-to-qq-along-the-way)
from RabbitMQ 3.13.x to 4.x.

## Supported RabbitMQ Series

`rabbitmqadmin` v2 targets

 * Open source RabbitMQ `4.x`
 * Open source RabbitMQ `3.13.x` (specifically for the command groups and commands related to upgrades)
 * Tanzu RabbitMQ `4.x`
 * Tanzu RabbitMQ `3.13.x`

## Getting Started

### Installation

####…
