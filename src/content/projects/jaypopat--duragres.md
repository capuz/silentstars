---
repo: "jaypopat/duragres"
name: "duragres"
description: "psql straight into a Cloudflare Durable Object"
readmeQualityOk: true
url: "https://github.com/jaypopat/duragres"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-23T20:02:48Z"
lastCommitAt: "2026-11-26T23:32:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 21
maintainers: ["jaypopat"]
openGraphImageUrl: "https://opengraph.githubassets.com/f108e7a2146a12b0e5a4c5301e19eeaa3bace4f681887153f19d8d9b3eeae14e/jaypopat/duragres"
---

# Duragres

Connect any PostgreSQL client to a Cloudflare Durable Object. The database name in the connection string picks the object, and connecting to a new name creates it. Each database runs PostgreSQL 19, compiled to WebAssembly by [PGlite](https://pglite.dev), inside its object. Postgres's data directory is stored in the object's SQLite storage.

## Claim a database

A new database is deleted 72 hours after it is created, unless you claim it. To claim it, give a role a password:

```sql
ALTER ROLE demo PASSWORD 'correct horse battery staple';
```

From then on, every connection to that database authenticates with SCRAM-SHA-256 against `pg_catalog.pg_authid` (roles with `NOLOGIN`, an expired `VALID UNTIL`, or a non-SCRAM password cannot sign in). Before a database is claimed, anyone who knows its name can connect.

Roles authenticate who can connect to a database, but they are **not** a security boundary inside it: every connection shares one Postgres backend and session state.

## Branch a database

Connected to a database, copy it into a new one and drop the copy when you're done:
