---
repo: "andymai/brepkit"
name: "brepkit"
description: "A solid modeling kernel in Rust that compiles to WebAssembly. brepjs can use it in place of OpenCascade."
readmeQualityOk: true
url: "https://github.com/andymai/brepkit"
homepage: "https://brepjs.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["b-rep", "brep", "cad", "geometry-kernel", "rust", "solid-modeling", "wasm", "webassembly"]
stars: 41
forks: 7
openIssues: 42
closedIssues: 159
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-02T01:28:01Z"
lastCommitAt: "2026-11-16T03:33:30Z"
lastReleaseAt: "2026-03-06T08:26:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 47
maintainers: ["andymai", "brepkit[bot]", "Robokan"]
openGraphImageUrl: "https://opengraph.githubassets.com/29292d3f4f8ca778094999e666f7db0e8c1d7b953146fd076ffbd042383a914f/andymai/brepkit"
discussionCount: 0
---

# brepkit

Solid modeling kernel for Rust and WebAssembly.

**[Architecture](#architecture)** · **[Performance](#performance)** · **[Getting Started](#getting-started)** · **[Documentation](#documentation)** · **[Known Limitations](#known-limitations)** · **[Stability](https://github.com/andymai/brepkit/blob/HEAD/STABILITY.md)** · **[Contributing](https://github.com/andymai/brepkit/blob/HEAD/CONTRIBUTING.md)**

https://github.com/user-attachments/assets/a223b7e9-f64f-49a2-9430-728741efd27c

The engine in the film is 1,904 solids from one 237-line file. brepkit builds it in 82 ms in WebAssembly, against 284 ms for OpenCascade. **[Run it in your browser](https://brepjs.dev/playground/examples/turbofan-engine)**, where it is a [brepjs](https://github.com/andymai/brepjs) example.

One exact-geometry engine, from Rust and from JavaScript. Cut a solid, measure it, export it.

```rust
use brepkit_operations::primitives::{make_box, make_cylinder};
use brepkit_operations::boolean::{boolean, BooleanOp};
use brepkit_operations::measure::solid_volume;
use brepkit_io::step::write_step;
use brepkit_topology::Topology;

let mut topo = Topology::new();

// Primitives are anchored at the origin,…
