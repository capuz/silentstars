---
repo: "coregx/relica"
name: "relica"
description: "Lightweight, type-safe database query builder for Go with zero production dependencies. JOINs, subqueries, CTEs, batch operations, LRU statement cache. PostgreSQL, MySQL, SQLite."
readmeQualityOk: true
url: "https://github.com/coregx/relica"
homepage: "https://pkg.go.dev/github.com/coregx/relica"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["database", "database-abstraction", "go", "golang", "lru-cache", "mysql", "orm", "performance", "postgresql", "query-builder"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-23T17:07:08Z"
lastCommitAt: "2026-10-27T09:16:20Z"
lastReleaseAt: "2025-12-16T13:01:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["kolkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/e130d70f4d5f26f4af63da92620604bc7ddc9984062eb2963426f46de83d9316/coregx/relica"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/coregx"]
discussionCount: 6
---

# Relica

**Relica** is a lightweight, type-safe database query builder for Go with zero production dependencies.

> **🤖 AI Agents**: Before generating code, read **[AGENTS.md](https://github.com/coregx/relica/blob/HEAD/AGENTS.md)** for correct API patterns. Use `Model()` API for CRUD, `Expression API` for WHERE conditions. Avoid `map[string]interface{}`.
>
> **Agent skill**: [`skills/relica/`](https://github.com/coregx/relica/blob/HEAD/skills/relica/SKILL.md) (Agent Skills format) — version-exact docs, an audit
> script for a project's Relica code, the upgrade procedure. In Claude Code (v2.1.275+):
> `/plugin install relica --marketplace coregx/relica` (or `/plugin marketplace add coregx/relica`, then
> `/plugin install relica@relica`; the shell form `claude plugin install` needs v2.1.292+). Other agents: read `<module Dir>/skills/relica/SKILL.md` at your version
> (`go list -m -f '{{.Dir}}' github.com/coregx/relica`).

## ✨ Features

- **Zero Dependencies** - Truly empty go.mod, uses only Go standard library
- **High Performance** - LRU statement cache, batch operations (3.3x faster)
- **Type-Safe** - Generic `One[T]`/`All[T]`/`Scalar[T]` + reflection-based struct scanning
-…
