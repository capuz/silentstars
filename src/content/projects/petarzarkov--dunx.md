---
repo: "petarzarkov/dunx"
name: "dunx"
description: "fastest web DI framework. NestJS-style structure at Bun speed. Constructor DI with no reflect-metadata, no experimentalDecorators, no JavaScript router."
readmeQualityOk: true
url: "https://github.com/petarzarkov/dunx"
homepage: "https://dunx.win"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["backend-framework", "bun", "dependency-injection", "nestjs", "oxc", "typescript", "portfolio-flagship"]
stars: 119
forks: 0
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-27T05:07:34Z"
lastCommitAt: "2026-09-13T08:28:45Z"
lastReleaseAt: "2026-08-23T09:56:56Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["petarzarkov", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32638a2b617d80bab73e990735d4004bf6596a18118a70685727feaa01d13ebd/petarzarkov/dunx"
fundingLinks: ["GITHUB:https://github.com/petarzarkov", "KO_FI:https://ko-fi.com/petarzarkov"]
discussionCount: 0
---

# dunx

**Dependency injection for Bun. Everything a service needs, one version.**

Controllers, dependency injection, validation, OpenAPI, WebSockets, queues, an
ORM, auth, a test harness and an ops dashboard. Released together, tested
together, on Bun's own primitives.

</div>

```bash
bunx @dunx/create-app my-api
```

## What you get

Elysia and Hono hand you a router, and everything above it is yours to choose
and keep in step. This is the other trade: one dependency, one release train.

| You need           | dunx gives you                                                                |
| ------------------ | ----------------------------------------------------------------------------- |
| Structure          | Controllers, scoped modules, constructor DI, lifecycle hooks                  |
| Requests           | `Bun.serve` routing, middleware, guards, CORS, compression, throttling        |
| Configuration      | One validate function over `Bun.env`, YAML, TOML or JSON, typed end to end    |
| Validation         | Standard Schema, so zod, Valibot or ArkType all drop in                       |
| API documentation  | OpenAPI 3.1 from the routes' own schemas, behind Swagger UI…
