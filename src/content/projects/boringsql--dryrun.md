---
repo: "boringSQL/dryrun"
name: "dryrun"
description: "PostgreSQL schema intelligence MCP server with offline linting, migration safety, query validation for AI coding assistants. "
readmeQualityOk: true
url: "https://github.com/boringSQL/dryrun"
homepage: "https://boringsql.com/products/dryrun/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai-coding-assistant", "cli", "database", "mcp", "migration-safety", "postgresql", "query-validation", "rust", "schema-linting"]
stars: 30
forks: 3
openIssues: 11
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-19T08:38:45Z"
lastCommitAt: "2026-08-01T00:29:58Z"
lastReleaseAt: "2026-06-22T19:18:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 86
undervaluedScore: 44
maintainers: ["radim"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd3594ae14819c357571183ffe8718352fbff2dde780c02fd58684d6ef34b34/boringSQL/dryrun"
---

# DryRun PostgreSQL MCP

The PostgreSQL MCP server that doesn't need connection to the production.

`dryrun` gives AI agents, IDEs, and CI full schema awareness. From offline snapshot, not live database connection. Lint your schema, validate queries, check migration safety, and explore foreign key graphs. All without credentials leaving the DBA's machine.

`dryrun` is part of the [boringSQL](https://boringsql.com) suite alongside [RegreSQL](https://github.com/boringsql/regresql) and [Fixturize](https://github.com/boringSQL/fixturize).

## The problem

LLM/AI coding assistants are very good in writing code/SQL queries. But they are blind. They don't know your schema, your indexes or your constraints. They might generate a migration that takes an `ACCESS EXCLUSIVE` lock on your busiest table and send your app down.

Some PostgreSQL MCP server ask you for the database connection. And to perform the administrative tasks you might need SUPERUSER permission. But that's like asking for problem.

We've already seen where this leads: [production databases wiped by AI agents](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/), and [SQL…
