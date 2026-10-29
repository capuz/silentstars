---
repo: "EulogySnowfall/SurrealDB-ORM"
name: "SurrealDB-ORM"
description: "SurrealDB ORM overlay based on Pydantic"
readmeQualityOk: true
url: "https://github.com/EulogySnowfall/SurrealDB-ORM"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 4
openIssues: 46
closedIssues: 66
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2023-10-29T16:04:19Z"
lastCommitAt: "2026-10-29T12:25:15Z"
lastReleaseAt: "2026-02-03T13:42:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["EulogySnowfall", "dependabot[bot]", "leosilberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/615adfc224ae6d856a92a05cd5861ccda3e5fed62f525ff12ff66786ee7c71af/EulogySnowfall/SurrealDB-ORM"
discussionCount: 0
---

# SurrealDB-ORM

> ## ⚠️ BREAKING CHANGE in 0.32.0 — SurrealDB **3.2+ is now required**
>
> **SurrealDB 3.1.x and earlier are no longer supported.** Upgrade your database to **3.2.4+** before
> upgrading the ORM, or pin the ORM to the version matching your server:
>
> | Your SurrealDB | Install |
> | -------------- | ------- |
> | **3.2+** (3.2.x – 3.3.x) | `pip install surrealdb-orm` (0.32.x and later; 3.3 tested from 0.34.0) |
> | 3.0 – 3.1 | `pip install "surrealdb-orm<0.32"` |
> | 2.x | `pip install "surrealdb-orm<0.30"` — or the [`v2` branch](https://github.com/EulogySnowfall/SurrealDB-ORM/tree/v2) (`0.21.x`, security + critical fixes only) |
>
> `Subquery` also emits different SQL in 0.32.0 (a `LET` prelude). The Python API and the results are
> unchanged — only code asserting on the *generated SQL string* is affected. See
> [What's New in 0.32.0](#whats-new-in-0320) and [CHANGELOG.md](https://github.com/EulogySnowfall/SurrealDB-ORM/blob/HEAD/CHANGELOG.md).
>
> This is a Beta — core APIs are stabilizing. Feedback welcome!

**SurrealDB-ORM** is a Django-style ORM for [SurrealDB](https://surrealdb.com/) with async support, Pydantic validation, and JWT authentication.…
