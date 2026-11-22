---
repo: "realmorrisliu/openrouter-rs"
name: "openrouter-rs"
description: "A type-safe OpenRouter Rust SDK."
readmeQualityOk: true
url: "https://github.com/realmorrisliu/openrouter-rs"
homepage: "https://crates.io/crates/openrouter-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 100
forks: 24
openIssues: 1
closedIssues: 111
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2025-03-23T13:00:19Z"
lastCommitAt: "2026-11-22T02:05:31Z"
lastReleaseAt: "2026-04-21T08:24:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 51
maintainers: ["realmorrisliu", "gogoout", "avkonst"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac7fdbba2ad0436141a36eb54ce9dcc4a09af2dc5a69897eee41acc23b057bb7/realmorrisliu/openrouter-rs"
---

# openrouter-rs

Type-safe, async Rust SDK for the OpenRouter API.

[docs.rs](https://docs.rs/openrouter-rs) |
[examples](https://github.com/realmorrisliu/openrouter-rs/tree/main/examples) |
[crate](https://crates.io/crates/openrouter-rs) |
[docs map](https://github.com/realmorrisliu/openrouter-rs/blob/HEAD/docs/README.md) |
[openrouter-cli](https://github.com/realmorrisliu/openrouter-rs/tree/main/crates/openrouter-cli) |
[contributing](https://github.com/realmorrisliu/openrouter-rs/blob/HEAD/CONTRIBUTING.md) |
[changelog](https://github.com/realmorrisliu/openrouter-rs/blob/HEAD/CHANGELOG.md)

`openrouter-rs` is a community-maintained Rust SDK for OpenRouter, with typed requests, streaming, tool calling, and access to OpenRouter's model, usage, and management APIs. A [companion CLI](https://github.com/realmorrisliu/openrouter-rs/blob/HEAD/crates/openrouter-cli/README.md) is available for terminal and automation workflows.

## Installation

```toml
[dependencies]
openrouter-rs = "0.25.0"
tokio = { version = "1", features = ["full"] }
```

Requires Rust `1.93+` and Tokio `1.x`. To try it in a new project:

```bash
cargo new openrouter-quickstart
cd openrouter-quickstart
```
