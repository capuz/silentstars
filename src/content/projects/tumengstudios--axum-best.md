---
repo: "TuMengStudios/axum-best"
name: "axum-best"
description: "For the optimal axum development experience"
readmeQualityOk: true
url: "https://github.com/TuMengStudios/axum-best"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["axum", "framework", "rust"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-02T09:28:31Z"
lastCommitAt: "2026-09-21T09:13:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["xx1906"]
openGraphImageUrl: "https://opengraph.githubassets.com/49caa322281b7de0d3155094ba77956be50d5e224b0dd77067969e0068f523cb/TuMengStudios/axum-best"
---

# axum best

> For the optimal axum development experience

* [简体中文](https://github.com/TuMengStudios/axum-best/blob/HEAD/README_ZH.md)
* [development tools](https://github.com/TuMengStudios/axum-best/blob/HEAD/dev.md)

## Project Overview

axum-best is a Rust web project template built on [Axum](https://github.com/tokio-rs/axum) and [Tokio](https://tokio.rs/). It demonstrates a layered architecture for building scalable HTTP services with MySQL, Redis, structured logging, request validation, and common middleware.

### Key Features

- **High Performance**: Built on top of Tokio and Axum for asynchronous request handling
- **Layered Architecture**: Clear separation of Transport, Handler, Service, Repository, and Data layers
- **MySQL + SQLx**: Type-safe database operations with compile-time checked queries; offline query metadata is committed under `.sqlx`
- **Redis Caching**: Async connection pooling via `bb8-redis` (tokio-native, r2d2-style API) over the `redis` crate for caching and session-like storage
- **Request Validation**: Input validation with `validator` and `axum-valid`
- **Middleware Stack**: Request-ID tracing, CORS, request decompression, timeout…
