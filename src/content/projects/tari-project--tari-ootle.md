---
repo: "tari-project/tari-ootle"
name: "tari-ootle"
description: "Tari Layer-2 Protocol"
readmeQualityOk: true
url: "https://github.com/tari-project/tari-ootle"
homepage: "https://tari.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["layer-2", "rust", "tari"]
stars: 28
forks: 59
openIssues: 40
closedIssues: 364
watchers: 4
contributors: 34
recentReleases: 0
createdAt: "2022-08-11T09:06:40Z"
lastCommitAt: "2026-07-20T06:33:36Z"
lastReleaseAt: "2026-02-10T06:35:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["sdbondi", "dependabot[bot]", "webhop123"]
openGraphImageUrl: "https://opengraph.githubassets.com/4041f3106b4868e900db566a937ad56b7fcbbec383fe13f0a8a05e038aa3cda9/tari-project/tari-ootle"
discussionCount: 1
---

# Tari Ootle

This is where you can find the cutting-edge development of the Tari smart contract layer.

You can read about the technical specifications of the Ootle in the [RFCs](https://rfc.tari.com).

If you're looking for the core Tari base layer code, it's in [this repository](https://github.com/tari-project/tari)

[Documentation](https://ootle.tari.com)

## Prerequisites

You will require the following tools and dependencies to successfully build the Ootle and/or run the Ootle locally via
the Localnet environment:

- **C/C++ compiler**
    - Linux: `gcc` or `clang`
    - macOS: `clang` (via Xcode CLI tools)
    - Windows: `MSVC` (via Visual Studio Build Tools)
- **Build tools**
    - `make`, `cmake`, or equivalent
    - `pkg-config` (Linux/macOS)
- **Libraries**
    - OpenSSL development libraries (`libssl-dev`)
    - SQLite development libraries (`libsqlite3-dev`)
    - Protobuf compiler (`protoc`) and headers (`libprotobuf-dev`)
- **Other**
    - `git`

- **Rust (=1.88)**: Install Rust using [rustup](https://rustup.rs), and add a WASM target:

```bash
# Install the rust version in rust-toolchain.toml
rustup install
# Add wasm target
rustup target add wasm32-unknown-unknown…
