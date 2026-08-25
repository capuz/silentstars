---
repo: "yangkx-1024/MMKV"
name: "MMKV"
description: "Library uses file-based mmap to store key-values"
readmeQualityOk: true
url: "https://github.com/yangkx-1024/MMKV"
homepage: "https://www.yangkx.net/rust-mmkv-1"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["mmkv", "rust", "android", "preferences-datastore", "swift-package"]
stars: 37
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-03T07:34:01Z"
lastCommitAt: "2026-08-25T04:09:46Z"
lastReleaseAt: "2023-08-11T11:49:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 34
maintainers: ["yangkx1024", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dbb54961752a5ccbd3ad8feb3947979412fe0247de7b01d857be4a412b9a889/yangkx-1024/MMKV"
discussionCount: 0
---

# Library uses file-based mmap to store key-values

This is a Rust version of [MMKV](https://github.com/Tencent/MMKV).

By default, this lib uses [CRC8](https://github.com/mrhooray/crc-rs) to check data integrity.

If include feature `encryption`, this lib will encrypt the data
with [AES-EAX](https://github.com/RustCrypto/AEADs/tree/master/eax).

MMKV is thread-safe but cannot guarantee cross-process data consistency.
If you want to use it in a cross-process scenario, please ensure that there is no competing write.

## Build requirements

Building this library requires [protoc](https://grpc.io/docs/protoc-installation/) (the Protocol Buffers compiler) to be installed on your system.

- **macOS**: `brew install protobuf`
- **Ubuntu/Debian**: `sudo apt-get install protobuf-compiler`
- **Windows**: download from the [protobuf releases page](https://github.com/protocolbuffers/protobuf/releases)

## How to use

Add dependency:

`cargo add mmkv`

And use `MMKV` directly:

```rust
use mmkv::{LogLevel, MMKV};

fn main() {
    // Set the log level of the library
    MMKV::set_log_level(LogLevel::Verbose);
    let temp_dir = std::env::temp_dir();
    let dir = temp_dir.join("test1");…
