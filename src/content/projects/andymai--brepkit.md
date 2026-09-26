---
repo: "andymai/brepkit"
name: "brepkit"
description: "B-Rep modeling engine for brepjs — pure Rust, compiled to WebAssembly"
readmeQualityOk: true
url: "https://github.com/andymai/brepkit"
homepage: "https://brepjs.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["b-rep", "brep", "cad", "geometry-kernel", "rust", "solid-modeling", "wasm", "webassembly"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 94
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-02T01:28:01Z"
lastCommitAt: "2026-09-26T08:46:01Z"
lastReleaseAt: "2026-03-06T08:26:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["andymai", "brepkit[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7049a85ca84b2db0594b51e5fa3a13e729f895aaca6910c377ca2521b4bbb1/andymai/brepkit"
discussionCount: 0
---

# brepkit

Solid modeling kernel for Rust and WebAssembly.

**[Architecture](#architecture)** · **[Performance](#performance)** · **[Getting Started](#getting-started)** · **[Documentation](#documentation)** · **[Known Limitations](#known-limitations)** · **[Stability](https://github.com/andymai/brepkit/blob/HEAD/STABILITY.md)** · **[Contributing](https://github.com/andymai/brepkit/blob/HEAD/CONTRIBUTING.md)**

</div>

One exact-geometry engine, from Rust and from JavaScript. Cut a solid, measure it, export it.

```rust
use brepkit_operations::primitives::{make_box, make_cylinder};
use brepkit_operations::boolean::{boolean, BooleanOp};
use brepkit_operations::measure::solid_volume;
use brepkit_io::step::write_step;
use brepkit_topology::Topology;

let mut topo = Topology::new();

// Primitives are anchored at the origin, so this cylinder rounds off the
// block's corner. Use `transform_solid` to place it somewhere else.
let block = make_box(&mut topo, 30.0, 20.0, 10.0)?;
let cutter = make_cylinder(&mut topo, 5.0, 15.0)?;
let notched = boolean(&mut topo, BooleanOp::Cut, block, cutter)?;

// Measure and export
let vol = solid_volume(&topo, notched, 0.1)?;
let step =…
