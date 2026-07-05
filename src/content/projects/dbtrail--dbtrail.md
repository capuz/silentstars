---
repo: "dbtrail/dbtrail"
name: "dbtrail"
description: "Time-travel for your MySQL. DB Trail remembers every row change: searchable, reversible, yours. The wrong UPDATE becomes a two-minute fix."
readmeQualityOk: true
url: "https://github.com/dbtrail/dbtrail"
homepage: "https://www.dbtrail.com"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["binlog", "database", "dba-tools", "disaster-recovery", "mcp", "mysql", "point-in-time-recovery", "recovery", "mariadb", "percona-mysql"]
stars: 22
forks: 1
openIssues: 125
closedIssues: 326
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T15:54:14Z"
lastCommitAt: "2026-07-05T20:17:59Z"
lastReleaseAt: "2026-03-09T22:15:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 43
maintainers: ["nethalo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161864008/c030b096-9fec-4d0c-8510-564ae4839adb"
discussionCount: 1
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
- **Undo cascade deletes** — reconstruct child rows an `ON DELETE CASCADE` wiped out (and restore FKs an `ON DELETE SET NULL` cleared) that InnoDB removes *below* the binlog and most tools can't see — see [Query & Recovery](https://github.com/dbtrail/dbtrail/blob/HEAD/docs/query-and-recovery.md)
- **Time-travel** — query any row (or table) as it was at any moment, from the web console or the `reconstruct` CLI; the live SQL `AS OF` interface additionally needs ProxySQL — see [Time-Travel SQL](https://github.com/dbtrail/dbtrail/blob/HEAD/docs/time-travel-sql.md)
- **Who changed this?** — attribute any change to the database user,…
