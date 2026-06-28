---
repo: "schemichq/schemic"
name: "schemic"
description: "Schemic — schema-as-code, types, and migrations for any database (TypeScript). Author with s.*, target SurrealDB or Postgres."
url: "https://github.com/schemichq/schemic"
homepage: "https://schemic.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cli", "database", "database-migrations", "ddl", "migrations", "orm", "postgres", "schema", "schema-as-code", "schema-management"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-09T20:00:01Z"
lastCommitAt: "2026-06-28T01:24:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["msanchezdev", "gulybyte"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f10360ea66e9da65a5fc477bcdfb358309a8a94a737f6f6d94c5765b07975ef/schemichq/schemic"
discussionCount: 8
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner.png" />
</picture>

<br />

[Docs](https://schemic.dev) &nbsp;•&nbsp; [Drivers](#drivers) &nbsp;•&nbsp; [GitHub](https://github.com/schemichq/schemic)

</div>

---

Schemic lets you define your database schema once in TypeScript — with the
**[Zod](https://zod.dev) API you already know** — and turns that single definition
into your database's native DDL, end-to-end types, and reviewable migrations.

The engine and CLI are **dialect-neutral**; each database is an installable
**driver**, so the same schema targets any of them. One source of truth — no
separate ORM model, no code generation, no drift.

## Drivers

- [`@schemic/surrealdb`](drivers/surrealdb#readme) — **SurrealDB** · available
- [`@schemic/postgres`](drivers/postgres#readme) — **PostgreSQL** · in progress

More drivers are planned. The authoring API and the CLI are the same across
every driver — only the generated DDL differs.

## Packages

| Package | What it is |
| --- | --- |
| [`@schemic/core`](packages/core#readme) | The dialect-neutral engine: the `Driver` contract, the portable schema IR, and the migration / diff / snapshot…
