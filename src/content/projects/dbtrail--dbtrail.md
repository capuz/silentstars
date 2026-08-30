---
repo: "dbtrail/dbtrail"
name: "dbtrail"
description: "Data recovery for your MySQL and PostgreSQL. DB Trail remembers every row change: searchable, reversible, yours. The wrong UPDATE becomes a two-minute fix."
readmeQualityOk: true
url: "https://github.com/dbtrail/dbtrail"
homepage: "https://www.dbtrail.com"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["binlog", "database", "dba-tools", "disaster-recovery", "mcp", "mysql", "point-in-time-recovery", "recovery", "mariadb", "percona-mysql"]
stars: 48
forks: 8
openIssues: 10
closedIssues: 722
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T15:54:14Z"
lastCommitAt: "2026-08-30T00:42:34Z"
lastReleaseAt: "2026-03-09T22:15:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 42
maintainers: ["nethalo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161864008/c030b096-9fec-4d0c-8510-564ae4839adb"
discussionCount: 1
---

**See every row change in MySQL and PostgreSQL, and undo the ones you didn't want. No restore, no locks, no schema changes.**

```sql
SELECT * FROM orders WHERE id = 123 AS OF '2026-05-20 14:00:00'
```

*That query runs against production MySQL or Postgres. dbtrail makes it work.*

</div>

---

## What you get

Point-in-time recovery restores the whole database and replays every log to
reach one change. dbtrail keeps the changes themselves — it tails the MySQL
binary log or the Postgres WAL and stores every row change, with full before and
after images, in a searchable index:

- **See every change.** What changed and when, for every row, with before/after diffs.
- **Undo precisely.** Generate exact reversal SQL for just the damaged rows.
- **Undo foreign-key cascades.** Rebuild the child rows an `ON DELETE CASCADE` wiped out. Restore the foreign keys an `ON DELETE SET NULL` cleared, or an `ON UPDATE CASCADE`/`SET NULL` re-pointed when a parent's key changed. InnoDB applies all of these below the binlog, where most tools cannot see them. See [Query & Recovery](https://github.com/dbtrail/dbtrail/blob/HEAD/docs/query-and-recovery.md).
- **Time-travel.** Query any row or table as it…
