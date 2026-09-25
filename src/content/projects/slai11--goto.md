---
repo: "slai11/goto"
name: "goto"
description: "gt your desired path with minimal keystrokes"
readmeQualityOk: true
url: "https://github.com/slai11/goto"
homepage: "https://crates.io/crates/goto-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["jump", "command-line-tool", "goto", "rust", "cli"]
stars: 27
forks: 1
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-04-18T14:52:28Z"
lastCommitAt: "2026-09-25T09:02:53Z"
lastReleaseAt: "2020-06-29T12:49:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 32
maintainers: ["slai11"]
openGraphImageUrl: "https://opengraph.githubassets.com/27c41c96398f4a074c25ca75f29c0fbc1a9ac6b24c745689e2e86fd9c898a8c7/slai11/goto"
---

# goto (gt)

*gt* is a zsh-friendly directory jumper that learns where you go and gets you
back there quickly.

*gt* is short for "goto", which is basically what you want to do with minimal
keystrokes.

## Features

* Automatic learning from normal `cd` usage in zsh
* Multi-term matching against aliases and full paths
* Frecency-based ranking, with recent-only views when needed
* Manual indexing tools for bootstrapping and curated aliases
* Pretty tree-like index listing using `gt ls`

## Demo

## Installation 

Step 1. Getting the binary

Download the archive for your platform from the
[releases page](https://github.com/slai11/goto/releases). For example, on an
Apple Silicon Mac:
```
wget https://github.com/slai11/goto/releases/download/v0.4.0/goto-rs-v0.4.0-aarch64-apple-darwin.tar.gz
tar -xvf goto-rs-v0.4.0-aarch64-apple-darwin.tar.gz
cp goto-rs-v0.4.0-aarch64-apple-darwin/goto-rs /usr/local/bin
```

Or install it from crates.io with `cargo install goto-rs`, or clone the project
and build from source. Either way you need Rust 1.85 or newer
(`brew install rust`).
```
git clone https://github.com/slai11/goto.git
cd goto 
cargo build --release
cp target/release/goto-rs…
