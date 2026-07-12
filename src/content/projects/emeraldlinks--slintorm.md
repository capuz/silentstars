---
repo: "emeraldlinks/slintorm"
name: "slintorm"
description: "Minimal fully typed orm with zero dependecies built on TypeScript"
readmeQualityOk: true
url: "https://github.com/emeraldlinks/slintorm"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [60, 24]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-01T10:06:08Z"
lastCommitAt: "2026-07-12T06:20:09Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 52
maintainers: ["emeraldlinks", "slintorm-cc", "joechristophers"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3a2e6babd33a92227100223c2af55ce87f16085266b492d3472dec8ed7c18e4/emeraldlinks/slintorm"
---

# SlintORM

**A lightweight, GORM-inspired TypeScript ORM for SQLite, PostgreSQL, MySQL, and MongoDB — zero-config migrations, a full SQL query builder, and everything hangs off your model instances.**

No schema DSL to learn. No Prisma Client generation step. No separate import for every query feature. Write a TypeScript interface, annotate a few fields with comments, call `migrate()`, and start querying.

```ts
const Users = await orm.defineModel<User>("users", "User");
const active = await Users.query().where("status", "=", "active").get();
```

That's it. No `db.select().from(users).where(...)` ceremony, no `prisma.user.findMany({ where: { ... } })` client object indirection — just your model, chained.

---

## Why SlintORM?

Most TypeScript ORMs force a tradeoff: **Drizzle** is fast and type-safe but minimal — no preloads, no built-in migrations, you write SQL-shaped queries by hand. **Prisma** is full-featured but heavy — a generated client, a separate schema DSL, and raw SQL the moment you need a window function or a real subquery.

SlintORM aims for the GORM sweet spot: **automatic migrations, a real query builder with joins/preloads/aggregates/subqueries, and zero…
