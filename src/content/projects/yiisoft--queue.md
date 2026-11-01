---
repo: "yiisoft/queue"
name: "queue"
description: "Framework agnostic message queue"
readmeQualityOk: true
url: "https://github.com/yiisoft/queue"
homepage: "https://www.yiiframework.com/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["queue", "rabbitmq", "amqp", "beanstalk", "redis", "sqs", "yii3", "hacktoberfest", "optionalforframeworkannounce", "kafka"]
stars: 60
forks: 32
openIssues: 10
closedIssues: 63
watchers: 16
contributors: 69
recentReleases: 0
createdAt: "2019-01-09T13:29:56Z"
lastCommitAt: "2026-11-01T22:59:35Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 49
maintainers: ["vjik", "samdark", "KalimeroMK"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e753771d5e3c16ed03ed12388c31e489f19fa8b700d7602cefd4127b23479d0/yiisoft/queue"
fundingLinks: ["GITHUB:https://github.com/yiisoft", "OPEN_COLLECTIVE:https://opencollective.com/yiisoft"]
---

A framework-agnostic PHP queue library for running tasks asynchronously, best used with Yii3 applications.

## Requirements

- PHP 8.1 - 8.5.
- PCNTL extension for signal handling _(optional, recommended for production use)_.

## Installation

The package could be installed with [Composer](https://getcomposer.org):

```shell
composer require yiisoft/queue
```

## Quick Start

### 1. Install an adapter

For production use, you should install an adapter package that matches your message broker ([AMQP](https://github.com/yiisoft/queue-amqp), [Kafka](https://github.com/g41797/queue-kafka), [NATS](https://github.com/g41797/queue-nats), and [others](https://github.com/yiisoft/queue/blob/HEAD/docs/guide/en/adapter-list.md)).
See the [adapter list](https://github.com/yiisoft/queue/blob/HEAD/docs/guide/en/adapter-list.md) and follow the adapter-specific documentation for installation and configuration details.

> If you don't have an external broker — whether for development, testing, or because you want to
> design around `QueueProducerInterface` from day one and add a real broker later — you can run the queue
> in [synchronous…
