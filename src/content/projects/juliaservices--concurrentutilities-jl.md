---
repo: "JuliaServices/ConcurrentUtilities.jl"
name: "ConcurrentUtilities.jl"
description: "Utilities for doing multithreaded or distributed work in Julia"
readmeQualityOk: true
url: "https://github.com/JuliaServices/ConcurrentUtilities.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 19
forks: 7
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2020-10-22T17:00:58Z"
lastCommitAt: "2026-10-27T09:17:17Z"
lastReleaseAt: "2023-04-25T22:52:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 49
maintainers: ["quinnj", "AayushSabharwal"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8a07783bff81198883df963bca997b2e4e3191ef166fb8e72e3a3178a4adaf/JuliaServices/ConcurrentUtilities.jl"
---

# ConcurrentUtilities.jl

*Utilities for working with multithreaded workers for Julia services and applications*

## Installation

The package is registered in the [`General`](https://github.com/JuliaRegistries/General) registry and so can be installed at the REPL with `] add ConcurrentUtilities`.

## Usage

Each utility has a docstring with details, for example `?Pool` in the REPL.

- `Pool`, `acquire`, `release`, `drain!`: a thread-safe pool of reusable objects,
  optionally keyed, that limits how many objects are in use at once.
- `ReadWriteLock`, `readlock`, `readunlock`: a lock that allows many readers or one
  writer (Julia 1.8+).
- `FIFOLock`: a reentrant lock that waiting tasks acquire in arrival order (Julia 1.10+).
- `Lockable`: a value paired with the lock that guards it; `lock(f, l)` calls
  `f(value)` with the lock held.
- `OrderedSynchronizer`: lets concurrent tasks run a step in a fixed order with
  `put!(f, sync, i)`.
- `try_with_timeout`: runs `f` in a task and throws `TimeoutException` if it does not
  finish in time.
- `Worker`, `remote_eval`, `remote_fetch`, `terminate!`: run code in a separate Julia
  process.
- `@wkspawn`: like `Threads.@spawn`, but the…
