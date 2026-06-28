---
repo: "donaldfilimon/abi"
name: "abi"
description: "ABI Agent + WDBX Database: A high-speed, fully optimized AI and ML training stack developed in Zig 0.16.0-dev, offering exceptional performance and reliability."
url: "https://github.com/donaldfilimon/abi"
homepage: "https://donaldfilimon.github.io/abi/"
language: "Zig"
languages: ["Zig"]
languagePcts: [99]
topics: ["agent", "ai", "cli", "client", "db", "ml", "server", "system", "training", "vector"]
stars: 16
forks: 4
openIssues: 5
closedIssues: 64
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-02-14T23:11:21Z"
lastCommitAt: "2026-06-28T00:55:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 72
maintainers: ["donaldfilimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4de1ca0e8e24195898c41bd0497f0ed83dbe80e6304459c1ad73ec8e20e5ab36/donaldfilimon/abi"
discussionCount: 3
---

# ABI Framework

ABI is a **Zig 0.17.0-dev.978+a078d55a2** framework for local AI service orchestration, semantic vector storage, GPU capability reporting, and runtime primitives.

## Quick Start
```bash
zig version             # Confirm Zig 0.17.0-dev.978+ compatible toolchain
./build.sh check        # Primary validation gate on macOS/Darwin
./build.sh full-check   # Check + integration tests + benchmarks + TUI smoke
./build.sh cli          # Build zig-out/bin/abi
./build.sh mcp          # Build zig-out/bin/abi-mcp
```

Plain `zig build` and `zig build check` are expected to work with the pinned toolchain. On macOS/Darwin, keep using `./build.sh ...` for the documented project workflow.

## Local Walkthrough

Build the CLI, then exercise the local surfaces without live network credentials:

```bash
./build.sh cli
./zig-out/bin/abi backends
./zig-out/bin/abi scheduler status
./zig-out/bin/abi complete "summarize ABI scheduler status"
./zig-out/bin/abi complete --model fable-5 "summarize ABI scheduler status"   # alias resolves to claude-fable-5; unknown ids warn and pass through
./zig-out/bin/abi agent plan "stage a safe WDBX refactor"
./zig-out/bin/abi agent train all…
