---
repo: "jarredhj0214/linesql"
name: "linesql"
description: "JVM-native ANTLR4 SQL lineage parser for Spark, Hive, Flink, StarRocks, MySQL, Oracle, SQL Server, PostgreSQL, and OceanBase."
readmeQualityOk: true
url: "https://github.com/jarredhj0214/linesql"
language: "Java"
languages: ["Java", "ANTLR"]
languagePcts: [76, 24]
topics: ["antlr4", "data-lineage", "flink-sql", "hive-sql", "java", "jvm", "mysql", "oceanbase", "oracle", "postgresql"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-13T02:53:21Z"
lastCommitAt: "2026-11-16T04:29:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["jarredhj0214"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb7a25e7891029635ac21c3b203c58c83a7bbbfb8f24226eff6a6ae98c09f781/jarredhj0214/linesql"
---

# LineSQL

Turn messy production SQL into table and column lineage.

LineSQL is a JVM-native, ANTLR4-based SQL lineage parser for real-world data platform SQL.

It parses SQL from engines such as Spark, Hive, Flink, StarRocks, MySQL, Oracle, SQL Server, PostgreSQL, and OceanBase, then returns a unified model for table lineage, column lineage, clause-level column usage, and parser diagnostics.

LineSQL is not a SQL execution engine, optimizer, or query planner. It is built for metadata platforms, data catalogs, governance systems, quality platforms, impact analysis, and lineage services that need practical SQL understanding inside JVM applications.

If LineSQL helps your data platform work, please star the repository. Stars make it easier for more SQL cases, dialect contributors, and production feedback to find the project.

## Lineage in One Glance

```sql
CREATE TEMPORARY VIEW active_users AS
SELECT id, name, dt
FROM ods.users
WHERE status = 'ACTIVE';

INSERT OVERWRITE TABLE ads.user_summary(user_id, user_name)
SELECT id, name
FROM active_users
WHERE dt = '${bizdate}';
```

LineSQL resolves the temporary view and keeps the final source-to-target lineage:

**Table lineage**…
