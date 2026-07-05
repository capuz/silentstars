---
repo: "Dicklesworthstone/frankenredis"
name: "frankenredis"
description: "Memory-safe clean-room Redis reimplementation in Rust with strict/hardened compatibility modes, deterministic replication semantics, differential conformance harnesses, and profile-guided optimization proofs."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenredis"
homepage: "https://github.com/Dicklesworthstone/frankenredis"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["clean-room", "compatibility", "conformance", "memory-safe", "redis", "reliability", "replication", "rust", "distributed-systems", "fuzz-testing"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T20:09:34Z"
lastCommitAt: "2026-07-05T06:30:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157430439/befd4cfa-0eff-4df7-a998-4549798b0675"
---

# FrankenRedis

</div>

</p>

> **FrankenRedis is a memory-safe, clean-room Rust reimplementation of Redis 7.2.4 with strict drop-in protocol parity, a first-class strict/hardened compatibility split, a Sentinel state machine, and a 4,975-case differential conformance harness that diffs every reply against vendored Redis on every CI run.**

---

## TL;DR

### The problem

Redis is the de facto in-memory data store, but the canonical implementation is ~250k lines of C. That has real consequences:

- **Memory-unsafety risk surface.** Buffer overruns, use-after-free, signed-overflow UB, and parser quirks have produced real Redis CVEs over the years. A Rust reimplementation eliminates the entire category at compile time.
- **No first-class strict-vs-hardened compatibility split.** Stock Redis has one behavior. There is no way to say "be byte-exact with upstream" in one mode and "fail closed on anything ambiguous, log the decision, never bounded-defend silently" in the other.
- **Audit and replay opacity.** Stock Redis does not emit a structured, deterministic ledger of every threat-event, recovery, or policy override; reconstructing what happened after an incident is detective work.
-…
