---
repo: "bywayhq/phantom"
name: "phantom"
description: "Experimental Rust HTTP client with explicit control over TLS, HTTP/2 and HTTP/3 fingerprints."
readmeQualityOk: true
url: "https://github.com/bywayhq/phantom"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["browser-fingerprinting", "http-client", "http2", "http3", "quic", "rust", "tls"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-18T00:11:46Z"
lastCommitAt: "2026-10-18T06:51:56Z"
lastReleaseAt: "2026-10-17T14:55:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 46
maintainers: ["0xARYA"]
openGraphImageUrl: "https://opengraph.githubassets.com/da624c2b3bb129bf2a54b79eeb5804a5af8b8c09633b23615b99bf36b2e0a31f/bywayhq/phantom"
---

# Phantom

A Rust HTTP client with browser connection settings and ordered request headers.

Choose a Chrome, Firefox, Edge, Brave, or Opera profile, then send requests over
HTTP/1.1, HTTP/2, or HTTP/3. Phantom gives you control over the TLS handshake,
protocol settings, and header order without running a browser. It does not
execute JavaScript or render pages.

## Try it

Use Rust 1.88 or newer. The native TLS build needs Git, CMake, Clang, and a C++
toolchain. Windows also needs NASM and the Visual C++ build tools. See
[Getting started](https://docs.rs/phantom-http/latest/phantom/guide/getting_started/index.html)
for setup details.

```toml
[dependencies]
phantom = { package = "phantom-http", version = "0.1" }
tokio = { version = "1", features = ["macros", "rt", "net", "time"] }
```

```rust,no_run
use phantom::{profile::browser::chrome, Client, HttpProtocol};

#[tokio::main(flavor = "current_thread")]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::builder(chrome::v154_windows()).build()?;
    let response = client
        .get(HttpProtocol::Http2, "https://example.com/")?
        .send()
        .await?;

    println!("{}",…
