---
repo: "stacksjs/bun-query-builder"
name: "bun-query-builder"
description: "A safe, performant & fully-typed query builder for Bun."
readmeQualityOk: true
url: "https://github.com/stacksjs/bun-query-builder"
homepage: "https://bun-query-builder.netlify.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bun", "javascript", "mysql", "postgres", "query-builder", "sqlite", "typescript"]
stars: 12
forks: 0
openIssues: 4
closedIssues: 83
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-08-11T16:42:46Z"
lastCommitAt: "2026-09-26T08:47:53Z"
lastReleaseAt: "2026-02-23T10:37:02Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 74
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7d5784d60bd1438bc4e22965ea587d041ea2a2803da8d6c3c6a6810a2640f2d/stacksjs/bun-query-builder"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer", "OPEN_COLLECTIVE:https://opencollective.com/stacksjs"]
---

# bun-query-builder

Fully-typed, model-driven Query Builder for Bun’s native `sql`.

Define your data model once and get a type-safe query experience _(a la Kysely/Laravel)_, powered by Bun’s tagged templates for safety and performance.

## Features

### Core Query Building

- **Typed from Models**: Infer tables/columns/PKs from your model files; `selectFrom('users')` and `where({ active: true })` are typed.
- **Fluent Builder**: `select/insert/update/delete`, `where/andWhere/orWhere`, `join/leftJoin/rightJoin/crossJoin`, `groupBy/having`, `union/unionAll`.
- **Aggregations**: `count()`, `avg()`, `sum()`, `max()`, `min()` with full type safety.
- **Batch Operations**: `insertMany()`, `updateMany()`, `deleteMany()` for efficient bulk operations.

### Advanced Features

- **Relations**: `with(...)`, `withCount(...)`, `whereHas(...)`, `has()`, `doesntHave()`, `selectAllRelations()` with configurable aliasing and constraint callbacks.
- **Query Scopes**: Define reusable query constraints on models for cleaner, more maintainable code.
- **Query Caching**: Built-in LRU cache with TTL support via `cache(ttlMs)`, `clearQueryCache()`, `setQueryCacheMaxSize()`.
- **Model Hooks**: Lifecycle…
