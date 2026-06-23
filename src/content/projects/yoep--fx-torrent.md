---
repo: "yoep/fx-torrent"
name: "fx-torrent"
description: "FX Torrent is a feature rich Bittorrent protocol implementation written in rust supporting Linux, MacOS and Windows"
url: "https://github.com/yoep/fx-torrent"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bittorent", "dht", "rust", "library"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 24
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-12-27T13:51:01Z"
lastCommitAt: "2026-06-23T06:42:52Z"
lastReleaseAt: "2026-04-01T15:29:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 55
maintainers: ["yoep", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc421947fceccde8735253f5c7af43f9a5b70b52ad408bdedf4641db37bdc32/yoep/fx-torrent"
---

# FX-Torrent

![Build](https://github.com/yoep/fx-torrent/workflows/Build/badge.svg)

FX-Torrent is the most complete BitTorrent implementation fully written in Rust, which supports both Linux, MacOS, and Windows.
It supports most of the Bittorrent protocol specifications, such as multi-file torrents, validating existing files, resuming torrent files,
and is based on the `libtorrent` library for functionality and naming convention.

- [Getting Started](#getting-started)
- [Features](#features)
- [CLI example](#cli-example)
- [DHT](#dht)
- [Extensions](#extensions)

## Getting Started

Create a new `FxSession` which manages one or more torrents.
A `Torrent` can be created from a magnet link, torrent file, or passing the raw `TorrentMetadata`.

_create a new session with torrent_
```rust
// The fx-torrent crate makes use of async tokio runtimes
// this requires that new sessions and torrents need to be created within a tokio runtime
#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let session = FxSession::builder()
        .config(
            SessionConfig::builder()
                .base_path("/downloads")
                .client_name("MyClient")…
