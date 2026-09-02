---
repo: "sergey-miryanov/gcmon"
name: "gcmon"
description: "gcmon - GC monitoring for Python"
readmeQualityOk: true
url: "https://github.com/sergey-miryanov/gcmon"
homepage: "https://github.com/sergey-miryanov/gcmon"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cpython", "garbage-collection", "monitoring", "python"]
stars: 27
forks: 3
openIssues: 3
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-03-21T10:14:51Z"
lastCommitAt: "2026-09-02T08:04:45Z"
lastReleaseAt: "2026-08-20T20:57:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["sergey-miryanov", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24374a5602ff74b505616a6b0ed9aa20125a8a0a66f7ee0ed0f8b159b3b29ff3/sergey-miryanov/gcmon"
---

# gcmon - zero-overhead GC monitoring for Python

gcmon watches a running Python process's garbage collector from **outside**
the process: no code changes, no callbacks, no in-process overhead. Export to
Perfetto or JSONL; query with PerfettoSQL.

> **Requires CPython 3.15+** for the monitored process and the `gcmon`
> process, built from the same source. See [Limitations](#limitations) for
> details.

## Why gcmon?

Python's garbage collector can introduce unpredictable pauses in applications.
The standard library provides `gc.get_stats()` for aggregate collection
counters and `gc.callbacks` for per-event hooks, but both run inside the
target process: callbacks add execution overhead that distorts timing, while
`gc.get_stats()` only exposes cumulative counters with no per-pause
resolution. Neither can monitor a process without modifying its code.

Most monitoring tools report the **GC collection count**, how often the
collector ran. What hurts a latency-sensitive service is **GC pause time**,
how long each collection held it up, and reporting that requires a source
inside CPython's own GC bookkeeping. See
[Alternatives Comparison](#alternatives-comparison) for what each tool…
