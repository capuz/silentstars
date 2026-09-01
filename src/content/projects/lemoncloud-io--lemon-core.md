---
repo: "lemoncloud-io/lemon-core"
name: "lemon-core"
description: "🍋 Shared library to build easily the micro-service with AWS Lambda + DynamoDB + ElasticSearch + SNS/SQS."
readmeQualityOk: true
url: "https://github.com/lemoncloud-io/lemon-core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["serverless", "microservices-architecture", "lemoncloud", "aws-lambda", "aws-lambda-node", "elasticsearch", "dynamodb", "typescript", "micro-service", "micro-service-architecture"]
stars: 21
forks: 3
openIssues: 2
closedIssues: 6
watchers: 6
contributors: 11
recentReleases: 0
createdAt: "2019-08-09T04:09:19Z"
lastCommitAt: "2026-09-01T08:50:04Z"
lastReleaseAt: "2022-05-19T02:24:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 44
maintainers: ["steve-lemon", "claire-lemon", "aiden-lemon"]
openGraphImageUrl: "https://opengraph.githubassets.com/b07bf54e90c192e1336fa29d86704154fb83d9a1a70fcfe5316b23d0ed45cd2e/lemoncloud-io/lemon-core"
---

# lemon-core / V4

Lemon Core Bootloader for Serverless Micro-Service

- Support `multiple` event sources with single lambda function as below figure.
- Fully support `typescript` types (80%).
- Support Data Synchronization to `Elasticsearch` from `DynomoDB` via `DynamoStream`.
- The way to migrate v3 to v4: SEE [HOW_TO_UPGRADE_V4](https://github.com/lemoncloud-io/lemon-core/blob/HEAD/HOW_TO_UPGRADE_V4.md)

    

## Architecture

Basic MicroService Architecutre with `API` + `SNS` + `SQS`.

- `NextHandler`: basic controller method to handle user service
- `NextDecoder`: mapper from `httpMethod + id + cmd` to `NextHandler`
- `NextContext`: initial requester's context with `identity`.

    

### Protocol Service

- support inter-communication between micro services
- `execute()`: synchronized call via lambda execution by `API` Handler.
- `notifiy()`: async call by `SNS` handler w/ lambda callback.
- `enqueue()`: async call by `SQS` handler w/ lambda callback.
- `broadcast()`: publish message via `SNS`, and handled by `Notification` handler.

    

```ts
import $engine, { ProtocolParam, ProtocolService, CallbackParam } from 'lemon-core';
// use the internal instance from $engine.…
