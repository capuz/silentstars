---
repo: "arthjean/rust-doctor"
name: "rust-doctor"
description: "Your agent writes bad Rust. This catches it."
readmeQualityOk: true
url: "https://github.com/arthjean/rust-doctor"
homepage: "https://rust-doctor.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["ai", "cargo", "claude", "cli", "clippy", "code-analysis", "code-quality", "code-review", "developer-tools", "devtools"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T14:20:29Z"
lastCommitAt: "2026-10-26T20:59:14Z"
lastReleaseAt: "2026-03-20T14:50:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 46
maintainers: ["arthjean"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd8efbe2734c64278829bc64faeeafefcc2d2e4d585ab694282a1bd877b4f8de/arthjean/rust-doctor"
discussionCount: 1
---

Your agent writes bad Rust, this catches it.

Rust Doctor scans your Cargo workspace with 142 curated rules and finds issues across security, correctness, reliability, performance, maintainability, and dependencies. It ends on a score out of 100 and the three rules worth fixing first.

Works on any Cargo workspace - a single binary crate, a library, a virtual workspace with dozens of members, you name it.

Everything runs locally: rust-doctor opens no network connection, uploads nothing and sends no telemetry. Cargo downloads missing dependencies as `cargo build` does, and `CARGO_NET_OFFLINE=true` forbids it. Inspect trusted local workspaces only, since Cargo runs the build scripts and procedural macros of whatever it compiles. [Limits →](https://rust-doctor.com/docs/limitations)

[Website →](https://rust-doctor.com/docs)

## Install

### 1. Quick start

Run this at your workspace root to get an audit.

```bash
npx rust-doctor@latest
```

### 2. Install for agents

Once you have an audit, set up the loop so your coding agent fixes what it found. The skill teaches it which finding to repair first, how the score is capped, and what to look for in a file the scan already flagged; the…
