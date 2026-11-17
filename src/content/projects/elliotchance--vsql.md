---
repo: "elliotchance/vsql"
name: "vsql"
description: "✌️ Single-file or PostgreSQL-server compatible transactional SQL database written in pure V."
readmeQualityOk: true
url: "https://github.com/elliotchance/vsql"
homepage: "https://vsql.readthedocs.io"
language: "V"
languages: ["V"]
languagePcts: [60]
topics: ["sql", "database", "vlang", "vlang-cli", "vlang-library"]
stars: 357
forks: 20
openIssues: 332
closedIssues: 453
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2021-07-19T23:55:45Z"
lastCommitAt: "2026-11-17T12:16:27Z"
lastReleaseAt: "2021-07-26T21:20:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 36
maintainers: ["elliotchance"]
openGraphImageUrl: "https://opengraph.githubassets.com/7932a5602ef991542eba7024274ca37e2d6a75a0d12c32ff63fddd040a124306/elliotchance/vsql"
discussionCount: 6
---

✌️ vsql
======

**vsql is an embedded SQL database that follows the SQL standard.** A whole
database lives in a single file (or in memory), with real transactions, strict
types and standard SQL. Embed it in your program from [V](https://vsql.readthedocs.io/en/latest/language-v.html),
[C](https://vsql.readthedocs.io/en/latest/language-c.html), [Go](https://github.com/elliotchance/vsql-go), [Python](https://github.com/elliotchance/vsql-python),
[Java](https://github.com/elliotchance/vsql-java), [Rust](https://github.com/elliotchance/vsql-rust) or [Node.js](https://github.com/elliotchance/vsql-node),
connect to it with any [PostgreSQL client](https://vsql.readthedocs.io/en/latest/server.html), or browse it in
your browser. It's a single binary written in pure V, with nothing else to install.

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

- **Standard SQL.** vsql follows…
