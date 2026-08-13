---
repo: "LayerTwo-Labs/bip300301_enforcer"
name: "bip300301_enforcer"
description: "CUSF software enforcing BIP300 and BIP301 rules."
readmeQualityOk: true
url: "https://github.com/LayerTwo-Labs/bip300301_enforcer"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 13
forks: 17
openIssues: 25
closedIssues: 64
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2024-06-06T17:30:08Z"
lastCommitAt: "2026-08-13T05:18:24Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 92
undervaluedScore: 76
maintainers: ["torkelrogstad", "1440000bytes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcbc5e78f6129404a15f4b561cfd516fbf5e8d2346bb7d2527883497cc6e2db0/LayerTwo-Labs/bip300301_enforcer"
---

# Requirements

1. Bitcoin Core, with ZMQ support. For information on running this on the global
   signet, see [drivechain.info/dev.txt](https://drivechain.info/dev.txt)

1. Rustc & Cargo, version 1.88.0 or higher. Installing via Rustup is
   recommended.

## Supported Bitcoin Core versions

The enforcer supports running against the 3 latest major versions of Bitcoin
Core. `getnetworkinfo` is queried at startup and refuses to run against an
unsupported Bitcoin Core version. The supported set lives in
[`lib/version.rs`](https://github.com/LayerTwo-Labs/bip300301_enforcer/blob/HEAD/lib/version.rs); see `--help` for the override flags.

# Getting started

Building/running:

```bash
# Compiles the project
$ cargo build

# See available options
$ cargo run -- --help

# Starts the Connect RPC server at localhost:50001
# Adjust these parameters to match your local Bitcoin
# Core instance
$ cargo run -- \
  --node-rpc-addr=localhost:38332 \
  --node-rpc-user=user \
  --node-rpc-pass=password \
  --node-zmq-addr-sequence=tcp://0.0.0.0:29000

# You should now be able to fetch data from the server!
$ curl -H 'application/json' \…
