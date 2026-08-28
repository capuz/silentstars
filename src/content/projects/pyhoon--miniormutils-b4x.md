---
repo: "pyhoon/MiniORMUtils-B4X"
name: "MiniORMUtils-B4X"
description: "A mini object–relational mapping (ORM) that can be use for creating db schema and SQL queries."
readmeQualityOk: true
url: "https://github.com/pyhoon/MiniORMUtils-B4X"
homepage: "https://www.b4x.com/android/forum/threads/b4x-miniormutils.166030/"
language: "B4X"
languages: ["B4X"]
languagePcts: [100]
topics: ["api", "b4j", "b4x", "database", "orm", "schema", "sql", "sqlite", "table", "web"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-06-27T18:19:39Z"
lastCommitAt: "2026-08-28T14:23:06Z"
lastReleaseAt: "2025-03-09T20:59:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 51
maintainers: ["pyhoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce386475de402d987b282ebec7cae39b0a6866f3493f861c677b533162470074/pyhoon/MiniORMUtils-B4X"
---

# MiniORMUtils-B4X
Version: 6.04

A mini object–relational mapping (ORM) that can be use for creating db schema and SQL queries. \
It is suitable for Web API Template or any database system. \
Currently it supports **SQLite** (for B4A, B4i and B4J), **MariaDB** and **MySQL** (B4J only).

# Usage examples
## Initialize object
```b4x
Dim DB As MiniORM
DB.Initialize
```

## Initialize object (no execute)
```b4x
DB.Initialize
DB.DbType = DB.SQLITE
DB.QueryExecute = False
DB.Table = "categories"
Log(DB.Statement)
```

## Set file name for SQLite
```b4x
DB.Settings.DBFile = "app.db"
```

## Set MiniORMSettings for MySQL
```b4x
DB.Initialize
Dim MS As MiniORMSettings
MS.Initialize
MS.DBType = DB.MYSQL
MS.JdbcUrl = "jdbc:mysql://{DbHost}:{DbPort}/{DbName}?characterEncoding=utf8&useSSL=False"
MS.Driver = "com.mysql.cj.jdbc.Driver"
MS.DBName = "app"
MS.DbHost = "localhost"
MS.User = "root"
MS.Password = "password"
DB.Settings = MS
```

## Check database exists
```b4x
#If MySQL Or MariaDB
Wait For (DB.ExistAsync) Complete (DbFound As Boolean)
#Else
Dim DbFound As Boolean = DB.Exist
#End If
If DbFound Then
	LogColor($"${DB.DBType} database found!"$, COLOR_BLUE)
Else
	LogColor($"${DB.DBType}…
