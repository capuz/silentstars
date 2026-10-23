---
repo: "everruns/everruns"
name: "everruns"
description: "Headless durable agentic harness engine. Run durable AI agents reliably and scalably."
readmeQualityOk: true
url: "https://github.com/everruns/everruns"
homepage: "https://everruns.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["agents", "ai", "ai-agents", "harness"]
stars: 61
forks: 7
openIssues: 0
closedIssues: 19
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-12-14T00:12:17Z"
lastCommitAt: "2026-10-23T08:47:04Z"
lastReleaseAt: "2026-03-12T15:05:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/149a949ad94b6aafb458404b8f64e26bde7a335e906d473cd9bcd852c6dc2f03/everruns/everruns"
---

# Everruns

**Build capable AI agents in Rust. Run them where they belong.**

Everruns is an open-source framework for building AI agents directly in Rust
applications. Define agents, attach models and typed tools, run multi-turn
sessions, and observe execution through one application-facing API.

Use the framework in your application. When you need a shared runtime and
production operations, run the Everruns platform yourself or use
[Everruns Cloud](https://app.everruns.com).

[Build with the framework](https://everruns.com/docs/framework/quickstart/) · [Read the docs](https://everruns.com/docs/framework/) · [Use Everruns Cloud](https://everruns.com/docs/getting-started/cloud/)

## Build an agent

Add the application-facing crate:

```bash
cargo add everruns --features openai
cargo add tokio --features macros,rt-multi-thread
export OPENAI_API_KEY=sk-...
```

Then define a typed tool, give it to an agent, and run a turn:

```rust
use std::time::{SystemTime, UNIX_EPOCH};

use everruns::{Agent, Engine, OpenAI};

#[everruns::tool]
async fn current_time() -> Result<String, String> {
    let seconds = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map_err(|error|…
