---
repo: "paddor/omq.rs"
name: "omq.rs"
description: "Connect threads, processes, hosts, and languages without a broker."
readmeQualityOk: true
url: "https://github.com/paddor/omq.rs"
homepage: "https://crates.io/crates/omq-tokio"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["distributed-computing", "zeromq", "network-programming", "rust", "high-performance", "polyglot", "zig-package"]
stars: 144
forks: 10
openIssues: 1
closedIssues: 24
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-05-01T00:11:35Z"
lastCommitAt: "2026-10-21T20:00:30Z"
lastReleaseAt: "2026-06-12T17:33:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 32
maintainers: ["paddor", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08ef8ab9f9512b9fbd3c9f69ac0c15ce9ac13f2d72cb04c7a6e17ee0bd4c806c/paddor/omq.rs"
---

**ZeroMQ messaging, built in Rust.**

Connect threads, processes, hosts, and languages without a broker.
Your application sends messages, OMQ handles the network. Queues all the way!

- **libzmq compatibility.** Familiar [ZeroMQ](https://zeromq.org) socket
  patterns, compatible wire protocol, and a drop-in C API.
- **High throughput, low latency.** Millions of messages per second,
  low p99 latency, and scalable background IO. See the [benchmarks](#performance).
- **Compression.** LZ4 and adaptive Zstd transports save bandwidth without changing
  application messages.
- **One API across transports.** inproc, IPC, TCP, UDP, WebSocket, QUIC, DART, and
  SHM. Sockets handle framing, reconnection, and back-pressure.
- **Language support.** Rust plus [bindings](#workspace) for C/C++, Python,
  Ruby, Go, Java, Node.js, .NET, Lua, BEAM, Zig, and Crystal.

## Usage

Same socket types, same connect/bind/send/recv:

```sh
cargo add omq-tokio --rename omq
cargo add tokio --features macros,rt-multi-thread
```

```rust
use omq::{Context, Message, Options, Result, SocketType};

#[tokio::main]
async fn main() -> Result<()> {
    let ctx = Context::new();

    let pull =…
