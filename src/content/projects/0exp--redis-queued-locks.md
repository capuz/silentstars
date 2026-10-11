---
repo: "0exp/redis_queued_locks"
name: "redis_queued_locks"
description: "Distributed locks with \"prioritized lock acquisition queue\" capabilities based on the Redis Database. Provides flexible invocation flow, parametrized time limits, zombie locks elimination, instrumentation, logging, etc."
readmeQualityOk: true
url: "https://github.com/0exp/redis_queued_locks"
homepage: "https://github.com/0exp/redis_queued_locks"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["redis-lock", "redlock", "advisory-lock", "queued-lock", "distributed-lock", "distributed-redis-lock", "redis-queued-lock", "distributed-locks", "distributed-redis-locks", "redis-locks"]
stars: 52
forks: 1
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-02-25T16:18:31Z"
lastCommitAt: "2026-10-11T10:14:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 53
undervaluedScore: 26
maintainers: ["0exp"]
openGraphImageUrl: "https://opengraph.githubassets.com/2045f3043b24a0cc97de15710d50098804b20c16c0522e56fe929ab413b14820/0exp/redis_queued_locks"
---

# RedisQueuedLocks &middot; 

**RedisQueuedLocks** (aka **RQL**, aka **RQL-lock**) - <a href="https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/">distributed locks</a> with "prioritized lock acquisition queue" capabilities based on the Redis Database.

Each lock request is put into the request queue (each lock is hosted by its own queue separately from other queues) and processed in order of their priority (FIFO). Each lock request lives some period of time (RTTL) (with requeue capabilities) which guarantees the request queue will never be stacked.

In addition to the classic `queued` (FIFO) strategy RQL supports `random` (RANDOM) lock obtaining strategy when any acquirer from the lock queue can obtain the lock regardless the position in the queue.

Supports `Read`/`Write` locks and `Reentrant` locks.

Provides flexible invocation flow, parametrized limits (lock request ttl, lock ttl, queue ttl, lock attempts limit, fast failing, etc), **zombie locks elimination**, logging and instrumentation (and much more).

---

#### For future features and updates check the [ROADMAP](#roadmap) section.

---

## Table of Contents

- [Requirements](#requirements)
-…
