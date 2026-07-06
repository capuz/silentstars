---
repo: "LinPr/sqltui"
name: "sqltui"
description: "sqltui is a TUI tool to operate sql and nosql databases"
readmeQualityOk: true
url: "https://github.com/LinPr/sqltui"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-01T05:00:25Z"
lastCommitAt: "2026-07-06T07:03:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: ["LinPr"]
openGraphImageUrl: "https://opengraph.githubassets.com/00e8d56e2abc42b649c8242e5ae50054567ce2fc869e4db11c3ee42b21fc65da/LinPr/sqltui"
---

# SQLTUI - A terminal UI to operate sql and nosql databases

sqltui provides a terminal UI to interact with your sql or nosql databases. The aim of this project is to make it easier to navigate, observe and manage your databases in the wild.

Supported databases:

| Database   | Command           | Driver                                                     |
| ---------- | ----------------- | ---------------------------------------------------------- |
| MySQL      | `sqltui mysql`    | [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) |
| PostgreSQL | `sqltui postgres` | [jackc/pgx](https://github.com/jackc/pgx)                   |
| SQLite     | `sqltui sqlite`   | [modernc.org/sqlite](https://gitlab.com/cznic/sqlite) (pure Go, no cgo) |
| Redis      | `sqltui redis`    | [redis/go-redis](https://github.com/redis/go-redis)         |

# Screenshots
1. mysql login

2. mysql tables tree

3. mysql show records

4. mysql auto complete query

5. mysql show error message

6. redis keys

7. redis result

8. redis auto complete and command tip

# Install
### 1. install with go

```shell
go install github.com/LinPr/sqltui@latest
```

### 2. build from source

```shell
git…
