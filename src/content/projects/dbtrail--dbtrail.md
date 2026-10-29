---
repo: "dbtrail/dbtrail"
name: "dbtrail"
description: "Zero-ETL analytical replica for MySQL, RDS and Aurora. Reads the binlog like a replica, keeps Parquet in your bucket, opens in DuckDB. Time travel and row-level undo included."
readmeQualityOk: true
url: "https://github.com/dbtrail/dbtrail"
homepage: "https://www.dbtrail.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["binlog", "mysql", "point-in-time-recovery", "mariadb", "percona-mysql", "duckdb", "duckdb-community", "duckdb-database", "duckdb-server", "etl"]
stars: 65
forks: 9
openIssues: 10
closedIssues: 1121
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-19T15:54:14Z"
lastCommitAt: "2026-10-29T12:24:31Z"
lastReleaseAt: "2026-03-09T22:15:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["nethalo", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161864008/d8c69131-0a4c-404b-8983-a33d32663f01"
discussionCount: 1
---

**DBTrail keeps your MySQL tables as Parquet files you own, minutes behind the source, with every version of every row. Query them with DuckDB. Production never sees the query.**

```
$ duckdb -init views.sql
D SELECT c.tier, count(*) AS orders, round(sum(o.total), 2) AS revenue
  FROM demo.orders o
  JOIN demo.customers c ON c.id = o.customer_id
  GROUP BY c.tier ORDER BY revenue DESC;
┌──────────┬────────┬───────────────┐
│   tier   │ orders │    revenue    │
│ varchar  │ int64  │ decimal(38,2) │
├──────────┼────────┼───────────────┤
│ platinum │ 539848 │   59426197.40 │
│ gold     │ 539752 │   59353658.54 │
│ silver   │ 539056 │   59295443.48 │
│ bronze   │ 538385 │   59242795.95 │
└──────────┴────────┴───────────────┘
```

Minutes behind the source. Not high availability, not a backup.

---

## Why

Reports, dashboards and ad-hoc analysis compete with your application when
they run on the primary: a full scan pushes the working set out of the buffer
pool, a long read holds back purge, and a `GROUP BY` over millions of rows
spills temp tables to disk. A reporting replica is one more MySQL to pay for
and patch, and it still answers at row-store speed.

DBTrail gives those…
