---
repo: "Dicklesworthstone/frankenredis"
name: "frankenredis"
description: "Memory-safe clean-room Redis reimplementation in Rust with strict/hardened compatibility modes, deterministic replication semantics, differential conformance harnesses, and profile-guided optimization proofs."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenredis"
homepage: "https://github.com/Dicklesworthstone/frankenredis"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["clean-room", "compatibility", "conformance", "memory-safe", "redis", "reliability", "replication", "rust", "distributed-systems", "fuzz-testing"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T20:09:34Z"
lastCommitAt: "2026-07-31T06:28:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1157430439/befd4cfa-0eff-4df7-a998-4549798b0675?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063220Z&X-Amz-Expires=300&X-Amz-Signature=fa9b1547c77ab5df263cbe0c646e8c6b61e56ec3e89f1d05117d40da4ae68333&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTg0MCwibmJmIjoxNzg1NDc5NTQwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.w5adtr_ThS7JlPDe3h-1xakEA_-mnNZA51MyytxrK-8"
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
