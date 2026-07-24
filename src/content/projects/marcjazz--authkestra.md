---
repo: "marcjazz/authkestra"
name: "authkestra"
description: "Framework-agnostic authentication orchestrator for Rust"
readmeQualityOk: true
url: "https://github.com/marcjazz/authkestra"
homepage: "https://authkestra.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["authentication", "authorization", "oauth2", "oidc", "client-credentials-flow", "device-flow", "openid"]
stars: 12
forks: 1
openIssues: 8
closedIssues: 34
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-31T00:12:38Z"
lastCommitAt: "2026-07-24T06:09:21Z"
lastReleaseAt: "2026-02-16T21:36:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 41
maintainers: ["marcjazz", "onelrian"]
openGraphImageUrl: "https://opengraph.githubassets.com/f928c6abc3a8718a262ce4c0921800375c72eb3738144fdcc5863528c38d5a44/marcjazz/authkestra"
---

# Authkestra

`authkestra` is a modular, framework-agnostic authentication orchestration system designed to be idiomatic to Rust, emphasizing **explicit control flow, strong typing, and composability** over dynamic middleware strategies common in other ecosystems.

## 📦 Getting Started

The easiest way to use Authkestra is via the `authkestra` facade crate. It re-exports all sub-crates behind feature flags, allowing you to manage your authentication stack from a single dependency.

Add this to your `Cargo.toml`:

```toml
[dependencies]
# Use the facade with the features you need
authkestra = { version = "0.1.1", features = ["axum", "github"] }
```

For advanced users, individual crates are still available and can be used independently if preferred.

## 🚀 Features

- **Modular & Unified Core**: Following our RFC-001 architecture, core concerns are unified in `authkestra-engine` while adapters like `authkestra-axum` and `authkestra-actix` provide seamless framework integrations.
- **Stateless OAuth**: OAuth `state` and `nonce` are stored securely in encrypted cookies—never in your database—keeping your architecture clean and horizontally scalable.
- **Performant OIDC Discovery**:…
