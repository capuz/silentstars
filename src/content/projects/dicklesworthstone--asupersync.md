---
repo: "Dicklesworthstone/asupersync"
name: "asupersync"
description: "Async runtime for Rust where correctness is structural: region-owned tasks, cancel-correct protocols, capability-gated effects, and deterministic replay testing"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/asupersync"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["async", "concurrency", "runtime", "rust", "structured-concurrency"]
stars: 255
forks: 25
openIssues: 4
closedIssues: 42
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-01-16T05:22:16Z"
lastCommitAt: "2026-08-09T04:47:52Z"
lastReleaseAt: "2026-07-27T19:52:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 32
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

**The Problem**: Conventional executor APIs leave important lifecycle contracts
to composition and discipline. Cancellation can abandon partial effects,
detached tasks can outlive their owner, cleanup may be best-effort, and schedule
dependent failures can be difficult to reproduce.

**The Solution**: Asupersync makes its core task-ownership and runtime-tracked
effect contracts **structural rather than conventional**. Tasks are owned by
regions that close to quiescence. Cancellation is an explicit
request → drain → finalize protocol, with budgeted bounds on covered,
cooperative paths; non-cooperative code and foreign calls do not acquire a
universal shutdown bound. Runtime-managed effects require capabilities, with
host-boundary exceptions documented explicitly. The lab runtime makes
controlled schedules deterministic and replayable.…
