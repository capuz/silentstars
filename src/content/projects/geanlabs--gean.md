---
repo: "geanlabs/gean"
name: "gean"
description: "Lean consensus client for Ethereum node operators"
readmeQualityOk: true
url: "https://github.com/geanlabs/gean"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["consensus", "beacon-chain", "consensus-client", "ethereum", "ethereum-consensus-client", "golang", "networking", "p2p", "post-quantum-security", "proof-of-stake"]
stars: 177
forks: 11
openIssues: 26
closedIssues: 155
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-01-17T16:41:10Z"
lastCommitAt: "2026-09-29T08:10:07Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 32
maintainers: ["mananuf", "dimka90", "devylongs"]
openGraphImageUrl: "https://opengraph.githubassets.com/0389613f3ef7196e34f8958d715a469e35c814c14f70bca8be26286ad2321f81/geanlabs/gean"
fundingLinks: ["CUSTOM:https://etherscan.io/address/0xB7AD723DDEF4Df973E898D36256E76Ab8489D57E"]
---

# Gean: Lean Ethereum consensus client

An open-source Lean Ethereum consensus client, written in Go and maintained by Gean Labs.

## Overview

Gean is:

- A consensus client for [Lean Ethereum](https://github.com/leanEthereum), designed for fast finality, quantum-resistant security, and a simpler core protocol.
- Implementing Lean Consensus devnet-5 alongside independent client implementations.
- Built for clarity and auditability, with a deliberately small codebase.
- Quantum-resistant by design, using XMSS signatures instead of BLS signatures.

## Getting started

### Prerequisites

- [Go](https://go.dev/doc/install) 1.25+
- [Rust](https://www.rust-lang.org/tools/install) 1.92.0
- [uv](https://docs.astral.sh/uv/)
- [Docker](https://www.docker.com/get-started/)

### Building and testing

```sh
make build       # Build the Rust FFI and Go binaries
make test        # Run Go unit tests
make test-ffi    # Run XMSS FFI tests
make test-spec   # Generate and run production-scheme consensus fixtures
make lint        # Run Go and Rust linters
make docker-build
```

Run `make help` for all available targets.

### Running locally

For a multi-client devnet:

```sh
make run-devnet
```

For…
