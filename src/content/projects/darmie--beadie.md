---
repo: "darmie/beadie"
name: "beadie"
description: "Beadie: Hot-function promotion broker for interpreter-to-JIT tiering"
readmeQualityOk: true
url: "https://github.com/darmie/beadie"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cranelift-jit", "hot-function-replacement", "hot-path", "hot-reload", "interpreter", "jit", "llvm", "llvm-ir", "compiler", "rust"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-01T09:51:02Z"
lastCommitAt: "2026-09-09T04:31:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 10
maintainers: ["darmie"]
openGraphImageUrl: "https://opengraph.githubassets.com/65dbd244f73f5824e4f20350fde87438afe2198c6873c02aa6e1699f903dfddb/darmie/beadie"
---

# beadie

Hot-function promotion broker for interpreter-to-JIT tiering.

Beadie sits between your interpreter and JIT compiler, automatically detecting hot functions and promoting them to native code via a background compilation thread. It supports single-backend and multi-tier (e.g. Cranelift baseline + LLVM optimizing) compilation strategies.

## Architecture

```
Interpreter thread              Broker thread
      │                              │
  on_invoke()                        │
      │                              │
  tick + policy ── threshold ──► compile job
      │            crossed           │
      │                         compile(bead, def)
      │                              │
  compiled?  ◄── install ───── *mut () code ptr
      │
  dispatch_native()
```

```
Bead state machine:

  Interpreted ──► Queued ──► Compiling ──► Compiled
       ▲                                      │
       └───────── invalidate / deopt ◄────────┘
```

## Usage

```toml
[dependencies]
beadie = "0.2"

# Optional JIT backends
beadie = { version = "0.2", features = ["cranelift"] }
beadie = { version = "0.2", features = ["llvm"] }
```

### Basic promotion

```rust
use beadie::{Beadie,…
