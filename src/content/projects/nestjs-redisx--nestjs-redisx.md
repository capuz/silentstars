---
repo: "nestjs-redisx/nestjs-redisx"
name: "nestjs-redisx"
description: "Modular Redis toolkit for NestJS with plugin architecture - caching, locks, rate limiting, circuit breaker, pub/sub, idempotency, streams, metrics & tracing"
readmeQualityOk: true
url: "https://github.com/nestjs-redisx/nestjs-redisx"
homepage: "https://nestjs-redisx.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 51
forks: 8
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-15T12:19:45Z"
lastCommitAt: "2026-08-09T04:46:53Z"
lastReleaseAt: "2026-04-20T00:19:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 41
maintainers: ["sur-ser", "juckerf", "qrver"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6ab247e87c898adbc4b8f6f552125eb98c31968782e96394b5b4923ceb8030b/nestjs-redisx/nestjs-redisx"
fundingLinks: ["GITHUB:https://github.com/sur-ser"]
discussionCount: 0
---

</p>

<h1 align="center">NestJS RedisX</h1>

</p>

</p>

## Who is this for

- Replace `cache-manager` with production-grade L1+L2 caching, stampede protection, and tag invalidation
- Need distributed locks, rate limiting, and idempotency in one ecosystem instead of 5 separate libraries
- Need Prometheus metrics and OpenTelemetry tracing for Redis operations out of the box
- Building multi-tenant NestJS apps that need cache isolation per tenant
- Migrating from raw ioredis/node-redis and want NestJS-native DI integration

## Quality

- 2k+ tests across unit, integration, and E2E
- Coverage tracked via [Codecov](https://codecov.io/gh/nestjs-redisx/nestjs-redisx)
- Pack-test validates every package installs and works from tarball
- Compatibility tested across Node 18/20/22/24, NestJS 10/11, Redis 6.2/7.x
- Works with both Express and Fastify adapters

> **Node.js support:** the published packages run on **Node >= 18** (declared in each package's `engines` and exercised in CI on 18/20/22/24). The root `package.json` of this monorepo requires **Node >= 20** — that constraint applies only to *developing this repository* (build tooling), not to using the packages.

[Testing…
