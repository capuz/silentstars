---
repo: "jirikuncar/sqlty"
name: "sqlty"
description: "Type-safe raw SQL for Python: infer row types from SQL strings, rewrite them as SQL[T] and check them, without a database"
readmeQualityOk: true
url: "https://github.com/jirikuncar/sqlty"
homepage: "https://jirikuncar.github.io/sqlty/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 42]
topics: ["code-generation", "linter", "mypy", "postgresql", "psycopg", "python", "rust", "sql", "static-analysis", "type-checking"]
stars: 58
forks: 1
openIssues: 3
closedIssues: 412
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2025-11-03T09:17:26Z"
lastCommitAt: "2026-11-01T22:58:30Z"
lastReleaseAt: "2026-10-30T22:42:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["Kludex", "jirikuncar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aea97c617595d95c09e6fb9f77c36ed815ad87d520f77881c1cbd7bd8942eaa/jirikuncar/sqlty"
---

# SQLTy

Your SQL already knows its types. SQLTy tells Python.

Type-safe raw SQL without an ORM or a database connection. sqlty reads row and
parameter types from your SQL and schema, and checks them on every commit, so a
migration that changes a column is caught in review, not in production.

  (<a href="https://github.com/jirikuncar/sqlty/blob/main/docs/assets/demo.tape">view source</a>)

**Documentation: [jirikuncar.github.io/sqlty](https://jirikuncar.github.io/sqlty/)**

**Fits if** you write SQL as string literals on Python 3.14+, against
PostgreSQL, SQLite or MySQL, with a schema dump or SQL migrations in the
repository. Rows are typed end to end with psycopg 3; with other drivers sqlty
checks the query and its parameters, and you annotate what the cursor returns
([Drivers](https://jirikuncar.github.io/sqlty/guide/drivers-and-orms/)).

> **Beta.** APIs and configuration may change before 1.0. Feedback welcome in
> [GitHub Issues](https://github.com/jirikuncar/sqlty/issues).

## How it works

Drivers return rows of `Any`, so nothing ties a query's columns to the code
that reads them. Start a query with `--sql` and a newline, and
`sqlty rewrite .` adds the row type inferred…
