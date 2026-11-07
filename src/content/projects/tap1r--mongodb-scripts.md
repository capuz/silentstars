---
repo: "tap1r/mongodb-scripts"
name: "mongodb-scripts"
description: "mongosh scripts and operator notes for MongoDB. Storage stats, compaction, defrag, and replica-set tooling, plus TLS, Kerberos, and LDAP command notes."
readmeQualityOk: true
url: "https://github.com/tap1r/mongodb-scripts"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["ssl", "kerberos", "ldap", "mongodb", "mongosh", "mongoshell", "tls", "mongosqld", "compaction", "fips"]
stars: 32
forks: 14
openIssues: 0
closedIssues: 2
watchers: 10
contributors: 1
recentReleases: 0
createdAt: "2019-09-03T01:54:12Z"
lastCommitAt: "2026-11-07T16:11:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["tap1r"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2940c34e6110343f63410000c25b4690d4f6347c1e6d8e8d994963db9d93b1d/tap1r/mongodb-scripts"
discussionCount: 3
---

# mongodb-scripts

A collection of MongoDB scripts and command notes.

Live scripts are in [`src/`](https://github.com/tap1r/mongodb-scripts/blob/HEAD/src/). They run under **mongosh** 1.10 / 2.10+ (`mongosh --file` and `load()`). Read the [disclaimer](https://github.com/tap1r/mongodb-scripts/blob/HEAD/DISCLAIMER.md) before running anything outside a test environment.

## Start here

* [`src/`](https://github.com/tap1r/mongodb-scripts/blob/HEAD/src/) — operator scripts for storage, deletes, schema, latency, and cluster checks.
* [DB Storage tools](https://github.com/tap1r/mongodb-scripts/blob/HEAD/DB%20Storage%20tools.md) — WiredTiger disk use. dbstats reports it. autoCompact, onlineDefrag, and indexCacheUtil act on or inspect the same storage.
* [mongosh scripting guide](https://github.com/tap1r/mongodb-scripts/blob/HEAD/mongosh-scripting-guide.md) — read preference, sessions, async, and `--eval` behaviour that long-running scripts keep hitting.
* [Roadmap](https://github.com/tap1r/mongodb-scripts/blob/HEAD/ROADMAP.md) — planned work, plus the live and archived version of each script.

## Howtos

* [Aggregation…
