---
repo: "Dicklesworthstone/frankensqlite"
name: "frankensqlite"
description: "Independent ground-up Rust reimplementation of SQLite with concurrent writers and information-theoretic durability"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensqlite"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["database", "mvcc", "raptorq", "rust", "sqlite"]
stars: 214
forks: 42
openIssues: 123
closedIssues: 216
watchers: 4
contributors: 3
recentReleases: 8
createdAt: "2026-02-07T04:12:42Z"
lastCommitAt: "2026-08-18T04:07:50Z"
lastReleaseAt: "2026-08-16T20:29:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 31
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f023b0fd71f320f0751d389db65f2fe225b3a419d90be8ca8b4395cb4307192/Dicklesworthstone/frankensqlite"
---

</div>

<h1 align="center">FrankenSQLite</h1>

  <strong>An independent ground-up Rust reimplementation of SQLite with page-level MVCC concurrent-writer support.</strong>
</p>

</p>

---

## TL;DR

**The Problem:** SQLite allows only one writer at a time. A single lock byte (`WAL_WRITE_LOCK` at `wal.c:3698`) serializes all writers. For write-heavy workloads, this bottleneck caps throughput regardless of how many cores you have. Torn writes and bit-flips can corrupt the database with no self-repair mechanism.

**The Solution:** FrankenSQLite reimplements SQLite from scratch in Rust, with a safe engine core and two architectural innovations:

1. **MVCC Concurrent Writers.** The single-writer lock is replaced with page-level Multi-Version Concurrency Control. Writers that touch different pages can overlap their page work, while commit validation and publication still contain coordinated sections. Serializable Snapshot Isolation (SSI) tracks write-skew dependencies by default. A safe write-merge ladder (intent replay + structured page patches) is present as dormant/tested implementation work but is not yet wired into the live commit path; current same-page base drift aborts and…
