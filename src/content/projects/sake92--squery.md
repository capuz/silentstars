---
repo: "sake92/squery"
name: "squery"
description: "Simple SQL queries in Scala 3"
readmeQualityOk: true
url: "https://github.com/sake92/squery"
homepage: "https://sake92.github.io/squery"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
topics: ["jdbc", "scala", "scala3", "sql", "h2-database", "mysql", "oracle-db", "postgresql", "sql-library"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 13
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2023-02-20T11:25:29Z"
lastCommitAt: "2026-09-22T08:44:56Z"
lastReleaseAt: "2026-09-22T08:47:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 64
maintainers: ["sake92"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad945d7ff1f6c45ab7d9b5d87451c7f485bf04498d0c4d609c513275d1b544c/sake92/squery"
fundingLinks: ["GITHUB:https://github.com/sake92", "KO_FI:https://ko-fi.com/sake92"]
---

# squery

Simple SQL queries in Scala 3.

No DSLs, no fuss, just plain SQL.

Supports *any* JDBC driver.  
Additional support for Postgres, MySql, MariaDb, Oracle, H2, and SQLite.
Scala Native is supported since 0.11.0 with a Scala Native-compatible JDBC driver.

Scastie example: https://scastie.scala-lang.org/JArud6GGSLOmYyxCNsNdNw

> See also https://github.com/sake92/mill-squery for generating boilerplate models and DAOs automatically from db.

## Hello world:
```scala

// table rows
case class Customer(id: Int, name: String) derives SqlReadRow
case class Phone(id: Int, number: String) derives SqlReadRow

// joined row
case class CustomerWithPhone(c: Customer, p: Phone) derives SqlReadRow

val ds = JdbcDataSource()
ds.setURL("jdbc:h2:mem:")

val ctx = SqueryContext(ds)

ctx.run {
  val res: Seq[CustomerWithPhone] = sql"""
    SELECT c.id, c.name,
           p.id, p.number
    FROM customers c
    JOIN phones p ON p.customer_id = c.id
  """.readRows[CustomerWithPhone]()
}
```

---

## Generator

You can generate boilerplate code for `Row`s and `DAO`s.

### Mill plugin

See https://github.com/sake92/mill-squery

### CLI

You can use `squery-cli` with Coursier launcher to generate…
