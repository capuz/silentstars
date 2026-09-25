---
repo: "qail-io/qail"
name: "qail"
description: "AST-native PostgreSQL toolkit: typed queries to wire protocol, with built-in RLS tenant isolation."
readmeQualityOk: true
url: "https://github.com/qail-io/qail"
homepage: "https://qail.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 35
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-20T15:44:07Z"
lastCommitAt: "2026-09-25T08:57:50Z"
lastReleaseAt: "2025-12-22T09:55:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 39
maintainers: ["VerysignVL", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/194d97a6d3ee4a5a2cc504c7efa541654ff0f38fede96830e463d66aac316f32/qail-io/qail"
---

# Qail — Rust PostgreSQL Driver + AST Toolkit

> **Qail is a Rust PostgreSQL toolkit that makes typed AST queries the default for safe, tenant-isolated execution, with optional auto-REST/WebSocket exposure.**

---

## Start Here (Driver First)

If you are searching for a **Rust PostgreSQL driver**, start with `qail-pg` + `qail-core`.

```toml
[dependencies]
qail-core = "2.0.4"
qail-pg = "2.0.4"
```

```rust
use qail_core::prelude::*;
use qail_pg::PgDriver;

let mut driver = PgDriver::connect("localhost", 5432, "user", "mydb").await?;
qail_core::rls::init_scope_registries_from_tables(&[("users", "tenant_id")], &[])?;
let ctx = RlsContext::tenant(tenant_id);

let query = Qail::get("users")
    .columns(["id", "email"])
    .eq("active", true)
    .with_rls(&ctx)?;

let rows = driver.fetch_all(&query).await?;
```

## Product Map

| Concept | Crate | Use it for | Primary audience |
|---|---|---|
| AST Kernel | `qail-core` | Typed AST, parser, validator, RLS model, native access policy | Query/model layer |
| Postgres Driver | `qail-pg` | PostgreSQL wire protocol, pooling, pipeline, COPY, LISTEN/NOTIFY | Backend app code |
| Access Gateway | `qail-gateway` | AutoREST, WebSocket,…
