---
repo: "I-CAN-hack/automotive"
name: "automotive"
description: "Rust crate with Python bindings providing a variety of automotive related libraries, such as communicating with CAN interfaces and diagnostic APIs"
readmeQualityOk: true
url: "https://github.com/I-CAN-hack/automotive"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 29]
topics: ["automotive", "isotp", "rust", "uds", "canbus", "ccp", "doip", "python", "xcp"]
stars: 106
forks: 21
openIssues: 25
closedIssues: 48
watchers: 4
contributors: 5
recentReleases: 2
createdAt: "2024-02-15T15:26:18Z"
lastCommitAt: "2026-11-17T14:39:41Z"
lastReleaseAt: "2026-11-06T12:59:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 80
undervaluedScore: 43
maintainers: ["pd0wm"]
openGraphImageUrl: "https://opengraph.githubassets.com/37ac1cc0893a583aef2919edd5ccf468dba8f2acc644645b19c31a41e63360a9/I-CAN-hack/automotive"
---

# Automotive

`automotive` is a [Rust crate](https://docs.rs/automotive/latest/automotive/)
and [Python library](https://github.com/I-CAN-hack/automotive/blob/HEAD/python/README.md) for CAN communication, ISO-TP and DoIP
transports, and UDS, XCP, and CCP clients. The Rust API is async; Python offers
both synchronous and asyncio APIs.

Rust:

```sh
cargo add automotive --features default-adapters
```

Python:

```sh
uv add automotive
```

## CAN receive and transmit

`automotive::can` provides shared CAN types and an async adapter interface for
sending and receiving Classical CAN and CAN FD frames.

Rust adapter support is opt-in; no hardware adapters are enabled by default.

### Supported adapters

| Adapter | Platforms | Feature |
| --- | --- | --- |
| SocketCAN | Linux | `socketcan` |
| comma.ai panda | Linux, macOS, Windows (USB) | `panda` |
| PEAK PCAN-USB FD family | Linux, macOS, Windows (raw USB) | `peak` |
| J2534 PassThru | Windows | `j2534` |
| Vector XL | Windows x64 | `vector-xl` |

`default-adapters` enables panda and SocketCAN; `all-adapters` enables every
backend supported on the target platform. Adapter implementations and discovery
live in `automotive::adapters`.…
