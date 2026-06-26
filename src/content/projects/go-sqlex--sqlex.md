---
repo: "go-sqlex/sqlex"
name: "sqlex"
description: "A drop-in modernization of jmoiron/sqlx that fixes lexer bugs, automates IN expansion, and adds pluggable hooks — built for Go 1.21+."
url: "https://github.com/go-sqlex/sqlex"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["mysql", "postgresql", "sqlx", "databases", "sql", "sqlserver"]
stars: 32
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-16T12:59:26Z"
lastCommitAt: "2026-06-26T23:40:25Z"
lastReleaseAt: "2026-06-26T23:43:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["suiriass"]
openGraphImageUrl: "https://opengraph.githubassets.com/6785af0ab4ec2b1283fa1f6e5a65179017fc82b7c925bbdee21789ff06623b3f/go-sqlex/sqlex"
---

**English** | [中文](README_zh.md)

# sqlex

> A **drop-in replacement** for [jmoiron/sqlx](https://github.com/jmoiron/sqlx) — 100% API-compatible, with added Hook aspects, generic JSON types, bug fixes, and more.

**sqlex is fully API-compatible with sqlx.** All sqlx methods (`Get`, `Select`, `Exec`, `NamedQuery`, `Preparex`, etc.) work identically. Migrating takes 30 seconds — just change the import path. New features are purely additive and optional.

```diff
- import "github.com/jmoiron/sqlx"
+ import "github.com/go-sqlex/sqlex"
```

What you get for free after migrating:

- 🚀 **Auto-Rebind** — write `?` everywhere, works on PostgreSQL (`$1`), MySQL (`?`), SQLite (`?`), SQL Server (`@p1`). No more manual `db.Rebind()`. Including `Preparex`.
- 🐛 **SQL parsing fixes** — colons in strings, `::` type casts, `?` in comments are correctly handled. Silent bugs from sqlx are gone.
- 🎯 **Unified interfaces** — `Ext` / `ExtContext` / `NamedExt` / `BindExt` / `Preparer` / `PreparerContext` with compile-time checks. Write `func f(ext NamedExt)` and pass DB, Tx, or Conn.
- 🔀 **Auto IN expansion** — slices in `IN (?)` detected and expanded automatically on all methods.
- 🪝 **Hook…
