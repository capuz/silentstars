---
repo: "dbtrail/dbtrail"
name: "dbtrail"
description: "DB Trail "
url: "https://github.com/dbtrail/dbtrail"
homepage: "https://www.dbtrail.com"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["binlog", "cli", "database", "dba-tools", "disaster-recovery", "golang", "mcp", "mysql", "point-in-time-recovery", "recovery"]
stars: 12
forks: 1
openIssues: 22
closedIssues: 261
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T15:54:14Z"
lastCommitAt: "2026-06-25T01:31:22Z"
lastReleaseAt: "2026-03-09T22:15:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 52
maintainers: ["nethalo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161864008/c030b096-9fec-4d0c-8510-564ae4839adb"
discussionCount: 0
---

**Point-in-time recovery for MySQL — no locks, no schema changes, no waiting for a restore.**

```sql
SELECT * FROM orders WHERE id = 123 AS OF '2026-05-20 14:00:00'
```

*— against production MySQL. That's the experience dbtrail makes possible.*

</div>

---

## What you get

dbtrail tails the MySQL binary log and keeps every row change with full
before/after images in a searchable index:

- **See every change** — what changed and when, for every row, with before → after diffs
- **Undo precisely** — generate exact reversal SQL for just the damaged rows
- **Undo cascade deletes** — reconstruct child rows an `ON DELETE CASCADE` wiped out (and restore FKs an `ON DELETE SET NULL` cleared) that InnoDB removes *below* the binlog and most tools can't see — see [Query & Recovery](docs/query-and-recovery.md)
- **Time-travel** — query any row (or table) as it was at any moment (requires ProxySQL — see [Time-Travel SQL](docs/time-travel-sql.md))
- **Web console** — browse, recover, and add servers to monitor, all in the UI
- **[MCP server](docs/mcp-server.md)** — Claude or any MCP client can search history and draft recoveries

Works with **MySQL**, **Percona Server for MySQL**, **Amazon…
