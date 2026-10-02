---
repo: "andrewdavidmackenzie/meshcore-rs"
name: "meshcore-rs"
description: "A port of meshcore from Python to RS!"
readmeQualityOk: true
url: "https://github.com/andrewdavidmackenzie/meshcore-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 16
forks: 10
openIssues: 3
closedIssues: 13
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-02-04T18:04:55Z"
lastCommitAt: "2026-10-02T10:00:31Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 57
maintainers: ["andrewdavidmackenzie", "f4fez", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0223dd66afa6f800bc755f8c630f93d50ac58b9b2b9f2a1a8cbf128f3858bb04/andrewdavidmackenzie/meshcore-rs"
discussionCount: 2
---

# MeshCore-rs

Rust library for communicating with [MeshCore](https://meshcore.co.uk) companion radio nodes.

This is a Rust port of the [meshcore_py](https://github.com/meshcore-dev/meshcore_py) Python library.

## Features

- **Async/await** - Built on Tokio for async I/O
- **Serial connection** – Connect via USB serial port
- **TCP connection** – Connect via TCP socket
- **BLE connection** – Connect via Bluetooth Low Energy (optional feature)
- **Event-driven** - Subscribe to events with filters
- **Full protocol support** – Contacts, messaging, binary protocol, signing, etc.

## Installation

Add to your `Cargo.toml`:

```toml
[dependencies]
meshcore-rs = "0.1"
tokio = "1"
```

### Optional Features

```toml
[dependencies]
meshcore = { version = "0.1", features = ["ble"] }
```

- `serial` - Serial port support (enabled by default)
- `tcp` - TCP socket support (enabled by default)
- `ble` - Bluetooth Low Energy support (requires btleplug)

## Quick Start

```rust
use meshcore_rs::MeshCore;

#[tokio::main]
async fn main() -> Result<(), meshcore_rs::Error> {
    // Connect via serial port
    let meshcore = MeshCore::serial("/dev/ttyUSB0", 115200).await?;

    // Initialize…
