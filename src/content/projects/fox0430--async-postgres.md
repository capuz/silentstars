---
repo: "fox0430/async-postgres"
name: "async-postgres"
description: "Async PostgreSQL client in Nim"
readmeQualityOk: true
url: "https://github.com/fox0430/async-postgres"
language: "Nim"
languages: ["Nim"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-03-08T10:04:17Z"
lastCommitAt: "2026-10-05T10:46:56Z"
lastReleaseAt: "2026-10-03T08:02:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["fox0430", "canermastan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e34cbd6f43213ce8a98bf1d9038829baf80ae2f01ae6734f4821f9d399ebc6ac/fox0430/async-postgres"
---

# async_postgres

Async PostgreSQL client in Nim.

## Features

### Protocol & Connection
- PostgreSQL wire protocol v3
- Simple Query and Extended Query Protocol
- Pipeline mode — batch multiple operations in a single network round trip
- Connection pooling with health checks and maintenance (broken connections discarded on acquire/release)
- Pool cluster with read replica routing
- SSL/TLS support (disable, allow, prefer, require, verify-ca, verify-full) with optional client certificate authentication (mTLS)
- `sslnegotiation` mode (postgres, direct) for Direct SSL connections (PostgreSQL 17+)
- MD5, SCRAM-SHA-256 and SCRAM-SHA-256-PLUS authentication
- `channel_binding` policy (disable, prefer, require) to harden SCRAM against downgrade
- DSN connection string parsing
- Unix socket connection
- Multi-host failover
- Target session attributes (any, read-write, read-only, primary, standby, prefer-standby)
- `load_balance_hosts=random` shuffles the configured host list per connection to
  spread a pool across replicas (reorders the multi-host list only, not multiple
  addresses behind a single DNS name)

### Queries & Statements
- `sql` macro — compile-time `{expr}` placeholder…
