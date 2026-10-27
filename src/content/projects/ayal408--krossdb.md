---
repo: "ayal408/krossdb"
name: "krossdb"
description: "Enterprise-grade, multi-database Python library: unified repository/Unit-of-Work interface over PostgreSQL/MySQL/SQLite, MongoDB, and Qdrant."
readmeQualityOk: true
url: "https://github.com/ayal408/krossdb"
homepage: "https://ayal408.github.io/krossdb/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-25T17:03:24Z"
lastCommitAt: "2026-10-27T09:16:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["ayal408", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29cdeef1e5ccceefb432609ff4205d72d5bd7a5d47abff2883de28905de321b4/ayal408/krossdb"
---

# krossdb

An enterprise-grade, multi-database Python library that provides a unified
interface and repository pattern over relational (PostgreSQL/MySQL/SQLite),
document (MongoDB), and vector (Qdrant) databases.

> Published on PyPI as [`krossdb`](https://pypi.org/project/krossdb/) — the
> name `krossdb` was already taken by an unrelated package. The Python
> package you `import` is unaffected and remains `krossdb`.

## Why

Most projects that touch more than one kind of database end up with
per-backend, ad-hoc data access code, inconsistent error handling, and no
shared story for retries, caching, multi-tenancy, or observability. krossdb
gives every backend the same repository/Unit-of-Work surface, the same
exception hierarchy, and the same resilience and observability behavior, so
application code depends on `krossdb`'s abstractions instead of a specific
driver.

## Architecture at a glance

```
src/krossdb/
├── core/            settings, enums, the exception hierarchy, the driver
│                     exception mapper, structlog config, correlation/tenant
│                     context (contextvars)
├── interfaces/       ABCs: AbstractDatabaseAdapter, AbstractRepository,
│…
