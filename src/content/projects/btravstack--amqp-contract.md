---
repo: "btravstack/amqp-contract"
name: "amqp-contract"
description: "Type-safe contracts for AMQP/RabbitMQ messaging with TypeScript"
url: "https://github.com/btravstack/amqp-contract"
homepage: "https://btravstack.github.io/amqp-contract/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["amqp", "contract", "nodejs", "rabbitmq", "typescript", "validation", "zod", "arktype", "schema", "standard-schema"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-11T22:32:32Z"
lastCommitAt: "2026-06-27T00:35:14Z"
lastReleaseAt: "2025-12-19T10:05:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 50
maintainers: ["btravers", "dependabot[bot]", "yohannrub"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e17f0e1713ea30e9c6dc572ba1c7b0e19807375ec60122a4c031201b785c444/btravstack/amqp-contract"
discussionCount: 3
---

# amqp-contract

**Type-safe contracts for [AMQP](https://www.amqp.org/)/[RabbitMQ](https://www.rabbitmq.com/) messaging with [TypeScript](https://www.typescriptlang.org/)**

[**Documentation**](https://btravstack.github.io/amqp-contract) · [**Get Started**](https://btravstack.github.io/amqp-contract/guide/getting-started) · [**Examples**](https://btravstack.github.io/amqp-contract/examples/)

</div>

## Why amqp-contract?

Define your AMQP contracts once — get **type safety**, **autocompletion**, and **runtime validation** everywhere.

- 🔒 **End-to-end type safety** — TypeScript knows your message shapes
- 🔄 **Reliable retry** — Built-in exponential backoff with Dead Letter Queue support
- 📄 **AsyncAPI compatible** — Generate documentation from your contracts

## Quick Example

```typescript
import {
  defineContract,
  defineEventConsumer,
  defineEventPublisher,
  defineExchange,
  defineMessage,
  defineQueue,
} from "@amqp-contract/contract";
import { TypedAmqpClient } from "@amqp-contract/client";
import { TypedAmqpWorker } from "@amqp-contract/worker";
import { ok } from "unthrown";
import { z } from "zod";

// 1. Define resources with Dead Letter Exchange and retry…
