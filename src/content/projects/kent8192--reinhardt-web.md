---
repo: "kent8192/reinhardt-web"
name: "reinhardt-web"
description: "Django/DRF/FastAPI/React.js-inspired full-stack web framework for Rust"
readmeQualityOk: true
url: "https://github.com/kent8192/reinhardt-web"
homepage: "https://reinhardt-web.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["api-framework", "async", "authentication", "dependency-injection", "django", "full-stack", "graphql", "modular", "orm", "rest-api"]
stars: 27
forks: 6
openIssues: 52
closedIssues: 2603
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-10-06T11:54:52Z"
lastCommitAt: "2026-10-18T08:17:29Z"
lastReleaseAt: "2026-02-14T03:39:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 64
maintainers: ["kent8192", "reinhardt-release-plz[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a07cb8a3bfb741a90daa5b8ce26ce57ac6a38d110db4c50b5b9d31242aabd74/kent8192/reinhardt-web"
discussionCount: 251
---

or compose only the pieces you need.</p>

---

## Quick Navigation

- [Who is Reinhardt For?](#who-is-reinhardt-for)
- [Quick Start](#quick-start)
- [Why Reinhardt?](#why-reinhardt)
- [Key Features](#key-features)
- [Installation](#installation)
- [Getting Started Guide](#getting-started-guide)
- [Available Components](#available-components)
- [Ecosystem](#ecosystem)
- [API Stability](#api-stability)

## Who is Reinhardt For?

Reinhardt is designed for developers who:

- **Know Django/DRF** and want the same productivity in Rust
- **Use Axum/Actix** but miss Django's batteries (ORM, admin, auth, DI)
- **Want an integrated Rust web stack** without assembling everything from scratch
- **Want incremental adoption** -- start with just DI or ORM, grow into a full stack later

If you have written `ModelSerializer` or `Depends()` before, Reinhardt will feel like home.

## Quick Start

```bash
# Pin the documented Reinhardt release for reproducibility.
# Omit --version to let Cargo choose the latest stable release.
cargo install reinhardt-admin-cli --version "0.3.24"

reinhardt-admin startproject my-api && cd my-api
cargo run --bin manage runserver  # Visit http://127.0.0.1:8000
```

For…
