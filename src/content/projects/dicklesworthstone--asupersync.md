---
repo: "Dicklesworthstone/asupersync"
name: "asupersync"
description: "Async runtime for Rust where correctness is structural: region-owned tasks, cancel-correct protocols, capability-gated effects, and deterministic replay testing"
url: "https://github.com/Dicklesworthstone/asupersync"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["async", "concurrency", "runtime", "rust", "structured-concurrency"]
stars: 204
forks: 22
openIssues: 1
closedIssues: 36
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2026-01-16T05:22:16Z"
lastCommitAt: "2026-06-23T06:44:17Z"
lastReleaseAt: "2026-06-07T06:09:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 33
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1135442827/2770c0c8-d298-45e7-a707-b87d2a504035"
---

</p>

# Asupersync

**Spec-first, cancel-correct, capability-secure async for Rust**

<h3><a href="https://dicklesworthstone.github.io/asupersync/asupersync_web_demo.html">Try the Live Interactive WASM Demo</a></h3>

<h3>Quick Install</h3>

```bash
cargo add asupersync --git https://github.com/Dicklesworthstone/asupersync
```

</div>

---

## TL;DR

**The Problem**: Rust's async ecosystem gives you *tools* but not *guarantees*. Cancellation silently drops data. Spawned tasks can orphan. Cleanup is best-effort. Testing concurrent code is non-deterministic. You write correct code by convention, and discover bugs in production.

**The Solution**: Asupersync is an async runtime where **correctness is structural, not conventional**. Tasks are owned by regions that close to quiescence. Cancellation is a protocol with bounded cleanup. Runtime-managed effects require capabilities, with host-boundary exceptions documented explicitly. The lab runtime makes concurrency deterministic and replayable.

### Why Asupersync?

| Guarantee | What It Means |
|-----------|---------------|
| **No orphan tasks** | Every spawned task is owned by a region; region close waits for all children |
|…
