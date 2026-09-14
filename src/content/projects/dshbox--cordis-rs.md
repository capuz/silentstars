---
repo: "dshbox/cordis-rs"
name: "cordis-rs"
description: "A typed runtime for long-lived, plugin-oriented Rust applications — lifecycle, exact service placement, typed events, deterministic cleanup, scopes, and isolation."
readmeQualityOk: true
url: "https://github.com/dshbox/cordis-rs"
homepage: "https://docs.rs/cordis-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cordis", "deepseek-harness", "dependency-injection", "dsh-plugin", "events", "plugin-framework", "port", "rust"]
stars: 46
forks: 6
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-15T10:41:09Z"
lastCommitAt: "2026-09-14T09:12:34Z"
lastReleaseAt: "2026-08-17T11:08:15Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["dshbox-dev", "github-actions[bot]", "bigmark222"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d09a1bedfc71c88adbb7a94dba22c99c24e41b909a04f37de5cef08044f21e7/dshbox/cordis-rs"
---

# Cordis

**English** | [简体中文](https://github.com/dshbox/cordis-rs/blob/HEAD/README.zh-CN.md)

Cordis is a typed runtime for long-lived, plugin-oriented Rust applications.
It gives application components one model for lifecycle, service dependencies,
typed events, resource cleanup, and explicit isolation boundaries.

Cordis is useful when your program is more than a collection of short-lived
function calls: plugins can appear and disappear, services can become available
or unavailable, configuration can change, and runtime resources must still be
cleaned up deterministically.

## Install

For applications, keep the historical package and import identity:

```toml
[dependencies]
cordis-rs = "0.7"
tokio = { version = "1", features = ["rt-multi-thread", "macros"] }
```

```rust
use cordis::Context;
```

`cordis-rs` is now a thin application-facing facade over the v3 runtime contract.
Framework and plugin authors may depend on that contract directly:

```toml
[dependencies]
cordis-core = "0.1"
```

Optional capabilities stay explicit semantic dependencies:

```toml
cordis-timer = "0.1"
cordis-loader = "0.1"
```

Cordis v3 requires Rust **1.88** or newer and uses Rust 2024 Edition.

##…
