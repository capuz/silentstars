---
repo: "yellowfeather/DbfDataReader"
name: "DbfDataReader"
description: "DbfDataReader is a small fast .Net Core library for reading dBase, xBase, Clipper and FoxPro database files"
readmeQualityOk: true
url: "https://github.com/yellowfeather/DbfDataReader"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["xbase", "clipper", "foxpro-database-files", "dbf", "dbase"]
stars: 151
forks: 65
openIssues: 3
closedIssues: 51
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2016-12-07T17:57:07Z"
lastCommitAt: "2026-11-23T12:25:23Z"
lastReleaseAt: "2020-02-17T22:21:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 29
maintainers: ["chrisrichards", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7516ac99b3f018ddf911576c5a0b5802d9f7aa9af19d33cd226ceba491debbef/yellowfeather/DbfDataReader"
fundingLinks: ["GITHUB:https://github.com/yellowfeather"]
---

# DbfDataReader

DbfDataReader is a small, fast .NET library for reading dBase, xBase, Clipper and FoxPro
database files (`.dbf`), with support for memo files, Visual FoxPro compound indexes
(`.cdx`), a `DbDataReader` implementation for easy integration (e.g. `SqlBulkCopy`), an
ADO.NET provider with a SQL `SELECT` dialect, and typed queries in the style of LINQ and
Dapper.

## Table of contents

- [Installation](#installation)
- [Reading a DBF file](#reading-a-dbf-file)
  - [Table and column information](#table-and-column-information)
  - [Iterating over rows](#iterating-over-rows)
- [DbDataReader implementation](#dbdatareader-implementation)
  - [Bulk copy to SQL Server](#bulk-copy-to-sql-server)
- [Async reading](#async-reading)
- [Random access with Seek](#random-access-with-seek)
- [Compound index (.cdx) support](#compound-index-cdx-support)
- [Typed queries with Query&lt;T&gt;](#typed-queries-with-queryt)
  - [Mapping properties to column names](#mapping-properties-to-column-names)
- [SQL queries with DbfDbConnection](#sql-queries-with-dbfdbconnection)
  - [Supported SQL](#supported-sql)
  - [Dapper-style typed queries](#dapper-style-typed-queries)
  -…
