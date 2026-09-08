---
repo: "CppCXY/lua-rs"
name: "lua-rs"
description: "lua 5.5 runtime implement in rust"
readmeQualityOk: true
url: "https://github.com/CppCXY/lua-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["lua"]
stars: 58
forks: 2
openIssues: 5
closedIssues: 15
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-11-13T12:48:18Z"
lastCommitAt: "2026-09-08T08:16:51Z"
lastReleaseAt: "2026-02-28T09:50:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 32
maintainers: ["CppCXY"]
openGraphImageUrl: "https://opengraph.githubassets.com/845474ca44a72ae06deaa8c09d7f1ac1be7004c536ebc94e6ec3b0470fb7d221/CppCXY/lua-rs"
---

# luars

> **Note**: This is an **Lua 5.5** lib through AI-assisted programming.

luars is a pure Rust Lua 5.5 runtime and embedding toolkit. This repository contains the core runtime, derive macros, the standalone interpreter, debugger integration, a WASM target, benchmark scripts, and host-facing examples.

The project is shaped around three priorities:

- performance that is measured against native Lua instead of hand-waved
- safety work that keeps `unsafe` narrowly scoped to representation and truly hot VM paths
- compatibility validated against the upstream Lua test suite, not only custom examples

## Why luars

### Performance

The repository ships benchmark runners and published benchmark snapshots instead of a single cherry-picked number.

Current Windows snapshot on a Ryzen 7 5800X, measured against native Lua 5.5 on the same machine:

| Area | Relative throughput vs native Lua |
|------|-----------------------------------|
| Arithmetic | 111% |
| Locals / register-heavy code | 132% |
| Table library | 118% |
| Coroutines | 152% |
| Errors | 103% |

There is no repository-maintained Linux snapshot from a dedicated physical Linux machine yet, because the current benchmark…
