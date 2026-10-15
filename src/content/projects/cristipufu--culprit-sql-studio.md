---
repo: "cristipufu/culprit-sql-studio"
name: "culprit-sql-studio"
description: "Find what's slowing your database down: a free desktop app, CLI and MCP server for SQL Server, PostgreSQL, MySQL and MariaDB performance (slow queries, execution plans, indexes, blocking, deadlocks)."
readmeQualityOk: true
url: "https://github.com/cristipufu/culprit-sql-studio"
homepage: "https://culpritsql.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["mariadb", "mysql", "performance", "postgresql", "claude-code", "database-performance", "dba", "deadlock", "execution-plan", "mcp"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-11T08:09:20Z"
lastCommitAt: "2026-10-15T08:32:24Z"
lastReleaseAt: "2026-10-13T09:00:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["cristipufu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6292ca0679edd1f227f96de05b5885d5c26527387d6fa87aabf9c45b005c0a7b/cristipufu/culprit-sql-studio"
---

A fast desktop app and CLI for SQL Server, PostgreSQL, MySQL and MariaDB, on macOS, Linux and Windows.<br>
  Plain-language answers for people. Safe, structured access for coding agents.

## Why Culprit

When a database gets slow, someone has to dig through Query Store, wait statistics, plan caches and execution plans to find out why. That takes an expert, an afternoon and a handful of tools that each show a piece of the picture.

Culprit does the digging in seconds. It reads the statistics your database already keeps, works out where the time goes, and tells you in one sentence what is wrong, what it costs and what to change:

> **Repeats its read of `order_items` 1.5M times, once per row of `order_items`.**<br>
> 27% of database time, and it times out on every run · **Fix:** the query forces a loop join; remove the hint and let the optimizer choose · **Verify:** run it with actual rows: a hash join, or far fewer executions of `order_items`.

**🎯 Answers, not raw numbers**

Every finding is ranked by its share of database time and comes with the evidence, a production-safe fix and a way to prove it worked.

**🛡️ Safe on production**

Scans read statistics only and never run…
