---
repo: "majiayu000/litellm-rs"
name: "litellm-rs"
description: "A high-performance AI Gateway written in Rust — call 100+ LLM APIs using OpenAI format"
url: "https://github.com/majiayu000/litellm-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-gateway", "anthropic", "api-client", "async-rust", "aws-bedrock", "embeddings", "gemini", "llm", "load-balancing", "multi-provider"]
stars: 88
forks: 14
openIssues: 3
closedIssues: 300
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2025-07-15T06:04:01Z"
lastCommitAt: "2026-06-27T06:23:02Z"
lastReleaseAt: "2026-04-30T07:06:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["majiayu000"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7c2fa1ca711e6448500c72b41d2813695bb949336ac6b89a53b8ccdd88f8c32/majiayu000/litellm-rs"
---

# litellm-rs

A high-performance Rust library and gateway for calling LLM APIs in an OpenAI-compatible format. Ships with 50+ built-in OpenAI-compatible providers plus first-class adapters for OpenAI, Anthropic, AWS Bedrock, Mistral, and Cloudflare.

## Features

- **60+ runtime-wired providers** - OpenAI, Anthropic, AWS Bedrock, Mistral, Cloudflare, plus 50+ OpenAI-compatible providers via the Tier 1 catalog. See [Provider Support](#provider-support) for the full matrix.
- **OpenAI-Compatible API** - Drop-in replacement for OpenAI SDK
- **High Performance** - 10,000+ requests/second, <10ms routing overhead
- **Intelligent Routing** - Load balancing, failover, cost optimization
- **Enterprise Ready** - Auth, rate limiting, caching, observability

## Quick Start (5 Minutes, API-Only Recommended)

Most users use this project as a unified API library, not as a gateway server. Start with API-only mode first.

```toml
[dependencies]
litellm-rs = { version = "0.5", default-features = false, features = ["lite"] }
```

For crate users, no `make` is required.

## Usage

### As a Library (API Integration)

```rust
use litellm_rs::{completion, user_message, system_message};

#[tokio::main]…
