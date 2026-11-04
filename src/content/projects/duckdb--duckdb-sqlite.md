---
repo: "duckdb/duckdb-sqlite"
name: "duckdb-sqlite"
description: "DuckDB extension to read and write to SQLite databases"
readmeQualityOk: true
url: "https://github.com/duckdb/duckdb-sqlite"
homepage: "https://duckdb.org/docs/extensions/sqlite"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["sql", "sqlite", "duckdb"]
stars: 297
forks: 53
openIssues: 28
closedIssues: 65
watchers: 9
contributors: 49
recentReleases: 0
createdAt: "2021-10-12T11:51:06Z"
lastCommitAt: "2026-11-04T11:27:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 39
maintainers: ["staticlibs", "PeterVanHolland", "maiadegraaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/863cf03ea7b593979d9764d07522923444e5ce9bb323fc89fb7de539ffd086ba/duckdb/duckdb-sqlite"
---

# DuckDB SQLite extension

The SQLite extension allows DuckDB to directly read and write data from a SQLite database file. The data can be queried directly from the underlying SQLite tables. Data can be loaded from SQLite tables into DuckDB tables, or vice versa.

## Reading Data from SQLite

To make a SQLite file accessible to DuckDB, use the `ATTACH` command, for example with the bundled `sakila.db` file:

```sql
ATTACH 'data/db/sakila.db' AS sakila;
USE sakila;
```

The tables in the file can be read as if they were normal DuckDB tables, but the underlying data is read directly from the SQLite tables in the file at query time.

```sql
SHOW TABLES;
```

You can query the tables using SQL, e.g. using the example queries from sakila-examples.sql

```sql
SELECT cat.name category_name,
       Sum(Ifnull(pay.amount, 0)) revenue
FROM   category cat
       LEFT JOIN film_category flm_cat
              ON cat.category_id = flm_cat.category_id
       LEFT JOIN film fil
              ON flm_cat.film_id = fil.film_id
       LEFT JOIN inventory inv
              ON fil.film_id = inv.film_id
       LEFT JOIN rental ren
              ON inv.inventory_id = ren.inventory_id
       LEFT JOIN…
