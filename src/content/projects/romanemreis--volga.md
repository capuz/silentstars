---
repo: "RomanEmreis/volga"
name: "volga"
description: "Composable Rust web framework built around explicit APIs and predictable performance."
readmeQualityOk: true
url: "https://github.com/RomanEmreis/volga"
homepage: "https://romanemreis.github.io/volga-docs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["rust", "async-runtime", "composable-architecture", "developer-platform", "high-performance", "http-framework", "low-overhead", "microservices", "web-framework", "explicit-api"]
stars: 9
forks: 1
openIssues: 6
closedIssues: 49
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-02T15:17:50Z"
lastCommitAt: "2026-09-26T08:46:59Z"
lastReleaseAt: "2024-10-31T15:42:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["RomanEmreis", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/478ccb1b7065ba2189bc1539134bb564716f40c3d717b4847a257214412cdedd/RomanEmreis/volga"
discussionCount: 1
---

# Volga
Fast, simple, and high-performance web framework for Rust, built on top of
[Tokio](https://tokio.rs/) and [hyper](https://hyper.rs/).

Volga is designed to make building HTTP services straightforward and explicit,
while keeping performance predictable and overhead minimal.

> 💡 **Status**: Volga is currently in preview.  
> The public API may change while core abstractions are being finalized.

[Tutorial](https://romanemreis.github.io/volga-docs/) | [API Docs](https://docs.rs/volga/latest/volga/) | [Examples](https://github.com/RomanEmreis/volga/tree/main/examples) | [Roadmap](https://github.com/RomanEmreis/volga/milestone/1)

## Why Volga?

Volga focuses on clarity and control without sacrificing performance.

It avoids hidden behavior and framework-driven magic.
Macros are used sparingly and primarily to reduce boilerplate. Handlers, middleware, and routing behave exactly as they look in code.

Volga is a good fit if you:

- Want simple and readable handler signatures
- Care about predictable performance and low overhead
- Need fine-grained control over the HTTP request/response lifecycle
- Work with streaming, WebSockets, or long-lived connections
- Prefer explicit…
