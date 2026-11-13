---
repo: "zigster64/datastar.zig"
name: "datastar.zig"
description: "Datastar SDK for zig 0.16"
readmeQualityOk: true
url: "https://github.com/zigster64/datastar.zig"
language: "HTML"
languages: ["HTML", "Zig"]
languagePcts: [51, 47]
topics: ["data-star", "datastar", "zig-package", "zig-library"]
stars: 50
forks: 6
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-26T02:15:51Z"
lastCommitAt: "2026-11-13T11:21:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 22
maintainers: ["zigster64", "rsaunderson-i3v"]
openGraphImageUrl: "https://opengraph.githubassets.com/9db7484aa24c13734588598d0218af349c43022ab37bfa1c4d63bbfb85f9e157/zigster64/datastar.zig"
---

# datastar.zig - A Web Framework for Zig 0.17

**A Datastar-aware HTTP server for Zig 0.17. using Datastar v1.0.3**

Build realtime collaborative web apps where the backend pushes DOM patches, signal updates, and browser scripts to connected clients over a fast SSE pipe. Single binary, no JS bundler, no frontend framework.

- **Complete HTTP server in a single binary.** Radix-tree router, per-request arena, batched + sync SSE, hot reload during development, `*HTTPRequest` API that knows about Datastar. `zig build && ./your-app` and you're serving reactive HTML.
- **BYO IO backends, build-time selectable.** Default `std.Io.Threaded` (OS threads) for portability. `-Dio=zio` for stackful coroutines on N-executor scheduler. Same handler code, different concurrency model — see [Selecting the IO backend](#selecting-the-io-backend) and the [bench numbers](https://github.com/zigster64/datastar.zig/blob/HEAD/bench/README.md).
- **Bundled in-process pub/sub.** [`pubsub.zig`](https://github.com/zigster64/pubsub.zig) is wired in by default — enough to do CQRS in a single binary, with a clean off-ramp to NATS / Redis / Postgres LISTEN-NOTIFY when you outgrow it. See [Pub/Sub and…
