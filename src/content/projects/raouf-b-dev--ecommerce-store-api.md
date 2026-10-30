---
repo: "raouf-b-dev/ecommerce-store-api"
name: "ecommerce-store-api"
description: "NestJS modular-monolith ecommerce API with ACL-isolated modules, compensating checkout SAGA, inventory locking, RSA JWT/RBAC, CQRS read adapters, and CI for unit, integration, e2e, and architecture tests. PostgreSQL, Redis, BullMQ. Payment gateway uses a mock adapter."
readmeQualityOk: true
url: "https://github.com/raouf-b-dev/ecommerce-store-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["backend-api", "bullmq", "clean-architecture", "ddd", "docker", "e-commerce", "nestjs", "postgresql", "redis", "saga-pattern"]
stars: 57
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2025-08-16T18:30:00Z"
lastCommitAt: "2026-10-30T10:23:31Z"
lastReleaseAt: "2026-09-28T10:01:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["raouf-b-dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/838e98273dffb677bb305d937164140c56efdf6caa8d8f2c4acafd17c8be9e05/raouf-b-dev/ecommerce-store-api"
discussionCount: 8
---

# E-commerce Store API

> NestJS ecommerce API. Checkout, stock, and auth live here. Reference backend, not a hosted store.

## What this is

Eleven modules under `src/modules/` talk through ACL gateways and domain events, not by importing each other's internals. Checkout is a BullMQ SAGA with compensation. Inventory reservations take a row lock. Auth is RSA JWT plus RBAC. List/detail reads go through CQRS query adapters.

**Current limits**

| Topic    | Status                                                                                 |
| :------- | :------------------------------------------------------------------------------------- |
| Payments | Fake Stripe provider behind a swappable port. No live payment provider wired yet.      |
| Deploy   | Single-instance ops (migrations, health probes, backup/smoke). Not multi-instance yet. |
| Scope    | Reference backend, not a hosted storefront.                                            |
| Demo     | No public staging. Run locally with Docker.                                            |

Roadmap: [`docs/ROADMAP.md`](https://github.com/raouf-b-dev/ecommerce-store-api/blob/HEAD/docs/ROADMAP.md).

## Why this engine?

|…
