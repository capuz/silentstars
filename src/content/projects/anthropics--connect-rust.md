---
repo: "anthropics/connect-rust"
name: "connect-rust"
description: "An implementation of the ConnectRPC protocol for Rust"
url: "https://github.com/anthropics/connect-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 442
forks: 55
openIssues: 19
closedIssues: 39
watchers: 4
contributors: 2505
recentReleases: 8
createdAt: "2026-03-04T18:00:38Z"
lastCommitAt: "2026-06-27T00:45:06Z"
lastReleaseAt: "2026-05-18T22:07:30Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 91
undervaluedScore: 27
maintainers: ["iainmcgin", "rpb-ant", "Yong-yuan-X"]
openGraphImageUrl: "https://opengraph.githubassets.com/067f16f6fafe3bd63c905a2da7e8b650c9ca76b575ed2f465cff02d0af797e31/anthropics/connect-rust"
discussionCount: 1
---

# connectrpc

A [Tower](https://docs.rs/tower/latest/tower/)-based Rust implementation of [ConnectRPC](https://connectrpc.com/), serving Connect, gRPC, and gRPC-Web clients over HTTP with binary or JSON protobuf messages.

**Status:** pre-1.0. The API surface is settling but may shift in 0.x. Production-quality runtime: passes the full ConnectRPC conformance suite — 3,600 server and 6,872 client tests across the three protocols.

**MSRV:** Rust 1.88 (declared on the workspace, verified in CI).

**Documentation:**

- [User guide](docs/guide.md) - long-form coverage of installation, code generation, server/client usage, streaming, tower middleware, TLS, and errors.
- [`examples/`](examples/) - runnable end-to-end examples (streaming, tower middleware, TLS, multi-service, browser/wasm, Bazel).
- [docs.rs](https://docs.rs/connectrpc) - API reference.

## Overview

connectrpc provides:

- **`connectrpc`** — A Tower-based runtime library implementing the Connect protocol
- **`protoc-gen-connect-rust`** — A `protoc` plugin that generates service traits, clients, and message types
- **`connectrpc-build`** — `build.rs` integration for generating code at build time
- **`connectrpc-health`**…
