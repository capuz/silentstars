---
repo: "geanlabs/gean"
name: "gean"
description: "Lean consensus client for Ethereum node operators"
readmeQualityOk: true
url: "https://github.com/geanlabs/gean"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["consensus", "beacon-chain", "consensus-client", "ethereum", "ethereum-consensus-client", "golang", "post-quantum-security", "proof-of-stake", "lean-ethereum"]
stars: 179
forks: 11
openIssues: 0
closedIssues: 205
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-01-17T16:41:10Z"
lastCommitAt: "2026-11-20T12:27:30Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 37
maintainers: ["devylongs", "dimka90", "shaaibu7"]
openGraphImageUrl: "https://opengraph.githubassets.com/3423a5b6e5ffab91f1c4cfe35be6a9fcba9e6c4049bc16dbef5a1d3258dad220/geanlabs/gean"
---

# gean Ethereum consensus client

## Overview

gean is an Ethereum consensus client written in Go. Today it runs **Lean Ethereum consensus**,
with post-quantum XMSS signatures; Ethereum beacon chain support is on the way, in the same binary.

Lean Ethereum is at the devnet stage, and so is gean. Expect breaking changes.

- **Post-quantum:** validators sign with XMSS, and aggregators combine signatures into leanVM proofs.
- **Spec-tested:** consensus logic is tested against the [leanSpec](https://github.com/leanEthereum/leanSpec) fixtures.
- **One client, two chains:** shared code in `internal/core` never depends on a chain, so the beacon
  chain can be added beside Lean.

## Building

You need Go 1.26 and Rust 1.92:

```sh
git clone https://github.com/geanlabs/gean.git
cd gean
make build
```

Or build a Docker image, with no toolchain installed:

```sh
docker build https://github.com/geanlabs/gean.git -t gean
```

## Running

Start a three-node local network:

```sh
make lean-testnet     # once: genesis config and keys in ./testnet
make lean-node N=0    # terminal 1: node0, the aggregator
make lean-node N=1    # terminal 2
make lean-node N=2    # terminal 3
```
