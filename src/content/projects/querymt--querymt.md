---
repo: "querymt/querymt"
name: "querymt"
description: "query.mt"
readmeQualityOk: true
url: "https://github.com/querymt/querymt"
homepage: "https://query.mt"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "llm", "mcp-client", "agentic-framework", "agents"]
stars: 13
forks: 4
openIssues: 60
closedIssues: 87
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-04-28T11:28:45Z"
lastCommitAt: "2026-10-29T10:20:15Z"
lastReleaseAt: "2026-03-23T20:49:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 69
maintainers: ["renovate[bot]", "vigsterkr", "zatevakhin"]
openGraphImageUrl: "https://opengraph.githubassets.com/417500391d0586bc69438cc8dba51c89927980fc6077703fbe0ae7e24a14eca5/querymt/querymt"
discussionCount: 0
---

# QueryMaTe

A unified interface for Large Language Models (LLMs) with support for various providers via a plugin-based architecture.

## Installation

Install the `qmt` and `qmtcode` binaries:

```bash
curl -sSf https://query.mt/install.sh | sh
```

Nightly channel:

```bash
curl -sSf https://query.mt/install.sh | sh -s -- --nightly
```

Windows PowerShell:

```powershell
irm https://query.mt/install.ps1 | iex
```

Windows nightly channel:

```powershell
$env:QMT_CHANNEL='nightly'; irm https://query.mt/install.ps1 | iex
```

Add `querymt` to your `Cargo.toml` with the `extism_host` feature:

```toml
[dependencies]
querymt = { version = "0.2", features = ["extism_host"] }
```

## Basic Usage

```rust
use querymt::builder::LLMBuilder;
use querymt::chat::ChatMessage;
use querymt::plugin::{extism_impl::host::ExtismLoader, host::PluginRegistry};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 1. Initialize registry and register the Wasm loader
    let mut registry = PluginRegistry::from_path("providers.toml")?;
    registry.register_loader(Box::new(ExtismLoader));

    // 2. Build the LLM provider
    let llm = LLMBuilder::new()…
