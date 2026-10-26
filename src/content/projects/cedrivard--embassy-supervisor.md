---
repo: "cedrivard/embassy-supervisor"
name: "embassy-supervisor"
description: "Run-time supervision for embassy firmware: a dependency-ordered task-lifecycle supervisor and a declared-and-verified dataflow layer."
readmeQualityOk: true
url: "https://github.com/cedrivard/embassy-supervisor"
homepage: "https://embassy-supervisor.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["async", "bare-metal", "embassy", "embedded", "embedded-rust", "firmware", "iot", "microcontroller", "no-std", "ota"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T02:32:14Z"
lastCommitAt: "2026-10-26T03:02:50Z"
lastReleaseAt: "2026-07-10T02:44:30Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 33
maintainers: ["cedrivard"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8c394255e25fdf5ac23b0b68556cff4ee0e80d0d45da3e4aba5a2fc73db8ea/cedrivard/embassy-supervisor"
---

# embassy-supervisor

[<img src="https://embassy-supervisor.github.io/og.png" alt="embassy-supervisor.github.io — docs, guides and an in-browser playground" width="640">](https://embassy-supervisor.github.io/)

**[embassy-supervisor.github.io](https://embassy-supervisor.github.io/)** — docs and guides,
plus an [in-browser playground](https://embassy-supervisor.github.io/playground/) that runs the
real crate compiled to WebAssembly: declare a graph, wire behaviors to it, and watch the
supervisor drive lifecycle, couplings and dataflow live.

---

**Run-time supervision for bare-metal async Rust.** A composable architecture for real
[embassy](https://embassy.dev) firmware — a dependency-ordered task lifecycle over layered
executors, and a declared-and-verified dataflow between the tasks, with a governed heap and
coordinated power and OTA — the structure and guarantees of an RTOS with none of its kernel,
stacks, or overhead. The `no_std` **`embassy-supervisor`** crate is its drop-in core.

```rust
use embassy_supervisor::{supervisor_graph, Supervisor};

// One declaration generates the node `static`s and a single `GRAPH` bundling the
// node slots, deps, and compile-time order. `app`…
