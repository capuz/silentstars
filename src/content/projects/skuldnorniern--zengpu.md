---
repo: "SkuldNorniern/ZenGPU"
name: "ZenGPU"
description: "Unified GPU runtime"
readmeQualityOk: true
url: "https://github.com/SkuldNorniern/ZenGPU"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-12T13:11:24Z"
lastCommitAt: "2026-10-19T09:15:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["SkuldNorniern"]
openGraphImageUrl: "https://opengraph.githubassets.com/f87be8b9f950613f1f352c42fa2218bf6f169c9dd43dc11f2f24e2bc70a121e4/SkuldNorniern/ZenGPU"
---

# ZenGPU

Pre-alpha GPU runtime for Rust: one device model for graphics and compute,
and ZSL, a Rust-flavoured shader language that compiles to every backend.

> Pre-alpha. APIs still move before `0.1.0`.

Resource handles preserve a process-unique table identity as well as their slot
and generation. Handles from another device, including a replacement device,
are rejected. Keep the complete typed handle in wrappers; code that reconstructs
one must use `Handle::from_owned_parts(index, generation, owner)`.
`Handle::from_parts` now creates an invalid, unowned sentinel. Raw bindless slot
indices in `Bindings` remain local to the submitting device.

Built-in array and BLAS operations validate contiguous layouts and buffer
capacity before recording, and recheck full handles before submission. An
`OpList` must run on its pool's underlying device. Custom HAL implementations
must provide the nonblocking `GpuDevice::buffer_size` query to use these
helpers. Raw slot-based dispatches can opt into full-handle checks with
`OpList::require_buffer`.

## Quick Start

```toml
[dependencies]
zengpu = "0.0.1"
```

```rust,ignore
use zengpu::{ZslShader, zsl};

const SCALE: ZslShader = zsl!(
    push…
