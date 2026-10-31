---
repo: "Muvon/octohub"
name: "octohub"
description: "High-performance LLM proxy: one OpenAI-style API over 20+ providers, with multi-tenant keys, full request logging, and usage analytics. Built in Rust."
readmeQualityOk: true
url: "https://github.com/Muvon/octohub"
homepage: "https://octomind.run/product/octohub/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["anthropic", "api-gateway", "llm", "llm-proxy", "multi-tenant", "observability", "ollama", "openai", "rust"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T12:33:41Z"
lastCommitAt: "2026-10-31T09:53:14Z"
lastReleaseAt: "2026-07-31T07:33:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["donk8r"]
openGraphImageUrl: "https://opengraph.githubassets.com/36eee11456348f406b296e912c3f49c0206882f878617572537dce71e2e0ceb5/Muvon/octohub"
---

# OctoHub

> One OpenAI-style API in front of all your LLM providers — with multi-tenant keys, full request logging, and usage analytics.

OctoHub is a high-performance LLM proxy written in Rust. Clients talk to one
stable endpoint; OctoHub talks to whichever providers you configure — OpenAI,
Anthropic, Google, DeepSeek, Ollama, OpenRouter, Modal-hosted vLLM, and more —
and records every request and response in your own database.

```
            ┌──────────────────┐
 client  →  │  OctoHub proxy   │  →  provider A (openai)
            │  (Rust / hyper)  │  →  provider B (anthropic)
            │                  │  →  provider C (ollama, your GPU)
            └──────────────────┘  →  provider D (Modal-hosted vLLM)
                     │
                     └─→ your DB (SQLite / MySQL / PostgreSQL)
```

## Why OctoHub?

Provider APIs don't give you per-customer usage tracking, audit logs, or a way
to swap models without breaking clients. OctoHub is the missing front door:
one interface, many backends, everything recorded.

## Quick Start

```bash
# Build
cargo build --release

# Drop in a config
cat > octohub.toml <<'EOF'
[server]
host = "127.0.0.1"
port = 8080
api_key =…
