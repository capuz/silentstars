---
repo: "zizq-labs/zizq"
name: "zizq"
description: "Powerful single binary, zero-dependency job queue server"
readmeQualityOk: true
url: "https://github.com/zizq-labs/zizq"
homepage: "https://zizq.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["background-jobs", "durable", "queue-workers", "queues", "background-worker", "background-workers", "job-queue", "performance", "queue", "rust"]
stars: 30
forks: 0
openIssues: 12
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-07T22:57:54Z"
lastCommitAt: "2026-11-05T00:22:14Z"
lastReleaseAt: "2026-06-28T21:47:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 44
maintainers: ["d11wtq", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b3d982014be3b70fd2fc2be3ef7560a64c9a1dd69dff8cb05e383c85e5aacd/zizq-labs/zizq"
discussionCount: 0
---

# Zizq

Zizq (**/zɪsk/**) is a fast and durable job queue packed into a single native
binary, built on an embedded LSM database — not on Redis, and not on your
RDBMS.

The server runs as a straightforward HTTP/2 and HTTP/1.1 API, with easy-to-use
clients currently implemented in Node.js, Ruby, Elixir and Rust (and others
planned soon).

## Features

Zizq supports a number of powerful features.

* Single self-contained executable— no separate data store required
* Durable and atomic job queues
* Easy to use `HTTP/1.1` and `HTTP/2` API with JSON or MessagePack
* Cross-language job enqueueing and execution
* Unlimited named queues
* FIFO ordered and granular priority jobs
* Scheduled jobs
* Configurable backoff/retry policies
* Configurable job retention policies
* Unique job support (deduplicated enqueues)
* Job concurrency control (max N jobs running at once)
* Job rate limiting (max N jobs dispatched over time)
* Cron (recurring jobs) scheduling
* Batched job support (folded/merged enqueues)
* APIs to manage the queue contents, including `jq` expression filters
* Very high job throughput (over 100K jobs/sec on a Macbook Pro M4)
* An insightful [`zizq…
