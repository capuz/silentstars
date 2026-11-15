---
repo: "eryx-org/eryx"
name: "eryx"
description: "A Python sandbox using Wasmtime"
readmeQualityOk: true
url: "https://github.com/eryx-org/eryx"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 85
forks: 16
openIssues: 41
closedIssues: 63
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-11T22:42:47Z"
lastCommitAt: "2026-11-15T11:22:07Z"
lastReleaseAt: "2026-01-30T23:42:48Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 42
maintainers: ["sd2k", "renovate[bot]", "eryx-release-plz[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7fdbda88ff83a650cfb7617356c94ee5f8aeddd39aac2b1373e79f39197b546/eryx-org/eryx"
---

# Eryx

A WebAssembly sandbox for running **untrusted Python** safely — memory and CPU limits, no filesystem or network access by default, and async host callbacks for the access you _do_ want to allow.

Embed it from **Python**, **JavaScript**, or **Rust**. Runs full **CPython 3.14** (not a limited subset), so the real standard library and most pure-Python packages just work. [Try the demo](https://demo.eryx.run) or [read the docs](https://docs.eryx.run).

> **Used in production at [Grafana](https://grafana.com/).**

> **eryx** (noun): A genus of sand boas (Erycinae) — non-venomous snakes that live _in_ sand.
> Perfect for "Python running inside a sandbox."

## Features

- **Async callback mechanism** — Callbacks are exposed as direct async functions (e.g., `await get_time()`)
- **Parallel execution** — Multiple callbacks can run concurrently via `asyncio.gather()`
- **Session state persistence** — Variables, functions, and classes persist between executions for REPL-style usage
- **State snapshots** — Capture and restore Python state with pickle-based serialization
- **Execution tracing** — Line-level progress reporting via `sys.settrace`
- **Stderr capture** — Separate stdout…
