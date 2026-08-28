---
repo: "joaquinbejar/deribit-http"
name: "deribit-http"
description: "This crate provides a HTTP REST API client for the Deribit trading platform. It implements the common traits from `deribit-base` and provides methods for all REST API endpoints."
readmeQualityOk: true
url: "https://github.com/joaquinbejar/deribit-http"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-21T16:59:07Z"
lastCommitAt: "2026-08-28T14:32:07Z"
lastReleaseAt: "2026-01-05T08:09:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 61
maintainers: ["joaquinbejar", "dependabot[bot]", "otavio"]
openGraphImageUrl: "https://opengraph.githubassets.com/286ca22a181645c9de0ea1bb9fcf7c6634c999e18a949affbd1b17bf252aceaa/joaquinbejar/deribit-http"
---

</div>

## Deribit HTTP Client (deribit_http)

**Production-ready** asynchronous HTTP client for the Deribit API v2.
Version **0.6.0** provides **~95% coverage** of all HTTP-compatible Deribit endpoints.

Designed for server integrations, batch jobs, and tooling that prefer REST/HTTP over WebSocket.
Built on `reqwest` and `tokio`, with full WASM/Cloudflare Workers support.

### Key features
- **100+ endpoints** implemented across public and private APIs
- **Pure async HTTP** with reqwest + tokio (native) or fetch (WASM)
- **Cross-platform**: Native, WASM browsers, and Cloudflare Workers
- **OAuth2 authentication** with automatic token renewal
- **Token-bucket rate limiting** per endpoint category
- **40+ strongly-typed models** with Serde serialization
- **126 unit tests** ensuring reliability

### Installation
Add to your `Cargo.toml`:
```toml
[dependencies]
deribit-http = "0.6"
tokio = { version = "1", features = ["full"] }
```

### Quick start
```rust
use deribit_http::DeribitHttpClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // true = testnet, false = mainnet
    let client = DeribitHttpClient::new();

    // Public calls (no…
