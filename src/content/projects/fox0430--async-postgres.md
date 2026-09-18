---
repo: "fox0430/async-postgres"
name: "async-postgres"
description: "Async PostgreSQL client in Nim"
readmeQualityOk: true
url: "https://github.com/fox0430/async-postgres"
language: "Nim"
languages: ["Nim"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T10:04:17Z"
lastCommitAt: "2026-09-18T08:26:35Z"
lastReleaseAt: "2026-05-28T08:53:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["fox0430"]
openGraphImageUrl: "https://opengraph.githubassets.com/53f818ec1fc348de3b8bcd4fff17dc97c5e5d387f3e515a1f5debdae4b62be1f/fox0430/async-postgres"
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
