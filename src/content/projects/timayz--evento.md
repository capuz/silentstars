---
repo: "timayz/evento"
name: "evento"
description: "Event sourcing and CQRS toolkit with SQL persistence, projections, and subscriptions"
readmeQualityOk: true
url: "https://github.com/timayz/evento"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 10
forks: 0
openIssues: 4
closedIssues: 62
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-04-05T02:38:12Z"
lastCommitAt: "2026-10-25T22:11:49Z"
lastReleaseAt: "2023-01-07T14:39:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 72
maintainers: ["snapiz", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e943a14168c1d14a477d8bbe6d54fa5146b0d0e2824547127393e6fe4a1ccd1c/timayz/evento"
---

# Evento

A collection of libraries and tools that help you build DDD, CQRS, and event sourcing
applications in Rust.

- **Event sourcing** — state changes stored as immutable events, with optimistic
  concurrency and a complete audit trail
- **CQRS** — commands, projections (read models), and continuous subscriptions
- **Macros** — `#[evento::aggregate]`, `#[evento::command]`, `#[evento::projection]`,
  `#[evento::snapshot]`, `#[evento::handler]`, `#[evento::subscription]`
- **Compact storage** — fast binary serialization with [bitcode](https://crates.io/crates/bitcode)

One `Executor` trait, many backends:

| Backend | Feature | Crate | Notes |
|---------|---------|-------|-------|
| SQLite / PostgreSQL / MySQL | `sqlite` / `postgres` / `mysql` | [evento-sql](https://github.com/timayz/evento/blob/HEAD/evento-sql) | via sqlx, with [built-in migrations](https://github.com/timayz/evento/blob/HEAD/evento-sql-migrator) |
| Fjall (embedded LSM-tree) | `fjall` | [evento-fjall](https://github.com/timayz/evento/blob/HEAD/evento-fjall) | no external server; `Fjall::temporary()` for tests |
| Remote (client/server TCP) | `remote` |…
