---
repo: "orhaugh/clink"
name: "clink"
description: "Stream processing for Kafka pipelines that must stay correct when processes die. SQL, event time, keyed state and exactly-once delivery in modern C++: one process on a laptop, embedded, or a cluster. No JVM."
readmeQualityOk: true
url: "https://github.com/orhaugh/clink"
homepage: "https://orhaugh.github.io/clink/"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["apache-arrow", "cpp", "cpp23", "dataflow", "event-time", "exactly-once", "sql", "stateful", "stream-processing", "streaming"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T07:32:19Z"
lastCommitAt: "2026-10-08T10:52:20Z"
lastReleaseAt: "2026-09-28T12:36:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["orhaugh"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd1106797738b997b1ec98c78666a61932049534b2ff8a26cef05bf9468ee029/orhaugh/clink"
discussionCount: 0
---

# clink

`clink` is a stream processing engine for Kafka pipelines that must stay
correct when processes die. You write the pipeline in SQL; clink keeps its
event-time windows and keyed state, checkpoints them, and delivers
exactly once to Kafka, Postgres, S3 and Parquet. Kill a Worker mid-stream
and the job resumes from its last checkpoint without losing or
double-counting a record.

It runs like a tool rather than a platform. The same SQL file runs in one
process on a laptop (`clink run pipeline.sql`, first result in about
155 ms), embedded in a service through a C ABI or from Python, or on a
Coordinator/Worker cluster with parallelism, failover and rescale. There is
no JVM and no separate state store to operate.

Why you can check the claim rather than take it on trust:

- **Qualified under faults.** The Kafka exactly-once campaign ran two hours
  of Worker and Coordinator kills inside commit windows, broker outages and
  network partitions, and all 755 windows came out byte-exact against an
  independent oracle. Eleven campaigns are published, each only once green
  ([Qualification](https://orhaugh.github.io/clink/qualification/)).
- **A checked protocol.** The exactly-once…
