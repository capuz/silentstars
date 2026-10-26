---
repo: "shikokuchuo/mizu"
name: "mizu"
description: "Zero-copy Shared-Memory Parallelism across R and Python"
readmeQualityOk: true
url: "https://github.com/shikokuchuo/mizu"
homepage: "https://shikokuchuo.net/mizu/"
language: "R"
languages: ["R", "C"]
languagePcts: [60, 40]
topics: ["r", "shared-memory-parallelism"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-21T09:26:17Z"
lastCommitAt: "2026-10-26T20:59:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["shikokuchuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec0a3479fb0527c8f84f48ace134b2412e9cc782405ecf8fcf016ad3d8f25ab5/shikokuchuo/mizu"
discussionCount: 0
---

# mizu 水

      ________
     /\       \
    /  \  mizu \
    \  /   水  /
     \/_______/

mizu makes communication between R processes fast enough to parallelize work at thread granularity.

mizu uses shared memory as the fastest IPC transport.
Processes read and write into shared memory directly, with no kernel involvement and no data copies through system sockets.
This means task round trips drop from around 100 µs over sockets to under a microsecond — two orders of magnitude improvement (see [Benchmarks](#benchmarks)).

Channels and work-stealing task pools run over POSIX shared memory (Linux, macOS) or Win32 file mappings (Windows).
The hot path stays in user space.
Data moves through single-producer single-consumer rings with batched publication.
Waiting is spin-then-park, and peer death arrives as an OS event.

mizu is built on [libmizu](https://github.com/shikokuchuo/libmizu), a C library for lock-free shared-memory IPC.
[pymizu](https://github.com/shikokuchuo/pymizu) binds the same core for Python, so R and Python can talk to each other.

- Zero-copy vectors and data frames — received as ALTREP views over the shared pages
- Zero-copy Arrow interchange — `arrow` tables and…
