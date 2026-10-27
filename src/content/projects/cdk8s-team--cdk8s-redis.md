---
repo: "cdk8s-team/cdk8s-redis"
name: "cdk8s-redis"
description: "Redis constructs for cdk8s"
readmeQualityOk: true
url: "https://github.com/cdk8s-team/cdk8s-redis"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 13
forks: 9
openIssues: 10
closedIssues: 20
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2020-05-12T08:42:33Z"
lastCommitAt: "2026-10-27T09:14:59Z"
lastReleaseAt: "2021-06-17T00:16:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["cdk8s-automation"]
openGraphImageUrl: "https://opengraph.githubassets.com/c76ec7fa3e777a31aea8b8bfcca7b5902278519bcce38c7d6d6935029510b906/cdk8s-team/cdk8s-redis"
---

# cdk8s-redis

> Redis constructs for cdk8s

Basic implementation of a Redis construct for cdk8s. Contributions are welcome!

## Usage

The following will define a Redis cluster with a primary and 2 replicas:

```ts
import { Redis } from 'cdk8s-redis';

// inside your chart:
const redis = new Redis(this, 'my-redis');
```

DNS names can be obtained from `redis.primaryHost` and `redis.replicaHost`.

You can specify how many replicas to define:

```ts
new Redis(this, 'my-redis', {
  replicas: 4
});
```

Or, you can specify no replicas:

```ts
new Redis(this, 'my-redis', {
  replicas: 0
});
```

## License

Distributed under the [Apache 2.0](https://github.com/cdk8s-team/cdk8s-redis/blob/HEAD/LICENSE) license.
