---
repo: "serenysoft/rxdb-orion"
name: "rxdb-orion"
description: "RxDB - Replication with Laravel Orion"
readmeQualityOk: true
url: "https://github.com/serenysoft/rxdb-orion"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["laravel", "orion", "replication", "rxdb", "typescript"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-04T13:35:41Z"
lastCommitAt: "2026-11-08T14:14:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 44
maintainers: ["leandrogehlen"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc4d33e8698820469412ae23520f2548773ea47e4a01588c391278924c202e60/serenysoft/rxdb-orion"
---

# [RxDB](https://rxdb.info) - Replication with [Laravel Orion](https://tailflow.github.io/laravel-orion-docs)

The Orion replication provides handlers for run replication with Orion REST API as the transportation layer.

## Installation

`npm i rxdb-orion`

## Usage

The package usage is simple, but there are some important rules to follow

### Frontend

- Array properties with ref will be replicated using [`sync` route](https://tailflow.github.io/laravel-orion-docs/v2.x/guide/relationships.html#syncing)
- For other relationship properties, a specific replication will be required for each one.

```typescript
import { replicateOrion } from 'rxdb-orion';
import { userSchema } from './schemas/user';
import { roleSchema } from './schemas/role';

const database = await createRxDatabase({
  name: 'mydb',
  storage: getRxStorageDexie(),
});

await database.addCollections({
  users: {
    schema: userSchema,
  },
  roles: {
    schema: roleSchema,
  },
});

const replicationState = replicateOrion({
  url: 'http://my.fake.api/users',
  params: { include: 'roles' },
  collection: users,
  batchSize: 3,
});

await replicationState.start();
```

#### Manager

It is common for an application…
