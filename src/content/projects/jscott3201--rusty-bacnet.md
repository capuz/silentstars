---
repo: "jscott3201/rusty-bacnet"
name: "rusty-bacnet"
description: "BACnet 2020 - Rust core with full Rust and Python API"
url: "https://github.com/jscott3201/rusty-bacnet"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 19
forks: 11
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 5
recentReleases: 1
createdAt: "2026-03-05T20:41:24Z"
lastCommitAt: "2026-06-29T07:24:12Z"
lastReleaseAt: "2026-05-08T17:51:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 53
maintainers: ["jscott3201"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fa19b5bfc4bf567670e8c236964625b216a3bc99a5ab4bea9a35ca293a83b0/jscott3201/rusty-bacnet"
---

# Rusty BACnet

A BACnet protocol stack (ASHRAE 135-2020) written in Rust, with Python and WASM/JavaScript bindings.

## Features

- **BACnet/IP implementation** — async client and server paths with 30+ service modules under conformance review
- **Transport implementations** — BACnet/IP (UDP), BACnet/IPv6 (multicast), BACnet/SC (WebSocket+TLS with hub), MS/TP (serial), Ethernet (BPF); see the conformance ledger for current evidence status
- **BACnet object implementations** — object structs and server helpers for common and extended BACnet object families, with clause-level evidence tracked in the ledger
- **Python bindings** — async client, server, and SC hub bindings via PyO3
- **WASM/JavaScript** — BACnet/SC thin client for browsers via wasm-bindgen
- **CLI tool** — interactive shell and scripting for BACnet/IP, IPv6, and SC
- **5,500+ tests** and CI on Linux/macOS/Windows
- **Conformance evidence** — draft Standard 135-2020 ledger and support summaries in [`docs/conformance/`](docs/conformance/standard-135-2020-ledger.md)

## Quick Start (Python)

```bash
pip install rusty-bacnet
```

```python
import asyncio
from rusty_bacnet import (
    BACnetClient, ObjectType,…
