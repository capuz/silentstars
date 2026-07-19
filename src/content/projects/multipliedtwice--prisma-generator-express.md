---
repo: "multipliedtwice/prisma-generator-express"
name: "prisma-generator-express"
description: "This tool automatically generates Express/Fastify/Hono CRUD API that uses Prisma to handle database operations and validates responses with Zod schemas to ensure the integrity of input and output."
readmeQualityOk: true
url: "https://github.com/multipliedtwice/prisma-generator-express"
homepage: "https://www.npmjs.com/package/prisma-generator-express"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["express", "generator", "prisma", "api", "api-rest", "crud"]
stars: 27
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-05-11T08:13:23Z"
lastCommitAt: "2026-07-19T06:14:03Z"
lastReleaseAt: "2024-05-24T09:50:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 66
maintainers: ["danil-iglu", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4a34eae351f48fe08ca087cefc5277b5502bff5c899a2110c1c4e87c8a7fc67/multipliedtwice/prisma-generator-express"
discussionCount: 1
---

# Prisma Generator Express

Prisma generator that creates Express, Fastify, or Hono CRUD API routes with OpenAPI documentation from your Prisma schema.

Running `npx prisma generate` produces:

- Handler functions for all Prisma operations (findMany, create, update, delete, etc.)
- Schema-level `findManyPaginated` execution mode selection (`Promise.all` or interactive transaction)
- Per-route and per-endpoint pagination config, including optional materialized-view count sources
- Router generator with operation-wide and per-variant before/after hooks
- POST read endpoints for all read operations (for complex queries exceeding URL length limits)
- Express-only progressive read streaming over Server-Sent Events (SSE), using manual stages or auto-include splitting for supported relation reads, including unguarded deep `findMany` / `findManyPaginated` auto-include paths and guarded single-record auto-include paths
- Express-only standalone materialized view router for read-only access to registered PostgreSQL materialized views
- OpenAPI 3.1 spec (JSON and YAML endpoints registered automatically per router)
- Documentation helpers for contract view and Scalar UI (require manual…
