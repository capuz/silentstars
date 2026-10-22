---
repo: "kividbio/kividb"
name: "kividb"
description: "A fast, multi-threaded Redis® and Valkey alternative written in Rust: drop-in compatible, with full-text and vector search built in"
readmeQualityOk: true
url: "https://github.com/kividbio/kividb"
homepage: "https://kividb.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["database", "drop-in-replacement", "in-memory", "kividb", "redis-compatible", "rust", "vector-search", "cache", "full-text-search", "high-performance"]
stars: 408
forks: 14
openIssues: 12
closedIssues: 16
watchers: 6
contributors: 5
recentReleases: 3
createdAt: "2026-10-16T01:07:52Z"
lastCommitAt: "2026-10-21T20:24:06Z"
lastReleaseAt: "2026-10-16T18:34:41Z"
status: "newborn"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 27
maintainers: ["murtazayusuf", "vimoppa", "Himanshu-singh04"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ba22ac8d09d98e9a391fed3581c4097666d5a7edf96662cd38e414274342833/kividbio/kividb"
discussionCount: 1
---

# KiviDB

**KiviDB** is a fast, multi-threaded alternative to Redis® and Valkey, written in Rust. It
speaks the Redis protocol (RESP2 and RESP3), so existing Redis clients, `redis-cli` and
libraries work unchanged, and it has full-text and vector search built in. It runs every
core on a sharded in-memory key-value design, and persists to snapshots and an optional
append-only file.

On the same 32 cores, KiviDB serves **21 million pipelined GETs per second: about 9× Redis 8
and 2.3× Dragonfly**, with under half Dragonfly's p99 latency ([benchmarks](#performance)).

```bash
docker run -d -p 6380:6380 kividb/kividb
redis-cli -p 6380 PING        # PONG
```

KiviDB listens on **6380**, not Redis's 6379, so the two can run side by side; point your
client at that port, or pass `--port 6379`.

- **Protocol**: Redis-compatible command surface (see [COMMANDS.md](https://github.com/kividbio/kividb/blob/HEAD/COMMANDS.md) for the supported commands)
- **Search and vectors**: Redis Stack–style `FT.*` commands for full-text, tag, numeric and vector (FLAT / HNSW) search
- **Lua scripting**: optional Cargo feature. `EVAL`, `SCRIPT`, `FUNCTION`, `FCALL` and related commands are available in builds…
