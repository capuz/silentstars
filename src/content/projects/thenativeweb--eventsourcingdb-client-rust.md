---
repo: "thenativeweb/eventsourcingdb-client-rust"
name: "eventsourcingdb-client-rust"
description: "The official Rust client SDK for EventSourcingDB."
readmeQualityOk: true
url: "https://github.com/thenativeweb/eventsourcingdb-client-rust"
homepage: "https://www.eventsourcingdb.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 19
forks: 3
openIssues: 2
closedIssues: 12
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2025-05-05T09:04:54Z"
lastCommitAt: "2026-10-24T08:21:04Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 67
maintainers: ["dependabot[bot]", "goloroden", "arroket"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bf004ad4bce2e93aba6d661893f9ea7411fece01f1526293edf31c9f42ea414/thenativeweb/eventsourcingdb-client-rust"
---

# eventsourcingdb

The official Rust client SDK for [EventSourcingDB](https://www.eventsourcingdb.io) – a purpose-built database for event sourcing.

EventSourcingDB enables you to build and operate event-driven applications with native support for writing, reading, and observing events. This client SDK provides convenient access to its capabilities in Rust.

For more information on EventSourcingDB, see its [official documentation](https://docs.eventsourcingdb.io/).

This client SDK includes support for [Testcontainers](https://testcontainers.com/) to spin up EventSourcingDB instances in integration tests. For details, see [Using Testcontainers](#using-testcontainers).

## Getting Started

The client SDK requires Rust 1.88 or later, and its optional `polars` feature requires Rust 1.95 or later, because of `sysinfo`.

Install the client SDK:

```shell
cargo add eventsourcingdb
```

Import the package and create an instance by providing the URL of your EventSourcingDB instance and the API token to use:

```rust
use eventsourcingdb::client::Client;

// ...

let base_url: Url = "localhost:3000".parse().unwrap();
let api_token = "secret";
let client = Client::new(base_url, api_token);…
