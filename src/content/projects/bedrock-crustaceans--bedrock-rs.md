---
repo: "bedrock-crustaceans/bedrock-rs"
name: "bedrock-rs"
description: "Universal library for Minecraft: Bedrock Edition"
readmeQualityOk: true
url: "https://github.com/bedrock-crustaceans/bedrock-rs"
homepage: "https://bedrock-crustaceans.org/bedrock-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["minecraft", "bedrock", "rust"]
stars: 188
forks: 30
openIssues: 1
closedIssues: 73
watchers: 8
contributors: 19
recentReleases: 0
createdAt: "2024-05-08T12:00:02Z"
lastCommitAt: "2026-11-02T17:57:14Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 44
maintainers: ["theaddonn", "OmniacDev", "arexon"]
openGraphImageUrl: "https://opengraph.githubassets.com/9799c51c6685e17d9e70bb26002578d4babfe2f8545122e274599dc5441a4cfd/bedrock-crustaceans/bedrock-rs"
discussionCount: 0
---

# bedrock-rs

A toolkit for Minecraft Bedrock Edition written in Rust.

[rust_badge_url]: https://img.shields.io/badge/rust-2024-%23D34516?style=flat-square&logo=rust&logoColor=%23D34516&labelColor=white
[rust_url]: https://rust-lang.org/

[discord_badge_url]: https://img.shields.io/badge/discord-join-%235865F2?style=flat-square&logo=discord&logoColor=white
[discord_url]: https://discord.com/invite/VCVcrvt3JC

[license_badge_url]: https://img.shields.io/github/license/bedrock-crustaceans/bedrock-rs?style=flat-square
[license_url]: LICENSE

## Installation

```toml
[dependencies]
bedrock = { git = "https://github.com/bedrock-crustaceans/bedrock-rs.git", features = ["full"] }
```

Everything is reached through the `bedrock` crate, enable only the features you need.

## Features

- **`protocol`** - Every packet of the Bedrock protocol.
- **`network`** - Batching, compression and encryption, plus login helpers.
- **`auth`** - Xbox Live login verification.
- **`level`** - Reading and writing worlds.
- **`form`** - The JSON forms the client renders.
- **`addon`** - Behaviour and resource packs as typed data
- **`full`** - All the above.

## Usage

Usage examples can be found in…
