---
repo: "landawn/abacus-jdbc"
name: "abacus-jdbc"
description: "Coding with SQL/DB is just like coding with Collections"
readmeQualityOk: true
url: "https://github.com/landawn/abacus-jdbc"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["java", "jdbc", "sql", "sqlbuilder", "dao", "jpa", "orm"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-10-01T05:05:08Z"
lastCommitAt: "2026-10-25T02:47:17Z"
lastReleaseAt: "2021-02-01T04:01:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["claude", "landawn"]
openGraphImageUrl: "https://opengraph.githubassets.com/88708911684a3602efde86ab0b5642eeacd869ba1335d64fc7f4be6e73105e7c/landawn/abacus-jdbc"
---

# abacus-jdbc

Work with SQL and databases as naturally as you work with Collections.

`abacus-jdbc` is a lightweight layer on top of plain JDBC. It keeps SQL front and center — you write (or generate) real SQL — while removing the boilerplate of preparing statements, binding parameters, mapping result sets, managing transactions, and handling exceptions. There is no ORM magic to fight and no query DSL to learn before you can run your first statement.

## Features

The library is organized around three steps you already take with JDBC — write SQL, prepare a query, execute and map the result. Each step is optional and composable; use as much or as little as you need.

### 1. Write or generate SQL *(optional)*

Write SQL as a plain string, or build it type-safely with
[SQLBuilder](https://htmlpreview.github.io/?https://github.com/landawn/abacus-jdbc/blob/master/docs/SQLBuilder_view.html) /
[DynamicSQLBuilder](https://htmlpreview.github.io/?https://github.com/landawn/abacus-jdbc/blob/master/docs/DynamicSQLBuilder_view.html).

```java

// Hand-written SQL as a plain string.
String query = "SELECT id, first_name, last_name, email FROM user WHERE first_name = ?";

// Or build it from…
