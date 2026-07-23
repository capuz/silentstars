---
repo: "donaldfilimon/abi"
name: "abi"
description: "ABI Agent + WDBX Database: A high-speed, fully optimized AI and ML training stack developed in Zig 0.16.0-dev, offering exceptional performance and reliability."
readmeQualityOk: true
url: "https://github.com/donaldfilimon/abi"
homepage: "https://donaldfilimon.github.io/abi/"
language: "Zig"
languages: ["Zig"]
languagePcts: [92]
topics: ["agent", "ai", "cli", "client", "db", "ml", "server", "system", "training", "vector"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 71
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-02-14T23:11:21Z"
lastCommitAt: "2026-07-23T06:16:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["donaldfilimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f42b5bc1dbb35d7ddbadab08f57e2a65c3324149c2008291e5c167755b2af34a/donaldfilimon/abi"
discussionCount: 3
---

# ABI Framework

ABI is a **Zig 0.17.0-dev** framework for local AI service orchestration, semantic vector storage, GPU capability reporting, and runtime primitives.

## Quick Start
```bash
zig version             # Confirm the pinned Zig 0.17.0-dev.1442+972627084 toolchain (see .zigversion; build.zig.zon minimum 0.17.0-dev.1252+e4b325c19)
./build.sh -l           # List all available build targets (wrapper for zig build -l)
./build.sh check        # Primary validation gate on macOS/Darwin
./build.sh full-check   # Check + integration tests + benchmarks + dashboard/agent TUI smoke
./build.sh cli          # Build zig-out/bin/abi
./build.sh mcp          # Build zig-out/bin/abi-mcp
```

Plain `zig build` and `zig build check` are expected to work with the pinned toolchain. On macOS/Darwin, keep using `./build.sh ...` for the documented project workflow.

## Cross-compilation

`abi` cross-compiles cleanly via Zig's target flag. Verified locally via
`tools/cross_smoke.sh` (builds the CLI and the WDBX 3D-hybrid example for
each target):

```bash
zig build -Dtarget=x86_64-linux-gnu
zig build -Dtarget=x86_64-windows-gnu
zig build -Dtarget=aarch64-macos
```

These three targets are…
