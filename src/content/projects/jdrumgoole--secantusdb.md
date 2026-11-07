---
repo: "jdrumgoole/SecantusDB"
name: "SecantusDB"
description: "A surrogate MongoDB server in Python (speaks the MongoDB wire protocol)"
readmeQualityOk: true
url: "https://github.com/jdrumgoole/SecantusDB"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [56, 42]
topics: ["database", "json", "mongodb", "wiredtiger"]
stars: 5
forks: 1
openIssues: 143
closedIssues: 33
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-27T23:27:36Z"
lastCommitAt: "2026-11-07T10:37:04Z"
lastReleaseAt: "2026-05-05T16:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 46
maintainers: ["jdrumgoole", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70dd7a62058adfc65e096167ba4216ebe790335b9caad572f9b057022ec12707/jdrumgoole/SecantusDB"
---

> [!WARNING]
> **Beta software.** <a id="beta-software"></a>
>
> SecantusDB is past initial proving but its API surface (CLI flags,
> public class signatures) may still shift before 1.0. **The on-disk
> format is WiredTiger's** — the same engine MongoDB uses — and the
> schema we layer on top (collection / index / oplog tables) has been
> stable across releases; the test suite runs against real on-disk
> WiredTiger storage and the
> [persistence tests](https://github.com/jdrumgoole/SecantusDB/blob/main/tests/test_storage.py) explicitly verify
> close-and-reopen round-trips. That said, we don't yet ship a migration
> tool or a formal compatibility guarantee, so please don't put
> production data here yet — production deployments that need durable
> data across upgrades should still run a real `mongod` or `postgres`.

**A surrogate single-node database for your tests.** SecantusDB speaks
the real **MongoDB** and **PostgreSQL** wire protocols on a real TCP
socket, over the same **WiredTiger** storage engine MongoDB ships. Point
your existing driver at it — `pymongo`, `mongo-go-driver`, `mongosh`,
`psycopg`, `psql`, SQLAlchemy — and your application code doesn't know
the difference,…
