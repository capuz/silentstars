---
repo: "francisdb/vpin"
name: "vpin"
description: "Rust library for working with Visual Pinball VPX files"
readmeQualityOk: true
url: "https://github.com/francisdb/vpin"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["visual-pinball", "vpin", "vpx", "virtual-pinball"]
stars: 8
forks: 3
openIssues: 18
closedIssues: 46
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-10-06T07:35:12Z"
lastCommitAt: "2026-08-27T14:31:31Z"
lastReleaseAt: "2024-03-21T18:52:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 70
maintainers: ["francisdb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4f8d3cf068636ae8e466ec60d51c68ecb754b258bc7b33c59c7f4204faa233c/francisdb/vpin"
---

# vpin

Rust library for working with Visual Pinball VPX files. Also available on npm as a WASM package: [
`@francisdb/vpin-wasm`](https://www.npmjs.com/package/@francisdb/vpin-wasm).

Join [#vpxtool on "Virtual Pinball Chat" discord](https://discord.gg/eYsvyMu8) for support and questions.

## Documentation

https://docs.rs/vpin

## Features

The library provides several optional features that can be enabled:

- `parallel` (default): Enables parallel processing using rayon for better performance
- `wasm`: Enables WebAssembly bindings for browser/Node.js usage

To use only VPX functionality without parallel support:

```toml
[dependencies]
vpin = { version = "0.20", default-features = false }
```

To enable specific features:

```toml
[dependencies]
vpin = { version = "0.20", default-features = false, features = ["wasm"] }
```

## Example code

Check the [examples folder](https://github.com/francisdb/vpin/blob/HEAD/examples)

## Expanded VPX Format

The library supports extracting VPX files to an expanded directory format for easier editing and version control.

For primitive mesh data, you can choose between two formats:

- **OBJ format** (default) - Text-based Wavefront OBJ,…
