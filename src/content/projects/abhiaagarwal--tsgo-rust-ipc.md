---
repo: "abhiaagarwal/tsgo-rust-ipc"
name: "tsgo-rust-ipc"
description: "Experimental rust client library for tsgo's API"
readmeQualityOk: true
url: "https://github.com/abhiaagarwal/tsgo-rust-ipc"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 11
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-15T15:09:41Z"
lastCommitAt: "2026-09-14T09:12:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 34
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e4e02c5a6dc163dce102c41a69c238f7faf70d336be7fe3e1e9b187babdc221/abhiaagarwal/tsgo-rust-ipc"
discussionCount: 0
---

# TypeScript-Go Rust IPC Client

Highly experimental Rust client library for communicating with Microsoft's Typescript rewrite in Go (tsgo) IPC-based API server, as implemented in [tsgo](https://github.com/microsoft/typescript-go/pull/711).

## Motivation

Go is the language of choice for the TypeScript compiler, but Go's main problem is that it's hard to embed in other languages. Since a lot of modern JS/TS tooling is written in Rust, this provides a way to provide TypeScript type information for that tooling by making requests to the tsgo server, running as a subprocess.

## Testing

### Unit Tests (no tsgo)
```bash
cargo build --workspace
cargo test  --workspace --exclude tsgo-rust-ipc-integration-tests
```

### Integration Tests (needs tsgo)
```bash
# one-off setup
git submodule update --init --recursive
cd tsgo && npm ci && npx hereby build && cd ..

TSGO_PATH=./tsgo/built/local/tsgo \
  cargo test -p tsgo-rust-ipc-integration-tests
```
