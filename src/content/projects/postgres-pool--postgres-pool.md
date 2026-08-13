---
repo: "postgres-pool/postgres-pool"
name: "postgres-pool"
description: "Node.js postgres connection pool implementation for node-pg"
readmeQualityOk: true
url: "https://github.com/postgres-pool/postgres-pool"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["postgres", "postgresql", "nodejs", "hacktoberfest"]
stars: 28
forks: 9
openIssues: 1
closedIssues: 5
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2018-05-21T16:01:11Z"
lastCommitAt: "2026-08-13T05:18:51Z"
lastReleaseAt: "2020-04-13T16:12:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 60
maintainers: ["renovate[bot]", "jgeurts", "didier-viboo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8128231f1858a237b3ea24c02121713b70264799f9842bc97950fddc6b80a13a/postgres-pool/postgres-pool"
fundingLinks: ["GITHUB:https://github.com/jgeurts"]
---

# postgres-pool

Connection pool implementation for [pg](https://node-postgres.com/). Compatible with [pg-pool](https://github.com/brianc/node-pg-pool) options and syntax.

## Why?

- There were some connection timeout issues that we encountered with pg-pool and the npm was not being updated.
- [Added graceful cluster failover](#handle-cluster-failover-gracefully)
- [Added default AWS TLS settings via `ssl='aws-rds'`](#aws-rds-specific-tls-settings-for-connections)
- Typescript is used to enforce type safety and promises are preferred over callbacks.

## Getting Started

### Simple query (automatically releases connection after query - recommended)

```ts
import { Pool } from 'postgres-pool';

const pool = new Pool({
  connectionString: 'postgres://username:pwd@127.0.0.1/db_name',
});

const userId = 42;
const results = await pool.query('SELECT * from "users" where id=$1', [userId]);

console.log('user:', results.rows[0]);
```

### Using named parameters in the query

```ts
import { Pool } from 'postgres-pool';

const pool = new Pool({
  connectionString: 'postgres://username:pwd@127.0.0.1/db_name',
});

const userId = 42;
const results = await pool.query('SELECT * from "users"…
