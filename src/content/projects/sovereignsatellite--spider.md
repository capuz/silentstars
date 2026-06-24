---
repo: "SovereignSatellite/Spider"
name: "Spider"
description: "WebAssembly to Luau and LuaJIT translation"
url: "https://github.com/SovereignSatellite/Spider"
homepage: "https://discord.gg/JuekZtYmxx"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["rvsdg", "webassembly", "compilers", "luau", "luajit"]
stars: 80
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-31T17:30:11Z"
lastCommitAt: "2026-06-24T06:39:22Z"
lastReleaseAt: "2026-02-01T20:39:30Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 33
maintainers: ["SovereignSatellite"]
openGraphImageUrl: "https://opengraph.githubassets.com/22fb982c47661eb9099904b2844efd80524a87949dd86b6bbbc04364a81bfef5/SovereignSatellite/Spider"
---

# Spider

Spider is an experimental compiler based on WebAssembly semantics and the Regionalized Value State Dependence Graph research. It compiles `.wasm` binaries to Luau or LuaJIT source files.

## Install

Prebuilt binaries for Windows, Linux, and macOS are available in the "Releases" tab. The CLI can be installed directly from `cargo` too. Prefer pulling the `stable` branch or a tag when doing so.

```sh
$ cargo install --branch stable --git "https://github.com/SovereignSatellite/Spider" spider-cli
$ spider-cli --help
```
