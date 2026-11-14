---
repo: "dev-five-git/vespera"
name: "vespera"
description: "A fully automated OpenAPI engine for Axum with zero-config route and schema discovery"
readmeQualityOk: true
url: "https://github.com/dev-five-git/vespera"
language: "Rust"
languages: ["Rust", "Java"]
languagePcts: [71, 25]
stars: 29
forks: 4
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-11-24T11:14:46Z"
lastCommitAt: "2026-11-14T22:00:07Z"
lastReleaseAt: "2025-11-26T07:10:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 58
maintainers: ["owjs3901", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a94a6fb9c195a0e85ea865114cb0ffea0703403ae13130389d421b9b46ef5b9/dev-five-git/vespera"
fundingLinks: ["GITHUB:https://github.com/dev-five-git", "PATREON:https://patreon.com/JeongMinOh"]
discussionCount: 0
---

# Vespera

**FastAPI-like developer experience for Rust.** Zero-config OpenAPI 3.1 generation for Axum.

```rust
// That's it. Swagger UI at /docs, OpenAPI at openapi.json
let app = vespera!(openapi = "openapi.json", docs_url = "/docs");
```

## Why Vespera?

| Feature | Vespera | Manual Approach |
|---------|---------|-----------------|
| Route registration | Automatic (file-based) | Manual `Router::new().route(...)` |
| OpenAPI spec | Generated at compile time | Hand-written or runtime generation |
| Schema extraction | From Rust types (`#[derive(Schema)]`) | Manual JSON Schema |
| **Request validation** | **`Validated<T>` extractor → auto `422`** | Manual checks in every handler |
| **Server startup** | **`.serve("0.0.0.0:3000")` one-liner** | `TcpListener::bind` + `axum::serve` |
| Swagger UI | Built-in | Separate setup |
| Type safety | Compile-time verified | Runtime errors |

## Quick Start

### 1. Add Dependencies

```toml
[dependencies]
vespera = "0.8"
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
```

> Vespera re-exports axum as `vespera::axum`, so you do not need a direct
> `axum` dependency (the re-export keeps the…
