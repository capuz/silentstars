---
repo: "storm-orm/storm-framework"
name: "storm-framework"
description: "Storm is a modern, high-performance ORM for Kotlin 2.0+ and Java 21+, built around a powerful SQL template engine. It focuses on simplicity, type safety, and predictable performance through immutable models and compile-time metadata."
readmeQualityOk: true
url: "https://github.com/storm-orm/storm-framework"
homepage: "https://orm.st"
language: "Java"
languages: ["Java"]
languagePcts: [75]
topics: ["java", "orm", "records", "sql", "string-template", "templates", "kotlin", "ai", "data-access", "database"]
stars: 11
forks: 0
openIssues: 12
closedIssues: 260
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-24T06:15:11Z"
lastCommitAt: "2026-11-07T09:30:45Z"
lastReleaseAt: "2025-06-29T06:28:18Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 99
undervaluedScore: 74
maintainers: ["zantvoort", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f521e4ae4f2c64240c29b084c4b878f0bf8e4ec3a12987fc655236f7eee0af19/storm-orm/storm-framework"
discussionCount: 3
---

# ST/ORM

**Storm is the type-safe, SQL-first ORM for Kotlin 2.0+ and Java 21, built for agentic coding and performance.** Immutable data-class entities, one-line queries checked at compile time, and none of the machinery you fight in traditional ORMs: no proxies, no N+1, no persistence context.

```kotlin
// An entity is a data class. This is the whole mapping.
data class User(
    @PK val id: Int = 0,
    val email: String,
    @FK val city: City,
) : Entity<Int>

// Query nested properties in one line, checked at compile time.
val users = orm.findAll(User_.city.name eq "Sunnyvale")

// Repositories inherit CRUD. Add only the queries that are yours.
interface UserRepository : EntityRepository<User, Int> {
    fun findByCity(name: String) = findAll(User_.city.name eq name)
}
```

The `city` graph loads in a single query, and `User_` is generated at compile time so a typo is a compile error. What you write is what runs, which is also what makes Storm work so well with coding agents: the data class is the whole model, so the agent has the exact details it needs. Set your agent up with `npx @storm-orm/cli init` ([Agentic Coding](#agentic-coding)).

## Why Storm

Storm draws on…
