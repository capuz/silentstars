---
repo: "elliotchance/vsql"
name: "vsql"
description: "✌️ Single-file or PostgreSQL-server compatible transactional SQL database written in pure V."
readmeQualityOk: true
url: "https://github.com/elliotchance/vsql"
homepage: "https://vsql.readthedocs.io"
language: "V"
languages: ["V"]
languagePcts: [70]
topics: ["sql", "database", "vlang", "vlang-cli", "vlang-library"]
stars: 354
forks: 20
openIssues: 61
closedIssues: 207
watchers: 10
contributors: 12
recentReleases: 0
createdAt: "2021-07-19T23:55:45Z"
lastCommitAt: "2026-10-29T05:49:23Z"
lastReleaseAt: "2021-07-26T21:20:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 38
maintainers: ["elliotchance"]
openGraphImageUrl: "https://opengraph.githubassets.com/af7eabdaa28dbeba8b5a9a983cef08e3fb6c55e00bda9ddfe9d018c0ffd5d321/elliotchance/vsql"
discussionCount: 6
---

✌️ vsql
======

**vsql is a small SQL database that follows the SQL standard.** It keeps a whole
database in a single file (or in memory), and you can use it from a terminal,
from any PostgreSQL client, or embedded in your own [V](https://vlang.io)
program. It's written in pure V with no dependencies.

```text
$ vsql cli shop.vsql
vsql> CREATE TABLE products (name VARCHAR(50), price NUMERIC(10, 2));
CREATE TABLE 1 (0 ms)

vsql> INSERT INTO products (name, price) VALUES ('Coffee', 4.50), ('Bagel', 2.25);
INSERT 2 (1 ms)

vsql> SELECT * FROM products ORDER BY name;
NAME   | PRICE
-------+------
Bagel  |  2.25
Coffee |  4.50
2 rows (1 ms)
```

Why vsql?
---------

- **Standard SQL.** vsql follows the SQL:2016 standard rather than any one
  database's dialect, so what you learn here works elsewhere. Errors use the
  standard SQLSTATE codes, and the
  [compliance table](https://vsql.readthedocs.io/en/latest/sql-compliance.html)
  shows what's supported so far.
- **One file, no setup.** A database is a single file you can copy around, like
  SQLite. Use `:memory:` for a database that only lives in memory.
- **Real transactions.** `START TRANSACTION`, `COMMIT` and `ROLLBACK` work…
