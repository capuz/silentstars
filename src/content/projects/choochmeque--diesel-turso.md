---
repo: "Choochmeque/diesel_turso"
name: "diesel_turso"
description: "A Diesel backend and connection implementation for Turso Database, an in-process SQL database written in Rust, compatible with SQLite."
readmeQualityOk: true
url: "https://github.com/Choochmeque/diesel_turso"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["diesel", "diesel-async", "rust", "sqlite", "turso"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-17T17:21:23Z"
lastCommitAt: "2026-10-03T22:04:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 69
undervaluedScore: 27
maintainers: ["Choochmeque", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bba817504fc40f7126f580f639cb9ad431e5ad29e61429c5266455d6ef8a41b/Choochmeque/diesel_turso"
fundingLinks: ["GITHUB:https://github.com/Choochmeque", "BUY_ME_A_COFFEE:https://buymeacoffee.com/choochmeque", "THANKS_DEV:https://thanks.dev/u/gh/choochmeque"]
---

# diesel-turso

A [Diesel](https://diesel.rs/) backend and connection implementation for [Turso Database](https://github.com/tursodatabase/turso), an in-process SQL database written in Rust, compatible with SQLite.

> ⚠️ **Early Development**  
> This project is experimental and **not suitable for production use**.  
> APIs may change, features may be missing, and stability is not guaranteed.

## Overview

`diesel-turso` lets you use Diesel ORM with Turso databases, combining Diesel’s type-safe query builder with Turso’s distributed SQLite platform.  
It provides async support through [`diesel-async`](https://github.com/weiznich/diesel_async) and a custom backend for Turso.

## Features

- ✅ Async/await support via `diesel-async`  
- ✅ Connection pooling (bb8, deadpool, mobc, r2d2)  
- ✅ Optional `chrono` support for date/time types  
- ✅ Type-safe query building with Diesel
- ✅ Async SQLite database backend

## Installation

Add to your `Cargo.toml`:

```toml
[dependencies]
diesel-turso = { git = "https://github.com/Choochmeque/diesel_turso" }
```

### Feature Flags

- `chrono` (default): Enable `chrono` date/time types  
- `bb8`: bb8 connection pool  
- `deadpool`: deadpool…
