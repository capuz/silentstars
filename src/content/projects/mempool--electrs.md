---
repo: "mempool/electrs"
name: "electrs"
description: "An efficient re-implementation of Electrum Server in Rust"
url: "https://github.com/mempool/electrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 151
forks: 87
openIssues: 12
closedIssues: 19
watchers: 9
contributors: 21
recentReleases: 0
createdAt: "2020-03-01T09:31:30Z"
lastCommitAt: "2026-06-25T02:06:43Z"
lastReleaseAt: "2026-01-01T13:09:11Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 40
maintainers: ["junderw", "mononaut", "wiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfdf181255c10daf701571efc5c6ef4a5285f54e9b40e82aa8e406f46daa5ec1/mempool/electrs"
---

# Mempool - Electrs backend API

A block chain index engine and HTTP API written in Rust based on [romanz/electrs](https://github.com/romanz/electrs) and [Blockstream/electrs](https://github.com/Blockstream/electrs).

Used as the backend for the [mempool block explorer](https://github.com/mempool/mempool) powering [mempool.space](https://mempool.space/).

API documentation [is available here](https://mempool.space/docs/api/rest).

Documentation for the database schema and indexing process [is available here](doc/schema.md).

### Installing & indexing

Install Rust, Bitcoin Core (no `txindex` needed) and the `clang` and `cmake` packages, then:

```bash
$ git clone https://github.com/mempool/electrs && cd electrs
$ git checkout mempool
$ cargo run --release --bin electrs -- -vvvv --daemon-dir ~/.bitcoin

# Or for liquid:
$ cargo run --features liquid --release --bin electrs -- -vvvv --network liquid --daemon-dir ~/.liquid
```

See [electrs's original documentation](https://github.com/romanz/electrs/blob/master/doc/usage.md) for more detailed instructions.
Note that our indexes are incompatible with electrs's and has to be created separately.

The indexes require 1.3TB of storage…
