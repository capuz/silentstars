---
repo: "davidtos/JUring"
name: "JUring"
description: "IO_Uring bindings for Java with Virtual Thread support"
readmeQualityOk: true
url: "https://github.com/davidtos/JUring"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["iouring", "java"]
stars: 215
forks: 11
openIssues: 2
closedIssues: 11
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2024-12-27T15:40:12Z"
lastCommitAt: "2026-11-18T17:07:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 39
maintainers: ["davidtos"]
openGraphImageUrl: "https://opengraph.githubassets.com/59fa4b89f303e49a13eaa1e8184676360341552428ac54d1cb804aab3f04b0aa/davidtos/JUring"
discussionCount: 2
---

# JUring

**Asynchronous file I/O for Java, directly on Linux `io_uring`.**

Java's file I/O is still synchronous. A read on a local file ends in a syscall that
keeps the thread inside the kernel until the disk answers, so keeping fast storage
busy costs you a pile of threads. Virtual threads don't fix it either: when one
blocks in a file syscall it stays mounted on its carrier, and Loom quietly grows the
carrier pool to compensate.

I built JUring to get around that. It drives Linux's `io_uring` from pure Java with
the Foreign Function & Memory API: no JNI, no C glue, no `liburing`, and no runtime
dependencies beyond the JDK.

One ring reaches about **407,000 4 KiB random reads per second** on a consumer NVMe
with 128 requests in flight. That's roughly 22% more than `fio` and 6% more than
Seastar on the same machine, and it uses about a quarter fewer CPU cycles per request at
64 requests in flight.

If you run a JVM service that spends its life waiting on `read(2)` — a database, a
write-ahead log, a search index, a data pipeline — this is for you.
